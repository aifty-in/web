-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "originalPrice" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "featuredProduct" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
