/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Move` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Move` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Specie` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Specie` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Move` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `Specie` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`;

-- CreateTable
CREATE TABLE `Trainer` (
    `id` CHAR(36) NOT NULL,
    `name` VARCHAR(40) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL,

    UNIQUE INDEX `Trainer_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pokemon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `trainer_id` CHAR(36) NOT NULL,
    `dex_number` INTEGER NOT NULL,
    `nickname` VARCHAR(40) NOT NULL,
    `level` INTEGER NOT NULL,
    `effort_hp` INTEGER NOT NULL,
    `effort_attack` INTEGER NOT NULL,
    `effort_defence` INTEGER NOT NULL,
    `effort_s_attack` INTEGER NOT NULL,
    `effort_s_defense` INTEGER NOT NULL,
    `effort_speed` INTEGER NOT NULL,
    `Individual_hp` INTEGER NOT NULL,
    `Individual_attack` INTEGER NOT NULL,
    `Individual_defense` INTEGER NOT NULL,
    `Individual_s_attack` INTEGER NOT NULL,
    `Individual_s_defense` INTEGER NOT NULL,
    `Individual_speed` INTEGER NOT NULL,
    `nature` ENUM('さみしがり', 'いじっぱり', 'やんちゃ', 'ゆうかん', 'ずぶとい', 'わんぱく', 'のうてんき', 'のんき', 'ひかえめ', 'おっとり', 'うっかりや', 'れいせい', 'おだやか', 'おとなしい', 'しんちょう', 'なまいき', 'おくびょう', 'せっかち', 'ようき', 'むじゃき', 'まじめ') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pokemon` ADD CONSTRAINT `Pokemon_dex_number_fkey` FOREIGN KEY (`dex_number`) REFERENCES `Specie`(`dex_number`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pokemon` ADD CONSTRAINT `Pokemon_trainer_id_fkey` FOREIGN KEY (`trainer_id`) REFERENCES `Trainer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
