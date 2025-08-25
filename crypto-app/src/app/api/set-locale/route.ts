"use client";
import { useRouter } from "next/navigation";

 const changeLocale = async (newLocale: string) => {
  const router = useRouter();

  await fetch('/api/set-locale', {
    method: 'POST',
    body: JSON.stringify({ locale: newLocale }),
    headers: { 'Content-Type': 'application/json' },
  });

  router.refresh(); // Yönlendirme gerekmeden sayfayı yeniden yükler
};
