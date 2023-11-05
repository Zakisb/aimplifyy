"use client";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";
const WhyCta = () => {
  const t = useTranslations("Why");

  return (
    <div className="flex flex-col">
      <a
        data-cursor="pointer"
        href="https://calendly.com/aimplify"
        target="_blank"
        className="text-md font-medium leading-6 text-center  text-white bg-[#2FD69E] px-6 py-2.5 rounded-full hover:bg-primary-700"
      >
        {t("cta")}
      </a>
      <div className="flex flex-row justify-center items-center mt-3 gap-2">
        <img src="https://framerusercontent.com/images/0NGbzqzLBcVOh92Njp4JoiRxaBE.svg" />
        <span className="text-sm">{t("legend")}</span>
      </div>
    </div>
  );
};

export default WhyCta;
