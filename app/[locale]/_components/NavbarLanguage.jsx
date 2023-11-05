"use client";
import { Menu, Transition } from "@headlessui/react";
import {
  Fragment,
  useEffect,
  useRef,
  useState,
  useMemo,
  useTransition,
} from "react";

import { usePathname, useRouter } from "@/navigation";

import { useLocale } from "next-intl";
import clsx from "clsx";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import EnglishFlagIcon from "@/public/images/US.svg";
import FrenchFlagIcon from "@/public/images/FR.svg";

import Image from "next/image";

export default function HeaderLanguage() {
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const languages = [
    { label: "en", icon: EnglishFlagIcon },
    { label: "fr", icon: FrenchFlagIcon },
  ];

  function onSelectChange(newLocale) {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  }
  const selectedLanguage = useMemo(() => {
    return languages.find((lang) => lang.label === locale);
  }, [locale]);

  const renderSelectedLanguage = (
    <div className={clsx("flex items-center")}>
      <Image
        className="h-full shrink-0"
        src={selectedLanguage.icon}
        width={16}
        height={16}
        alt="Check-icon"
      />
      <span className="ml-2 text-sm font-medium text-white">
        {selectedLanguage.label.toUpperCase()}
      </span>
    </div>
  );

  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            {renderSelectedLanguage}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              {languages.map(({ label, icon: IconComponent }, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <button
                      onClick={() => onSelectChange(label)}
                      className={`
                        ${
                          active ? "bg-primary-500 text-white" : "text-gray-900"
                        } 
                        group flex w-full items-center rounded-md px-2 py-2 text-sm
                    `}
                    >
                      <Image
                        className="h-full shrink-0 mr-2"
                        src={IconComponent}
                        width={16}
                        height={16}
                        alt="Check-icon"
                      />
                      <span className="font-medium">
                        {" "}
                        {label.toUpperCase()}
                      </span>
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
