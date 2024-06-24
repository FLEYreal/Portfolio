"use client"

// Basics
import Link from "next/link";

// Libs
import { useTranslations } from "next-intl";

// UI
import { CopyIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/tooltip";

// Shared
import { useCopy } from "@/shared/utils/use-copy";
import { useBreakpoint } from "@/shared/utils/use-breakpoints";

export const ContactsDropdownItem = ({ link, text, title, newTab = true }: { link: string; text: string; title: string; newTab?: boolean }) => {
  // Default setup
  const t = useTranslations("contacts");
  const { isMd } = useBreakpoint("md");
  const { copy } = useCopy();

  return <div className="flex flex-row w-full items-center justify-between gap-6 px-2.5 py-2">
    {/* Button to contact user */}
    <Link target={newTab ? "_blank" : undefined} href={link} className="flex-1 justify-start hover:underline">
      {text}
      <span className="text-gray-400 ml-1">({title})</span>
    </Link>

    {isMd && <Tooltip>
      {/** Button to copy ID */}
      <TooltipTrigger asChild>
        <button type="button" className="text-gray-300 hover:text-white transition-colors duration-100 ease-in-out" onClick={() => copy(text)}>
          <CopyIcon size="18" />
        </button>
      </TooltipTrigger>
  
      {/** Tooltip to elaborate what button does */}
      <TooltipContent>{t("copy")}</TooltipContent>
    </Tooltip>}
  </div>
}