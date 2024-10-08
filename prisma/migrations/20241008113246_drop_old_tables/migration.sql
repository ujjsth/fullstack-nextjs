/*
  Warnings:

  - You are about to drop the `artist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `music` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `artist` DROP FOREIGN KEY `Artist_created_by_fkey`;

-- DropForeignKey
ALTER TABLE `music` DROP FOREIGN KEY `Music_artist_id_fkey`;

-- DropTable
DROP TABLE `artist`;

-- DropTable
DROP TABLE `music`;

-- DropTable
DROP TABLE `user`;
