"use client"
import React from 'react'

function TopMembersSection() {
  return (
    <section className="space-y-1">
    <div className="flex mt-4 w-full justify-between">
      <div>
        <h1 className="text-lg font-bold">Organisation Members Management</h1>
      </div>
      <button onClick={()=>{}} className="bg-green-500 px-3 py-2 hover:bg-green-400 text-white text-xs rounded-lg cursor-pointer ">
        Add Member
      </button>
    </div>
    <h1 className="text-gray-600">
      Manage System members
    </h1>
  </section>
  )
}

export default TopMembersSection