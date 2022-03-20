import CheckInput from '@components/check-input.component';
import DisclosureBox from '@containers/disclosure-box.container';
import {
  addCategory,
  removeCategory,
  setPage,
} from '@store/products/products.slice';
import { useAppDispatch } from '@app/hooks';

import { Category, Id } from '@app/declarations';

interface SelectionFilterProps {
  title: string;
  values: Category[];
  selected: Id[];
}

export const SelectionFilter = ({
  title,
  values,
  selected,
}: SelectionFilterProps) => {
  const dispatch = useAppDispatch();

  const changeIsSelected = (categoryId: Id, event) => {
    if (event.target.checked) {
      dispatch(addCategory(categoryId));
    } else {
      dispatch(removeCategory(categoryId));
    }

    dispatch(setPage(1));
  };

  return (
    <DisclosureBox title={title}>
      <div className="pt-6">
        <div className="space-y-6">
          <div className="flex flex-col">
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
    </DisclosureBox>
  );
};

export default SelectionFilter;
