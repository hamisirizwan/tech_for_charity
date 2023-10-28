import React from "react";

function CTA() {
  return (
    <section className="text-gray-600 body-font relative mx-auto w-full max-w-screen-2xl">
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-col text-center w-full mb-8 md:mb-12">
          <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-secondary">
            Support, Empower, Grow
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-normal">
            You can make a difference with every contribution. Invest your time
            in honing your generosity.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="inline-flex  text-white bg-primary border-0 py-3 px-8 focus:outline-none  rounded-lg text-lg">
            Join as a Member
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
