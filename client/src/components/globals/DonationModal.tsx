import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function DonationModal() {
  let [isOpen, setIsOpen] = useState(true);
  let [Amount, setAmount] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState(null);


  const handleSelectAmount = (amount:any) => {
    setSelectedAmount(amount);
    setAmount(amount);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const amounts: number[] = [100, 200, 300, 500, 1000];
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Donate For Humanity
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Make your humble donation to help the less privilaged in
                      the society
                    </p>
                  </div>

                  <div className="mt-2">
                    <p className="text-sm text-gray-700 font-bold">
                     select or enter amount of your choice
                    </p>
                  </div>

                  <div className="grid grid-cols-6 gap-2 py-4 sm:grid-cols-4">
                    {amounts.map((amount, index) => 
                        amount === selectedAmount ? (
                            
                                <div className="bg-primary text-white 
                                text-sm font-medium px-1 py-2 rounded text-center cursor-pointer" onClick={() => handleSelectAmount(amount)}>
                                  {amount}
                                </div>
                              
                        ):(
                            <div className="bg-gray-100 text-gray-800 hover:bg-primary hover:text-white
                            text-sm font-medium px-1 py-2 rounded text-center cursor-pointer" onClick={() => handleSelectAmount(amount)}>
                              {amount}
                            </div>
                          )
                    )}
                  </div>

                  <div className="relative mb-4">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Amount
                    </label>
                    <input
                      type="number"
                      name="email"
                      value={Amount}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-300 px-8 py-2 text-sm font-medium text-secondary hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 tracking-wider"
                      onClick={closeModal}
                    >
                      Donate
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
