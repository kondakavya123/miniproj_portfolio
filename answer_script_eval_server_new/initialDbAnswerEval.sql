CREATE DATABASE  IF NOT EXISTS `answereval` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `answereval`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: answereval
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answers`
--

DROP TABLE IF EXISTS `answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `answer` varchar(10000) NOT NULL,
  `obtainedMarks` int NOT NULL DEFAULT '0',
  `questionId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_c38697a57844f52584abdb878d7` (`questionId`),
  CONSTRAINT `FK_c38697a57844f52584abdb878d7` FOREIGN KEY (`questionId`) REFERENCES `question` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answers`
--

LOCK TABLES `answers` WRITE;
/*!40000 ALTER TABLE `answers` DISABLE KEYS */;
INSERT INTO `answers` VALUES (1,'2024-03-09 14:26:34.590000','2024-03-09 14:26:34.590000','The law commission has recommended that criminal defamation should be retained within the scheme of criminal laws in India. In its report on the law on criminal defamation, the panel asserted that it is important to keep in mind that the right to reputatio n flows from Article 21 of the Constitution, and being a facet of right to life and personal liberty, it needs to be “adequately protected ” against defamatory speech and imputations. “Reputation is something which can ’t be seen and can only be earned. It ’s an asset which is built in a lifetime and destroyed in seconds. The whole jurisprudence around the law on criminal defamation has the essence of protecting one ’s reputation and its facets, ” it said.',0,1),(2,'2024-03-09 14:29:00.121707','2024-03-09 14:29:00.121707','As per an aircraft tracking website, two ai rcrafts, a Dassault Falcon 2000 with registration VT -ARO and an Embraer ERJ -135LR with registration VT -JSI departed from Ranchi and landed at Begumpet airport around 3.30 p.m. Sources have confirmed that a total of 44 MLAs, representing Congress, Jharkhand  Mukti Morcha (JMM), and Rashtriya Janata Dal (RJD) have arrived in Hyderabad. The MLAs are en route to the Leonia resort in Shamirpet, according to the same source.  The unfolding drama began on Thursday when reports emerged that Jharkhand MLAs were being transported to Hyderabad from Ranchi. Confusion ensued regarding whether the planes carrying the MLAs would land at Rajiv Gandhi International Airport (RGIA) in Shamshabad or Begumpet Airport.',0,2),(3,'2024-03-09 14:29:00.141258','2024-03-09 14:29:00.141258','Jharkhand Mukti Morcha (JMM) leader  Hemant Soren stepped down as the Chief Minister of Jharkhand  on Wednesday moments be fore the Enforcement Directorate (ED) arrested him on allegations of money laundering. Mr. Soren faces charges of benefiting from tribal land transactions based on forged documents. The judiciary will examine these allegations, but what necessitates the ar rest of an accused is a serious question that the judiciary needs to settle in clearer and enforceable terms. The ED, under the  Prevention of Money Laundering Act (PMLA) , commands sweeping powers of arrest. Barriers for bail are very high in PMLA cases. Petitions challenging the  July 2022 judgment of the Supreme Court upholding these powers  are pending before it. Meanwhile, the ED has raised the stakes by arresting a Chief Minister of an Opposition party,  which cannot be viewed as a routine law enforcement event. Mr. Soren ’s lawyers mentioned in the Court on February 1 that this has implications for the polity of the country, seeking an urgent hearing of his plea against the arrest. Meanwhile, the  ED has asked Delhi Chief Minister and Aam Aadmi Party leader Arvind Kejriwal  to appear befor e it on February 2, after his failure to turn up for questioning four times. Mr. Soren has called for ‘a war against a feudal system that oppresses poor, dalit and tribals ’, terming the case against him an assault on the tribal communities that he represen ts. Faced with allegations, politicians often seek cover behind their community identities, but it is undeniable that the long arm of the Indian law reaches the weaker sections of society more easily. The JMM ’s troubles did not end with Mr. Soren ’s arrest.  The selection of a new Chief Minister became entangled in a family feud. Instead, as a compromise, it will be a veteran fighter for tribal rights, Champai Soren, but the Governor has not yet invited him to form the government. The Jharkhand police has fil ed a first information report based on a complaint by Mr. Soren under the SC/ST (Prevention of Atrocities) Act, but it is unlikely to stand. That said, ED investigations have now established a pattern that fits perfectly with the political designs of the r uling Bharatiya Janata Party. Mr.',0,3),(4,'2024-03-09 14:29:00.162613','2024-03-09 14:29:00.162613','The Lok Sabha and Rajya Sabha  have taken up discussion on President Droupadi Murmu\'s address to the joint sitting of both the Houses of Parliament. Initiating the discussion, BJP member Dr. Heena Gavit highlig hted the series of measures taken by the government for the welfare of women, the poor, farmers, youth, and marginalized sections of society. She added that the government led by Prime Minister Narendra Modi has focused on five elements - women, poor, yout h, farmers, and infrastructure. The BJP leader highlighted how women in the country progressed after 2014 listing out Self Help Groups, women ’s reservation in the Lok Sabha and state assemblies as well as special measures for women in central schemes.  Talking about the new education policy, she said it has become a policy for equal opportunity for all. Dr. Gavit said around 14 thousand PM Shree Schools are being established to provide better education to children. She added that 315 new medical colleges hav e been started in the last ten years and the number of AIIMS has also increased in the country. The MP highlighted that under Mr. Modi\'s leadership Indian economy has become one of the top five economies of the world from being fragile five. She noted that  18 lakh crore rupees worth UPI transactions were done last year in the country. Dr. Gavit asserted that India has emerged as a  global leader in the last ten years. Participating in the discussion, Union Minister Prof SP Singh Baghel said Mr. Modi has run  a corruption -free government as not a single allegation of corruption has emerged against his government in the last ten years. He added that Mr. Modi will never compromise on issues of corruption, dynastic politics, and injustice. He attacked Congress ov er the issue of poverty saying it used to give slogans like Garibi Hato but never took concrete steps in this direction. The Minister listed out several schemes and efforts of the government for the welfare of the people. The discussion is underway in the Lok Sabha. Initiating the discussion in  Rajya Sabha, Kavita Patidar of the BJP said, that in the last 10 years, women of the country have been empowered. She also listed out achievements of the Government saying 25 crore people have come out of poverty. Ms . Patidar said, the number of airports in the country has doubled and four lakh kilometers of new roads have been constructed in the rural areas. She also said that metro train services have reached 20 cities which was earlier concentrated in only five citi es, while Vande Bharat trains are running on 39 routes. She said, that Make in India and Atmanirbhar Bharat have become the strength of the country and India has emerged as the second largest exporter of mobile phones.   Participating in the discussion, Vi vek Thakur of BJP said, Narendra Modi Government has brought the country from the policy paralysis era. He said, that from Fragile Five, India has entered in the top five economies. Mr. Thakur said, India has become the bright spot in the world. He also hi ghlighted several measures taken by the Government for the welfare of countrymen.',0,4),(5,'2024-03-09 14:29:00.176933','2024-03-09 14:29:00.176933','Prime Minister Narendra Modi said that India is moving forward with the vision to make the country \'Viksit Bharat\' by 2047. He said to achieve this goal, the mob ility sector is going to play a crucial role. The Prime Minister was addressing Bharat Mobility Global Expo 2024 at Bharat Mandapam in New Delhi on Friday. Mr Modi said, this event has brought together the mobility community and the entire supply chain on one platform. He said  India\'s economy is expanding fast, and in the third term of his government, India is bound to become the third biggest economy in the world. Bharat Mobility Global Expo 2024 is set to showcase India ’s capabilities across the entire m obility and automotive value chains. The Expo will feature exhibitions, conferences, buyer -seller meets, state sessions, road safety',0,5),(6,'2024-03-09 16:02:51.190345','2024-03-09 16:45:44.000000','The law commission has recommended that criminal defamation should be retained within the scheme of criminal laws in India. In its report on the law on criminal defamation, the panel asserted that it is important to keep in mind that the right to reputatio n flows from Article 21 of the Constitution, and being a facet of right to life and personal liberty, it needs to be “adequately protected ” against defamatory speech and imputations. “Reputation is something which can ’t be seen and can only be earned. It ’s an asset which is built in a lifetime and destroyed in seconds. The whole jurisprudence around the law on criminal defamation has the essence of protecting one ’s reputation and its facets, ” it said.',98,1),(7,'2024-03-09 16:02:51.209741','2024-03-09 16:45:44.000000','As per an aircraft tracking website, two ai rcrafts, a Dassault Falcon 2000 with registration VT -ARO and an Embraer ERJ -135LR with registration VT -JSI departed from Ranchi and landed at Begumpet airport around 3.30 p.m. Sources have confirmed that a total of 44 MLAs, representing Congress, Jharkhand  Mukti Morcha (JMM), and Rashtriya Janata Dal (RJD) have arrived in Hyderabad. The MLAs are en route to the Leonia resort in Shamirpet, according to the same source.  The unfolding drama began on Thursday when reports emerged that Jharkhand MLAs were being transported to Hyderabad from Ranchi. Confusion ensued regarding whether the planes carrying the MLAs would land at Rajiv Gandhi International Airport (RGIA) in Shamshabad or Begumpet Airport.',96,2),(8,'2024-03-09 16:02:51.232693','2024-03-09 16:45:44.000000','Jharkhand Mukti Morcha (JMM) leader  Hemant Soren stepped down as the Chief Minister of Jharkhand  on Wednesday moments be fore the Enforcement Directorate (ED) arrested him on allegations of money laundering. Mr. Soren faces charges of benefiting from tribal land transactions based on forged documents. The judiciary will examine these allegations, but what necessitates the ar rest of an accused is a serious question that the judiciary needs to settle in clearer and enforceable terms. The ED, under the  Prevention of Money Laundering Act (PMLA) , commands sweeping powers of arrest. Barriers for bail are very high in PMLA cases. Petitions challenging the  July 2022 judgment of the Supreme Court upholding these powers  are pending before it. Meanwhile, the ED has raised the stakes by arresting a Chief Minister of an Opposition party,  which cannot be viewed as a routine law enforcement event. Mr. Soren ’s lawyers mentioned in the Court on February 1 that this has implications for the polity of the country, seeking an urgent hearing of his plea against the arrest. Meanwhile, the  ED has asked Delhi Chief Minister and Aam Aadmi Party leader Arvind Kejriwal  to appear befor e it on February 2, after his failure to turn up for questioning four times. Mr. Soren has called for ‘a war against a feudal system that oppresses poor, dalit and tribals ’, terming the case against him an assault on the tribal communities that he represen ts. Faced with allegations, politicians often seek cover behind their community identities, but it is undeniable that the long arm of the Indian law reaches the weaker sections of society more easily. The JMM ’s troubles did not end with Mr. Soren ’s arrest.  The selection of a new Chief Minister became entangled in a family feud. Instead, as a compromise, it will be a veteran fighter for tribal rights, Champai Soren, but the Governor has not yet invited him to form the government. The Jharkhand police has fil ed a first information report based on a complaint by Mr. Soren under the SC/ST (Prevention of Atrocities) Act, but it is unlikely to stand. That said, ED investigations have now established a pattern that fits perfectly with the political designs of the r uling Bharatiya Janata Party. Mr.',98,3),(9,'2024-03-09 16:02:51.253790','2024-03-09 16:45:44.000000','The Lok Sabha and Rajya Sabha  have taken up discussion on President Droupadi Murmu\'s address to the joint sitting of both the Houses of Parliament. Initiating the discussion, BJP member Dr. Heena Gavit highlig hted the series of measures taken by the government for the welfare of women, the poor, farmers, youth, and marginalized sections of society. She added that the government led by Prime Minister Narendra Modi has focused on five elements - women, poor, yout h, farmers, and infrastructure. The BJP leader highlighted how women in the country progressed after 2014 listing out Self Help Groups, women ’s reservation in the Lok Sabha and state assemblies as well as special measures for women in central schemes.  Talking about the new education policy, she said it has become a policy for equal opportunity for all. Dr. Gavit said around 14 thousand PM Shree Schools are being established to provide better education to children. She added that 315 new medical colleges hav e been started in the last ten years and the number of AIIMS has also increased in the country. The MP highlighted that under Mr. Modi\'s leadership Indian economy has become one of the top five economies of the world from being fragile five. She noted that  18 lakh crore rupees worth UPI transactions were done last year in the country. Dr. Gavit asserted that India has emerged as a  global leader in the last ten years. Participating in the discussion, Union Minister Prof SP Singh Baghel said Mr. Modi has run  a corruption -free government as not a single allegation of corruption has emerged against his government in the last ten years. He added that Mr. Modi will never compromise on issues of corruption, dynastic politics, and injustice. He attacked Congress ov er the issue of poverty saying it used to give slogans like Garibi Hato but never took concrete steps in this direction. The Minister listed out several schemes and efforts of the government for the welfare of the people. The discussion is underway in the Lok Sabha. Initiating the discussion in  Rajya Sabha, Kavita Patidar of the BJP said, that in the last 10 years, women of the country have been empowered. She also listed out achievements of the Government saying 25 crore people have come out of poverty. Ms . Patidar said, the number of airports in the country has doubled and four lakh kilometers of new roads have been constructed in the rural areas. She also said that metro train services have reached 20 cities which was earlier concentrated in only five citi es, while Vande Bharat trains are running on 39 routes. She said, that Make in India and Atmanirbhar Bharat have become the strength of the country and India has emerged as the second largest exporter of mobile phones.   Participating in the discussion, Vi vek Thakur of BJP said, Narendra Modi Government has brought the country from the policy paralysis era. He said, that from Fragile Five, India has entered in the top five economies. Mr. Thakur said, India has become the bright spot in the world. He also hi ghlighted several measures taken by the Government for the welfare of countrymen.',98,4),(10,'2024-03-09 16:02:51.269710','2024-03-09 16:45:44.000000','Prime Minister Narendra Modi said that India is moving forward with the vision to make the country \'Viksit Bharat\' by 2047. He said to achieve this goal, the mob ility sector is going to play a crucial role. The Prime Minister was addressing Bharat Mobility Global Expo 2024 at Bharat Mandapam in New Delhi on Friday. Mr Modi said, this event has brought together the mobility community and the entire supply chain on one platform. He said  India\'s economy is expanding fast, and in the third term of his government, India is bound to become the third biggest economy in the world. Bharat Mobility Global Expo 2024 is set to showcase India ’s capabilities across the entire m obility and automotive value chains. The Expo will feature exhibitions, conferences, buyer -seller meets, state sessions, road safety',85,5);
/*!40000 ALTER TABLE `answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course` (
  `id` int NOT NULL AUTO_INCREMENT,
  `subjectName` varchar(100) NOT NULL,
  `examType` varchar(50) NOT NULL,
  `markingScheme` varchar(255) NOT NULL,
  `sem` varchar(255) NOT NULL,
  `departmentId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_62bd85cf9a50b5dff651935e028` (`departmentId`),
  CONSTRAINT `FK_62bd85cf9a50b5dff651935e028` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES (1,'Cloud Computing','Regular','100','2',1),(2,'Cyber Security','Regular','100','2',1),(3,'Machine Learning Techniques','Regular','100','2',1),(4,'Open Elective -Cyber Security','Regular','100','2',2),(5,'Research Methodology','Regular','100','2',3),(6,'Advanced Operating Systems','Regular','100','2',1),(7,'Theory Operating Systems','Regular','100','2',3),(8,'Theory of Computation','Regular','100','2',4),(9,'Advanced Computer Architecture','Regular','100','2',2),(10,'Data Structures','Regular','100','2',2),(11,'Object Oriented Programming Using Java','Regular','100','2',2),(12,' British Literature I','Regular','100','1',1),(13,' British Literature II','Regular','100','1',1),(14,' Indian Writing in English I','Regular','100','1',1),(15,' Gender and Literature','Regular','100','1',2),(16,' Understanding Mythology and Folktales (Indian)','Regular','100','1',3),(17,' Introduction to Popular Literature','Regular','100','1',1),(18,'Global Environment for business','Regular','100','3',2),(19,'Management Information System','Regular','100','3',3);
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_programme`
--

DROP TABLE IF EXISTS `course_programme`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_programme` (
  `course` int NOT NULL,
  `programme` int NOT NULL,
  PRIMARY KEY (`course`,`programme`),
  KEY `IDX_34a14a33eebfc3301feb1c3d92` (`course`),
  KEY `IDX_50ce94e8b4d2be104571f966fa` (`programme`),
  CONSTRAINT `FK_34a14a33eebfc3301feb1c3d92b` FOREIGN KEY (`course`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_50ce94e8b4d2be104571f966fa0` FOREIGN KEY (`programme`) REFERENCES `programme` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_programme`
--

LOCK TABLES `course_programme` WRITE;
/*!40000 ALTER TABLE `course_programme` DISABLE KEYS */;
/*!40000 ALTER TABLE `course_programme` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_users`
--

DROP TABLE IF EXISTS `course_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_users` (
  `course` int NOT NULL,
  `users` int NOT NULL,
  PRIMARY KEY (`course`,`users`),
  KEY `IDX_3b1f488b67071efce4db975194` (`course`),
  KEY `IDX_518082fe48e82f081c271e4ea5` (`users`),
  CONSTRAINT `FK_3b1f488b67071efce4db975194b` FOREIGN KEY (`course`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_518082fe48e82f081c271e4ea54` FOREIGN KEY (`users`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_users`
--

LOCK TABLES `course_users` WRITE;
/*!40000 ALTER TABLE `course_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `course_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department` (
  `id` int NOT NULL AUTO_INCREMENT,
  `departmentName` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES (1,'Department of English (PG)'),(2,'Department of Computer Science (PG)'),(3,'Department of Management (PG)'),(4,'Department of Commerce (PG)'),(5,'Department of Chemistry (PG)'),(6,'Department of Mathematics (PG)'),(7,'Department of Psychology (PG)'),(8,'Department of Life Science (PG)');
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `document`
--

DROP TABLE IF EXISTS `document`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `document` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `docUrl` varchar(255) NOT NULL,
  `fileName` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `document`
--

LOCK TABLES `document` WRITE;
/*!40000 ALTER TABLE `document` DISABLE KEYS */;
INSERT INTO `document` VALUES (10,'2024-02-03 11:28:59.738806','2024-02-03 12:09:13.823344','http://localhost:8080/ans1.pdf','ans1.pdf'),(11,'2024-02-03 11:28:59.748497','2024-02-03 11:50:38.721700','http://localhost:8080/ans1.pdf','22MCA06.pdf'),(12,'2024-02-03 12:10:04.057785','2024-02-03 12:10:04.057785','http://localhost:8080/ee0864a5-5c3d-43c4-8f41-e55ebbce1df6-22MCA05.pdf','22MCA05.pdf'),(13,'2024-03-09 14:26:25.639306','2024-03-09 14:26:25.639306','http://localhost:8080/b58eda79-2142-4896-b3cf-1c10c177a211-22MCA01.pdf','22MCA01.pdf');
/*!40000 ALTER TABLE `document` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exam_schedule`
--

DROP TABLE IF EXISTS `exam_schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exam_schedule` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `monAndYear` date NOT NULL,
  `semester` varchar(255) NOT NULL,
  `courseInfoId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_1f8f4f8183b713f21fa67fe66a2` (`courseInfoId`),
  CONSTRAINT `FK_1f8f4f8183b713f21fa67fe66a2` FOREIGN KEY (`courseInfoId`) REFERENCES `course` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exam_schedule`
--

LOCK TABLES `exam_schedule` WRITE;
/*!40000 ALTER TABLE `exam_schedule` DISABLE KEYS */;
INSERT INTO `exam_schedule` VALUES (1,'2024-03-09 14:21:37.757080','2024-03-09 14:21:37.757080','2024-03-15','3',1);
/*!40000 ALTER TABLE `exam_schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `examsche_faculty`
--

DROP TABLE IF EXISTS `examsche_faculty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `examsche_faculty` (
  `examsche` int NOT NULL,
  `faculty` int NOT NULL,
  PRIMARY KEY (`examsche`,`faculty`),
  KEY `IDX_a16e2d809efbfeadf2c650ccb3` (`examsche`),
  KEY `IDX_aeeae5f572da82bd0a8a78401e` (`faculty`),
  CONSTRAINT `FK_a16e2d809efbfeadf2c650ccb36` FOREIGN KEY (`examsche`) REFERENCES `exam_schedule` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_aeeae5f572da82bd0a8a78401e7` FOREIGN KEY (`faculty`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `examsche_faculty`
--

LOCK TABLES `examsche_faculty` WRITE;
/*!40000 ALTER TABLE `examsche_faculty` DISABLE KEYS */;
INSERT INTO `examsche_faculty` VALUES (1,2);
/*!40000 ALTER TABLE `examsche_faculty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `examsche_programme`
--

DROP TABLE IF EXISTS `examsche_programme`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `examsche_programme` (
  `examsche` int NOT NULL,
  `programe` int NOT NULL,
  PRIMARY KEY (`examsche`,`programe`),
  KEY `IDX_878c69151d09d5b55acaaa2d06` (`examsche`),
  KEY `IDX_004a3180d0773cf441bb2cc0b6` (`programe`),
  CONSTRAINT `FK_004a3180d0773cf441bb2cc0b6d` FOREIGN KEY (`programe`) REFERENCES `programme` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_878c69151d09d5b55acaaa2d068` FOREIGN KEY (`examsche`) REFERENCES `exam_schedule` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `examsche_programme`
--

LOCK TABLES `examsche_programme` WRITE;
/*!40000 ALTER TABLE `examsche_programme` DISABLE KEYS */;
INSERT INTO `examsche_programme` VALUES (1,2);
/*!40000 ALTER TABLE `examsche_programme` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faculty_programme`
--

DROP TABLE IF EXISTS `faculty_programme`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faculty_programme` (
  `faculty` int NOT NULL,
  `programme` int NOT NULL,
  PRIMARY KEY (`faculty`,`programme`),
  KEY `IDX_b20ce59aadb51295f385da9f09` (`faculty`),
  KEY `IDX_eb4d4c10c479f62cf12b9cd5db` (`programme`),
  CONSTRAINT `FK_b20ce59aadb51295f385da9f09b` FOREIGN KEY (`faculty`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_eb4d4c10c479f62cf12b9cd5db4` FOREIGN KEY (`programme`) REFERENCES `programme` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faculty_programme`
--

LOCK TABLES `faculty_programme` WRITE;
/*!40000 ALTER TABLE `faculty_programme` DISABLE KEYS */;
/*!40000 ALTER TABLE `faculty_programme` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `programme`
--

DROP TABLE IF EXISTS `programme`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `programme` (
  `id` int NOT NULL AUTO_INCREMENT,
  `programmeName` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `programme`
--

LOCK TABLES `programme` WRITE;
/*!40000 ALTER TABLE `programme` DISABLE KEYS */;
INSERT INTO `programme` VALUES (1,'MA English'),(2,'MCA'),(3,'MSc Computer Science'),(4,'MBA'),(5,'MCOM (Financial Analysis)'),(6,'MVOC (Banking and Finance)'),(7,'MCOM '),(8,'MSc Organic Chemistry'),(9,'MSc Mathematics');
/*!40000 ALTER TABLE `programme` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `programme_department`
--

DROP TABLE IF EXISTS `programme_department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `programme_department` (
  `programme` int NOT NULL,
  `department` int NOT NULL,
  PRIMARY KEY (`programme`,`department`),
  KEY `IDX_064b723f2517fc4ee74f2945cf` (`programme`),
  KEY `IDX_68a97e8cf71238d588c96b88b0` (`department`),
  CONSTRAINT `FK_064b723f2517fc4ee74f2945cf0` FOREIGN KEY (`programme`) REFERENCES `programme` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_68a97e8cf71238d588c96b88b00` FOREIGN KEY (`department`) REFERENCES `department` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `programme_department`
--

LOCK TABLES `programme_department` WRITE;
/*!40000 ALTER TABLE `programme_department` DISABLE KEYS */;
/*!40000 ALTER TABLE `programme_department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qpaper_question`
--

DROP TABLE IF EXISTS `qpaper_question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `qpaper_question` (
  `qpaper` int NOT NULL,
  `question` int NOT NULL,
  PRIMARY KEY (`qpaper`,`question`),
  KEY `IDX_6a1fb13cf6a612e672be4a1db9` (`qpaper`),
  KEY `IDX_2184ea771c3607a636c558764b` (`question`),
  CONSTRAINT `FK_2184ea771c3607a636c558764ba` FOREIGN KEY (`question`) REFERENCES `question` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_6a1fb13cf6a612e672be4a1db9e` FOREIGN KEY (`qpaper`) REFERENCES `question_paper` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qpaper_question`
--

LOCK TABLES `qpaper_question` WRITE;
/*!40000 ALTER TABLE `qpaper_question` DISABLE KEYS */;
INSERT INTO `qpaper_question` VALUES (1,1),(1,2),(1,3),(1,4),(1,5);
/*!40000 ALTER TABLE `qpaper_question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `question_no` int NOT NULL,
  `question_desc` varchar(1000) NOT NULL,
  `masterAns` varchar(10000) NOT NULL,
  `maxMarks` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (1,'2024-03-09 14:26:34.615829','2024-03-09 14:26:34.615829',1,'question 1 description','The law commission has recommended that criminal defamation should be \nretained within the scheme of criminal laws in India. In its report on the law on criminal \ndefamation, the panel asserted that it is important to keep in mind that the right to \nreputation flows from Article 21 of the Constitution, and being a facet of right to life and \npersonal liberty, it needs to be “adequately protected” against defamatory speech and \nimputations. “Reputation is something which can’t be seen and can only be earned. It’s an \nasset which is built in a lifetime and destroyed in seconds. The whole jurisprudence around \nthe law on criminal defamation has the essence of protecting one’s reputation and its \nfacets,” it said',10),(2,'2024-03-09 14:26:34.636441','2024-03-09 14:26:34.636441',2,'question 2 description','As per an aircraft tracking website, two aircrafts, a Dassault Falcon 2000 with \nregistration VT-ARO and an Embraer ERJ-135LR with registration VT-JSI departed from Ranchi \nand landed at Begumpet airport around 3.30 p.m. Sources have confirmed that a total of 44 \nMLAs, representing Congress, Jharkhand Mukti Morcha (JMM), and Rashtriya Janata Dal \n(RJD) have arrived in Hyderabad. The MLAs are en route to the Leonia resort in Shamirpet, \naccording to the same source. The unfolding drama began on Thursday when reports \nemerged that Jharkhand MLAs were being transported to Hyderabad from Ranchi. Confusion \nensued regarding whether the planes carrying the MLAs would land at Rajiv Gandhi \nInternational Airport (RGIA) in Shamshabad or Begumpet Airport.',20),(3,'2024-03-09 14:26:34.654192','2024-03-09 14:26:34.654192',3,'question 3 description','Jharkhand Mukti Morcha (JMM) leader Hemant Soren stepped down as the \nChief Minister of Jharkhand on Wednesday moments before the Enforcement Directorate \n(ED) arrested him on allegations of money laundering. Mr. Soren faces charges of benefiting \nfrom tribal land transactions based on forged documents. The judiciary will examine these \nallegations, but what necessitates the arrest of an accused is a serious question that the \njudiciary needs to settle in clearer and enforceable terms. The ED, under the Prevention of \nMoney Laundering Act (PMLA), commands sweeping powers of arrest. Barriers for bail are \nvery high in PMLA cases. Petitions challenging the July 2022 judgment of the Supreme Court \nupholding these powers are pending before it. Meanwhile, the ED has raised the stakes by \narresting a Chief Minister of an Opposition party, which cannot be viewed as a routine law \nenforcement event. Mr. Soren’s lawyers mentioned in the Court on February 1 that this has \nimplications for the polity of the country, seeking an urgent hearing of his plea against the \narrest. Meanwhile, the ED has asked Delhi Chief Minister and Aam Aadmi Party leader \nArvind Kejriwal to appear before it on February 2, after his failure to turn up for questioning \nfour times. Mr. Soren has called for ‘a war against a feudal system that oppresses poor, dalit \nand tribals’, terming the case against him an assault on the tribal communities that he \nrepresents. Faced with allegations, politicians often seek cover behind their community \nidentities, but it is undeniable that the long arm of the Indian law reaches the weaker \nsections of society more easily. The JMM’s troubles did not end with Mr. Soren’s arrest. The \nselection of a new Chief Minister became entangled in a family feud. Instead, as a \ncompromise, it will be a veteran fighter for tribal rights, Champai Soren, but the Governor \nhas not yet invited him to form the government. The Jharkhand police has filed a first \ninformation report based on a complaint by Mr. Soren under the SC/ST (Prevention of \nAtrocities) Act, but it is unlikely to stand. That said, ED investigations have now established a \npattern that fits perfectly with the political designs of the ruling Bharatiya Janata Party. Mr',30),(4,'2024-03-09 14:26:34.672546','2024-03-09 14:26:34.672546',4,'question 4 description','The Lok Sabha and Rajya Sabha have taken up discussion on President Droupadi \nMurmu\'s address to the joint sitting of both the Houses of Parliament. Initiating the \ndiscussion, BJP member Dr. Heena Gavit highlighted the series of measures taken by the \ngovernment for the welfare of women, the poor, farmers, youth, and marginalized sections \nof society. She added that the government led by Prime Minister Narendra Modi has focused \non five elements - women, poor, youth, farmers, and infrastructure. The BJP leader \nhighlighted how women in the country progressed after 2014 listing out Self Help Groups, \nwomen’s reservation in the Lok Sabha and state assemblies as well as special measures for \nwomen in central schemes. Talking about the new education policy, she said it has become a \npolicy for equal opportunity for all. Dr. Gavit said around 14 thousand PM Shree Schools are \nbeing established to provide better education to children. She added that 315 new medical \ncolleges have been started in the last ten years and the number of AIIMS has also increased \nin the country. The MP highlighted that under Mr. Modi\'s leadership Indian economy has \nbecome one of the top five economies of the world from being fragile five. She noted that\n18 lakh crore rupees worth UPI transactions were done last year in the country. Dr. Gavit \nasserted that India has emerged as a global leader in the last ten years. Participating in the \ndiscussion, Union Minister Prof SP Singh Baghel said Mr. Modi has run a corruption-free \ngovernment as not a single allegation of corruption has emerged against his government in \nthe last ten years. He added that Mr. Modi will never compromise on issues of corruption, \ndynastic politics, and injustice. He attacked Congress over the issue of poverty saying it used \nto give slogans like Garibi Hato but never took concrete steps in this direction. The Minister \nlisted out several schemes and efforts of the government for the welfare of the people. The \ndiscussion is underway in the Lok Sabha. Initiating the discussion in Rajya Sabha, Kavita \nPatidar of the BJP said, that in the last 10 years, women of the country have been \nempowered. She also listed out achievements of the Government saying 25 crore people \nhave come out of poverty. Ms. Patidar said, the number of airports in the country has \ndoubled and four lakh kilometers of new roads have been constructed in the rural areas. She \nalso said that metro train services have reached 20 cities which was earlier concentrated in \nonly five cities, while Vande Bharat trains are running on 39 routes. She said, that Make in \nIndia and Atmanirbhar Bharat have become the strength of the country and India has \nemerged as the second largest exporter of mobile phones.\nParticipating in the discussion, Vivek Thakur of BJP said, Narendra Modi Government has \nbrought the country from the policy paralysis era. He said, that from Fragile Five, India has \nentered in the top five economies. Mr. Thakur said, India has become the bright spot in the \nworld. He also highlighted several measures taken by the Government for the welfare of \ncountrymen.',20),(5,'2024-03-09 14:26:34.685892','2024-03-09 14:26:34.685892',5,'question 5 description','Prime Minister Narendra Modi said that India is moving forward with the vision \nto make the country \'Viksit Bharat\' by 2047. He said to achieve this goal, the mobility sector \nis going to play a crucial role. The Prime Minister was addressing Bharat Mobility Global \nExpo 2024 at Bharat Mandapam in New Delhi on Friday. Mr Modi said, this event has \nbrought together the mobility community and the entire supply chain on one platform. He \nsaid India\'s economy is expanding fast, and in the third term of his government, India is \nbound to become the third biggest economy in the world. Bharat Mobility Global Expo 2024 \nis set to showcase India’s capabilities across the entire mobility and automotive value chains. \nThe Expo will feature exhibitions, conferences, buyer-seller meets, state sessions, road safety \npavilion and also public-centric attractions like go-karting. With over 800 exhibitors from \nmore than 50 countries, the Expo will highlight cutting-edge technologies, sustainable \nsolutions and breakthroughs in mobility. The Expo will feature participation from over 28 \nvehicle manufacturers. About thousand brands from over 13 global markets will showcase \ntheir complete range of products, technologies, and services at the event. Along with the \nexhibition and conferences, Bharat Mobility Expo will also feature state sessions for states to \nshowcase regional contributions and initiatives to enable collaboration at both national and \nregional levels',20);
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_paper`
--

DROP TABLE IF EXISTS `question_paper`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question_paper` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `totalMarks` int NOT NULL,
  `semester` varchar(255) NOT NULL,
  `courseId` int DEFAULT NULL,
  `programmeId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_744efc4e1e73de30a317f79a94` (`semester`,`courseId`,`programmeId`),
  KEY `FK_6897c9f80488c8d61f24b44fb85` (`courseId`),
  KEY `FK_344b4ddca08039a480d3a104c9f` (`programmeId`),
  CONSTRAINT `FK_344b4ddca08039a480d3a104c9f` FOREIGN KEY (`programmeId`) REFERENCES `programme` (`id`),
  CONSTRAINT `FK_6897c9f80488c8d61f24b44fb85` FOREIGN KEY (`courseId`) REFERENCES `course` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_paper`
--

LOCK TABLES `question_paper` WRITE;
/*!40000 ALTER TABLE `question_paper` DISABLE KEYS */;
INSERT INTO `question_paper` VALUES (1,'2024-03-09 14:26:34.697576','2024-03-09 14:26:34.697576',100,'3',1,2);
/*!40000 ALTER TABLE `question_paper` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `regular_student`
--

DROP TABLE IF EXISTS `regular_student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `regular_student` (
  `regular` int NOT NULL,
  `student` int NOT NULL,
  PRIMARY KEY (`regular`,`student`),
  KEY `IDX_e1ea609a43728bc8d1b977cf37` (`regular`),
  KEY `IDX_1d9de45bde3d664a074a471d15` (`student`),
  CONSTRAINT `FK_1d9de45bde3d664a074a471d15c` FOREIGN KEY (`student`) REFERENCES `student` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_e1ea609a43728bc8d1b977cf374` FOREIGN KEY (`regular`) REFERENCES `student_taking_exam` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `regular_student`
--

LOCK TABLES `regular_student` WRITE;
/*!40000 ALTER TABLE `regular_student` DISABLE KEYS */;
INSERT INTO `regular_student` VALUES (1,1),(1,2);
/*!40000 ALTER TABLE `regular_student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stud_ans_script_answer`
--

DROP TABLE IF EXISTS `stud_ans_script_answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stud_ans_script_answer` (
  `stud_ans_script` int NOT NULL,
  `answer` int NOT NULL,
  PRIMARY KEY (`stud_ans_script`,`answer`),
  KEY `IDX_a40deecaf3995a60d44ca58096` (`stud_ans_script`),
  KEY `IDX_cf2d72105b3dd1ae85c0b578cf` (`answer`),
  CONSTRAINT `FK_a40deecaf3995a60d44ca580966` FOREIGN KEY (`stud_ans_script`) REFERENCES `student_ans_script` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_cf2d72105b3dd1ae85c0b578cf1` FOREIGN KEY (`answer`) REFERENCES `answers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stud_ans_script_answer`
--

LOCK TABLES `stud_ans_script_answer` WRITE;
/*!40000 ALTER TABLE `stud_ans_script_answer` DISABLE KEYS */;
INSERT INTO `stud_ans_script_answer` VALUES (1,6),(1,7),(1,8),(1,9),(1,10);
/*!40000 ALTER TABLE `stud_ans_script_answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `regNumber` varchar(20) NOT NULL,
  `startYear` int NOT NULL,
  `programmeId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_59aefc0a29e3bbad5eb3eae23af` (`programmeId`),
  CONSTRAINT `FK_59aefc0a29e3bbad5eb3eae23af` FOREIGN KEY (`programmeId`) REFERENCES `programme` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1,'AIMAN ','KHANUM','22MCA01',2022,2),(2,'AKSHITHA ','C D','22MCA02',2022,2),(3,'AMULYA ','M R','22MCA03',2022,2),(4,'ANJUSHREE','R','22MCA04',2022,2),(5,'ASHMIKA ','SHANDILYA','22MCA05',2022,2),(6,'BHOOMIKA ','C R','22MCA06',2022,2),(7,'BHUMICA ','R','22MCA07',2022,2),(8,'DIVYA ','N M','22MCA08',2022,2),(9,'DIVYASHREE','D','22MCA09',2022,2),(10,'ESTHER ','JELINAL J','22MCA10',2022,2),(11,'GINITHA ','G','22MCA11',2022,2),(12,'HARISHREE B N ','REDDY','22MCA12',2022,2),(13,'HARITHA ','V','22MCA13',2022,2),(14,'INAMDAR JAITASHREE ','SHRIRAMDAS','22MCA14',2022,2),(15,'JAVERIYA','R','22MCA15',2022,2),(16,'JAYA PRIYA','R','22MCA16',2022,2),(17,'JENIFER MARY ','GEORGE','22MCA17',2022,2),(18,'JOANNAH ','P','22MCA18',2022,2),(19,'KAVYA ','L','22MCA19',2022,2),(20,'KONDA ','KAVYA','22MCA20',2022,2),(21,'LAKSHMILAVANYA ','CH','22MCA21',2022,2),(22,'LIKITHA ','M','22MCA22',2022,2),(23,'M V ','NAVYASHREE','22MCA23',2022,2),(24,'MAHALAKSHMI ','C K','22MCA24',2022,2),(25,'MONIKA ','K L','22MCA25',2022,2),(26,'NALLANNAGARI ','ANUSHA','22MCA26',2022,2),(27,'NAYANA ','M','22MCA27',2022,2),(28,'NIDHI ','DUBEY','22MCA28',2022,2),(29,'NITIKA ','SAUN','22MCA29',2022,2),(30,'POOJA SRI ','R','22MCA30',2022,2),(31,'RENUKA ','SAHOO','22MCA31',2022,2),(32,'S ','JAHNAVI','22MCA32',2022,2),(33,'SABA ','TUSNEEM','22MCA33',2022,2),(34,'SABITHA ','C','22MCA34',2022,2),(35,'SHANTHA KUMARI ','J','22MCA35',2022,2),(36,'SHANTHI ','SOPHIA','22MCA36',2022,2),(37,'SHARANYA ','K','22MCA37',2022,2),(38,'SUDAGANI ','NEHA','22MCA38',2022,2),(39,'SYEDA AYESHA ','SIDDIQUA','22MCA39',2022,2),(40,'THANUSHREE ','B G','22MCA40',2022,2),(41,'VANDANA','S K','22MCA41',2022,2),(42,'VANGARA SAI ','PRATHYUSHA','22MCA42',2022,2),(43,'YASHASHVINI ','R','22MCA43',2022,2),(44,'YESEERA FARHATH ','S','22MCA44',2022,2),(45,'YUKTHA ','P','22MCA45',2022,2),(46,'HAZEL','BRIDGET A','23MSC01',2023,3),(47,'JANANI','C','23MSC02',2023,3),(48,'M','RAKSHA','23MSC03',2023,3),(49,'MOHANA','PRIYA K','23MSC04',2023,3),(50,'NIRMA','B','23MSC05',2023,3),(51,'NITHYA','CELESTINE','23MSC06',2023,3),(52,'SADIYA','SUMAIYA A','23MSC07',2023,3),(53,'SAMEENA','TAJ','23MSC08',2023,3),(54,'VYSHALI','H N','23MSC09',2023,3),(55,'PUTUL','KUMARI','23MSC10',2023,3),(56,'ADITI','S','22MA01',2022,1),(57,'ANITTA','SEBASTIAN','22MA03',2022,1),(58,'ANKITA','CHAKRABORTY','22MA04',2022,1),(59,'AROCKIA','HEVILA RAICHAL S','22MA05',2022,1),(60,'B','REMLALLIANI','22MA06',2022,1),(61,'AAHANA','SINGH','22MBA01',2022,4),(62,'AISHVARIYAA','P J','22MBA02',2022,4),(63,'AISHWARYA','K M','22MBA03',2022,4),(64,'ARCHANA','P SIDDANNAVAR','22MBA04',2022,4),(65,'ARPITHA','S SHETTY','22MBA05',2022,4),(66,'AISHWARYA','P','22MCOM01',2022,5),(67,'ANJUPRIYA','V','22MCOM02',2022,5),(68,'BHOOMIKA ','C','22MCOM03',2022,5),(69,'BHUMIKA','D','22MCOM04',2022,5),(70,'BHUMIKA','G','22MCOM05',2022,5);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_ans_script`
--

DROP TABLE IF EXISTS `student_ans_script`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_ans_script` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `comment` varchar(200) DEFAULT NULL,
  `isVerified` tinyint NOT NULL,
  `isSentForReEval` tinyint NOT NULL,
  `semester` varchar(255) NOT NULL,
  `ansDocumentId` int DEFAULT NULL,
  `studentId` int DEFAULT NULL,
  `courseId` int DEFAULT NULL,
  `programmeId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_a61a122309b451e1ed082ef926` (`ansDocumentId`),
  KEY `FK_33a662e4696ff8cc6e7eb24525d` (`studentId`),
  KEY `FK_491f9677a9cc50fd748649d96ae` (`courseId`),
  KEY `FK_10c20cb80445e705e786478c5fa` (`programmeId`),
  CONSTRAINT `FK_10c20cb80445e705e786478c5fa` FOREIGN KEY (`programmeId`) REFERENCES `programme` (`id`),
  CONSTRAINT `FK_33a662e4696ff8cc6e7eb24525d` FOREIGN KEY (`studentId`) REFERENCES `student` (`id`),
  CONSTRAINT `FK_491f9677a9cc50fd748649d96ae` FOREIGN KEY (`courseId`) REFERENCES `course` (`id`),
  CONSTRAINT `FK_a61a122309b451e1ed082ef926f` FOREIGN KEY (`ansDocumentId`) REFERENCES `document` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_ans_script`
--

LOCK TABLES `student_ans_script` WRITE;
/*!40000 ALTER TABLE `student_ans_script` DISABLE KEYS */;
INSERT INTO `student_ans_script` VALUES (1,'2024-03-09 14:26:34.590500','2024-03-09 17:10:59.000000','hi comment',1,0,'3',13,1,1,2);
/*!40000 ALTER TABLE `student_ans_script` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_tak_exam_programme`
--

DROP TABLE IF EXISTS `student_tak_exam_programme`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_tak_exam_programme` (
  `student_tak_exam` int NOT NULL,
  `programe` int NOT NULL,
  PRIMARY KEY (`student_tak_exam`,`programe`),
  KEY `IDX_251129a44c76237dd04adb5367` (`student_tak_exam`),
  KEY `IDX_1596ea06b59c0cf88a6037491a` (`programe`),
  CONSTRAINT `FK_1596ea06b59c0cf88a6037491a7` FOREIGN KEY (`programe`) REFERENCES `programme` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_251129a44c76237dd04adb5367b` FOREIGN KEY (`student_tak_exam`) REFERENCES `student_taking_exam` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_tak_exam_programme`
--

LOCK TABLES `student_tak_exam_programme` WRITE;
/*!40000 ALTER TABLE `student_tak_exam_programme` DISABLE KEYS */;
INSERT INTO `student_tak_exam_programme` VALUES (1,2);
/*!40000 ALTER TABLE `student_tak_exam_programme` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_tak_exam_users`
--

DROP TABLE IF EXISTS `student_tak_exam_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_tak_exam_users` (
  `studenttakexam` int NOT NULL,
  `users` int NOT NULL,
  PRIMARY KEY (`studenttakexam`,`users`),
  KEY `IDX_f406cec61babaa0173301933c9` (`studenttakexam`),
  KEY `IDX_b461f7922c8012aeed1b36a377` (`users`),
  CONSTRAINT `FK_b461f7922c8012aeed1b36a3778` FOREIGN KEY (`users`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_f406cec61babaa0173301933c94` FOREIGN KEY (`studenttakexam`) REFERENCES `student_taking_exam` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_tak_exam_users`
--

LOCK TABLES `student_tak_exam_users` WRITE;
/*!40000 ALTER TABLE `student_tak_exam_users` DISABLE KEYS */;
INSERT INTO `student_tak_exam_users` VALUES (1,2);
/*!40000 ALTER TABLE `student_tak_exam_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_taking_exam`
--

DROP TABLE IF EXISTS `student_taking_exam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_taking_exam` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `monAndYear` date NOT NULL,
  `semester` varchar(255) NOT NULL,
  `courseId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_46870f6da43eeb9276bc835c6d6` (`courseId`),
  CONSTRAINT `FK_46870f6da43eeb9276bc835c6d6` FOREIGN KEY (`courseId`) REFERENCES `course` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_taking_exam`
--

LOCK TABLES `student_taking_exam` WRITE;
/*!40000 ALTER TABLE `student_taking_exam` DISABLE KEYS */;
INSERT INTO `student_taking_exam` VALUES (1,'2024-03-09 14:21:37.733323','2024-03-09 14:21:37.733323','2024-03-15','3',1);
/*!40000 ALTER TABLE `student_taking_exam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supplementary_student`
--

DROP TABLE IF EXISTS `supplementary_student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supplementary_student` (
  `supplementary` int NOT NULL,
  `student` int NOT NULL,
  PRIMARY KEY (`supplementary`,`student`),
  KEY `IDX_8077079d0bbb8cbeb8aef2a4be` (`supplementary`),
  KEY `IDX_060ee21309503f28941c0f108d` (`student`),
  CONSTRAINT `FK_060ee21309503f28941c0f108d3` FOREIGN KEY (`student`) REFERENCES `student` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_8077079d0bbb8cbeb8aef2a4bec` FOREIGN KEY (`supplementary`) REFERENCES `student_taking_exam` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplementary_student`
--

LOCK TABLES `supplementary_student` WRITE;
/*!40000 ALTER TABLE `supplementary_student` DISABLE KEYS */;
INSERT INTO `supplementary_student` VALUES (1,5),(1,6),(1,8);
/*!40000 ALTER TABLE `supplementary_student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `role` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_30ddd91a212a9d03669bc1dee7` (`role`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES (1,'2024-01-27 12:35:44.502232','2024-01-27 12:35:44.502232','admin'),(2,'2024-01-27 12:35:44.523661','2024-01-27 12:35:44.523661','coordinator'),(3,'2024-01-27 12:35:44.529945','2024-01-27 12:35:44.529945','faculty');
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `contactNumber` varchar(20) NOT NULL,
  `isActive` tinyint NOT NULL DEFAULT '1',
  `departmentId` int DEFAULT NULL,
  `roleId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_554d853741f2083faaa5794d2ae` (`departmentId`),
  KEY `FK_368e146b785b574f42ae9e53d5e` (`roleId`),
  CONSTRAINT `FK_368e146b785b574f42ae9e53d5e` FOREIGN KEY (`roleId`) REFERENCES `user_role` (`id`),
  CONSTRAINT `FK_554d853741f2083faaa5794d2ae` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'2024-01-27 12:46:15.241319','2024-01-30 16:16:40.778271','CO','E','COE','$2a$08$b.F0cNm7TdyqW5M/EkabfuPjWOyPEC95xElqnQc4nHrZVxOAeSiVa','coe@jyotinivas.org','8884982277',1,NULL,1),(2,'2024-01-27 12:46:15.246376','2024-01-30 16:16:40.778271',' Roopa ','Philip',' Roopa Philip','$2a$08$b.F0cNm7TdyqW5M/EkabfuPjWOyPEC95xElqnQc4nHrZVxOAeSiVa','roopaphilip@jyotinivas.org ','8130009976',1,1,3),(3,'2024-01-27 12:46:15.250410','2024-01-30 16:16:40.778271',' Preetha','Vasan',' Preetha Vasan','$2a$08$b.F0cNm7TdyqW5M/EkabfuPjWOyPEC95xElqnQc4nHrZVxOAeSiVa','preethavasan@jyotinivas.org','9650611818',1,1,3),(4,'2024-01-27 12:46:15.254923','2024-01-30 16:16:40.778271',' Prakrithi. ','H.N',' Prakrithi. H.N','$2a$08$b.F0cNm7TdyqW5M/EkabfuPjWOyPEC95xElqnQc4nHrZVxOAeSiVa','hnprakrithi@jyotinivas.org','9810382267',1,1,3),(5,'2024-01-27 12:46:15.259439','2024-01-30 16:16:40.778271',' Fathima ','M',' Fathima M','$2a$08$b.F0cNm7TdyqW5M/EkabfuPjWOyPEC95xElqnQc4nHrZVxOAeSiVa','fathimam@jyotinivas.org','9999119849',1,1,3),(6,'2024-01-27 12:46:15.263965','2024-02-03 13:18:53.905471',' Shilpa ','Abhang','shilpaabhang','$2a$08$b.F0cNm7TdyqW5M/EkabfuPjWOyPEC95xElqnQc4nHrZVxOAeSiVa','shilpaabhang@jyotinivas.org','9810349680',1,2,3),(7,'2024-01-27 12:46:15.269054','2024-01-30 16:16:40.778271',' S. Irene ','Getzi',' S. Irene Getzi','$2a$08$b.F0cNm7TdyqW5M/EkabfuPjWOyPEC95xElqnQc4nHrZVxOAeSiVa','irenegetzi@jyotinivas.org','8800998300',1,2,3),(8,'2024-01-27 12:46:15.273746','2024-01-30 16:16:40.778271','Rajesh','Dharmaraj',' Rajesh Dharmaraj','$2a$08$b.F0cNm7TdyqW5M/EkabfuPjWOyPEC95xElqnQc4nHrZVxOAeSiVa','rajeshdharmaraj@jyotinivas.org ','9910307676',1,2,3),(9,'2024-01-27 12:46:15.277857','2024-01-30 16:16:40.778271',' P. Margaret','Savitha','  Margaret Savitha','$2a$08$b.F0cNm7TdyqW5M/EkabfuPjWOyPEC95xElqnQc4nHrZVxOAeSiVa','margaretsavitha@jyotinivas.org','9811441300',1,2,3),(10,'2024-01-27 12:46:15.281712','2024-01-30 16:16:40.778271',' Navis ','Vigila',' Navis Vigila','$2a$08$b.F0cNm7TdyqW5M/EkabfuPjWOyPEC95xElqnQc4nHrZVxOAeSiVa','navis_jk@yahoo.com ','9999888470',1,2,3),(11,'2024-01-27 12:46:15.286201','2024-01-30 16:16:40.778271','Percy ','Bose','Percy Bose','$2a$08$b.F0cNm7TdyqW5M/EkabfuPjWOyPEC95xElqnQc4nHrZVxOAeSiVa','percyboseb@jyotinivas.org','9899975198',1,3,3),(12,'2024-01-27 12:46:15.290931','2024-01-30 16:16:40.778271',' Philcy ','Antony',' Philcy Antony','$2a$08$b.F0cNm7TdyqW5M/EkabfuPjWOyPEC95xElqnQc4nHrZVxOAeSiVa','philcyantony@jyotinivas.org','9899896422',1,3,3),(13,'2024-01-27 12:46:15.296019','2024-01-30 16:16:40.778271',' Bella ','Thomas',' Bella Thomas','$2a$08$b.F0cNm7TdyqW5M/EkabfuPjWOyPEC95xElqnQc4nHrZVxOAeSiVa','bellathomas@jyotinivas.org','9899298767',1,3,3),(14,'2024-01-27 12:46:15.300872','2024-01-30 16:16:40.778271',' Latha ','V',' Latha V','$2a$08$b.F0cNm7TdyqW5M/EkabfuPjWOyPEC95xElqnQc4nHrZVxOAeSiVa','lathav@jyotinivas.org','9810964380',1,3,3),(15,'2024-01-27 12:46:15.305335','2024-01-30 16:16:40.778271',' Sadhna','Dash',' Sadhna Dash','$2a$08$b.F0cNm7TdyqW5M/EkabfuPjWOyPEC95xElqnQc4nHrZVxOAeSiVa','sadhnadash@jyotinivas.org','9999796727',1,3,3),(16,'2024-01-27 12:46:15.309835','2024-01-30 16:16:40.778271','Anila ','DS','Anila DS','$2a$08$b.F0cNm7TdyqW5M/EkabfuPjWOyPEC95xElqnQc4nHrZVxOAeSiVa','anilads@jyotinivas.org','9818335038',1,3,3),(17,'2024-01-27 12:46:15.314309','2024-01-30 16:16:40.778271',' Vincent ','Paul',' Vincent Paul','$2a$08$b.F0cNm7TdyqW5M/EkabfuPjWOyPEC95xElqnQc4nHrZVxOAeSiVa','vincentpauls@jyotinivas.org','9899556560',1,4,3),(18,'2024-01-27 12:46:15.318816','2024-01-30 16:15:37.199328','Sumitha ','S','Sumitha S','$2a$08$b.F0cNm7TdyqW5M/EkabfuPjWOyPEC95xElqnQc4nHrZVxOAeSiVa','sumithas@jyotinivas.org','9818043883',1,4,3),(19,'2024-01-30 16:14:57.399063','2024-01-30 16:14:57.399063','firstName','lastName','xyz','$2a$08$b.F0cNm7TdyqW5M/EkabfuPjWOyPEC95xElqnQc4nHrZVxOAeSiVa','email@email.com','1234443434',1,1,1),(20,'2024-01-31 14:23:11.556542','2024-01-31 14:26:10.671327','Ashu ','S','Ashu S','$2a$08$b.F0cNm7TdyqW5M/EkabfuPjWOyPEC95xElqnQc4nHrZVxOAeSiVa','ashuss@jyotinivas.org','9818043663',1,4,2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-11 20:59:25
