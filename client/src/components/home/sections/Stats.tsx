import React from 'react'

function Stats() {
  return (
<section className="py-4 bg-gray-100 sm:py-9 lg:py-12">
  <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-2xl font-bold leading-tight text-secondary sm:text-3xl lg:text-4xl">Numbers tell our story</h2>
      {/* <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p> */}
    </div>
    <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
      <div>
        <h3 className="font-bold text-7xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> 2+ </span>
        </h3>
        <p className="mt-4 text-xl font-medium text-gray-900">Years since Founders</p>
        <p className="text-base mt-0.5 text-gray-500">The future is bright</p>
      </div>
      <div>
        <h3 className="font-bold text-7xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> 31 </span>
        </h3>
        <p className="mt-4 text-xl font-medium text-gray-900">Projects delivered</p>
        <p className="text-base mt-0.5 text-gray-500">In last 1 years</p>
      </div>
      <div>
        <h3 className="font-bold text-7xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> 370+ </span>
        </h3>
        <p className="mt-4 text-xl font-medium text-gray-900">Members</p>
        <p className="text-base mt-0.5 text-gray-500">Working for your success</p>
      </div>
    </div>
  </div>
</section>


  )
}

export default Stats