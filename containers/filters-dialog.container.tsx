import { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { AdjustmentsIcon, XIcon } from '@heroicons/react/solid';

import Filters from '@containers/filters.container';

export const FiltersDialog = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () => setIsOpen((isOpen) => !isOpen);
  const close = () => setIsOpen(false);

  return (
    <>
      <AdjustmentsIcon className="h-5 w-5" onClick={toggleIsOpen} />

      <Transition
        show={isOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Dialog open={isOpen} onClose={close} className="fixed z-10 overflow-y-auto left-0 right-0 top-[5rem]">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <div className="bg-white">
            <XIcon className="h-5 w-5 absolute right-0 m-5" onClick={close} />
            <div className="flex justify-center w-full">
              <Filters />
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default FiltersDialog;
