import { the_team } from '@/data'
import React from 'react'

function page() {
  return (
    <section className="py-4 bg-gray-50 sm:py-6 lg:py-10">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div className="flex items-end justify-between">
        <div className="flex-1 text-center ">
          <h2 className="text-2xl font-bold leading-tight text-secondary sm:text-3xl lg:text-4xl">Our Lovely Family</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mx-0 text-center">Humanity first home is not just an organisation, Its a family. Meet the members who make this family special</p>
        </div>
      </div>
    {/* here */}
    <div className="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-9 gap-x-0">
          {the_team.map((member,index) => (
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
  )
}

export default page