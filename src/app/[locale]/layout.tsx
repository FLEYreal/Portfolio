// Basics
import { Inter } from "next/font/google";

// Libs
import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

// Shared
import type { Locale } from "@/shared/libs/next-intl/config";
import { cn } from "@/shared/utils/cn";

// Init Font
const inter = Inter({ subsets: ["latin"] });

// Generate metadata depending on selected language
export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }) {
  const t = await getTranslations({locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t("description")
  };
}

export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={cn("dark", inter.className)}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
