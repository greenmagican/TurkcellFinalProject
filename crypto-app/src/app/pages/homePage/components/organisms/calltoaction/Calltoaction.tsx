import React from "react";
import "./calltoaction.scss"
const Calltoaction = () => {
  return (
    <section className="bg-primary earn-up">
      <div className="container d-flex justify-content-between align-items-center py-4">
        <div className="d-flex flex-column">
          <p className="text-white fw-bold fs-2">
            Earn up to $25 worth of crypto
          </p>
          <p className="text-white">
            Discover how specific cryptocurrencies work — and get a bit of each
            crypto to try out for yourself.
          </p>
        </div>
        <button className="btn btn-light rounded-pill create-account ">
          Create Account
        </button>
      </div>
    </section>

  );
};

export default Calltoaction;
