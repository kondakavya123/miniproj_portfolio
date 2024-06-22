/* create database answereval;
use answereval;

select * from user_role;
insert into user_role values(1,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6),'admin');
insert into user_role values(2,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6),'coordinator');
insert into user_role values(3,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6),'faculty');

select * from users;
desc users;
insert into users values(1,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6),' Jnc@2024',TRUE,'1','CO','E','COE','coe@jyotinivas.org','8884982277','1');
insert into users values(2,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6),'Jnc@2024',TRUE,'1',' Roopa ','Philip',' Roopa Philip','roopaphilip@jyotinivas.org ','8130009976','3');
insert into users values(3,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6),'Jnc@2024',TRUE,'1',' Preetha','Vasan',' Preetha Vasan','preethavasan@jyotinivas.org','9650611818','3');
insert into users values(4,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6),'Jnc@2024',TRUE,'1',' Prakrithi. ','H.N',' Prakrithi. H.N','hnprakrithi@jyotinivas.org','9810382267','3');
insert into users values(5,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6),'Jnc@2024',TRUE,'1',' Fathima ','M',' Fathima M','fathimam@jyotinivas.org','9999119849','3');
insert into users values(6,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6),'Jnc@2024',TRUE,'2',' Shilpa ','Abhang',' Shilpa Abhang','shilpaabhang@jyotinivas.org','9810349680','3');
insert into users values(7,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6),'Jnc@2024',TRUE,'2',' S. Irene ','Getzi',' S. Irene Getzi','irenegetzi@jyotinivas.org','8800998300','3');
insert into users values(8,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6),'Jnc@2024',TRUE,'2','Rajesh','Dharmaraj',' Rajesh Dharmaraj','rajeshdharmaraj@jyotinivas.org ','9910307676','3');
insert into users values(9,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6),'Jnc@2024',TRUE,'2',' P. Margaret','Savitha','  Margaret Savitha','margaretsavitha@jyotinivas.org','9811441300','3');
insert into users values(10,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6),'Jnc@2024',TRUE,'2',' Navis ','Vigila',' Navis Vigila','navis_jk@yahoo.com ','9999888470','3');
insert into users values(11,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6),'Jnc@2024',TRUE,'3','Percy ','Bose','Percy Bose','percyboseb@jyotinivas.org','9899975198','3');
insert into users values(12,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6),'Jnc@2024',TRUE,'3',' Philcy ','Antony',' Philcy Antony','philcyantony@jyotinivas.org','9899896422','3');
insert into users values(13,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6),'Jnc@2024',TRUE,'3',' Bella ','Thomas',' Bella Thomas','bellathomas@jyotinivas.org','9899298767','3');
insert into users values(14,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6),'Jnc@2024',TRUE,'3',' Latha ','V',' Latha V','lathav@jyotinivas.org','9810964380','3');
insert into users values(15,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6),'Jnc@2024',TRUE,'3',' Sadhna','Dash',' Sadhna Dash','sadhnadash@jyotinivas.org','9999796727','3');
insert into users values(16,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6),'Jnc@2024',TRUE,'3','Anila ','DS','Anila DS','anilads@jyotinivas.org','9818335038','3');
insert into users values(17,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6),'Jnc@2024',TRUE,'4',' Vincent ','Paul',' Vincent Paul','vincentpauls@jyotinivas.org','9899556560','3');
insert into users values(18,CURRENT_TIMESTAMP(6),CURRENT_TIMESTAMP(6),'Jnc@2024',TRUE,'4','Sumitha ','S','Sumitha S','sumithas@jyotinivas.org','9818043883','3');

select * from course_users;
desc course_users;
insert into course_users values('1','6');
insert into course_users values('2','7');
insert into course_users values('3','9');
insert into course_users values('4','8');
insert into course_users values('12','3');
insert into course_users values('12','5');
insert into course_users values('13','3');
insert into course_users values('13','4');
insert into course_users values('14','3');
insert into course_users values('14','5');
insert into course_users values('15','2');
insert into course_users values('15','4');
insert into course_users values('16','2');
insert into course_users values('16','3');
insert into course_users values('17','3');
insert into course_users values('17','4');
insert into course_users values('18','15');
insert into course_users values('22','15');
insert into course_users values('23','11');
insert into course_users values('24','18');
insert into course_users values('25','16');
insert into course_users values('26','17');
insert into course_users values('27','13');
insert into course_users values('28','16');
insert into course_users values('6','9');
insert into course_users values('9','7');
insert into course_users values('10','8');
insert into course_users values('11','6');

select * from course_programme;
desc course_programme;
insert into course_programme values('1','2');
insert into course_programme values('2','2');
insert into course_programme values('3','2');
insert into course_programme values('4','2');
insert into course_programme values('5','2');
insert into course_programme values('6','3');
insert into course_programme values('7','3');
insert into course_programme values('8','3');
insert into course_programme values('9','3');
insert into course_programme values('10','3');
insert into course_programme values('11','3');
insert into course_programme values('12','1');
insert into course_programme values('13','1');
insert into course_programme values('14','1');
insert into course_programme values('15','1');
insert into course_programme values('16','1');
insert into course_programme values('17','1');
insert into course_programme values('18','4');
insert into course_programme values('19','4');
insert into course_programme values('20','4');
insert into course_programme values('21','4');
insert into course_programme values('22','7');
insert into course_programme values('23','7');
insert into course_programme values('24','7');
insert into course_programme values('25','7');
insert into course_programme values('26','7');
insert into course_programme values('27','7');
insert into course_programme values('28','7');

select * from course;
desc course;
insert into course values(1,'Cloud Computing','Regular','100','2');
insert into course values(2,'Cyber Security','Regular','100','2');
insert into course values(3,'Machine Learning Techniques','Regular','100','2');
insert into course values(4,'Open Elective -Cyber Security','Regular','100','2');
insert into course values(5,'Research Methodology','Regular','100','2');
insert into course values(6,'Advanced Operating Systems','Regular','100','2');
insert into course values(7,'Theory Operating Systems','Regular','100','2');
insert into course values(8,'Theory of Computation','Regular','100','2');
insert into course values(9,'Advanced Computer Architecture','Regular','100','2');
insert into course values(10,'Data Structures','Regular','100','2');
insert into course values(11,'Object Oriented Programming Using Java','Regular','100','2');
insert into course values(12,' British Literature I','Regular','100','1');
insert into course values(13,' British Literature II','Regular','100','1');
insert into course values(14,' Indian Writing in English I','Regular','100','1');
insert into course values(15,' Gender and Literature','Regular','100','1');
insert into course values(16,' Understanding Mythology and Folktales (Indian)','Regular','100','1');
insert into course values(17,' Introduction to Popular Literature','Regular','100','1');
insert into course values(18,'Global Environment for business','Regular','100','3');
insert into course values(19,'Management Information System','Regular','100','3');
insert into course values(20,'Elective : Marketing','Regular','100','3');
insert into course values(21,'Elective :Human resources','Regular','100','3');
insert into course values(22,'Managing Global Business','Regular','100','4');
insert into course values(23,'Corporate Taxes & Planning','Regular','100','4');
insert into course values(24,'Futures Options & Swaps','Regular','100','4');
insert into course values(25,'Contemporary Methods In Accounting','Regular','100','4');
insert into course values(26,'Asset Liability Management In Banks','Regular','100','4');
insert into course values(27,'Risk Management And Insurance','Regular','100','4');
insert into course values(28,'Open Elective ','Regular','100','4');

select * from programme;
desc programme;
insert into programme values(1,'MA English');
insert into programme values(2,'MCA');
insert into programme values(3,'MSc Computer Science');
insert into programme values(4,'MBA');
insert into programme values(5,'MCOM (Financial Analysis)');
insert into programme values(6,'MVOC (Banking and Finance)');
insert into programme values(7,'MCOM ');
insert into programme values(8,'MSc Organic Chemistry');
insert into programme values(9,'MSc Mathematics');
insert into programme values(10,'MSc Psychology');
insert into programme values(11,'MSc Wellness councelling');
insert into programme values(12,'MSc Bilogical science');



select * from department;
desc department;
insert into department values(1,'Department of English (PG)');
insert into department values(2,'Department of Computer Science (PG)');
insert into department values(3,'Department of Management (PG)');
insert into department values(4,'Department of Commerce (PG)');
insert into department values(5,'Department of Chemistry (PG)');
insert into department values(6,'Department of Mathematics (PG)');
insert into department values(7,'Department of Psychology (PG)');
insert into department values(8,'Department of Life Science (PG)');

select * from student;
desc student;
INSERT INTO STUDENT VALUES(1,'AIMAN ','KHANUM','22MCA01',2022,2);
INSERT INTO STUDENT VALUES(2,'AKSHITHA ','C D','22MCA02',2022,2);
INSERT INTO STUDENT VALUES(3,'AMULYA ','M R','22MCA03',2022,2);
INSERT INTO STUDENT VALUES(4,'ANJUSHREE','R','22MCA04',2022,2);
INSERT INTO STUDENT VALUES(5,'ASHMIKA ','SHANDILYA','22MCA05',2022,2);
INSERT INTO STUDENT VALUES(6,'BHOOMIKA ','C R','22MCA06',2022,2);
INSERT INTO STUDENT VALUES(7,'BHUMICA ','R','22MCA07',2022,2);
INSERT INTO STUDENT VALUES(8,'DIVYA ','N M','22MCA08',2022,2);
INSERT INTO STUDENT VALUES(9,'DIVYASHREE','D','22MCA09',2022,2);
INSERT INTO STUDENT VALUES(10,'ESTHER ','JELINAL J','22MCA10',2022,2);
INSERT INTO STUDENT VALUES(11,'GINITHA ','G','22MCA11',2022,2);
INSERT INTO STUDENT VALUES(12,'HARISHREE B N ','REDDY','22MCA12',2022,2);
INSERT INTO STUDENT VALUES(13,'HARITHA ','V','22MCA13',2022,2);
INSERT INTO STUDENT VALUES(14,'INAMDAR JAITASHREE ','SHRIRAMDAS','22MCA14',2022,2);
INSERT INTO STUDENT VALUES(15,'JAVERIYA','R','22MCA15',2022,2);
INSERT INTO STUDENT VALUES(16,'JAYA PRIYA','R','22MCA16',2022,2);
INSERT INTO STUDENT VALUES(17,'JENIFER MARY ','GEORGE','22MCA17',2022,2);
INSERT INTO STUDENT VALUES(18,'JOANNAH ','P','22MCA18',2022,2);
INSERT INTO STUDENT VALUES(19,'KAVYA ','L','22MCA19',2022,2);
INSERT INTO STUDENT VALUES(20,'KONDA ','KAVYA','22MCA20',2022,2);
INSERT INTO STUDENT VALUES(21,'LAKSHMILAVANYA ','CH','22MCA21',2022,2);
INSERT INTO STUDENT VALUES(22,'LIKITHA ','M','22MCA22',2022,2);
INSERT INTO STUDENT VALUES(23,'M V ','NAVYASHREE','22MCA23',2022,2);
INSERT INTO STUDENT VALUES(24,'MAHALAKSHMI ','C K','22MCA24',2022,2);
INSERT INTO STUDENT VALUES(25,'MONIKA ','K L','22MCA25',2022,2);
INSERT INTO STUDENT VALUES(26,'NALLANNAGARI ','ANUSHA','22MCA26',2022,2);
INSERT INTO STUDENT VALUES(27,'NAYANA ','M','22MCA27',2022,2);
INSERT INTO STUDENT VALUES(28,'NIDHI ','DUBEY','22MCA28',2022,2);
INSERT INTO STUDENT VALUES(29,'NITIKA ','SAUN','22MCA29',2022,2);
INSERT INTO STUDENT VALUES(30,'POOJA SRI ','R','22MCA30',2022,2);
INSERT INTO STUDENT VALUES(31,'RENUKA ','SAHOO','22MCA31',2022,2);
INSERT INTO STUDENT VALUES(32,'S ','JAHNAVI','22MCA32',2022,2);
INSERT INTO STUDENT VALUES(33,'SABA ','TUSNEEM','22MCA33',2022,2);
INSERT INTO STUDENT VALUES(34,'SABITHA ','C','22MCA34',2022,2);
INSERT INTO STUDENT VALUES(35,'SHANTHA KUMARI ','J','22MCA35',2022,2);
INSERT INTO STUDENT VALUES(36,'SHANTHI ','SOPHIA','22MCA36',2022,2);
INSERT INTO STUDENT VALUES(37,'SHARANYA ','K','22MCA37',2022,2);
INSERT INTO STUDENT VALUES(38,'SUDAGANI ','NEHA','22MCA38',2022,2);
INSERT INTO STUDENT VALUES(39,'SYEDA AYESHA ','SIDDIQUA','22MCA39',2022,2);
INSERT INTO STUDENT VALUES(40,'THANUSHREE ','B G','22MCA40',2022,2);
INSERT INTO STUDENT VALUES(41,'VANDANA','S K','22MCA41',2022,2);
INSERT INTO STUDENT VALUES(42,'VANGARA SAI ','PRATHYUSHA','22MCA42',2022,2);
INSERT INTO STUDENT VALUES(43,'YASHASHVINI ','R','22MCA43',2022,2);
INSERT INTO STUDENT VALUES(44,'YESEERA FARHATH ','S','22MCA44',2022,2);
INSERT INTO STUDENT VALUES(45,'YUKTHA ','P','22MCA45',2022,2);
INSERT INTO STUDENT VALUES(46,'HAZEL','BRIDGET A','23MSC01',2023,3);
INSERT INTO STUDENT VALUES(47,'JANANI','C','23MSC02',2023,3);
INSERT INTO STUDENT VALUES(48,'M','RAKSHA','23MSC03',2023,3);
INSERT INTO STUDENT VALUES(49,'MOHANA','PRIYA K','23MSC04',2023,3);
INSERT INTO STUDENT VALUES(50,'NIRMA','B','23MSC05',2023,3);
INSERT INTO STUDENT VALUES(51,'NITHYA','CELESTINE','23MSC06',2023,3);
INSERT INTO STUDENT VALUES(52,'SADIYA','SUMAIYA A','23MSC07',2023,3);
INSERT INTO STUDENT VALUES(53,'SAMEENA','TAJ','23MSC08',2023,3);
INSERT INTO STUDENT VALUES(54,'VYSHALI','H N','23MSC09',2023,3);
INSERT INTO STUDENT VALUES(55,'PUTUL','KUMARI','23MSC10',2023,3);
INSERT INTO STUDENT VALUES(56,'ADITI','S','22MA01',2022,1);
INSERT INTO STUDENT VALUES(57,'ANITTA','SEBASTIAN','22MA03',2022,1);
INSERT INTO STUDENT VALUES(58,'ANKITA','CHAKRABORTY','22MA04',2022,1);
INSERT INTO STUDENT VALUES(59,'AROCKIA','HEVILA RAICHAL S','22MA05',2022,1);
INSERT INTO STUDENT VALUES(60,'B','REMLALLIANI','22MA06',2022,1);
INSERT INTO STUDENT VALUES(61,'AAHANA','SINGH','22MBA01',2022,4);
INSERT INTO STUDENT VALUES(62,'AISHVARIYAA','P J','22MBA02',2022,4);
INSERT INTO STUDENT VALUES(63,'AISHWARYA','K M','22MBA03',2022,4);
INSERT INTO STUDENT VALUES(64,'ARCHANA','P SIDDANNAVAR','22MBA04',2022,4);
INSERT INTO STUDENT VALUES(65,'ARPITHA','S SHETTY','22MBA05',2022,4);
INSERT INTO STUDENT VALUES(66,'AISHWARYA','P','22MCOM01',2022,5);
INSERT INTO STUDENT VALUES(67,'ANJUPRIYA','V','22MCOM02',2022,5);
INSERT INTO STUDENT VALUES(68,'BHOOMIKA ','C','22MCOM03',2022,5);
INSERT INTO STUDENT VALUES(69,'BHUMIKA','D','22MCOM04',2022,5);
INSERT INTO STUDENT VALUES(70,'BHUMIKA','G','22MCOM05',2022,5);*/













