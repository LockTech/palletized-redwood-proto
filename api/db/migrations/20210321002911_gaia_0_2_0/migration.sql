/*
  Warnings:

  - You are about to drop the column `name` on the `products` table. All the data in the column will be lost.
  - The migration will add a unique constraint covering the columns `[name]` on the table `pallets`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[partNumber]` on the table `products`. If there are existing duplicate values, the migration will fail.
  - Added the required column `partNumber` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "products.name_unique";

-- DropIndex
DROP INDEX "orders.jobName_unique";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "name",
ADD COLUMN     "partNumber" TEXT NOT NULL,
ADD COLUMN     "description" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "pallets.name_unique" ON "pallets"("name");

-- CreateIndex
CREATE UNIQUE INDEX "products.partNumber_unique" ON "products"("partNumber");
