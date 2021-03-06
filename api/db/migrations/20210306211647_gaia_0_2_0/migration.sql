/*
  Warnings:

  - You are about to drop the column `name` on the `orders` table. All the data in the column will be lost.
  - The migration will add a unique constraint covering the columns `[orderNumber]` on the table `orders`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[jobName]` on the table `orders`. If there are existing duplicate values, the migration will fail.
  - Added the required column `orderNumber` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobName` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "name",
ADD COLUMN     "orderNumber" TEXT NOT NULL,
ADD COLUMN     "jobName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "orders.orderNumber_unique" ON "orders"("orderNumber");

-- CreateIndex
CREATE UNIQUE INDEX "orders.jobName_unique" ON "orders"("jobName");
