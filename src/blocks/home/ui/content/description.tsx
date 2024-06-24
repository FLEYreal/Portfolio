"use client";

import { Highlight } from "@/shared/ui/hero-highlight";
// Libs
import { useTranslations } from "next-intl";

export const Description = () => {
  // Default Setup
  const t = useTranslations("home");

  return <div className="bg-gradient-to-br from-white to-slate-500 bg-clip-text text-transparent w-[80%] text-center">
    {t("description-p1")}{" "}
    <Highlight className="whitespace-nowrap text-white">{t("description-p2")}</Highlight>{" "}
    {t("description-p3")}
  </div>
}