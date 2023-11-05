"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import NavbarLanguage from "./NavbarLanguage";
import { useTranslations } from "next-intl";

import {
  ArrowPathIcon,
  Bars3Icon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/20/solid";

const navigation = [
  { name: "Benefits", href: "#why", localeKey: "why" },
  { name: "Process", href: "#process", localeKey: "process" },
  { name: "Services", href: "#services", localeKey: "services" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations("Navbar");

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between py-6 px-12"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Aimplifyy</span>
            <img className="h-8 w-auto" src="/images/logo.svg" alt="" />
          </a>
        </div>
        <div className="ml-auto lg:hidden">
          <NavbarLanguage />
        </div>
        <div className="flex lg:hidden bg-primary-400 rounded-md p-1">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-medium leading-6 text-white"
            >
              {t(`${item.localeKey}`)}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:flex-row lg:justify-end">
          <NavbarLanguage />
          <a
            href="https://calendly.com/aimplify"
            target="_blank"
            className="text-sm font-semibold leading-6 text-white bg-[#2FD69E] px-3.5 py-1.5 rounded-full"
          >
            {t("cta")} <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-4/5 overflow-y-auto bg-gray-700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="/images/logo.svg" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                  >
                    {t(`${item.localeKey}`)}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="https://calendly.com/aimplify"
                  target="_blank"
                  className="text-sm font-semibold leading-6 text-white bg-[#2FD69E] px-3.5 py-1.5 rounded-full"
                >
                  {t("cta")}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
