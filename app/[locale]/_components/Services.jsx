import Image from "next/image";
import Service1 from "@/public/images/service-1.svg";
import Service2 from "@/public/images/service-2.svg";
import Service3 from "@/public/images/service-3.svg";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";
import clsx from "clsx";

const servicesData = [
  {
    localeKey: "service1",
    img: Service1,
  },
  {
    localeKey: "service2",
    img: Service2,
  },
  {
    localeKey: "service3",
    img: Service3,
  },
];

const Services = () => {
  const t = useTranslations("Services");

  return (
    <div
      id="services"
      className="flex services-section-b flex-col xl:gap-y-20 gap-y-36 justify-center items-center py-16 "
    >
      {servicesData.map((service, index) => {
        return (
          <div
            key={service.localeKey}
            className={clsx(
              index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse",
              `flex gap-10  px-20 items-center max-w-screen-2xl relative flex-col`
            )}
          >
            <div
              className={clsx(
                index % 2 === 0 ? "right-0" : "left-0",
                "xl:w-4/5 w-11/12 absolute top-0  z-10 h-[110%] mt-2 opacity-30  bg-effect bg-gray-700"
              )}
            >
              {" "}
            </div>
            <Image
              src={service.img}
              width={544}
              alt="Service image"
              className="z-50 w-full lg:w-auto"
            />
            <div className="md:px-20 px-2 space-y-7 z-50">
              <h2 className="md:text-4xl text-2xl ">
                {t(`${service.localeKey}.title`)}
              </h2>
              <p className="font-regular text-gray-400">
                {t(`${service.localeKey}.description`)}
              </p>
              <Button className="md:flex hidden">
                {t(`${service.localeKey}.ctaText`)}
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
