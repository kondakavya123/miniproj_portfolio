INSERT INTO `answereval`.`user_role` (`createdAt`, `updatedAt`, `role`) VALUES (CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), 'admin');
INSERT INTO `answereval`.`user_role` (`createdAt`, `updatedAt`, `role`) VALUES (CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), 'faculty');

INSERT INTO `answereval`.`department` (`departmentName`) VALUES ('dept1');
INSERT INTO `answereval`.`department` (`departmentName`) VALUES ('dept2');
INSERT INTO `answereval`.`department` (`departmentName`) VALUES ('dept3');



INSERT INTO `answereval`.`users` (`createdAt`, `updatedAt`, `firstName`, `lastName`, `username`, `password`, `email`, `contactNumber`, `isActive`, `departmentId`, `roleId`)
VALUES (CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), 'first1', 'last1', 'admin', 'pass', 'email1@email.com', '9900990091', true, 1, 1);

INSERT INTO `answereval`.`users` (`createdAt`, `updatedAt`, `firstName`, `lastName`, `username`, `password`, `email`, `contactNumber`, `isActive`, `departmentId`, `roleId`)
VALUES (CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), 'first2', 'last2', 'coo', 'pass', 'email2@email.com', '9900990092', true, 1, 2);

INSERT INTO `answereval`.`users` (`createdAt`, `updatedAt`, `firstName`, `lastName`, `username`, `password`, `email`, `contactNumber`, `isActive`, `departmentId`, `roleId`)
VALUES (CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), 'first3', 'last3', 'sir', 'pass', 'email3@email.com', '9900990099', true, 1, 3);

INSERT INTO `answereval`.`programme`(`programmeName`) VALUES ('prog1');
INSERT INTO `answereval`.`programme`(`programmeName`) VALUES ('prog2');
INSERT INTO `answereval`.`programme`(`programmeName`) VALUES ('prog3');

INSERT INTO `answereval`.`course`(`subjectName`, `examType`, `markingScheme`, `departmentId`) VALUES('subjectName1', 'examType', 'm scheme', 1);

INSERT INTO `answereval`.`student`(`firstName`, `lastName`, `regNumber`, `startYear`, `programmeId`)VALUES('firstName1', 'lastName','reg-001', 2021, 1);
INSERT INTO `answereval`.`student`(`firstName`, `lastName`, `regNumber`, `startYear`, `programmeId`)VALUES('firstName2', 'lastName','reg-002', 2022, 1);
INSERT INTO `answereval`.`student`(`firstName`, `lastName`, `regNumber`, `startYear`, `programmeId`)VALUES('firstName3', 'lastName','reg-003', 2023, 1);
INSERT INTO `answereval`.`student`(`firstName`, `lastName`, `regNumber`, `startYear`, `programmeId`)VALUES('firstName4', 'lastName','reg-004', 2024, 1);
INSERT INTO `answereval`.`student`(`firstName`, `lastName`, `regNumber`, `startYear`, `programmeId`)VALUES('firstName5', 'lastName','reg-005', 2021, 1);
