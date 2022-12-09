/*
	Description: DDL Script for Claims DB
	Author: Venki Govindaiaha
	Copyright: All rigths reserved
	License: MIT License
	Date: 2022-12-8
*/

-- Create Table Script

-- Primary Table
Create Table member (
id mediumint unsigned not null auto_increment,
memberCode varchar(12) not null, -- generated unique alpha-numeric code identifying the member in the system
dob date not null,
CONSTRAINT PK_member PRIMARY KEY (id)
);



Drop Table if exists memberdetails;
Create Table memberdetails (
member_id mediumint unsigned not null,
streetAddress varchar(256) not null, -- generated unique alpha-numeric code identifying the member in the system
addressLine date null,
city varchar(100) not null,
state varchar(100) not null,
email varchar(256) null,
phone varchar(12) not null,
phone2 varchar(12) null,
ssn varchar(10) not null,   -- should be encrypted and stored
isActive tinyint(1) not null 
);


ALTER TABLE memberdetails
ADD CONSTRAINT FK_Member
FOREIGN KEY (member_id) REFERENCES member(id);

Drop Table If Exists plan;

Create Table plan (
id mediumint unsigned not null auto_increment,
planName varchar(256) not null,
description varchar(2000) null,
startDate date not null,
endDate date null,
CONSTRAINT PK_plan PRIMARY KEY (id)
);



Drop Table If Exists planSubscription;

Create Table plansubscription (
id mediumint unsigned not null auto_increment,
member_id mediumint unsigned not null,
plan_id mediumint unsigned not null,
effectiveDate date not null,
terminateDate date null,
comments varchar(1000) null,
CONSTRAINT PK_plansubscription PRIMARY KEY (id)
);


ALTER TABLE plansubscription
ADD CONSTRAINT FK_SubsMember
FOREIGN KEY (member_id) REFERENCES member(id);

ALTER TABLE plansubscription
ADD CONSTRAINT FK_SubsPlan
FOREIGN KEY (plan_id) REFERENCES plan(id);








