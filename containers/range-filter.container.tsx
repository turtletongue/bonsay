import { ChangeEventHandler } from 'react';
import NumberInput from '../components/number-input.component';
import DisclosureBox from './disclosure-box.container';

interface RangeFilterProps {
  title: string;
  min?: number;
  max?: number;
  onMinChange?: ChangeEventHandler;
  onMaxChange?: ChangeEventHandler;
}

export const RangeFilter = ({
  title,
  min = 0,
  max = 100000,
  onMinChange,
  onMaxChange
}: RangeFilterProps) => {
  return (
    <DisclosureBox title={title}>
      <div className='pt-6'>
        <div className='space-y-6'>
          <div className='flex flex-col'>
            <NumberInput
              leftItem='от'
              placeholder={min.toString()}
              value={min}
              onChange={onMinChange}
            />
            <NumberInput
              leftItem='до'
              placeholder={max.toString()}
              value={max}
              onChange={onMaxChange}
            />
          </div>
        </div>
      </div>
    </DisclosureBox>
  );
};

export default RangeFilter;
