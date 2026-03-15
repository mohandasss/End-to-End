-- AlterTable
ALTER TABLE `user` ADD COLUMN `profileImage` VARCHAR(191) NULL;

-- CreateIndex
CREATE INDEX `User_createdAt_id_idx` ON `User`(`createdAt`, `id`);
