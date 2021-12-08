/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companies` (
  `id` int(10) unsigned NOT NULL,
  `name` varchar(70) DEFAULT NULL,
  `postcode` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES (1,'Test Design Ltd','L9'),(2,'Untitled Construction Ltd','NW1'),(3,'PlaceHolder Service Ltd','SK11'),(4,'PlaceHolder Excavation PLC','BT32'),(5,'Example Excavation PLC','SA64'),(6,'Test Building PLC','PA7'),(7,'Example Construction PLC','NE20'),(8,'Example Design Ltd','FK5');
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contacts` (
  `id` int(10) unsigned NOT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `email` varchar(90) DEFAULT NULL,
  `company_id` int(10) unsigned DEFAULT NULL,
  KEY `company_id` (`company_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacts`
--

LOCK TABLES `contacts` WRITE;
/*!40000 ALTER TABLE `contacts` DISABLE KEYS */;
INSERT INTO `contacts` VALUES (1,'Simohamed','Akniouene','akniouene.s@example.com',8),(2,'Lucineia','Kunikov','kunikov.lucineia@example.com',1),(3,'Ruiman','Calleras','calleras.r@example.com',3),(4,'Yaniris','Haizel','yaniris.h@example.com',6),(5,'Hady','Jolivera','h.jolivera@example.com',4),(6,'Jadilla','Cortazar','cortazar.jadilla@example.com',2),(7,'Alyse','Pahle','a.pahle@example.com',1),(8,'Mehmet','Erce','m.erce@example.com',2),(9,'Aiyu','Sukhanov','aiyu.sukhanov@example.com',8),(10,'Angustias','Mucha','mucha.a@example.com',1),(11,'Arcangel','Saund','arcangel.s@example.com',8),(12,'Odulia','Kurynov','odulia.kurynov@example.com',3),(13,'Saiful','Geschke','saiful.geschke@example.com',7),(14,'Lynetta','Maetake','maetake.l@example.com',3),(15,'Aycha','Yatsun','a.yatsun@example.com',6),(16,'Felicisima','Adajania','felicisima.a@example.com',5),(17,'Ireneusz','Khujadze','khujadze.i@example.com',4),(18,'Waylon','Babač','waylon.babač@example.com',1),(19,'Fidencia','Ehrenstrasser','ehrenstrasser.fidencia@example.com',8),(20,'Sid','Szarafi','s.szarafi@example.com',8),(21,'Celio','Van der Ploeg','van-der-ploeg.c@example.com',5),(22,'Baldiri','Vlahek','vlahek.b@example.com',4),(23,'Vanuza','Rakhmaninov','v.rakhmaninov@example.com',8),(24,'Suleika','Vuoti','vuoti.s@example.com',7),(25,'Ugo','Stulić','stulić.ugo@example.com',7),(26,'Mjid','Hirschhorn','mjid.h@example.com',6),(27,'Malake','Aronian','aronian.malake@example.com',3),(28,'Navjot','Maclang','navjot.maclang@example.com',4),(29,'Firdaouss','Clerc','f.clerc@example.com',3),(30,'Vaclovas','Reneses','vaclovas.r@example.com',4),(31,'Silmara','Dubitsky','s.dubitsky@example.com',5),(32,'Javiera','Heinecke','j.heinecke@example.com',5),(33,'Ibtissam','Giacchino','ibtissam.g@example.com',4),(34,'Kiryl','Cabilla','kiryl.c@example.com',2),(35,'Salha','Pipa','pipa.s@example.com',5),(36,'Huria','Viqueira','huria.v@example.com',8),(37,'Nerijus','Faki','n.faki@example.com',1),(38,'Carmelina','Roggeveen','carmelina.r@example.com',8),(39,'Yashira','Tevanian','tevanian.y@example.com',5),(40,'Lissett','Ragonot','l.ragonot@example.com',5),(41,'Keesha','Partain','k.partain@example.com',2),(42,'Abderahmane','Iturrizabalaga','iturrizabalaga.a@example.com',5),(43,'Yemina','Ehgartner','ehgartner.yemina@example.com',2),(44,'Lali','Bajrić','lali.bajrić@example.com',8),(45,'Xantal','Rezabal','x.rezabal@example.com',4),(46,'Mariko','Ogburn','ogburn.mariko@example.com',5),(47,'Haddoum','Kochjohann','kochjohann.h@example.com',8),(48,'Eitan','Ideman','ideman.eitan@example.com',1),(49,'Marguerite','Ruschepaul','ruschepaul.marguerite@example.com',1),(50,'Bernardine','Gaucher','bernardine.gaucher@example.com',8);
/*!40000 ALTER TABLE `contacts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

