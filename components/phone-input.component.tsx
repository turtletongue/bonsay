import { ChangeEventHandler } from 'react';

import formatPhone from '@utils/format-phone';

interface PhoneInputProps {
  className?: string;
  value?: string;
  setPhone: (phone: string) => void;
}

export const PhoneInput = ({ className, value, setPhone }: PhoneInputProps) => {
  const onPhoneChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setPhone(formatPhone(event.target.value));

  return (
    <div className={`flex ${className}`}>
      <span className="inline-flex items-center px-3 text-sm text-gray bg-white rounded-l-md border border-r-0 border-gray">
        +7
      </span>
      <input
        type="text"
        className="rounded-none rounded-r-lg form-control relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-gray bg-white bg-clip-padding border border-solid focus:bg-white focus:ring-green-700 focus:border-secondary border-gray"
        placeholder="(xxx) xxx-xxxx"
        value={value}
        onChange={onPhoneChange}
      />
    </div>
  );
};

export default PhoneInput;
