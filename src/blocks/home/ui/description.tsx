"use client";

// Libs
import { useTranslations } from "next-intl";

export const Description = () => {
  // Default Setup
  const t = useTranslations("home");

  return <div className="bg-gradient-to-br from-white to-slate-500 bg-clip-text text-transparent w-[80%] md:w-1/2 lg:w-1/3 text-center">
    {t("description")}
  </div>
}