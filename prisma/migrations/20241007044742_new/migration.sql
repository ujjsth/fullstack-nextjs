/*
  Warnings:

  - The values [FEMELE] on the enum `Artist_gender` will be removed. If these variants are still used in the database, this will fail.
  - The values [FEMELE] on the enum `Artist_gender` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `artist` MODIFY `gender` ENUM('MALE', 'FEMALE', 'OTHER') NOT NULL DEFAULT 'MALE';

-- AlterTable
ALTER TABLE `user` MODIFY `gender` ENUM('MALE', 'FEMALE', 'OTHER') NOT NULL DEFAULT 'MALE';
