import React from "react";
import { Role } from "@/types/roles";
import ReactTimeAgo from "react-time-ago";
import { Disclosure } from "@headlessui/react";

interface RolesTableProps {
  roles: Role[];
}

function RolesTable({ roles }: RolesTableProps) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-6">
      {roles.length === 0 ? (
        <p className="text-center py-4 text-gray-700">No roles available.</p>
      ) : (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <Disclosure>
                <tr
                  key={role.id}
                  className="bg-white border-b  hover:bg-gray-50"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {role.title}
                  </th>
                  <td className="px-6 py-4">{role.description}</td>
                  <td className="px-6 py-4">
                    <ReactTimeAgo date={new Date(role.createdAt)} />
                  </td>
                  <td className="px-6 py-4">
                    <Disclosure.Button className="py-2">
                      <button className="bg-green-100 hover:bg-green-200 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded cursor-pointer">
                        View Permissions
                      </button>
                    </Disclosure.Button>
                  </td>
                </tr>
                <Disclosure.Panel className="text-gray-300 px-6 py-4 ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {role.role_permissions.map((module) => (
            <div key={module.module}>
              <h3 className="font-semibold mb-2">{module.module}</h3>
              <div className="flex flex-wrap">
                {module.permissions.map((permission) => (
                  <span
                    key={permission}
                    className="bg-green-500 text-white px-2 py-1 rounded-full text-xs m-1"
                  >
                    {permission}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
                </Disclosure.Panel>
              </Disclosure>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default RolesTable;
