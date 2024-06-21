"use client"

// Libs
import { useTranslations } from "next-intl";

// Insides
import "./globals.css"

export default function Home() {
  const t = useTranslations("header");

  return (
    <main>
      {t("home")}
    </main>
  );
}
