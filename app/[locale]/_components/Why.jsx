import { Container } from "@/components/Container";
import WhyCta from "./WhyCta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import CheckIcon from "@/public/images/check.png";
import { useTranslations } from "next-intl";

const data = [
  {
    title: "Stop wasting hundreds of work hours on repetitive tasks",
    description:
      "Using powerful workflow automations we are able to help you automate annoying and time-heavy tasks.",
    localeKey: "section_1",
  },
  {
    title: "Let AI handle 80% of your customer support",
    description:
      "Using the power of AI chatbots trained on all of your company data, you will be able to handle 80% of your support tickets with AI.",
    localeKey: "section_2",
  },
  {
    title: "Offload new employee onboarding to AI",
    description:
      "Chatbots for internal use can make your employee's life 10x easier, and make them 10x more productive.",
    localeKey: "section_3",
  },
];

const Why = () => {
  const t = useTranslations("Why");

  return (
    <div id="why" className="px-16 py-24 service-section section-b-space">
      <div className="flex lg:flex-row flex-col border-b-[1px] border-gray-600 pb-8 lg:space-y-0 space-y-6 ">
        <div className="lg:w-2/3 lg:pr-16">
          <h2 className="text-4xl">
            {t.rich("title", {
              underline: (chunks) => (
                <span className="italic text-primary-500">{chunks}</span>
              ),
            })}
          </h2>
          <p className="mt-3 text-gray-400">{t("description")}</p>
        </div>
        <div className="lg:ml-auto">
          <WhyCta />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 py-16">
        {data.map((item, index) => {
          return (
            <div className="col-span-1 flex flex-col gap-y-4" key={index}>
              {/* <FontAwesomeIcon icon={faCheck} />{" "}
              <CheckIcon className="text-primary-500 w-6 h-6 stroke-width-2" /> */}
              <Image
                src={CheckIcon}
                width={20}
                height={18}
                alt="Check-icon"
                className=""
              />
              <h3 className="text-xl font-bold">
                {t(`sections.${item.localeKey}.title`)}
              </h3>
              <p className="text-gray-400">
                {t(`sections.${item.localeKey}.description`)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Why;
