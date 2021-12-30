import { ReactNode } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/solid';

interface DisclosureBoxProps {
  title: string;
  children?: ReactNode;
}

export const DisclosureBox = ({ title, children }: DisclosureBoxProps) => {
  return (
    <Disclosure as='div' defaultOpen={true}>
      {({ open }) => (
        <div className='px-4 py-4 mr-10 w-52'>
          <h3 className='-mx-2 -my-3 flow-root'>
            <Disclosure.Button className='px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500'>
              <span className='font-medium text-gray'>{title}</span>
              <span className='ml-6 flex items-center'>
                {open ? (
                  <MinusIcon className='h-5 w-5' aria-hidden='true' />
                ) : (
                  <PlusIcon className='h-5 w-5' aria-hidden='true' />
                )}
              </span>
            </Disclosure.Button>
          </h3>
          <Transition
            show={open}
            enter='transition-opacity duration-75'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity duration-150'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            {children}
          </Transition>
        </div>
      )}
    </Disclosure>
  );
};

export default DisclosureBox;
