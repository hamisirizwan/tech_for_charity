import React from 'react'

function HowWeWork() {
  return (
 <section className="py-10 bg-white sm:py-16 lg:py-24">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-2xl font-bold leading-tight text-secondary sm:text-3xl lg:text-4xl">Our Causes</h2>
      <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600 text-base">Discover the Heart of Our Organization: Empower Change Through Giving and Be a Part of Something Bigger</p>
    </div>
    <div className="relative mt-12 lg:mt-20">
      <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
        <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="something" />
      </div>
      <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
        <div>
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
            <span className="text-xl font-semibold text-gray-700"> 1 </span>
          </div>
          <h3 className="mt-6 text-xl font-semibold leading-tight text-primary md:mt-10">Healthy Food</h3>
          <p className="mt-4 text-base text-gray-600">Our mission is to provide support to individuals and families, helping them access fresh, quality ingredients that promote well-being. Together, we can create a healthier, happier future for all.</p>
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
            <span className="text-xl font-semibold text-gray-700"> 2 </span>
          </div>
          <h3 className="mt-6 text-xl font-semibold leading-tight text-primary md:mt-10">Pure Clean Water</h3>
          <p className="mt-4 text-base text-gray-600">Our Organisation playa a crucial role in providing clean and safe drinking water to those who need it most. Join us in the mission to bring pure, clean water to all.</p>
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
            <span className="text-xl font-semibold text-gray-700"> 3 </span>
          </div>
          <h3 className="mt-6 text-xl font-semibold leading-tight text-primary md:mt-10">Mentorship Program</h3>
          <p className="mt-4 text-base text-gray-600">Our Mentorship Program is designed to provide guidance, support, and opportunities to aspiring individuals in various fields. </p>
        </div>
      </div>
    </div>
  </div>
</section>


  )
}

export default HowWeWork