import { ChangeEventHandler } from 'react';

import RadioInput from '@components/radio-input.component';
import { DisclosureBox } from '@containers/disclosure-box.container';

import { Id, SortType } from '@app/declarations';

interface RadioFilterProps {
  title: string;
  selectedId: Id;
  values: SortType[];
  onChange?: ChangeEventHandler;
}

export const RadioFilter = ({
  title,
  values,
  selectedId,
  onChange,
}: RadioFilterProps) => {
  return (
    <DisclosureBox title={title}>
      <div className="pt-6">
        <div className="space-y-6">
          <div className="flex flex-col">
            {values.map((value) => (
              <RadioInput
                id={value.id.toString()}
                key={value.id}
                title={value.name}
                name={title}
                selected={selectedId === value.id.toString()}
                onChange={onChange}
              />
            ))}
          </div>
        </div>
      </div>
    </DisclosureBox>
  );
};

export default RadioFilter;
