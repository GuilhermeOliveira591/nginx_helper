USE dbpeople;

CREATE TABLE IF NOT EXISTS `people` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
);

-- Inserindo alguns nomes
INSERT INTO `people` (`name`) VALUES 
('Wesley'),
('Maria'),
('João'),
('Ana'),
('Carlos');
