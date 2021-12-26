import { useState } from 'react';

import OutlineButton from '../components/outline-button.component';
import Button from '../components/button.component';
import Input from '../components/input.component';
import Label from '../components/label.component';

export const Settings = () => {
  const [isPasswordChange, setIsPasswordChange] = useState<boolean>(false);

  const togglePasswordChange = () =>
    setIsPasswordChange((isPasswordChange) => !isPasswordChange);

  return (
    <div className='w-96 mx-auto my-16'>
      <div>
        <Label htmlFor='email' className='font-medium text-secondary mb-2'>
          Email
        </Label>
        <Input name='email' type='text' className='w-full' />
      </div>
      {isPasswordChange && (
        <div>
          <div className='my-4'>
            <Label
              htmlFor='password'
              className='font-medium text-secondary mb-2'
            >
              Введите текущий пароль
            </Label>
            <Input name='password' type='password' className='w-full' />
          </div>
          <div className='my-4'>
            <Label
              htmlFor='password'
              className='font-medium text-secondary mb-2'
            >
              Придумайте новый пароль
            </Label>
            <Input name='password' type='password' className='w-full' />
          </div>
          <div className='my-4'>
            <Label
              htmlFor='password'
              className='font-medium text-secondary mb-2'
            >
              Введите новый пароль ещё раз
            </Label>
            <Input
              name='passwordConfirmation'
              type='password'
              className='w-full'
            />
          </div>
        </div>
      )}
      <div className='mt-4'>
        <OutlineButton className='mt-2' onClick={togglePasswordChange}>
          {isPasswordChange ? 'ОТМЕНИТЬ' : 'ИЗМЕНИТЬ ПАРОЛЬ'}
        </OutlineButton>
        <Button>СОХРАНИТЬ</Button>
      </div>
    </div>
  );
};

export default Settings;
