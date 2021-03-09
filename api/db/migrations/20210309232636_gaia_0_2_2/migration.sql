-- CreateEnum
CREATE TYPE "PalletStatus" AS ENUM ('ACTIVE', 'SHIPPED');

-- AlterTable
ALTER TABLE "pallets" ADD COLUMN     "status" "PalletStatus" NOT NULL DEFAULT E'ACTIVE';
