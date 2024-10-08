-- CreateTable
CREATE TABLE `Music` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `album` VARCHAR(191) NOT NULL,
    `Genre` ENUM('RNB', 'COUNTRY', 'CLASSIC', 'ROCK', 'JAZZ') NOT NULL DEFAULT 'CLASSIC',
    `artist_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Music` ADD CONSTRAINT `Music_artist_id_fkey` FOREIGN KEY (`artist_id`) REFERENCES `Artist`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
