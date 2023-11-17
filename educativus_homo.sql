-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: educativus_homo
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add categoria',7,'add_categoria'),(26,'Can change categoria',7,'change_categoria'),(27,'Can delete categoria',7,'delete_categoria'),(28,'Can view categoria',7,'view_categoria'),(29,'Can add aula',8,'add_aula'),(30,'Can change aula',8,'change_aula'),(31,'Can delete aula',8,'delete_aula'),(32,'Can view aula',8,'view_aula'),(33,'Can add manual',9,'add_manual'),(34,'Can change manual',9,'change_manual'),(35,'Can delete manual',9,'delete_manual'),(36,'Can view manual',9,'view_manual'),(37,'Can add auth token',10,'add_authtoken'),(38,'Can change auth token',10,'change_authtoken'),(39,'Can delete auth token',10,'delete_authtoken'),(40,'Can view auth token',10,'view_authtoken');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$600000$QQl7Eueo1hIjYTkzNWybh2$+3VBC/de+ONSlBzhYx3XsNV8ZOzQuMxGOe2fjWLVFS0=','2023-11-07 23:16:09.618716',1,'root','','','alissonhanael@gmail.com',1,1,'2023-10-04 23:44:41.677854');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `backend_aula`
--

DROP TABLE IF EXISTS `backend_aula`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `backend_aula` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `titulo_aula` varchar(100) NOT NULL,
  `url_aula` varchar(50) NOT NULL,
  `descricao_aula` longtext NOT NULL,
  `categoria_aula_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `url_aula` (`url_aula`),
  KEY `backend_aula_categoria_aula_id_429cd19f_fk_backend_categoria_id` (`categoria_aula_id`),
  CONSTRAINT `backend_aula_categoria_aula_id_429cd19f_fk_backend_categoria_id` FOREIGN KEY (`categoria_aula_id`) REFERENCES `backend_categoria` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `backend_aula`
--

LOCK TABLES `backend_aula` WRITE;
/*!40000 ALTER TABLE `backend_aula` DISABLE KEYS */;
INSERT INTO `backend_aula` VALUES (1,'Determinação do código de imposto no SAP Business One','yoVt32BLEs0','Aprenda a fazer uma determinação de código de imposto',2),(3,'Treinamento Add-on TaxPlus NFe','ehI_i19yZHI','Treinamento sobre emissão de NFe manual (com o add-on TaxPLus NFe), cadastro de entidade, parâmetros gerais, emissão de NFe , inutilização de NFe, cancelamento e carta de correção.',2),(4,'TaxPlus NFe – Cancelamento de nota fiscal eletrônica','GEooBVLOgDo','Vídeo rápido ensinando como fazer o cancelamento da NF emitida pelo follow-up',2),(5,'Lançamento contábil manual','YSjPXt5UHyk','Lançamento contábil manual - - Dica rápida de SAP Business One com a Ramo Sistemas',2),(6,'Encerramento de período','bisf1TdH3ek','Encerramento do período - Dica rápida de SAP Business One com a Ramo Sistemas',2),(7,'Correção de DIME','sYXmX6vEgLA','Gravação do treinamento de correção de GIA-SC(DIME) com Willian',2),(9,'Obrigações Acessórias Fiscais Parte 2','zE7bh9V4hBM','-> Manual Invent: https://bityli.com/9gGl6',2),(10,'Obrigações Acessórias Fiscais Parte 1','d2Nqsk6CWA0','-> Manual Invent: https://bityli.com/9gGl6',2),(11,'Como abrir chamado no GLPI','7B6AdEv5L3M','Para acessar o GLPI copie e cole no navegador: http://10.42.42.100/glpi/',3),(12,'Recebimento de CT-e','lrAayf2hHHI','Como fazer o recebimento de um CT-e',2),(13,'Recebimento de mercadorias','fJj-Xf6MXOQ','Dúvidas? entre em contato pelo email: sistemas@ativusgestao.com.br',2),(14,'Treinamento REINF - TAXPLUS','U2sWQ50Et3E','Gravação da reunião do dia 15/03',2),(15,'Configuração de Código de Imposto do Crédito Presumido - TAXPLUS','C9w7Tu7BLoo','Gravação da reunião do dia 15/03',2),(16,'Configuração efd contribuições e provisionamento do imposto retido - TAXPLUS','w8wcPWdQTHs','Gravação de treinamento do dia 15/03',2),(17,'CONFIGURAÇÃO BLOCO M','gYIsaboCHFI','Acompanhamento/Instrução Bloco M',2),(18,'Configuração SPED Contribuições','t39XZIfaPEs','Acompanhamento/Instrução SPED Contribuições',2),(19,'Códigos de imposto','MHkf27BXeb4','Passo a passo completo sobre os códigos de imposto.',2),(20,'NF de toros Reflorasul','IMzOmTNhjbo','Manual emissão em PDF: https://drive.google.com/file/d/1vIZPSsZx6rXG2IqIITtZTQ1W1rtlpaUo/view?usp=share_link',2),(21,'NF de toros Serrarias/Rama Filial','7sYF7x1B450','Manual Emissão Serrarias Campos de Palmas:\r\nhttps://drive.google.com/file/d/1J45tTTOVp0FHu2e6Dzwwg2angMcIZkbd/view?usp=sharing\r\n\r\nManual Emissão RAMA: \r\nhttps://drive.google.com/file/d/1mI0I30aLCWq7b-PXMbKlw73DW6J2u7WK/view?usp=share_link',4),(22,'Treinamento REINF - TAXPLUS - Parte 2','ivQxPt9h5SU','Workshop REINF',2),(23,'Recebimento de Toros','7dEFxYbhDM8','Como fazer recebimento de Toros',2),(24,'Esboço de baixas','uG0bNRSNryg','Explicação sobre a baixa do almoxarifado',2);
/*!40000 ALTER TABLE `backend_aula` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `backend_categoria`
--

DROP TABLE IF EXISTS `backend_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `backend_categoria` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nome_categoria` varchar(100) NOT NULL,
  `imagem_categoria` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `backend_categoria`
--

LOCK TABLES `backend_categoria` WRITE;
/*!40000 ALTER TABLE `backend_categoria` DISABLE KEYS */;
INSERT INTO `backend_categoria` VALUES (1,'Ativus Cargas','ativuscargas.png'),(2,'SAP B1','SAP_B1-sap_b1_logo.png'),(3,'GLPI','GLPILogo.png'),(4,'OMIE','OmieLogo.png');
/*!40000 ALTER TABLE `backend_categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `backend_manual`
--

DROP TABLE IF EXISTS `backend_manual`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `backend_manual` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `titulo_pdf` varchar(100) NOT NULL,
  `descricao_pdf` longtext NOT NULL,
  `categoria_pdf_id` bigint NOT NULL,
  `pdf_file` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `backend_manual_categoria_pdf_id_99f238b5_fk_backend_categoria_id` (`categoria_pdf_id`),
  CONSTRAINT `backend_manual_categoria_pdf_id_99f238b5_fk_backend_categoria_id` FOREIGN KEY (`categoria_pdf_id`) REFERENCES `backend_categoria` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `backend_manual`
--

LOCK TABLES `backend_manual` WRITE;
/*!40000 ALTER TABLE `backend_manual` DISABLE KEYS */;
INSERT INTO `backend_manual` VALUES (1,'Manual de Emissão NF de toros Serrarias','Instrução para emissão de NF-e na Empresa Serrarias Campos de Palmas.',4,'pdfs/Manual_de_Emissão_NF_de_toros_Serrarias-Manual_Emissão_OMIE_Serrarias.pdf');
/*!40000 ALTER TABLE `backend_manual` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2023-10-06 00:40:14.296756','1','Manual de Emissão NF de toros Serrarias',1,'[{\"added\": {}}]',9,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(8,'backend','aula'),(7,'backend','categoria'),(9,'backend','manual'),(5,'contenttypes','contenttype'),(10,'knox','authtoken'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2023-10-04 22:57:15.091467'),(2,'auth','0001_initial','2023-10-04 22:57:20.108694'),(3,'admin','0001_initial','2023-10-04 22:57:21.882397'),(4,'admin','0002_logentry_remove_auto_add','2023-10-04 22:57:21.921692'),(5,'admin','0003_logentry_add_action_flag_choices','2023-10-04 22:57:21.962165'),(6,'contenttypes','0002_remove_content_type_name','2023-10-04 22:57:22.613604'),(7,'auth','0002_alter_permission_name_max_length','2023-10-04 22:57:23.080195'),(8,'auth','0003_alter_user_email_max_length','2023-10-04 22:57:23.318207'),(9,'auth','0004_alter_user_username_opts','2023-10-04 22:57:23.401851'),(10,'auth','0005_alter_user_last_login_null','2023-10-04 22:57:23.711257'),(11,'auth','0006_require_contenttypes_0002','2023-10-04 22:57:23.725544'),(12,'auth','0007_alter_validators_add_error_messages','2023-10-04 22:57:23.762289'),(13,'auth','0008_alter_user_username_max_length','2023-10-04 22:57:24.177648'),(14,'auth','0009_alter_user_last_name_max_length','2023-10-04 22:57:24.971306'),(15,'auth','0010_alter_group_name_max_length','2023-10-04 22:57:25.065733'),(16,'auth','0011_update_proxy_permissions','2023-10-04 22:57:25.103332'),(17,'auth','0012_alter_user_first_name_max_length','2023-10-04 22:57:25.752166'),(18,'backend','0001_initial','2023-10-04 22:57:27.561945'),(19,'backend','0002_categoria_imagem_categoria','2023-10-04 22:57:28.122416'),(20,'backend','0003_alter_categoria_imagem_categoria','2023-10-04 22:57:28.183025'),(21,'backend','0004_alter_categoria_imagem_categoria','2023-10-04 22:57:28.255488'),(22,'backend','0005_alter_categoria_imagem_categoria_manual','2023-10-04 22:57:28.812483'),(23,'backend','0006_manual_pdf_file','2023-10-04 22:57:28.913830'),(24,'backend','0007_alter_manual_pdf_file','2023-10-04 22:57:28.933761'),(25,'knox','0001_initial','2023-10-04 22:57:29.282135'),(26,'knox','0002_auto_20150916_1425','2023-10-04 22:57:30.002396'),(27,'knox','0003_auto_20150916_1526','2023-10-04 22:57:30.100424'),(28,'knox','0004_authtoken_expires','2023-10-04 22:57:30.212050'),(29,'knox','0005_authtoken_token_key','2023-10-04 22:57:30.460113'),(30,'knox','0006_auto_20160818_0932','2023-10-04 22:57:31.135991'),(31,'knox','0007_auto_20190111_0542','2023-10-04 22:57:31.210016'),(32,'knox','0008_remove_authtoken_salt','2023-10-04 22:57:31.442585'),(33,'sessions','0001_initial','2023-10-04 22:57:32.096792');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('0dv9ibg73a8n9qonyd6bvr886qbk8kn7','.eJxVjMsOwiAQRf-FtSEOMENx6d5vaIaXVA0kpV0Z_92QdKHbe865bzHzvpV572mdlyguAsTpd_McnqkOEB9c702GVrd18XIo8qBd3lpMr-vh_h0U7mXUhITGEmtrPCpKmZ0_awgZvUuojXIqTKRVJgC21kHUeUIHJuagLInPF8P7Nvk:1qwq9a:XMYUbuGEMrG709RH8-_RRSfxpiF99H1CEB2AkYAXvwA','2023-11-11 20:43:30.599710'),('2sgtg8nz66lnc65umqs9j7q511fymbq0','.eJxVjMsOwiAQRf-FtSEOMENx6d5vaIaXVA0kpV0Z_92QdKHbe865bzHzvpV572mdlyguAsTpd_McnqkOEB9c702GVrd18XIo8qBd3lpMr-vh_h0U7mXUhITGEmtrPCpKmZ0_awgZvUuojXIqTKRVJgC21kHUeUIHJuagLInPF8P7Nvk:1qwqCx:YOzjIFVLCX6Ro7utWIydOPc-QPjedp5tzH6RCfa-ym8','2023-11-11 20:46:59.744604'),('5wblfezehbsr4se8a9zkv16t60s4ca0k','.eJxVjMsOwiAQRf-FtSEOMENx6d5vaIaXVA0kpV0Z_92QdKHbe865bzHzvpV572mdlyguAsTpd_McnqkOEB9c702GVrd18XIo8qBd3lpMr-vh_h0U7mXUhITGEmtrPCpKmZ0_awgZvUuojXIqTKRVJgC21kHUeUIHJuagLInPF8P7Nvk:1qr9Bk:P8bTrop9G0Mx--wCqAU3b0GyGp0QfzomhuL4F3eKDKk','2023-10-27 03:50:12.514814'),('67g5rrpsf6xfrzqet0wy7xrjwbugr3fj','.eJxVjMsOwiAQRf-FtSEOMENx6d5vaIaXVA0kpV0Z_92QdKHbe865bzHzvpV572mdlyguAsTpd_McnqkOEB9c702GVrd18XIo8qBd3lpMr-vh_h0U7mXUhITGEmtrPCpKmZ0_awgZvUuojXIqTKRVJgC21kHUeUIHJuagLInPF8P7Nvk:1qr9Bm:nrk9amJLqtyIkwpVWZShjcfGhQRiz0H-Mi23TZQyY9I','2023-10-27 03:50:14.413816'),('8dr7wox9ez9hpqs91258cna6boem3q72','.eJxVjMsOwiAQRf-FtSEOMENx6d5vaIaXVA0kpV0Z_92QdKHbe865bzHzvpV572mdlyguAsTpd_McnqkOEB9c702GVrd18XIo8qBd3lpMr-vh_h0U7mXUhITGEmtrPCpKmZ0_awgZvUuojXIqTKRVJgC21kHUeUIHJuagLInPF8P7Nvk:1qw9uI:s7VBZMMBqj3UOOcnhgtQnBCoaEhryiRoCaJFEmaOjB4','2023-11-09 23:36:54.955967'),('8rkm9ysfwnfeylivh6hwuu60lll9j98l','.eJxVjMsOwiAQRf-FtSEOMENx6d5vaIaXVA0kpV0Z_92QdKHbe865bzHzvpV572mdlyguAsTpd_McnqkOEB9c702GVrd18XIo8qBd3lpMr-vh_h0U7mXUhITGEmtrPCpKmZ0_awgZvUuojXIqTKRVJgC21kHUeUIHJuagLInPF8P7Nvk:1qr08j:hyCZxzmvscsMNQzoTOlv-D_47YZSyFApdh6uewjmZWU','2023-10-26 18:10:29.281858'),('a05yxrspegi15tn28oxilygl9rms9v7c','.eJxVjMsOwiAQRf-FtSEOMENx6d5vaIaXVA0kpV0Z_92QdKHbe865bzHzvpV572mdlyguAsTpd_McnqkOEB9c702GVrd18XIo8qBd3lpMr-vh_h0U7mXUhITGEmtrPCpKmZ0_awgZvUuojXIqTKRVJgC21kHUeUIHJuagLInPF8P7Nvk:1qoZHc:hW4ig7iz7Cf2SpuNOYhbrUz0omAG2Y8YDF9p7NrQ0Z0','2023-10-20 01:05:36.105734'),('ekg2p53h9vx6ws3qa81073oexb4hmkb9','.eJxVjMsOwiAQRf-FtSEOMENx6d5vaIaXVA0kpV0Z_92QdKHbe865bzHzvpV572mdlyguAsTpd_McnqkOEB9c702GVrd18XIo8qBd3lpMr-vh_h0U7mXUhITGEmtrPCpKmZ0_awgZvUuojXIqTKRVJgC21kHUeUIHJuagLInPF8P7Nvk:1qoCAR:VMfLkXGWeC2Xy2WJCoslSuqwgDHlZcGHPuk78892DQ4','2023-10-19 00:24:39.859413'),('erejs5t4xblj4a4bamw06l2j62gtff6m','.eJxVjMsOwiAQRf-FtSEOMENx6d5vaIaXVA0kpV0Z_92QdKHbe865bzHzvpV572mdlyguAsTpd_McnqkOEB9c702GVrd18XIo8qBd3lpMr-vh_h0U7mXUhITGEmtrPCpKmZ0_awgZvUuojXIqTKRVJgC21kHUeUIHJuagLInPF8P7Nvk:1qoZHd:emCi7tAlePagOf3bjnNmuXlHo3aQVeA-m4Lmx0q6ufM','2023-10-20 01:05:37.859799'),('g58yd2qphcpl9aewmi2gmee0xzu0qdfy','.eJxVjMsOwiAQRf-FtSEOMENx6d5vaIaXVA0kpV0Z_92QdKHbe865bzHzvpV572mdlyguAsTpd_McnqkOEB9c702GVrd18XIo8qBd3lpMr-vh_h0U7mXUhITGEmtrPCpKmZ0_awgZvUuojXIqTKRVJgC21kHUeUIHJuagLInPF8P7Nvk:1quBm0:SfOx2xKQHjZF0LDo9pYZ_BteFeeh5IUtl8ngHiAekDk','2023-11-04 13:12:12.324355'),('j8jwfnf0nem52j7ws2py5n2qnrjovfop','.eJxVjMsOwiAQRf-FtSEOMENx6d5vaIaXVA0kpV0Z_92QdKHbe865bzHzvpV572mdlyguAsTpd_McnqkOEB9c702GVrd18XIo8qBd3lpMr-vh_h0U7mXUhITGEmtrPCpKmZ0_awgZvUuojXIqTKRVJgC21kHUeUIHJuagLInPF8P7Nvk:1r0VIn:Mj4GQJ8fLetvxu_mqh9TNJhJulJJy4740AfCDW0fk3k','2023-11-21 23:16:09.664475'),('jt773pavd247kryw24038kfbg29xjzlw','.eJxVjMsOwiAQRf-FtSEOMENx6d5vaIaXVA0kpV0Z_92QdKHbe865bzHzvpV572mdlyguAsTpd_McnqkOEB9c702GVrd18XIo8qBd3lpMr-vh_h0U7mXUhITGEmtrPCpKmZ0_awgZvUuojXIqTKRVJgC21kHUeUIHJuagLInPF8P7Nvk:1qwncI:vIDrU2nvduRioJKJGUHRNtcWhB3aKZaIsPsUi69IegQ','2023-11-11 18:00:58.780750'),('kjnjhtfmvg2svy2f3ztjc12ddbtn1x62','.eJxVjMsOwiAQRf-FtSEOMENx6d5vaIaXVA0kpV0Z_92QdKHbe865bzHzvpV572mdlyguAsTpd_McnqkOEB9c702GVrd18XIo8qBd3lpMr-vh_h0U7mXUhITGEmtrPCpKmZ0_awgZvUuojXIqTKRVJgC21kHUeUIHJuagLInPF8P7Nvk:1qoBYn:Hyq5UMuCbwGTowMRmwMQhpo1uPBjf4vBzQVZhAv3FJM','2023-10-18 23:45:45.010490'),('l2r8k9hwi41t2eooe9n9rwsil2fyj7ms','.eJxVjMsOwiAQRf-FtSEOMENx6d5vaIaXVA0kpV0Z_92QdKHbe865bzHzvpV572mdlyguAsTpd_McnqkOEB9c702GVrd18XIo8qBd3lpMr-vh_h0U7mXUhITGEmtrPCpKmZ0_awgZvUuojXIqTKRVJgC21kHUeUIHJuagLInPF8P7Nvk:1quBlx:otVBv3snn2LeZ7nfjVUB3yTiBoFDfcGd_ZQ-MHjdqpg','2023-11-04 13:12:09.476299'),('m22xjc1r4y09e1bvw3slh610tk9jpwyz','.eJxVjMsOwiAQRf-FtSEOMENx6d5vaIaXVA0kpV0Z_92QdKHbe865bzHzvpV572mdlyguAsTpd_McnqkOEB9c702GVrd18XIo8qBd3lpMr-vh_h0U7mXUhITGEmtrPCpKmZ0_awgZvUuojXIqTKRVJgC21kHUeUIHJuagLInPF8P7Nvk:1qoCAQ:feVT2DYU3fHYyBvaAYPVUEgwHqNVF-Oq5Dx_dBZRSlE','2023-10-19 00:24:38.547441'),('pkuxjpt96xrkkfhl4t8vuucucqunvjx3','.eJxVjMsOwiAQRf-FtSEOMENx6d5vaIaXVA0kpV0Z_92QdKHbe865bzHzvpV572mdlyguAsTpd_McnqkOEB9c702GVrd18XIo8qBd3lpMr-vh_h0U7mXUhITGEmtrPCpKmZ0_awgZvUuojXIqTKRVJgC21kHUeUIHJuagLInPF8P7Nvk:1qoBYk:pcuki7JGil4IiXh5mQQKc9Gu2nH3WStxznKx7RDmwtM','2023-10-18 23:45:42.902903'),('twa0no2blage7mrwl1r3h1do3j3pzu51','.eJxVjMsOwiAQRf-FtSEOMENx6d5vaIaXVA0kpV0Z_92QdKHbe865bzHzvpV572mdlyguAsTpd_McnqkOEB9c702GVrd18XIo8qBd3lpMr-vh_h0U7mXUhITGEmtrPCpKmZ0_awgZvUuojXIqTKRVJgC21kHUeUIHJuagLInPF8P7Nvk:1qvozb:yIm-rqVkfLGSN0-63RGH22q8A_XDgyJbFXv-bechewo','2023-11-09 01:16:59.983815'),('ystw3yh07gw711l8do6gbbr5bl9z15aq','.eJxVjMsOwiAQRf-FtSEOMENx6d5vaIaXVA0kpV0Z_92QdKHbe865bzHzvpV572mdlyguAsTpd_McnqkOEB9c702GVrd18XIo8qBd3lpMr-vh_h0U7mXUhITGEmtrPCpKmZ0_awgZvUuojXIqTKRVJgC21kHUeUIHJuagLInPF8P7Nvk:1qoBYS:chIwkJbw6NiELDrP7g1PxGaGM3n6fyVtC4pVNxR7Q3U','2023-10-18 23:45:24.049116'),('zv42hg55mg4xrpr3ch0yxylyyh5iojd9','.eJxVjMsOwiAQRf-FtSEOMENx6d5vaIaXVA0kpV0Z_92QdKHbe865bzHzvpV572mdlyguAsTpd_McnqkOEB9c702GVrd18XIo8qBd3lpMr-vh_h0U7mXUhITGEmtrPCpKmZ0_awgZvUuojXIqTKRVJgC21kHUeUIHJuagLInPF8P7Nvk:1qsWjI:Oywsn3N4kxWdOo1ngZIPsvTXerOmh4MOhsYHYSmM7nw','2023-10-30 23:10:32.654122');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knox_authtoken`
--

DROP TABLE IF EXISTS `knox_authtoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `knox_authtoken` (
  `digest` varchar(128) NOT NULL,
  `created` datetime(6) NOT NULL,
  `user_id` int NOT NULL,
  `expiry` datetime(6) DEFAULT NULL,
  `token_key` varchar(8) NOT NULL,
  PRIMARY KEY (`digest`),
  KEY `knox_authtoken_user_id_e5a5d899_fk_auth_user_id` (`user_id`),
  KEY `knox_authtoken_token_key_8f4f7d47` (`token_key`),
  CONSTRAINT `knox_authtoken_user_id_e5a5d899_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knox_authtoken`
--

LOCK TABLES `knox_authtoken` WRITE;
/*!40000 ALTER TABLE `knox_authtoken` DISABLE KEYS */;
INSERT INTO `knox_authtoken` VALUES ('0dff7cb740f586631479a28028e44347db70e33838440bc941efabd373bd6a976b70216ca90589daa2ad624fde9ee54cf90a789f991d6caa8c34ae1f41cf297c','2023-10-28 20:46:59.700463',1,'2023-10-29 06:46:59.700463','816b64f3'),('d8ccbe665d6a26157a45d7a7a7f9f1c27be5de86d2c2a12f4e299469bb4ebd4610cc10f498c4a8344827f6b383aa0019f1c74d05c4a771a52ee5346808be1b1e','2023-11-07 23:16:09.595850',1,'2023-11-08 09:16:09.595850','67353d84'),('e149da547d425b0b7fcfb4dc77ee932ec27c7d9943a8421d4e47ff9a5655b2f1bf7e5437e45ebc1c2d309e67c61eae93d01bde52509d55ad17d2a7cc9aa36e0f','2023-10-28 18:00:58.756744',1,'2023-10-29 04:00:58.755749','50e53581'),('e819b14de7a3d0c8a6535160c41dd524fd8b3cec6b8813d1817ce52114fd6b51d8b1ab9530dfad1dcfbe89b19f27345c19b6704502c2d672214b6fb3c7388af4','2023-10-28 20:43:30.547023',1,'2023-10-29 06:43:30.547023','7fe27466');
/*!40000 ALTER TABLE `knox_authtoken` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-17 18:35:36
