-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema projectdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema projectdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `projectdb` DEFAULT CHARACTER SET utf8 ;
USE `projectdb` ;

-- -----------------------------------------------------
-- Table `projectdb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projectdb`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(100) NOT NULL,
  `lastName` VARCHAR(100) NOT NULL,
  `phoneNumber` VARCHAR(100) NOT NULL,
  `verified` VARCHAR(5) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `phoneNumber_UNIQUE` (`phoneNumber` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
