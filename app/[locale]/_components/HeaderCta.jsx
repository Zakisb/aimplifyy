import { useTranslations } from "next-intl";

const HeaderCta = () => {
  return (
    <div className="mx-auto">
      <a
        data-cursor="pointer"
        href="https://calendly.com/aimplify"
        target="_blank"
        className="text-md font-medium leading-6  text-white bg-[#2FD69E] px-6 py-2.5 rounded-full"
      >
        Book your free Audit Call
      </a>
      <div className="flex flex-row justify-center items-center mt-5 gap-2">
        <img src="https://framerusercontent.com/images/0NGbzqzLBcVOh92Njp4JoiRxaBE.svg" />
        <span className="text-sm">No-pressure 30 minute discovery call</span>
      </div>
    </div>
  );
};

export default HeaderCta;
