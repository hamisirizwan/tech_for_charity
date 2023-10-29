
import React from 'react'
import ReactPlayer from 'react-player'

function page() {
  return (
<section className="py-4 bg-gray-50 sm:py-8 lg:py-8">
  <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8 ">
  <h2 className="text-2xl font-bold leading-tight text-secondary sm:text-3xl lg:text-4xl text-center my-4 md:my-10">One Vedio Says It All</h2>

 
    <div className="grid items-center grid-cols-1 lg:items-stretch md:grid-cols-2 gap-y-8 gap-x-12 xl:gap-x-20">
      <div className="relative">
      <div className="aspect-w-4 aspect-h-4">
      {/* <ReactPlayer url='https://www.youtube.com/watch?v=wWgIAphfn2U' />  */}
 <video className="object-cover w-full h-full" controls>
  <source src="https://humanityfirsthome.org/wp-content/uploads/2023/01/WhatsApp-Video-2023-01-14-at-4.49.05-PM.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

</div>
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center rounded-full w-28 h-28 bg-white/20">
            <button type="button" className="flex items-center justify-center w-20 h-20 text-white transition-all duration-200 rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-90">
              <svg className="w-6 h-6 lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
              </svg>
            </button>
          </div>
        </div> */}
      </div>
  <div className="flex flex-col justify-between md:py-6">
  <blockquote>
    <p className="text-lg leading-relaxed text-black">At Humanity First Home, we find purpose in visiting orphanages, providing nourishment to the less fortunate, and planting the seeds of a sustainable future. Our mission is driven by the belief that together, we can make the world a better place for all.</p>
  </blockquote>
  <div className="mt-2 lg:mt-auto">
    <p className="text-lg font-semibold text-black">Yahya Ali</p>
    <p className="mt-2 text-base text-gray-600">Founder &amp; CEO</p>
  </div>
</div>

    </div>
  </div>
</section>


  )
}

export default page