import { ChangeEventHandler } from 'react';
import formatPhone from '../utils/format-phone';

import Input from './input.component';

interface PhoneInputProps {
  className?: string;
  value?: string;
  setPhone: (phone: string) => void;
}

export const PhoneInput = ({ className, value, setPhone }: PhoneInputProps) => {
  const onPhoneChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setPhone(formatPhone(event.target.value));

  return (
    <Input
      className={className}
      type="text"
      value={value}
      onChange={onPhoneChange}
    />
  );
};

export default PhoneInput;
