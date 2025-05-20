-- DropForeignKey
ALTER TABLE `MoveSpecie` DROP FOREIGN KEY `MoveSpecie_dex_number_fkey`;

-- DropForeignKey
ALTER TABLE `MoveSpecie` DROP FOREIGN KEY `MoveSpecie_move_id_fkey`;

-- DropIndex
DROP INDEX `MoveSpecie_dex_number_fkey` ON `MoveSpecie`;

-- DropIndex
DROP INDEX `MoveSpecie_move_id_fkey` ON `MoveSpecie`;

-- AddForeignKey
ALTER TABLE `MoveSpecie` ADD CONSTRAINT `MoveSpecie_dex_number_fkey` FOREIGN KEY (`dex_number`) REFERENCES `Specie`(`dex_number`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MoveSpecie` ADD CONSTRAINT `MoveSpecie_move_id_fkey` FOREIGN KEY (`move_id`) REFERENCES `Move`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
