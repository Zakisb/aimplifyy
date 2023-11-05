import React from "react";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-gray-800 flex sm:flex-row flex-col sm:justify-between justify-center py-4 md:px-16 px-8">
      <img className="h-8 w-auto" src="/images/logo.svg" alt="" />
      <p className="text-center">
        {t("copyright", { date: new Date().getFullYear() })}
      </p>
    </footer>
  );
}

export default Footer;
