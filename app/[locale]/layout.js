import { Inter, DM_Sans } from "next/font/google";
import { NextIntlClientProvider, createTranslator } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import { getFormatter, getNow, getTimeZone } from "next-intl/server";
import { notFound } from "next/navigation";
import "@/app/globals.css";
import Script from "next/script";
import { getTranslations } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages(locale);

  // You can use the core (non-React) APIs when you have to use next-intl
  // outside of components. Potentially this will be simplified in the future
  // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
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
