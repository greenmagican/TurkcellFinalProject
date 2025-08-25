import React from "react";
import "./calltoaction.scss";
import { useTranslations } from "next-intl";
import Link from "next/link";
const Calltoaction = () => {

  const tCallToAction = useTranslations("Calltoaction")
  return (
    <section className="bg-primary earn-up">
      <div className="container d-flex justify-content-between align-items-center py-4">
        <div className="d-flex flex-column">
          <p className="text-white fw-bold fs-2">
            {tCallToAction("title")}
          </p>
          <p className="text-white">
            {tCallToAction("description")}

          </p>
        </div>
        <Link href="/login">
          <button className="btn btn-light rounded-pill create-account ">
            {tCallToAction("button")}

          </button></Link>

      </div>
    </section>

  );
};
export default Calltoaction;
