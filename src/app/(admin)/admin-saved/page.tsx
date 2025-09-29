import React from "react";

import { getCompanies } from "@/lib/companies";
import getServerSession from "@/services/getServerSession";
import AdminSavedSection from "@/components/AdminSavedSection";
import Custom404 from "@/app/not-found";

const giveaway: React.FC = async () => {
  const session = await getServerSession();

  if (!session || !session.isAdmin) {
    return Custom404();
  }

  const companies = await getCompanies();

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center px-8 py-24 md:px-24">
      <AdminSavedSection companies={companies} />
    </section>
  );
};

export default giveaway;
