import { ChangeEventHandler } from 'react';

import Input from '@components/input.component';
import { selectEmail, setEmail } from '@store/settings/settings.slice';
import { useAppDispatch, useAppSelector } from '@app/hooks';

export const ProfileEmailInput = () => {
  const dispatch = useAppDispatch();

  const email = useAppSelector(selectEmail);
  const onEmailChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setEmail(event.target.value));
  };

  return (
    <Input
      name="email"
      type="text"
      className="w-full"
      value={email}
      onChange={onEmailChange}
    />
  );
};

export default ProfileEmailInput;
