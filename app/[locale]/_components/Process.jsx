import { useTranslations } from "next-intl";
import ProcessCta from "./ProcessCta";

const processData = [
  {
    cta: true,
    localeKey: "step1",
  },
  {
    cta: false,
    ctaText: null,
    localeKey: "step2",
  },
  {
    cta: false,
    ctaText: null,
    localeKey: "step3",
  },
  {
    cta: true,
    localeKey: "step4",
  },
];

const Process = () => {
  const t = useTranslations("Process");
  return (
    <div id="process" className="feature-section px-4 flex flex-col py-36">
      <div className="bg-effect">
        <img
          src="/images/feature.gif"
          className="img-fluid feature-left"
          alt=""
        />
        <img
          src="/images/feature.gif"
          className="img-fluid feature-right"
          alt=""
        />
        <img
          src="/images/feature-bg.png"
          className="img-fluid feature-bg"
          alt=""
        />
        <span className="round-effect"></span>
      </div>
      <h2 className="text-4xl text-center text-white mb-16">{t("title")}</h2>
      <div className="flex flex-col gap-y-5 mx-auto">
        {processData.map((item, index) => {
          return (
            <div
              key={item.localeKey}
              className="max-w-2xl bg-gray-700 p-8 space-y-3.5 rounded-sm"
            >
              <span className="text-xl text-primary-500 font-semibold">{`0${
                index + 1
              }`}</span>
              <h3 className="text-xl">{t(`steps.${item.localeKey}.title`)}</h3>
              <p className="font-regular text-gray-400">
                {t(`steps.${item.localeKey}.description`)}
              </p>
              {item.cta && (
                <ProcessCta
                  title={t(`steps.${item.localeKey}.ctaText`)}
                  legend={t(`steps.${item.localeKey}.legend`)}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Process;
