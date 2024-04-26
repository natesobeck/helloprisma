import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany()
  const user = await prisma.user.create({
    data: {
      name: "Nate",
      email: "nate@nate.nate",
      age: 32,
      userPreference: {
        create: {
          emailUpdates: true
        }
      }
    }
  })
  console.log(user)
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
