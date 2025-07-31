-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 31, 2025 at 04:08 PM
-- Server version: 8.0.36
-- PHP Version: 8.1.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qsgigqid_heavyequip`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `email`, `password`) VALUES
(1, 'kingsley sepiri ', 'kingsleysepiri@gmail.com', '1234'),
(2, 'admin', 'Wp1457087@gmail.com', 'ESHINANDU..@');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(8, ' Excavators'),
(11, 'Backhoe Loaders'),
(12, 'Dump Trucks '),
(13, 'Crane Trucks'),
(14, 'Graders'),
(15, 'Compactors'),
(16, 'Forklifts '),
(17, 'Wheel Loaders'),
(21, 'Bulldozers'),
(22, 'Skid-Steer Loaders'),
(23, 'Chainsaw');

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `id` int NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`name`, `email`, `password`, `id`, `phone`) VALUES
('kingsley', 'arumkingsley@gmail.com', '1234', 2, '07089611318'),
('kingsley', 'broifeco@gmail.com', '1234', 3, '07089611318'),
('Kingsley ', 'arumkingsley49@gmail.com', '1234', 4, '09017862743'),
('Hello', 'Hello@gmail.com', '1234', 5, '2256'),
('m8icheak', 'arumkingsley849@gmail.com', 'mm', 6, '07089611318');

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` int NOT NULL,
  `product_id` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `quality` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `rec_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `rec_email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `rec_phone` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `rec_address` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `postal` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `user` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `date` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `product_id`, `status`, `quality`, `rec_name`, `rec_email`, `rec_phone`, `rec_address`, `postal`, `user`, `date`) VALUES
(3, '7', 'declined', '1', 'sepiri', 'kingsleysepiri@gmail.com', '07089611318', 'enugu nigeria', '128885', '2', '2024-12-25'),
(4, '6', 'approved', '1', 'hello', 'arumkingsley49@gmail.com', '07089611318', '12345', '1234567', '4', '2025-01-09');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `price` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `brand` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `categorie` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `model` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `productcondition` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `year` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `des` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `weight` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `price`, `name`, `brand`, `categorie`, `model`, `productcondition`, `year`, `image`, `des`, `weight`) VALUES
(5, '$32,900.00', 'Hitachi ZX130 tracked excavator', 'Isuzu CC-4BG1TC', ' Excavators', 'ZX130', 'used', '2017', '6767f26dae00a4.34041246.jpg', 'Hitachi Used ZX130 crawler excavator Japan made Hitachi excavator trackhoe', '12,200 kg'),
(6, '$33,380.48', 'Kubota U27-4 mini excavator', 'Kubota', ' Excavators', 'U27-4', 'used', '2022', '676912ef009b06.93123833.jpg', 'Compact, powerful, versatile mini excavator ideal for tight spaces and projects.  Stable working hours and high working efficiency;', '760 m/h'),
(7, '$16,000.00', 'Caterpillar 320BL tracked excavator', 'Caterpillar', ' Excavators', '320BL', 'used', '2018', '67691646655aa3.54344545.jpg', 'Original hydraulic system parts and good working condition; Stable working hours and high working efficiency;', '20,620 kg'),
(28, '$195,700.00', 'Komatsu HM300-5', 'Komatsu', 'Dump Trucks ', 'HM300-5', 'used', '2018', '67be3f2273b9c0.49329288.jpg', 'Offers excellent traction and power on uneven surfaces, featuring a low fuel consumption engine and advanced transmission system.', '54,000 lbs'),
(38, '$185,400.00', 'John Deere 410E-II', 'John Deere', 'Dump Trucks ', '410E-II', 'used', '2021', '67bf31ad5ff4a1.92167257.jpg', 'Combines a powerful engine with a spacious operator cab, ensuring efficient hauling capacity and reduced cycle times.', '64,200 lbs'),
(41, '$145,000.00', 'Mack Granite GU713', 'Mack', 'Dump Trucks ', 'GU713', 'used', '2017', '67bfcbe606d332.90774306.png', 'Rugged vocational truck with a steel body, well-suited for construction and heavy material hauling. Dependable on all job sites.', '28,920 lbs'),
(42, '$158,000.00', 'Peterbilt 567', 'Peterbilt', 'Dump Trucks ', '567', 'used', '2019', '67bfcec201c535.92893923.png', 'Features a strong, lightweight chassis and advanced driver assist technologies, offering excellent durability and performance.', '30,500 lbs'),
(43, '$149,600.00', 'Freightliner 114SD', 'Freightliner', 'Dump Trucks ', '114SD', 'used', '2020', '67bfd07092c3a3.59591944.png', 'A heavy-duty dump truck with a reinforced frame, ideal for municipal work and large construction projects requiring reliable hauling.', '31,600 lbs'),
(44, '$195,000.00', 'Terex Crossover 6000', 'Terex', 'Crane Trucks', 'Crossover 6000', 'used', '2019', '67bfd44d64a055.72252097.png', 'Combines the mobility of a truck crane with the lifting power of a boom crane, ideal for various lifting operations on tight job sites.', '39,500 lbs'),
(45, '$210,300.00', 'Grove TMS500E', 'Grove', 'Crane Trucks', 'TMS500E', 'used', '2018', '67bfda6ee66773.80506505.jpg', 'Truck-mounted crane offering a 40-ton capacity, with user-friendly controls and a robust hydraulic system for efficient lifts.', '36,900 lbs'),
(46, '$220,500.00', 'Manitex 40124S', 'Manitex', 'Crane Trucks', '40124S', 'used', '2020', '67bff3392bee27.79072447.png', 'High-reach crane truck designed for heavy lifting tasks, featuring a four-section boom and durable construction for long service life.', '42,700 lbs'),
(47, '$205,000.00', 'National Crane NBT40', 'National Crane', 'Crane Trucks', 'NBT40', 'used', '2017', '67bff9050d0b08.73074205.png', 'A flexible boom truck crane with advanced overload protection and user-friendly controls, suitable for construction and utility applications.', '38,500 lbs'),
(48, '$185,600.00', 'Altec AC45-127S', 'Altec', 'Crane Trucks', 'AC45-127S', 'used', '2019', '67c04ea118d8b2.84944309.png', 'Provides a 45-ton capacity and a 127-foot main boom, delivering reliable lifting power for various industrial and commercial jobs.', '40,100 lbs'),
(49, '$178,400.00', 'Palfinger PSC 4329', 'Palfinger', 'Crane Trucks', 'PSC 4329', 'used', '2018', '67c052fd5eda04.78724474.png', 'Hydraulically driven crane truck known for its high precision and low maintenance requirements, suitable for diverse lifting needs.', '37,850 lbs'),
(50, '$135,000.00', 'Caterpillar 140M3', 'Caterpillar', 'Graders', '140M3', 'used', '2017', '67c055c53e4a50.13489609.jpg', 'Highly versatile motor grader offering precise blade control and advanced power management for road construction and maintenance.', '31,000 lbs'),
(51, '$128,500.00', 'John Deere 672G', 'John Deere', 'Graders', '672G', 'used', '2019', '67c08446ca85d8.92729841.jpg', 'Powerful grader with a Tier 4 engine and advanced hydraulic system, ensuring smooth and accurate grading performance.', '32,300 lbs'),
(52, '$120,700.00', 'Komatsu GD655-6', 'Komatsu', 'Graders', 'GD655-6', 'used', '2018', '67c085dc590520.90401299.jpeg', 'Features a unique dual-mode transmission and ergonomic cab design, enabling efficient grading in various terrains.', '35,071 lbs'),
(53, '$140,900.00', 'Volvo G960', 'Volvo', 'Graders', 'G960', 'used', '2016', '67c089913ea888.79209537.png', 'Durable grader with advanced electronics and a robust frame, delivering excellent productivity and operator comfort.', '34,500 lbs'),
(54, '$115,300.00', 'CASE 885B', 'CASE', 'Graders', '885B', 'used', '2020', '67c09246326884.59501043.png', 'A powerful grader designed for precision finishing, with a turbocharged engine and easy-to-use control layout.', '33,900 lbs'),
(56, '$98,400.00', 'LiuGong CLG4180D', 'LiuGong', 'Graders', 'CLG4180D', 'used', '2018', '67c09709178d07.39704046.png', 'A sturdy motor grader with precise blade movement and a comfortable operator station, ideal for road construction projects.', '33,000 lbs'),
(57, '$72,500.00', 'Caterpillar CS56B Vibratory Soil Compactor', 'Caterpillar', 'Compactors', 'CS56B', 'used', '2019', '67c0996c652049.59838288.jpg', 'Delivers uniform compaction with an advanced vibratory system, suitable for road construction and soil compaction tasks.', '25,000 lbs'),
(59, '$74,200.00', 'Dynapac CA2500D', 'Dynapac', 'Compactors', 'CA2500D', 'used', '2020', '67c0a14c9428e9.44526241.jpg', 'Robust compactor designed for medium to large-scale compaction projects, offering excellent gradeability and operator comfort.', '25,500 lbs'),
(60, '$67,300.00', 'Hamm 3410', 'Hamm', 'Compactors', '3410', 'used', '2017', '67c0a2a1551a73.78425195.jpg', 'Highly efficient roller with a strong vibration system, ensuring fast and consistent soil compaction in various ground conditions.', '23,800 lbs'),
(61, '$76,500.00', 'Volvo SD115B', 'Volvo', 'Compactors', 'SD115B', 'used', '2021', '67c0a44cd9fec4.95313416.png', 'Offers adjustable vibration settings and automatic drum control, delivering precise compaction and improved fuel efficiency.', '24,690 lbs'),
(62, '$64,900.00', 'Sakai SV505', 'Sakai', 'Compactors', 'SV505', 'used', '2018', '67c0a599467263.92268718.jpg', 'Known for its excellent traction and compaction performance, suitable for both soil and asphalt applications.', '23,810 lbs'),
(63, '42,700.00', 'Wacker Neuson RD27', 'Wacker Neuson', 'Compactors', 'RD27', 'used', '2019', '67c132b9158288.96311884.png', 'A versatile tandem roller for asphalt compaction, offering an ergonomic operator platform and a precise water spray system.', '6,000 lbs'),
(64, '$18,500.00', 'Toyota 8FGU25', 'Toyota', 'Forklifts ', '8FGU25', 'used', '2019', '67c1342eeafc08.36184280.png', 'A reliable LPG-powered forklift with excellent lift capacity and smooth maneuverability, perfect for warehouse and yard operations.', '8,000 lbs'),
(66, '$17,000.00', 'Hyster H50FT', 'Hyster', 'Forklifts ', 'H50FT', 'used', '2018', '67c135a990b906.74566851.png', 'Durable forklift designed for heavy lifting tasks, featuring advanced ergonomics and strong engine performance.', '8,200 lbs'),
(67, '$16,500.00', 'Caterpillar GP25N', 'Caterpillar', 'Forklifts ', 'GP25N', 'used', '2017', '67c1374f6c15c0.06739860.jpg', 'Compact design with a robust mast system, delivering efficient material handling and easy maintenance access.', '7,900 lbs'),
(69, '$19,800.00', 'Clark C30L', 'Clark', 'Forklifts ', 'C30L', 'used', '2020', '67c13a06c255b2.65688150.png', 'Offers excellent visibility and stability, featuring a fuel-efficient engine and smooth hydraulic controls for precise load handling.', '9,100 lbs'),
(70, '$15,600.00', 'Yale GP050LX', 'Yale', 'Forklifts ', 'GP050LX', 'used/New', '2016', '67c13bffdc0475.49843156.png', 'A dependable forklift with a low-emission engine and ergonomic operator compartment, suitable for various indoor/outdoor tasks.', '8,000 lbs'),
(71, '$22,100.00', 'Komatsu FG25T-16', 'Komatsu', 'Forklifts ', 'FG25T-16', 'used', '2021', '67c13de37804b4.74624123.png', 'Built for reliability and strength, featuring a heavy-duty mast and advanced engine technology for improved fuel economy.', '9,200 lbs'),
(72, '$20,400.00', 'Mitsubishi FGC25N', 'Mitsubishi', 'Forklifts ', 'FGC25N', 'used', '2019', '67c13fd67ff876.90563576.png', 'Versatile forklift offering smooth hydraulic control, excellent load stability, and reduced noise for operator comfort.', '8,500 lbs'),
(73, '$145,000.00', 'Caterpillar 950M', 'Caterpillar', 'Wheel Loaders', '950M', 'used', '2018', '67c141c2e831e8.25977550.png', 'Powerful loader designed for efficient material handling, featuring advanced controls and a spacious, comfortable operator cab.', '42,357 lbs'),
(74, '$130,500.00', 'Volvo L90H', 'Volvo', 'Wheel Loaders', 'L90H', 'used', '2020', '67c1482c032645.62771480.png', 'Offers excellent fuel efficiency and responsive hydraulics, ideal for tasks including loading, stockpiling, and material transport.', '35,000 lbs'),
(75, '$120,300.00', 'John Deere 624K-II', 'John Deere', 'Wheel Loaders', '624K-II', 'used', '2017', '67c149c0576523.12851863.jpg', 'Mid-sized wheel loader with quick coupler capabilities and smooth shifting transmission for improved productivity.', '34,700 lbs'),
(76, '$137,600.00', 'Komatsu WA380-8', 'Komatsu', 'Wheel Loaders', 'WA380-8', 'used', '2019', '67c14ae2c1c8a3.47770190.jpg', 'A versatile loader with a high-capacity bucket and advanced engine technology, delivering lower fuel consumption and emissions.', '39,000 lbs'),
(77, '$125,400.00', 'CASE 721G', 'CASE', 'Wheel Loaders', '721G', 'used', '2021', '67c14c48147638.05451468.jpg', 'Equipped with an FPT engine and ProCare coverage, providing reliable performance and extended maintenance intervals.', '33,400 lbs'),
(78, '$112,900.00', 'Doosan DL250-5', 'Doosan', 'Wheel Loaders', 'DL250-5', 'used', '2018', '67c14ea68ca5f6.96428460.jpg', 'Delivers high breakout force and fast cycle times, with a comfortable cab design for reduced operator fatigue.', '30,600 lbs'),
(79, '$118,750.00', 'Hyundai HL960', 'Hyundai', 'Wheel Loaders', 'HL960', 'used', '2020', '67c150623ca920.46215536.jpg', 'Combines efficient power delivery with a robust hydraulic system, ensuring quick loading operations and increased productivity.', '41,450 lbs'),
(80, '$28,400.00', 'Bobcat S650 Skid-Steer Loader', 'Bobcat', 'Skid-Steer Loaders', 'S650', 'used', '2019', '67c15affc0f0a9.04293537.png', 'Versatile skid-steer loader with a vertical lift path, ideal for lifting and loading over truck sidewalls, backfilling, and grading.', '8,300 lbs'),
(81, '$32,700.00', 'Caterpillar 262D3', 'Caterpillar', 'Skid-Steer Loaders', '262D3', 'used', '2020', '67c15cb4a4b861.03647345.jpg', 'Equipped with a strong hydraulic system and a comfortable operator station, perfect for heavy-duty lifting and multi-purpose tasks.', '8,011 lbs'),
(82, '$26,500.00', 'John Deere 318G', 'John Deere', 'Skid-Steer Loaders', '318G', 'used', '2018', '67c15e4cf33353.86517108.png', 'Compact skid-steer loader offering excellent stability and reliability, designed to handle a variety of attachments with ease.', '6,800 lbs'),
(83, '$29,900.00', 'New Holland L228', 'New Holland', 'Skid-Steer Loaders', 'L228', 'used', '2021', '67c160597d5ac6.29994361.jpg', 'Features a large cab and excellent visibility, enabling precise operation in tight spaces for construction or agricultural tasks.', '7,100 lbs'),
(84, '$24,800.00', 'CASE SR210', 'CASE', 'Skid-Steer Loaders', 'SR210', 'used', '2017', '67c165e849fe08.66501450.png', 'Provides superior breakout force and a simplified Tier 4 engine solution, making it a dependable choice for daily tasks.', '6,970 lbs'),
(85, '$31,200.00', 'Kubota SSV75', 'Kubota', 'Skid-Steer Loaders', 'SSV75', 'used', '2019', '67c169bf44e133.70136504.png', 'Delivers powerful hydraulics and a rugged loader arm design, allowing for efficient lifting and maneuvering in demanding conditions.', '6,975 lbs'),
(86, '$23,400.00', 'Gehl R190', 'Gehl', 'Skid-Steer Loaders', 'R190', 'used', '2018', '67c16bd1482586.95027146.png', 'A reliable skid-steer loader featuring a roomy operator station, easy maintenance access, and strong engine performance.', '7,110 lbs'),
(88, '$125,000.00', 'Caterpillar D6T XL', 'Caterpillar', 'Bulldozers', 'D6T XL', 'used', '2017', '67c2c09a784667.53303420.jpg', 'A dependable dozer with excellent balance and easy maneuverability, suitable for large-scale earthmoving and land clearing tasks.', '46,500 lbs'),
(89, '$110,500.00', 'Komatsu D65PX-18', 'Komatsu', 'Bulldozers', 'D65PX-18', 'used', '2019', '67c2c1bbd593b1.85856722.jpeg', 'A powerful track dozer designed for heavy-duty construction and mining sites, offering advanced blade control and efficient fuel consumption.', '48,175 lbs'),
(90, '$98,000.00', 'John Deere 850K', 'John Deere', 'Bulldozers', '850K', 'used', '2018', '67c2c31125fc05.24225921.png', 'Combines robust pushing power with excellent operator comfort and intuitive controls, making it a favorite on busy job sites.', '48,784 lbs'),
(91, '$145,300.00', 'Liebherr PR 736', 'Liebherr', 'Bulldozers', 'PR 736', 'used', '2020', '67c2c488b7bf92.17354728.png', 'Equipped with an advanced hydrostatic travel drive and efficient engine technology, providing superior performance and lower fuel costs.', '47,400 lbs'),
(92, '$89,700.00', 'CASE 2050M', 'CASE', 'Bulldozers', '2050M', 'used', '2017', '67c2c771ab2837.15526766.jpg', 'Features best-in-class drawbar pull and a robust undercarriage design, ideal for tough grading and site preparation jobs.', '45,000 lbs'),
(93, '$75,250.00', 'Shantui SD22', 'Shantui', 'Bulldozers', 'SD22', 'used', '2016', '67c2cfe937b617.67546620.png', 'A heavy-duty bulldozer known for reliability and ease of maintenance, widely used in large construction and mining applications.', '53,000 lbs'),
(94, '$92,400.00', 'New Holland D180', 'New Holland', 'Bulldozers', 'D180', 'used', '2021', '67c2d684f2b613.29825917.png', 'Combines advanced engine technology with a comfortable operator station, providing excellent productivity and operator safety.', '40,500 lbs'),
(95, '$101,500.00', 'Caterpillar D7E', 'Caterpillar', 'Bulldozers', 'D7E', 'used', '2018', '67c2dba56b30e9.58252627.png', 'A mid-size bulldozer offering excellent versatility, fuel efficiency, and operator comfort, perfect for medium-scale construction tasks.', '32,000 lbs'),
(96, '$52,300.00', 'JCB 8018 CTS Excavator', 'JCB', ' Excavators', '8018 CTS', 'used', '2021', '67c2ddfe0dd2e7.95293377.png', 'A versatile excavator offering robust performance and advanced hydraulic systems, ideal for heavy-duty construction projects.', '36,000 lbs'),
(97, '$165,000.00', 'Kenworth T800 Dump Truck', 'Kenworth', 'Dump Trucks ', 'T800', 'used', '2019', '67c2e20d385872.94202416.png', 'A robust dump truck engineered for heavy-duty hauling, featuring a powerful engine and durable chassis for tough terrains.', '50,000 lbs'),
(98, '$240,000.00', 'Tadano ATF 220G', 'Tadano', 'Crane Trucks', 'ATF 220G', 'used', '2020', '67c2e3ff339091.83770227.png', 'A high-performance crane truck that combines lifting strength with exceptional stability, ideal for large-scale industrial projects.', '43,000 lbs'),
(99, '$119,800.00', 'CASE 940M Grader', 'CASE', 'Graders', '940M', 'used', '2019', '67c2e525f38432.94144764.png', 'A reliable grader designed for precision grading with advanced blade control and fuel-efficient performance, perfect for roadworks.', '32,000 lbs'),
(100, '$78,500.00', 'Ammann ARV 420', 'Ammann', 'Compactors', 'ARV 420', 'used', '2020', '67c2e648198509.13406333.png', 'Engineered for optimal compaction efficiency, this vibratory roller delivers consistent performance on both asphalt and soil surfaces.', '26,000 lbs'),
(101, '$21,000.00', 'Crown RC 5140', 'Crown', 'Forklifts ', 'RC 5140', 'used', '2021', '67c2e8feb75fc0.47526637.png', 'A high-performance electric forklift offering enhanced energy efficiency, improved maneuverability, and a user-friendly design for indoor operations.', '9,000 lbs'),
(102, '$107,500.00', 'Bobcat S570', 'Bobcat', 'Wheel Loaders', 'S570', 'used', '2019', '67c2eb61479f25.37360183.jpg', 'Combining compact design with high breakout force, this wheel loader delivers excellent performance and versatility for material handling tasks.', '36,500 lbs'),
(103, '$27,500.00', 'Takeuchi TL8', 'Takeuchi', 'Skid-Steer Loaders', 'TL8', 'used', '2020', '67c2ef2532db52.75883741.png', 'A compact skid-steer loader featuring agile maneuverability and robust hydraulic performance, ideal for various light to medium-duty tasks.', '7,500 lbs'),
(105, '$66,200.00', 'Bobcat BC210', 'Bobcat', 'Backhoe Loaders', 'BC210', 'used', '2020', '67c2f39f8e23f8.47015444.jpg', 'A compact backhoe loader that combines versatility and performance, equipped with an efficient engine and user-friendly controls.', '15,000 lbs'),
(106, '$255,000.00', 'Liebherr LTM 1030', 'Liebherr', 'Crane Trucks', 'LTM 1030', 'used', '2019', '67c2f697975a36.25621608.jpeg', 'A reliable truck-mounted crane offering advanced hydraulic systems and precise load control. Ideal for heavy lifting and construction projects, it delivers consistent performance and efficiency on the job site.', '42,000 lbs'),
(107, '$75,000.00', 'Caterpillar 420F2', 'Caterpillar', 'Backhoe Loaders', '420F2', 'used', '2019', '67c60e70800627.04803339.png', 'Reliable backhoe loader featuring a powerful engine and comfortable operator station, suitable for digging, trenching, and material handling.', '15,500 lbs'),
(108, '$68,400.00', 'John Deere 310SL', 'John Deere', 'Backhoe Loaders', '310SL', 'used', '2018', '67c68e4d3e5301.74323144.jpg', 'Efficient loader with strong digging power, intuitive controls, and a durable design that stands up to tough job site conditions.', '14,669 lbs'),
(109, '$59,200.00', 'JCB 3CX', 'JCB', 'Backhoe Loaders', '3CX', 'used', '2017', '67c69b3620e723.06877683.png', 'Popular worldwide for its versatility and reliability, offering a balanced combination of digging depth, lifting capacity, and maneuverability.', '14,000 lbs'),
(112, '$63,000.00', 'CASE 580N', 'CASE', 'Backhoe Loaders', '580N', 'used', '2020', '67c6a2fc4f8081.24596242.png', 'Built with a powerful FPT engine and ProControl system, delivering precise backhoe control and increased productivity on the job.', '14,250 lbs'),
(113, '$57,500.00', 'New Holland B95C', 'New Holland', 'Backhoe Loaders', 'B95C', 'used', '2016', '67c6a871a4c5b8.27807082.png', 'Versatile and efficient backhoe loader with a spacious cab, advanced hydraulic system, and strong breakout force.', '14,713 lbs'),
(114, '$72,800.00', 'Volvo BL70B', 'Volvo', 'Backhoe Loaders', 'BL70B', 'used', '2021', '67c6ad24b34a56.84032548.png', 'High-performing loader offering superior stability and smooth operation, ideal for heavy digging and lifting tasks.', '15,430 lbs'),
(116, '$54,300.00', 'TLB840', 'Terex', 'Backhoe Loaders', 'TLB840', 'used', '2018', '67c6b18d8739e6.24765538.png', 'A robust backhoe loader designed for efficiency and reliability, featuring a powerful engine and easy maintenance access.', '14,200 lbs'),
(118, '$28,500.00', 'John Deere 50G Mini Excavator', 'John Deere', ' Excavators', '50G', 'used', '2019', '67c6ba330d8b09.85331608.png', 'A compact yet powerful mini excavator designed for small to mid-sized projects. Features a fuel-efficient engine and easy maneuverability in tight spaces.', '10,560 lbs'),
(119, '$45,750.00', 'Volvo EC220DL Crawler Excavator', 'Volvo', ' Excavators', 'EC220DL', 'used', '2018', '67c6c1d3689722.34145664.png', 'Reliable mid-range crawler excavator with a robust hydraulic system and advanced fuel efficiency technology. Great for large construction and excavation projects.', '50,700 lbs'),
(120, '$37,900.00', 'Bobcat E85 Compact Excavator', 'Bobcat', ' Excavators', 'E85', 'used', '2021', '67c6cc34b3f413.44935870.png', 'An 8-ton compact excavator offering increased dig depth and powerful breakout force. Ideal for landscaping, utility work, and site preparation.', '18,960 lbs'),
(121, '$60,250.00', 'Komatsu PC210LC-11 Hydraulic Excavator', 'Komatsu', ' Excavators', 'PC210LC-11', 'used', '2020', '67c6d0fb987a76.47341116.png', 'High-performance hydraulic excavator with advanced operating controls and improved fuel economy. Designed for a wide range of earthmoving applications.', '51,397 lbs'),
(122, '$210,000.00', 'Caterpillar 740 GC Articulated Truck', 'Caterpillar', 'Dump Trucks ', '740 GC', 'used', '2019', '67c6de7b7d7ec4.11926324.png', 'High-capacity articulated truck designed for large-scale earthmoving and hauling tasks, with reliable performance in challenging terrains.', '70,000 lbs'),
(123, '$225,500.00', 'Volvo A40G Articulated Hauler', 'Volvo', 'Dump Trucks ', 'A40G', 'used', '2020', '67c6e16c1b58d3.89589536.png', 'Efficient hauler with advanced drivetrain technology and a comfortable operator cabin, perfect for long-distance hauling.', '66,100 lbs'),
(124, '$105,600.00', 'Sany SAG200', 'Sany', 'Graders', 'SAG200', 'used', '2021', '67c6e734b128c2.89285152.png', 'Offers reliable performance and minimal downtime, featuring a strong build and efficient fuel consumption for cost-effective operation.', '30,500 lbs'),
(125, '$69,800.00', 'Bomag BW213DH-5', 'Bomag', 'Compactors', 'BW213DH-5', 'used', '2018', '67c6ed38716911.99521836.png', 'A reliable single-drum roller featuring a powerful engine and high compaction force, reducing the number of passes needed.', '27,450 lbs'),
(126, '$749.99', 'Stihl EcoCut Battery Chainsaw', 'Stihl', 'Chainsaw', 'EcoCut-120', 'used', '2021', '67dae924c9d329.92036010.png', 'A battery‑powered chainsaw designed for light to medium cutting tasks. It features a brushless motor, ergonomic design, and quiet operation for residential and light commercial use.', '9.5 lbs'),
(127, '$829.00', 'Husqvarna Cordless Chainsaw', 'Husqvarna', 'Chainsaw', 'Cordless-CT500', 'used', '2020', '67daeb1119af52.20426094.jpg', 'This cordless chainsaw delivers excellent cutting precision with minimal noise. Perfect for residential landscaping, it features a high‑efficiency battery and user‑friendly controls.', '10.2 lbs'),
(128, '$899.00', 'Makita XCU-Series Battery Chainsaw', 'Makita', 'Chainsaw', 'XCU60', 'used', '2022', '67daec984a9572.45440866.jpg', 'A state‑of‑the‑art battery‑powered chainsaw offering robust cutting power and innovative safety features. Ideal for eco‑friendly operations and smooth, efficient cutting.', '11.0 lbs'),
(129, '$649.99', 'Stihl MS 261 Gasoline Chainsaw', 'Stihl', 'Chainsaw', 'MS261', 'used', '2019', '67daf00a0644f3.34995133.jpg', 'A robust gasoline chainsaw engineered for heavy‑duty cutting. It features a high‑performance engine and advanced anti‑vibration system to reduce operator fatigue during prolonged use.', '12.5 lbs'),
(130, '$699.00', 'Husqvarna 450 Rancher Gas Chainsaw', 'Husqvarna', 'Chainsaw', '450R', 'used', '2018', '67daf20de4dce5.37752567.jpg', 'Built for ranch and forestry work, this gasoline chainsaw offers excellent durability, superior chain control, and reliable performance for heavy cutting tasks.', '13.0 lbs'),
(131, '$599.00', 'Echo CS-590 Gas Chainsaw', 'Echo', 'Chainsaw', 'CS-590', 'used', '2020', '67daf66ee52955.30756793.png', 'An efficient gasoline‑powered chainsaw designed for consistent performance in both professional and home settings. Features an easy starting mechanism and reliable engine power.', '12.0 lbs'),
(132, '$549.00', 'Ryobi Pro Series Gasoline Chainsaw', 'Ryobi', 'Chainsaw', 'PS500', 'used', '2019', '67dafb22708313.24668074.png', 'A compact and durable gasoline chainsaw offering reliable performance and a user‑friendly design. Ideal for a variety of cutting tasks in residential and light commercial settings.', '11.8 lbs'),
(133, '$729.00', 'Echo CS-710 Gas Chainsaw', 'Echo', 'Chainsaw', 'CS-710', 'used', '2021', '67dafcd8f2c268.20971583.png', 'A high‑powered gasoline chainsaw featuring advanced cutting technology and enhanced safety features. Designed for demanding cutting jobs and heavy use in professional environments.', '13.5 lbs');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=134;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
