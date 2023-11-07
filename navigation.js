import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const localesListe = ["en", "fr"];

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ localesListe });
