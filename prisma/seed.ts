import { PrismaClient, Role, Tier } from "@prisma/client";

import config from "@/config";

import { hashPassword } from "../src/services/authService";

const prisma = new PrismaClient();

const INTERESTS = [
  "Artificial Intelligence",
  "Data Science",
  "Mobile Development",
  "Web Development",
  "Devops",
  "Cyber Security",
  "Game Development",
  "Cloud Computing",
  "Machine Learning",
  "Blockchain",
  "Internet of Things",
  "Quantum Computing",
  "Augmented Reality",
  "Virtual Reality",
  "Big Data",
  "Robotics",
  "Networking",
  "Database Management",
  "Software Development",
  "Outsystems",
  "Data Analysis",
  "UI/UX Design",
  "Infrastructure",
];

const COMPANIES = [
  {
    name: "armis",
    tier: Tier.DIAMOND,
    interests: ["Cyber Security", "Networking"],
  },
];

async function seedInterests() {
  const interests = await prisma.interest.findMany();

  if (interests.length > 0) {
    console.log("⚠️ Interests already seeded");
    return;
  }

  const data = INTERESTS.map((name) => ({ name }));

  await prisma.interest.createMany({
    data,
  });
  console.log("✅ Interests seeded");
}

async function seedAdmin() {
  const email = process.env.ADMIN_EMAIL as string;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    console.log("⚠️ User already seeded");
    return user;
  }

  const password = await hashPassword(process.env.ADMIN_PASSWORD as string);

  const newUser = await prisma.user.create({
    data: {
      email,
      password,
      role: Role.COMPANY,
      isAdmin: true,
    },
  });

  console.log("✅ User seeded");

  return newUser;
}

async function seedStudent() {
  const email = "student@test.pt";
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (user) {
    console.log("⚠️ Student already seeded");
    return user;
  }

  const password = await hashPassword(process.env.ADMIN_PASSWORD as string);

  const newUser = await prisma.user.create({
    data: {
      email,
      password,
      role: Role.STUDENT,
    },
  });

  await prisma.student.create({
    data: {
      userId: newUser.id,
      name: "Student",
      year: "3",
      code: "A123",
    },
  });

  console.log("✅ Student seeded");

  return newUser;
}

async function seedNei(userId: string) {
  const existingCompany = await prisma.company.findUnique({
    where: {
      userId,
    },
  });
  if (existingCompany !== null) {
    console.log("⚠️ NEI already seeded");
    return existingCompany;
  }

  const company = await prisma.company.create({
    data: {
      name: "NEI",
      userId: userId,
      tier: Tier.DIAMOND,
    },
  });

  console.log("✅ NEI seeded");

  return company;
}

async function seedCompanies() {
  const companies = await prisma.company.findMany();
  if (companies.length > 1) {
    console.log("⚠️ Companies already seeded");
    return;
  }

  const interests = await prisma.interest.findMany();

  const password = await hashPassword(process.env.ADMIN_PASSWORD as string);
  const data = COMPANIES.map((company) => ({
    email: `${company.name.toLowerCase()}@test.pt`,
    role: Role.COMPANY,
    password,
    interestId: interests
      .filter((interest) => company.interests.includes(interest.name))
      .map((interest) => interest.id),
  }));

  await prisma.user.createMany({
    data,
  });

  const companyData = [];

  for (let i = 0; i < COMPANIES.length; i++) {
    const company = COMPANIES[i];
    const user = await prisma.user.findFirst({
      where: {
        email: `${company.name.toLowerCase()}@test.pt`,
      },
    });

    companyData.push({
      name: company.name,
      userId: user!.id,
      tier: company.tier,
    });
  }

  await prisma.company.createMany({
    data: companyData,
  });

  console.log("✅ Companies seeded");
}

async function seedActions() {
  const actions = await prisma.action.findMany();
  if (actions.length > 0) {
    console.log("⚠️ Actions already seeded");
    return;
  }

  await prisma.action.createMany({
    data: [
      {
        name: config.constants.actionNames.createProfile,
        description: "Cria o teu perfil",
        points: 1,
      },
      {
        name: config.constants.actionNames.updateLinkedin,
        description: "Associa o teu LinkedIn",
        points: 2,
      },
      {
        name: config.constants.actionNames.uploadCv,
        description: "Faz o upload do teu CV",
        points: 3,
      },
      {
        name: "Palestra 1",
        description: "Assiste à palestra 1",
        points: 5,
      },
      {
        name: "Palestra 2",
        description: "Assiste à palestra 2",
        points: 5,
      },
      {
        name: "Palestra 3",
        description: "Assiste à palestra 3",
        points: 10,
      },
      {
        name: "Entrevista com o Teixeira",
        description: "Assiste à palestra 3",
        altText: "0x31r4",
        points: 10,
      },
    ],
  });

  console.log("✅ Actions seeded");
}

async function main() {
  if (process.env.NODE_ENV === "production") {
    console.log("⚠️ Seeding is disabled in production");
    return;
  }
  await seedInterests();
  await seedStudent();
  const user = await seedAdmin();
  await seedNei(user.id);
  await seedCompanies();
  await seedActions();
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
