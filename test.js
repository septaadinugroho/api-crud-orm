import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const run = async () => {
    const cars = await prisma.supercar.findMany();
    console.log(cars);
};
run();
//# sourceMappingURL=test.js.map