'use client'

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import Image from 'next/image'
import { Fragment } from 'react'

import { CarProps } from '@/types'
import { generateCarImageUrl } from '@/utils'

interface CardDetailsProps {
  isOpen: boolean
  closeModal: () => void
  car: CarProps
}

export function CardDetails({ isOpen, closeModal, car }: CardDetailsProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel
                  className="relative flex max-h-[90vh] w-full max-w-lg transform flex-col gap-5
                    overflow-y-auto rounded-2xl bg-white p-6 text-left shadow-xl transition-all"
                >
                  <button
                    type="button"
                    onClick={closeModal}
                    className="bg-primary-blue-100 absolute right-2 top-2 z-10 w-fit rounded-full p-2"
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex flex-1 flex-col gap-3">
                    <div className="bg-pattern relative h-40 w-full rounded-lg bg-cover bg-center">
                      <Image
                        src={generateCarImageUrl(car)}
                        alt="car model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>

                    <div className="flex gap-3">
                      {['29', '33', '13'].map((angle) => (
                        <div
                          key={angle}
                          className="bg-primary-blue-100 relative h-24 w-full flex-1 rounded-lg"
                        >
                          <Image
                            src={generateCarImageUrl(car, angle)}
                            alt="car model"
                            fill
                            priority
                            className="object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-2">
                    <h2 className="text-xl font-semibold capitalize">
                      {car.make} {car.model}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex w-full justify-between gap-5 text-right"
                        >
                          <h4 className="text-grey capitalize">
                            {key.split('_').join(' ')}
                          </h4>
                          <p className="text-black-100 font-semibold">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
