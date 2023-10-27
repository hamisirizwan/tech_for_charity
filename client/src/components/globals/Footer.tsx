import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-10 sm:px-24 mt-6 py-6 sm:py-16 bg-white gap-7 sm:gap-10">
      <div className="space-y-3">
        <img src="/logo.webp" alt="logo" />
        <p className="text-sm text-gray-600">
        At Humanity First Home, our mission is to provide hope, shelter, and support to those in need. We are dedicated to improving the lives of individuals and communities through our charitable initiatives.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://instagram.com/adierco_legal?igshid=NzZhOTFlYzFmZQ==">
            <button className="bg-new-black p-2 rounded-full">
              <svg
                className="w-5 h-auto text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                />
              </svg>
            </button>
          </a>
          <a href="https://instagram.com/adierco_legal?igshid=NzZhOTFlYzFmZQ==">
            <button className="bg-new-black p-2 rounded-full">
              <svg
                className="w-5 h-auto text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
                />
              </svg>
            </button>
          </a>
          <a href="https://www.linkedin.com/company/100754431/admin/feed/posts/">
            <button className="bg-new-black p-2 rounded-full">
              <svg
                className="w-5 h-auto text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <circle cx="4.983" cy="5.009" r="2.188" fill="currentColor" />
                <path
                  d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
      <div className="space-y-8">
        <div className="border-l-2 border-primary pl-5">
          <h2 className="text-xl font-semibold">Quick Contact Info</h2>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <svg
              className="w-5 h-auto text-[#ed3103] shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M10 20a10 10 0 1 1 0-20a10 10 0 0 1 0 20zm2-2.25a8 8 0 0 0 4-2.46V9a2 2 0 0 1-2-2V3.07a7.95 7.95 0 0 0-3-1V3a2 2 0 0 1-2 2v1a2 2 0 0 1-2 2v2h3a2 2 0 0 1 2 2v5.75zm-4 0V15a2 2 0 0 1-2-2v-1h-.5A1.5 1.5 0 0 1 4 10.5V8H2.25A8.01 8.01 0 0 0 8 17.75z"
              />
            </svg>
            <p className="text-sm">
              12th Flr, West Park Towers, Westlands, Nairobi
            </p>
          </div>
          <div className="flex items-center gap-3">
            <svg
             className="w-5 h-auto text-[#ed3103] shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19.95 21q-3.125 0-6.187-1.35T8.2 15.8q-2.5-2.5-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21h-1.05Z"
              />
            </svg>
            <p className="text-sm">+254 768 793 923</p>
          </div>
          <div className="flex items-center gap-3">
          <svg
                className="w-5 h-auto text-[#ed3103] shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                />
              </svg>

            <p className="text-sm">TechForCharity</p>
          </div>
          <div className="flex items-center gap-3">
            <svg
            className="w-5 h-auto text-[#ed3103] shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"
              />
            </svg>
            <p className="text-sm">Mon – Fri: 09:00 - 06:00</p>
          </div>
        </div>
      </div>
      <div className="space-y-10">
        <div className="border-l-2 border-primary pl-5">
          <h2 className="text-xl font-semibold">Quick Links</h2>
        </div>
        <div className="space-y-3">
          {/* <div className="space-y-2">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="logo"
                className="max-w-[4rem]"
              />
              <Link to={`/insights/articles/${articles[0].slug}`}>
                <p className="text-sm text-primary">{articles[0].title}</p>
              </Link>
            </div>
            <p className="text-sm">{articles[0].date}</p>
          </div> */}
        </div>
      </div>
      <div className="space-y-10">
        <div className="border-l-2 border-primary pl-5">
          <h2 className="text-xl font-semibold">
            Subscribe to Our Newsletter
          </h2>
        </div>
        <div className="space-y-3">
          <p className="text-sm">
            Subscribe to receive regular updates from TechForCharity
          </p>
          <div className="flex items-center bg-[#20417d] rounded-md">
            <input
              type="text"
              className="w-full px-4 text-white border-0 outline-none bg-transparent"
              placeholder="Email Address"
            />
            <div className="bg-[#ed3103] py-3 px-6 rounded-r-md">
              <svg
                className="text-white w-5 h-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480v-83.6c0-4 1.5-7.8 4.2-10.7l167.6-182.9c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8l-88.3-44.2C7.1 311.3.3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-700 px-10 sm:px-24 py-4 text-xs text-white flex items-center justify-between">
      <p>© 2023 TechForCharity. All Rights Reserved</p>
      <Link href="#">
        <p>Privacy Policy</p>
      </Link>
    </div>
  </footer>
  )
}

export default Footer