import { PrismaClient } from "@prisma/client";
import { applicationSeed } from "./seeds/application";

const prisma = new PrismaClient();

async function main() {
  await applicationSeed(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
