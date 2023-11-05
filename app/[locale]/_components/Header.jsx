import { useTranslations } from "next-intl";

import HeaderCta from "./HeaderCta";

const Header = () => {
  const t = useTranslations("Header.title");
  return (
    <section className="home-section relative h-screen overflow-hidden">
      <div className="flex flex-col gap-12 w-full justify-center items-center py-20">
        <div className="home-content sm:mx-10 mx-5 max-w-screen-xl pt-16">
          <div className="bg-effect relative">
            <img
              src="/images/home-bg.gif"
              className="img-fluid bg-gif"
              alt=""
            />
          </div>
          <div className="mx-auto">
            <h1 className="leading-normal	spacing-1 font-bold">
              <div className="title-effect ">
                <img src="/images/title-effect.png" alt="" />
                <span className="uppercase">{t("underline")}</span>
              </div>
              <span className="sm:0 ml-3">
                {t.rich("main", {
                  break: (chunks) => (
                    <>
                      <br />
                      {chunks}
                    </>
                  ),
                })}
              </span>
            </h1>
            <p className="text-gray-400  text-lg">{t("description")}</p>
            <div className="mx-auto">
              <a
                data-cursor="pointer"
                href="https://calendly.com/aimplify"
                target="_blank"
                className="text-md font-medium leading-6  text-white bg-[#2FD69E] px-6 py-2.5 rounded-full"
              >
                {t("cta")}
              </a>
              <div className="flex flex-row justify-center items-center mt-5 sm:gap-2 gap-2">
                <img src="https://framerusercontent.com/images/0NGbzqzLBcVOh92Njp4JoiRxaBE.svg" />
                <span className="sm:text-sm text-xs">{t("legend")}</span>
              </div>
            </div>
          </div>
          {/* <AnimationEffect /> */}
        </div>
      </div>
    </section>
  );
};

export default Header;
