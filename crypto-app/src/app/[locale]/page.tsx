
import Link from "next/link";
import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";

export default function Home() {

  const tHomePage = useTranslations("Homepage");

  redirect("/homepage");

}

