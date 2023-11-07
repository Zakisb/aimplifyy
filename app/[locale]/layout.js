import { Inter, DM_Sans } from "next/font/google";
import { NextIntlClientProvider, createTranslator } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import { notFound } from "next/navigation";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages(locale);

  const t = createTranslator({ locale, messages });

  return {
    title: t("Title"),
  };
}

const locales = ["en", "fr"];

export async function generateStaticParams() {
  return ["en", "fr"].map((locale) => ({ locale }));
}

async function getMessages(locale) {
  try {
    return {
      ...(await import(`@/locales/${locale}.json`)).default,
    };
  } catch (error) {
    notFound();
  }
}

export default async function RootLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) notFound();
  const messages = await getMessages(locale);
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <NextIntlClientProvider
        timeZone="Europe/Paris"
        locale={locale}
        messages={messages}
      >
        <body className={`${inter.className} ${dmSans.className}`}>
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
