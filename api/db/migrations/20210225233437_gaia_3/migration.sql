-- DropIndex
DROP INDEX "pallet_products.palletId_unique";

-- DropIndex
DROP INDEX "pallet_products.productId_unique";

-- AlterTable
ALTER TABLE "pallets" ALTER COLUMN "locationId" DROP NOT NULL,
ALTER COLUMN "orderId" DROP NOT NULL;
