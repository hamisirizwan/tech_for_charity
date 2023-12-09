"use client"

import useModalStore from '@/store/modalSlice'
import React from 'react'

function TopRoleSection() {
    const {toggleRoleCreateModal} = useModalStore()
  return (
    <section className="space-y-1">
    <div className="flex mt-4 w-full justify-between">
      <div>
        <h1 className="text-lg font-bold">User Roles and Permissions</h1>
      </div>
      <button onClick={toggleRoleCreateModal} className="bg-green-500 px-3 py-2 hover:bg-green-400 text-white text-xs rounded-lg cursor-pointer ">
        Create Role
      </button>
    </div>
    <h1 className="text-gray-600">
      Manage User Access by creating permission based roles
    </h1>
  </section>
  )
}

export default TopRoleSection