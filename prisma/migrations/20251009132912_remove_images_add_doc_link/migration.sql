/*
  Warnings:

  - You are about to drop the column `images` on the `Template` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Template" DROP COLUMN "images",
ADD COLUMN     "docLink" TEXT NOT NULL DEFAULT '';
