import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer
import numpy as np
nltk.download('punkt')
nltk.download('stopwords')


from flask import Flask, request, jsonify
from PyPDF2 import PdfReader
import re
import os
import requests
from io import BytesIO

app = Flask(__name__)

def extract_answers_from_file(file):
    answers = {}
    
    reader = PdfReader(file)
    num_pages = len(reader.pages)
    
    for page_num in range(num_pages):
        text = reader.pages[page_num].extract_text()
        
        # Regular expression to find question number and answer text
        matches = re.findall(r'Question (\d+)\. (.+?)(?=Question \d+\. |$)', text, re.DOTALL)
        
        for match in matches:
            question_number = match[0]
            answer_text = match[1].strip()
            
            # Store the question number and answer text
            answers[question_number] = answer_text.replace("\n", "")
    
    return answers

def extract_answers_from_url(url):
    response = requests.get(url)
    response.raise_for_status()  # Raise an exception for bad status codes
    
    file = BytesIO(response.content)
    return extract_answers_from_file(file)

@app.route('/extract_answers', methods=['POST'])
def process_pdf():
    data = request.json

    if 'url' not in data:
        return jsonify({'error': 'PDF file URL is missing'})
    
    pdf_url = data['url']
    
    try:
        answers = extract_answers_from_url(pdf_url)
        return jsonify(answers)
    except Exception as e:
        return jsonify({'error': str(e).replace("\n", "")})
    


def preprocess_text(text):
    words = word_tokenize(text.lower())
    stop_words = set(stopwords.words('english'))
    words = [word for word in words if word.isalnum() and word not in stop_words]
    return ' '.join(words)

def evalStudentAnswer(studentAnswer, answerKey):
    preprocessed_student = preprocess_text(studentAnswer)
    preprocessed_key = preprocess_text(answerKey)
    # Vectorize the preprocessed text
    vectorizer = CountVectorizer().fit_transform([preprocessed_student, preprocessed_key])
    # Compute the cosine similarity
    similarity_matrix = cosine_similarity(vectorizer)
    # Extract the similarity score
    score = similarity_matrix[0, 1]
    return score

@app.route('/evaluate_answer', methods=['POST'])
def evaluate_answers():
    data = request.json
    studentAnswer = data['studentAnswer']
    answerKey = data['answerKey']
    
    try:
        answers = evalStudentAnswer(studentAnswer, answerKey)
        return jsonify(answers)
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
