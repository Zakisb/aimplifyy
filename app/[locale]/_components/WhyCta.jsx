"use client";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";
const WhyCta = () => {
  const t = useTranslations("Why");

  return (
    <div className="flex flex-col">
      <Button className="">{t("cta")}</Button>
      <div className="flex flex-row justify-center items-center mt-3 gap-2">
        <img src="https://framerusercontent.com/images/0NGbzqzLBcVOh92Njp4JoiRxaBE.svg" />
        <span className="text-sm">{t("legend")}</span>
      </div>
    </div>
  );
};

export default WhyCta;
