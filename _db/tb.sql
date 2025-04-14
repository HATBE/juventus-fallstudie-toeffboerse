-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 14. Apr 2025 um 17:04
-- Server-Version: 10.4.32-MariaDB
-- PHP-Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `tb`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `bikecategory`
--

CREATE TABLE `bikecategory` (
  `BCid` char(36) NOT NULL,
  `BCname` varchar(255) NOT NULL,
  `BCparentId` char(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `bikecategory`
--
ALTER TABLE `bikecategory`
  ADD PRIMARY KEY (`BCid`),
  ADD KEY `productcategory_productcategory_fk` (`BCparentId`);

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `bikecategory`
--
ALTER TABLE `bikecategory`
  ADD CONSTRAINT `bikecategory_bikecategory_fk` FOREIGN KEY (`BCparentId`) REFERENCES `bikecategory` (`BCid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
