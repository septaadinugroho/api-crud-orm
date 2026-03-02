import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.supercar.createMany({
    data: [
      { name: "911 Turbo S", brand: "Porsche", year: 2023 },
      { name: "Revuelto", brand: "Lamborghini", year: 2024 },
      { name: "SF90XX", brand: "Ferrari", year: 2025 },
    ],
  });

  await prisma.gadget.createMany({
    data: [
      { name: "Macbook Air M2", brand: "Apple", price: 12000000 },
      { name: "ROX Strix G16", brand: "ASUS", price: 28000000 },
      { name: "Custom PC Gaming", brand: "Gigabyte", price: 11300000 },
    ],
  });

  console.log("Seed done");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
