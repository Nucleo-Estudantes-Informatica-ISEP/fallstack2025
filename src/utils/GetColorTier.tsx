export type CompaniesTier = "Diamond" | "Gold" | "Silver" | "Bronze";

export const getColorOfTier = (tier: CompaniesTier): string => {
  switch (tier) {
    case "Diamond":
      return "blue-500";
    case "Gold":
      return "yellow-400";
    case "Silver":
      return "gray-500";
    case "Bronze":
      return "yellow-600";
    default:
      throw new Error("Tier not found");
  }
};
