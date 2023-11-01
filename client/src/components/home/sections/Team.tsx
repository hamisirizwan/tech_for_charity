import { the_team } from "@/data";
import React from "react";

function Team() {
  return (
    <section className="py-6 bg-gray-50 sm:py-10 lg:py-12">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold leading-tight text-secondary sm:text-3xl lg:text-4xl">
            Meet Our Team
          </h2>
          <p className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600"></p>
        </div>
        <div className="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-9 gap-x-0">
          {the_team.map((member, index) => (
            <>
              <div>
                <img
                  className="object-cover mx-auto rounded-lg w-28 h-28"
                  src={member.image}
                  alt=""
                />
                <p className="mt-8 text-lg font-semibold leading-tight text-black">
                  {member.name}
                </p>
                <p className="mt-1 text-base leading-tight text-gray-600">
                  {member.title}
                </p>
              </div>
              <div className="hidden lg:block" />
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
