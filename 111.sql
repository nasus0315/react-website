CREATE DATABASE IF NOT EXISTS `school`;

-- 用school数据库
USE `school`;

-- 创建年级表grade表
CREATE TABLE `grade`(
	`GradeID` INT(11) NOT NULL AUTO_INCREMENT COMMENT '年级编号',
	`GradeName` VARCHAR(50) NOT NULL COMMENT '年纪名称',
	PRIMARY KEY	(`GradeID`)
)ENGINE=INNODB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- 给grade表插入数据
INSERT INTO `grade`(`GradeID`,`GradeName`) 
VALUES (1,'大一'),(2,'大二'),(3,'大三'),(4,'大四');

-- 创建成绩result表
CREATE TABLE `result`(
	`StudentNo` INT(4) NOT NULL COMMENT '学号',
	`SubjectNo` INT(4) NOT NULL COMMENT '考试编号',
	`ExamDate` DATETIME NOT NULL COMMENT '考试日期',
	`StudentResult` INT(4) NOT NULL COMMENT '考试成绩',
	KEY `SubjectNo` (`SubjectNo`)
)ENGINE=INNODB DEFAULT CHARSET=utf8;

-- 给result表插入数据
INSERT INTO `result`(`StudentNo`,`SubjectNo`,`ExamDate`,`StudentResult`) 
VALUES (1000,1,'2019-10-21 16:00:00',97),(1001,1,'2019-10-21 16:00:00',96),
(1000,2,'2019-10-21 16:00:00',87),(1001,3,'2019-10-21 16:00:00',98);

-- 创建学生表student
CREATE TABLE `student`(	
	`StudentNo` INT(4) NOT NULL COMMENT '学号',
	`LoginPwd` VARCHAR(20) DEFAULT NULL,
	`StudentName` VARCHAR(20) DEFAULT NULL COMMENT '学生姓名',
	`Sex` TINYINT(1) DEFAULT NULL COMMENT '性别,取值0或1',
	`GradeID` INT(11) DEFAULT NULL COMMENT '年级编号',
	`Phone` VARCHAR(50) NOT NULL COMMENT '联系电话,允许为空,即可选输入',
	`Adress` VARCHAR(255) NOT NULL COMMENT '地址,允许为空,即可选输入',
	`BornDate` DATETIME DEFAULT NULL COMMENT '出生时间',
	`Email` VARCHAR(50) NOT NULL COMMENT '邮箱账号,允许为空,即可选输入',
	`IdentityCard` VARCHAR(18) DEFAULT NULL COMMENT '身份证号',
	PRIMARY KEY (`StudentNo`),
	UNIQUE KEY `IdentityCard` (`IdentityCard`),
	KEY `Email` (`Email`)
)ENGINE=MYISAM DEFAULT CHARSET=utf8;

-- 给学生表插入数据
INSERT INTO `student`(`StudentNo`,`LoginPwd`,`StudentName`,`Sex`,`GradeID`,`Phone`,`Adress`,`BornDate`,`Email`,`IdentityCard`) 
VALUES (1000,'1241','dsaf',1,2,'24357','unknow','2000-09-16 00:00:00','1231@qq.com','809809'),
(1001,'1321','dfdj',0,2,'89900','unknow','2000-10-16 00:00:00','5971@qq.com','908697');

-- 创建科目表
CREATE TABLE `subject`(
	`SubjectNo` INT(11) NOT NULL AUTO_INCREMENT COMMENT '课程编号',
	`SubjectName` VARCHAR(50) DEFAULT NULL COMMENT '课程名称',
	`ClassHour` INT(4) DEFAULT NULL COMMENT '学时',
	`GradeID` INT(4) DEFAULT NULL COMMENT '年级编号',
	PRIMARY KEY (`SubjectNo`)
)ENGINE=INNODB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- 给科目表subject插入数据
INSERT INTO `subject`(`SubjectNo`,`SubjectName`,`ClassHour`,`GradeID`) 
VALUES(1,'高数','96',2),(2,'大物','112',2),(3,'程序设计',64,3);