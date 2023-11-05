import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const localesListe = ["en", "fr"] as const;

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ localesListe });
