/*
  Warnings:

  - You are about to drop the `_BookGenres` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_BookGenres` DROP FOREIGN KEY `_BookGenres_A_fkey`;

-- DropForeignKey
ALTER TABLE `_BookGenres` DROP FOREIGN KEY `_BookGenres_B_fkey`;

-- DropTable
DROP TABLE `_BookGenres`;

-- CreateTable
CREATE TABLE `BookGenres` (
    `bookId` INTEGER NOT NULL,
    `genreId` INTEGER NOT NULL,

    PRIMARY KEY (`bookId`, `genreId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BookGenres` ADD CONSTRAINT `BookGenres_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `Book`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BookGenres` ADD CONSTRAINT `BookGenres_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `Genre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
