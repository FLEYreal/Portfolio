"use client"

// Basics
import { useRouter } from "next/navigation";
import Image from "next/image";

// Libs
import { useLocale } from "next-intl";

// UI
import { DropdownMenu, DropdownMenuContent, DropdownMenuCheckboxItem, DropdownMenuTrigger } from "@/shared/ui/dropdown-menu";

// Shared
import { type Locale, locales } from "@/shared/libs/next-intl/config";

// Assets
import RussianFlagIcon from "@/assets/icons/ru.svg"
import UnitedKingdomFlagIcon from "@/assets/icons/gb.svg"

const localesList = {
  en: {
    id: 1,
    code: "en",
    name: (
      <div className="flex flex-row items-center justify-center gap-2">
        <Image width={16} height={16} src={UnitedKingdomFlagIcon} alt="United Kingdom Flag Icon" />
        English
      </div>
    ),
  },
  ru: {
    id: 2,
    code: "ru",
    name: (
      <div className="flex flex-row items-center justify-center gap-2">
        <Image width={16} height={16} src={RussianFlagIcon} alt="Russian Flag Icon" />
        Русский
      </div>
    ),
  },
}

export const LanguageSwitch = () => {
  // Default Setup
  const router = useRouter();

  // Current locale
  const locale = useLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {localesList[locale as Locale].name}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {
          locales.map((name) => {
            return (
              <DropdownMenuCheckboxItem
                checked={name === locale}
                key={localesList[name].id}
                onClick={() => {
                  router.push("/" + name);
                }}
              >
                {localesList[name].name}
              </DropdownMenuCheckboxItem>
            );
          })
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}