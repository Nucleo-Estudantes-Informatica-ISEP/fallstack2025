import prisma from "./prisma";

export async function fetchInterestsByCompanyName(companyName: string) {
  const company = await prisma.company.findUnique({
    where: {
      name: companyName,
    },
  });

  if (!company) {
    throw new Error("Company not found");
  }

  const response = await prisma.interest.findMany({
    where: {
      Users: {
        some: {
          id: company.userId,
        },
      },
    },
  });

  return response.map((interest) => interest.name);
}
