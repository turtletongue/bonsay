import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';

interface SliderDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => unknown;
  urls: string[];
  currentSliderIndex: number;
  setCurrenSliderIndex: (setter: (currentIndex: number) => number) => unknown;
}

export const SliderDialog = ({
  isOpen,
  setIsOpen,
  urls,
  currentSliderIndex,
  setCurrenSliderIndex,
}: SliderDialogProps) => {
  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <div className="relative bg-white mx-auto p-1">
            <div className="relative h-[80vw] w-[75vw] sm:h-[35vw] sm:w-[30vw]">
              <Image
                src={urls[currentSliderIndex]}
                className="select-none"
                layout="fill"
                alt="Slide"
              />
            </div>
            <button className="absolute border-0 top-[45%] left-2 w-10 h-10 text-white rounded-full bg-secondary opacity-30 hover:opacity-40 cursor-pointer p-1">
              <ArrowLeftIcon
                className="opacity-30 hover:opacity-100"
                onClick={() =>
                  setCurrenSliderIndex((currentIndex) =>
                    currentIndex - 1 >= 0 ? currentIndex - 1 : urls.length - 1
                  )
                }
              />
            </button>
            <button className="absolute border-0 top-[45%] right-2 w-10 h-10 text-white rounded-full bg-secondary opacity-30 hover:opacity-40 cursor-pointer p-1">
              <ArrowRightIcon
                className="opacity-30 hover:opacity-100"
                onClick={() =>
                  setCurrenSliderIndex((currentIndex) =>
                    currentIndex + 1 < urls.length ? currentIndex + 1 : 0
                  )
                }
              />
            </button>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SliderDialog;
