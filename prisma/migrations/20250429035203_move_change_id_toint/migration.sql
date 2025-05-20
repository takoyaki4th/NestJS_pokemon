/*
  Warnings:

  - The primary key for the `Move` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Move` table. The data in that column could be lost. The data in that column will be cast from `Char(36)` to `Int`.
  - A unique constraint covering the columns `[name]` on the table `Move` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Move` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Move_name_key` ON `Move`(`name`);
