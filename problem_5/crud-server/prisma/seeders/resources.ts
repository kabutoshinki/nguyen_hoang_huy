import { Prisma, PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { seedConfig } from "../seed-config";

const prisma = new PrismaClient();

export function createRandomResource(): Prisma.ResourceCreateInput {
  return {
    name: faker.commerce.productName(),
    value: faker.commerce.productDescription(),
  };
}

export const RESOURCES: Prisma.ResourceCreateInput[] = faker.helpers.multiple(createRandomResource, {
  count: seedConfig.resource.count,
});

export async function seedResources() {
  const resources = await prisma.resource.createMany({
    data: RESOURCES,
  });

  console.log(`${resources.count} resources created.`);

  return resources;
}
