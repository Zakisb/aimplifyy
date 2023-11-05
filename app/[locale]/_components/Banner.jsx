import { XMarkIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";

const Banner = () => {
  const t = useTranslations("Banner");
  return (
    <div className="flex items-center gap-x-6 bg-indigo-500  top-0  z-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <p className="text-sm leading-6 text-white">
        <a href="https://calendly.com/aimplify" target="_blank">
          {t("title")}&nbsp;
          <span aria-hidden="true">&rarr;</span>
        </a>
      </p>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only"></span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
