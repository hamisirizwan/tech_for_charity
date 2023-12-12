"use client";

import useMembers from "@/app/hooks/queries/useMembers";
import { User } from "@/types/user";
import React from "react";
import { format } from "date-fns";
import ReactTimeAgo from "react-time-ago";


function MembersTable() {
  const { isLoading, data: members } = useMembers();
  return (
    <section>
      {isLoading ? (
        <h1>loading..</h1>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-6">
          {members.length === 0 ? (
            <p className="text-center py-4 text-gray-700">
              No Members available.
            </p>
          ) : (
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Contact
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Country
                  </th>
                  <th scope="col" className="px-6 py-3">
                    City
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Requested At
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {members
                  .filter((m: User) => !m.is_active)
                  .map((member: User) => (
                    <tr
                      key={member.id}
                      className="bg-white border-b  hover:bg-gray-50"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {member.first_name} {member.last_name}
                      </th>
                      <td className="px-6 py-4">
                        {member.user_roles.length < 1
                          ? "member"
                          : member.user_roles[0].roles.title}
                      </td>
                      <td className="px-6 py-4">
                        {member.phone_number || member.email}
                      </td>
                      <td className="px-6 py-4">{member.country}</td>
                      <td className="px-6 py-4">{member.city}</td>
                      <td className="px-6 py-4">
                    <ReactTimeAgo date={new Date(member.createdAt)} />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-3">

                        <button className="bg-green-100 hover:bg-green-200 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded cursor-pointer">
                          Approve
                        </button>
                        <button className="bg-red-100 hover:bg-red-200 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded cursor-pointer">
                          Reject
                        </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </section>
  );
}

export default MembersTable;
