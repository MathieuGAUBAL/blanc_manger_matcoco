CREATE DATABASE hackathon;

USE hackathon;

CREATE TABLE `gamecard` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `text` TEXT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE `playercard` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `text` TEXT NOT NULL,
    PRIMARY KEY(id)
);

