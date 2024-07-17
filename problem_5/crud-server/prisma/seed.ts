import { PrismaClient } from "@prisma/client";
import { seedResources } from "./seeders/resources";
const prisma = new PrismaClient();
async function deleteAll() {
  const { count: deletedResources } = await prisma.resource.deleteMany();

  console.log(`[DELETED] ${deletedResources} resources.`);
}

async function main() {
  await deleteAll();

  const resources = await seedResources();
  console.log(`[CREATED] ${resources.count} resources.`);
}

main()
  .then(async () => {
    console.log("__Done!__");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
