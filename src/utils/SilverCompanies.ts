import { CompanyProps } from "@/components/Companies/Company";

import {
  AccentureLogo,
  AkaLogo,
  glinttLogo,
  KonkLogo,
  msgLifeIberiaLogo,
  NatixisLogo,
} from "./CompaniesImages";

export const SilverCompanies: CompanyProps[] = [
  {
    logoHref: glinttLogo,
    name: "glintt",
    websiteUrl: "https://www.glintt.com/",
    className: "w-3/4",
  },
  {
    logoHref: AccentureLogo,
    name: "accenture",
    websiteUrl: "https://www.accenture.com/",
  },
  {
    logoHref: AkaLogo,
    name: "akapeople",
    websiteUrl: "https://www.akapeople.pt/",
    className: "w-3/4",
  },
  {
    logoHref: NatixisLogo,
    name: "natixis",
    websiteUrl: "https://www.natixis.com/",
  },
  {
    logoHref: KonkLogo,
    name: "konk consulting",
    websiteUrl: "https://www.konkconsulting.com/PT/",
    className: "w-3/4",
  },
  {
    logoHref: msgLifeIberiaLogo,
    name: "msg insur:it",
    websiteUrl: "https://msg-insurit.com/pt-pt/",
  },
];
