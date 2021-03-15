-- CreateTable
CREATE TABLE "user_profile" (
    "id" TEXT NOT NULL,
    "defaultWarehouseId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_profile" ADD FOREIGN KEY ("defaultWarehouseId") REFERENCES "warehouses"("id") ON DELETE CASCADE ON UPDATE CASCADE;
