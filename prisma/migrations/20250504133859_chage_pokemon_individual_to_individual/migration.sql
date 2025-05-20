/*
  Warnings:

  - You are about to drop the column `Individual_attack` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `Individual_defense` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `Individual_hp` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `Individual_s_attack` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `Individual_s_defense` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `Individual_speed` on the `Pokemon` table. All the data in the column will be lost.
  - Added the required column `individual_attack` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `individual_defense` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `individual_hp` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `individual_s_attack` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `individual_s_defense` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `individual_speed` to the `Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Pokemon` DROP COLUMN `Individual_attack`,
    DROP COLUMN `Individual_defense`,
    DROP COLUMN `Individual_hp`,
    DROP COLUMN `Individual_s_attack`,
    DROP COLUMN `Individual_s_defense`,
    DROP COLUMN `Individual_speed`,
    ADD COLUMN `individual_attack` INTEGER NOT NULL,
    ADD COLUMN `individual_defense` INTEGER NOT NULL,
    ADD COLUMN `individual_hp` INTEGER NOT NULL,
    ADD COLUMN `individual_s_attack` INTEGER NOT NULL,
    ADD COLUMN `individual_s_defense` INTEGER NOT NULL,
    ADD COLUMN `individual_speed` INTEGER NOT NULL;
