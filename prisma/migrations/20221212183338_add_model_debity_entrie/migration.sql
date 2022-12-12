-- CreateTable
CREATE TABLE `DebityEntrie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(255) NOT NULL,
    `category` VARCHAR(255) NOT NULL,
    `value` FLOAT NOT NULL,
    `dtPurchase` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
