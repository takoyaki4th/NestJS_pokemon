-- CreateTable
CREATE TABLE `MoveSpecie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dex_number` INTEGER NOT NULL,
    `move_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MoveSpecie` ADD CONSTRAINT `MoveSpecie_dex_number_fkey` FOREIGN KEY (`dex_number`) REFERENCES `Specie`(`dex_number`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MoveSpecie` ADD CONSTRAINT `MoveSpecie_move_id_fkey` FOREIGN KEY (`move_id`) REFERENCES `Move`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
