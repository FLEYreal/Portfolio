"use client"

import { useTranslations } from "use-intl";
import { useToast } from "../ui/use-toast";

export interface UseCopyResult {
  copy: (text: string) => void;
}

/** Hook to receive handler to copy text to clipboard */
export const useCopy = () => {
  // Default Setup
  const t = useTranslations("default");
  const { toast } = useToast();

  return {
    copy: (text: string) => {
      navigator.clipboard.writeText(text)
      toast({ title: t("copied-to-clipboard") })
    }
  }
}