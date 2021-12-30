import { Disclosure, Transition } from '@headlessui/react';
import { PlusIcon, MinusIcon } from '@heroicons/react/solid';

import { useAppDispatch } from '../hooks';
import { addCategory, removeCategory } from '../store/products/products.slice';
import CheckInput from '../components/check-input.component';

import { Category, Id } from '../declarations';

interface SelectionFilterProps {
  title: string;
  values: Category[];
  selected: Id[];
}

export const SelectionFilter = ({
  title,
  values,
  selected
}: SelectionFilterProps) => {
  const dispatch = useAppDispatch();

  const changeIsSelected = (categoryId: Id, event) => {
    if (event.target.checked) {
      dispatch(addCategory(categoryId));
    } else {
      dispatch(removeCategory(categoryId));
    }
  };

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
            <div className='pt-6'>
              <div className='space-y-6'>
                <div className='flex flex-col'>
                  {values.map((value) => (
                    <CheckInput
                      id={value.id.toString()}
                      key={value.id}
                      title={value.name}
                      selected={selected.includes(value.id.toString())}
                      onChange={(event) => changeIsSelected(value.id, event)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
};

export default SelectionFilter;
