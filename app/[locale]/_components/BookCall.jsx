import Image from "next/image";
import Avatar from "@/public/images/me.png";
import CheckIcon from "@/public/images/check.png";
import { useTranslations } from "next-intl";

const BookCall = () => {
  const t = useTranslations("BookCall");

  return (
    <div className="flex lg:flex-row flex-col-reverse gap-16 py-36 px-16 ">
      <div className="lg:w-1/2 h-full">
        <iframe
          src="https://calendly.com/aimplify"
          style={{ minHeight: "650px", height: "60vh" }}
          width="100%"
          frameborder="0"
        ></iframe>
      </div>
      <div className="text-4xl lg:w-1/2">
        <h2>{t("title")}</h2>
        <div className="flex flex-row mt-10 gap-3">
          <Image
            src={Avatar}
            width={50}
            className="rounded-full h-auto border border-primary-700 border-2 hidden sm:flex"
          />
          <div className="flex flex-col gap-y-1">
            <h2 className="text-xl">{t("label")}</h2>
            <div className="flex flex-row justify-start items-center gap-2">
              <img src="https://framerusercontent.com/images/0NGbzqzLBcVOh92Njp4JoiRxaBE.svg" />
              <span className="text-sm text-gray-400 ">{t("legend")}</span>
            </div>
          </div>
        </div>
        <div className="space-y-6 mt-10">
          <p className="leading-loose">{t("paragraphs.p1")}</p>
          <p className="text-white">{t("paragraphs.p2")}</p>
          <ul className="space-y-3">
            <li className="flex flex-row items-center gap-x-4">
              <Image
                src={CheckIcon}
                width={20}
                height={18}
                className="h-full shrink-0 pt-2"
                alt="Check-icon"
              />

              <p> {t("lists.l1")}</p>
            </li>
            <li className="flex flex-row  items-center gap-x-4">
              <Image
                src={CheckIcon}
                width={20}
                height={18}
                className="h-full shrink-0  pt-2"
                alt="Check-icon"
              />
              <p className=""> {t("lists.l2")}</p>
            </li>
            <li className="flex flex-row  items-center gap-x-4">
              <Image
                className="h-full shrink-0 pt-2"
                src={CheckIcon}
                width={20}
                height={18}
                alt="Check-icon"
              />
              <p> {t("lists.l3")}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookCall;
