import { Inter, DM_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import {
  unstable_setRequestLocale,
  getFormatter,
  getNow,
  getTimeZone,
  getTranslator,
} from "next-intl/server";
import { notFound } from "next/navigation";
// import "@/app/globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslator(locale);
  const formatter = await getFormatter(locale);
  const now = await getNow(locale);
  const timeZone = await getTimeZone(locale);

  return {
    title: t("Title"),
    other: {
      currentYear: formatter.dateTime(now, { year: "numeric" }),
      timeZone: timeZone || "N/A",
    },
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

  const polyfills = [
    "Intl",
    "Intl.Locale",
    "Intl.DateTimeFormat",
    `Intl.DateTimeFormat.~locale.${locale}`,
    `Intl.NumberFormat`,
    `Intl.NumberFormat.~locale.${locale}`,
    "Intl.PluralRules",
    `Intl.PluralRules.~locale.${locale}`,
    "Intl.RelativeTimeFormat",
    `Intl.RelativeTimeFormat.~locale.${locale}`,
    "Intl.ListFormat",
    `Intl.ListFormat.~locale.${locale}`,
  ];

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
      <Script
        strategy="beforeInteractive"
        src={
          "https://polyfill.io/v3/polyfill.min.js?features=" +
          polyfills.join(",")
        }
      />
    </html>
  );
}
