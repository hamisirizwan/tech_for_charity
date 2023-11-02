import useJoiningDialogStore from "@/store/joiningDialogStore";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import toast from 'react-hot-toast';

export default function RegistrationModal() {
  const { isOpen, closeDialog } = useJoiningDialogStore((state) => state);
  const [userData, setUserData] = useState({
    first_name: "",
    last_name:"",
    phone:""
  })

  function handleSubmit() {
    const {phone, first_name, last_name} = userData
    if(!phone || !first_name || !last_name){
        return toast.error("fill in all details")
    }
    closeDialog();
    toast.success(`Your joining request has been sent to our admins, You will be contacted and approved once your orientation is done`, {
        duration: 6000,
    });
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={()=>{}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center justify-between border-b py-4 rounded-t ">
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-medium leading-6 text-gray-900"
                    >
                      Join The Humanity Family
                    </Dialog.Title>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                      onClick={() => closeDialog()}
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                     Its not just an Organisation, Its a home. Welcome to the family
                    </p>
                  </div>

{/* form goes here */}

<div className="relative mb-4">
                    <label
                      htmlFor="phone"
                      className="leading-7 text-sm text-gray-600"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      onChange={(e)=>setUserData({...userData,[e.target.name]:e.target.value})}
                      value={userData.first_name}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="phone"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      onChange={(e)=>setUserData({...userData,[e.target.name]:e.target.value})}
                      value={userData.last_name}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div><div className="relative mb-4">
                    <label
                      htmlFor="phone"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      onChange={(e)=>setUserData({...userData,[e.target.name]:e.target.value})}
                      value={userData.phone}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-300 px-8 py-2 text-sm font-medium text-secondary hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 tracking-wider"
                      onClick={handleSubmit}
                    >
                      Send Request
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
