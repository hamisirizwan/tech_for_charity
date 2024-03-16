import usePaymentProccessingDialogStore from "@/store/paymentProcessingDialogStore";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function ValidatingPaymentModal() {
  const { isOpen } = usePaymentProccessingDialogStore();

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
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
                <Dialog.Panel className="flex flex-col items-center gap-4 justify-center w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    PROCESSING PAYMENT
                  </Dialog.Title>
                  <div className="mt-2 space-y-4">
                    <div className="flex space-x-2 justify-center items-center bg-white ">
                      <span className="sr-only">Loading...</span>
                      <div className="h-6 w-6 bg-black rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <div className="h-6 w-6 bg-black rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <div className="h-6 w-6 bg-black rounded-full animate-bounce" />
                    </div>

                    <p className="text-sm text-gray-500">
                      validating payment...
                    </p>
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
