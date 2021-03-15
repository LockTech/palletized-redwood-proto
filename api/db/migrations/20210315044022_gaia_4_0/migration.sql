/*
  Warnings:

  - You are about to drop the column `defaultWarehouseId` on the `user_profile` table. All the data in the column will be lost.
  - Added the required column `warehouseId` to the `user_profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "user_profile" DROP CONSTRAINT "user_profile_defaultWarehouseId_fkey";

-- AlterTable
ALTER TABLE "user_profile" DROP COLUMN "defaultWarehouseId",
ADD COLUMN     "warehouseId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "user_profile" ADD FOREIGN KEY ("warehouseId") REFERENCES "warehouses"("id") ON DELETE CASCADE ON UPDATE CASCADE;
