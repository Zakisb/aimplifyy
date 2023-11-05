import Button from "@/components/Button";
import React from "react";
import Image from "next/image";
import UpRight from "@/public/images/right-up.png";
import { useTranslations } from "next-intl";

function BookCallCta() {
  const t = useTranslations("Cta");
  return (
    <section className="info-section section-b-space">
      <div className="callcta-container">
        <div className="info-box">
          <div className="hand-effect d-md-block d-none">
            <img
              src="/images/hand.svg"
              className="img-fluid left-hand"
              alt="hand"
            />
            <img
              src="/images/hand.svg"
              className="img-fluid right-hand"
              alt="hand"
            />
          </div>
          <h2>
            {t.rich("title", {
              underline: (chunks) => (
                <span className="">
                  {chunks}
                  <img
                    src="/images/title-effect.svg"
                    className="img-fluid"
                    alt="title-effect"
                  />
                </span>
              ),
            })}
          </h2>
          <p>{t("description")}</p>
          <ul>
            <li>
              <img src="/images/tick.svg" className="img-fluid" alt="tick" />
              {t("benefits.b1")}
            </li>
            <li>
              {t("benefits.b2")}
              <img src="/images/tick.svg" className="img-fluid" alt="tick" />
            </li>
            <li>
              <img src="/images/tick.svg" className="img-fluid" alt="tick" />
              {t("benefits.b3")}
            </li>
            <li>
              <img src="/images/tick.svg" className="img-fluid" alt="tick" />
              {t("benefits.b4")}
            </li>
          </ul>
          <a
            href="https://calendly.com/aimplify"
            className="bg-primary-500 rounded-[40px] flex items-center justify-center py-8  md:w-2/3 w-full"
            target="_blank"
          >
            <div className="flex flex-row justify-center">
              <span className="text-2xl">{t("cta")}</span>
              <Image
                className="h-full shrink-0"
                src={UpRight}
                width={36}
                height={26}
                alt="Check-icon"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default BookCallCta;
