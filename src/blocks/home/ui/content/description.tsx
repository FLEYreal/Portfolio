"use client";

// Libs
import { useTranslations } from "next-intl";

// UI
import { Highlight } from "@/shared/ui/hero-highlight";

// Shared
import { useBreakpoint } from "@/shared/utils/use-breakpoints";

export const Description = () => {
  // Default Setup
  const t = useTranslations("home");
  const { isMd } = useBreakpoint("md");

  return <div className="bg-gradient-to-br from-white to-slate-500 bg-clip-text text-transparent w-[80%] text-center">
    {t("description-p1")}{" "}
    {isMd ? (<>
      <Highlight className="whitespace-nowrap text-white">{t("description-p2")}</Highlight>{" "}
    </>) : t("description-p2") + " "}
    {t("description-p3")}
  </div>
}