import { CategoryType } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<CategoryType[]> => {
  const res = await fetch(URL, { cache: "no-store" });
  return res.json();
};

export default getCategories;
