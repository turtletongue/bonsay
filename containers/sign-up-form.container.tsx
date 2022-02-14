import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from '../hooks';
import {
  clear,
  selectSuccess,
  selectError,
} from '../store/sign-up/sign-up.slice';
import InputGroup from '../components/input-group.component';
import UnderlineLink from '../components/underline-link.component';
import SignUpFormEmailSection from './sign-up-form-email-section.container';
import SignUpFormPasswordSection from './sign-up-form-password-section.container';
import SignUpFormPasswordConfirmationSection from './sign-up-form-password-confirmation-section.container';
import SignUpButton from '../components/sign-up-button.component';

export const SignUpForm = () => {
  const { push } = useRouter();

  const dispatch = useAppDispatch();

  const success = useAppSelector(selectSuccess);

  useEffect(() => {
    if (success) {
      dispatch(clear());

      push('/');
    }
  }, [dispatch, push, success]);

  const error = useAppSelector(selectError);

  return (
    <InputGroup className="w-64 sm:w-96 flex justify-center items-center my-16 mx-auto rounded-lg py-4">
      <div className="relative">
        {error && (
          <div className="absolute text-sm text-red -top-6 text-center w-full">
            {error}
          </div>
        )}
        <SignUpFormEmailSection />
        <SignUpFormPasswordSection />
        <SignUpFormPasswordConfirmationSection />
        <SignUpButton />
        <div className="flex text-sm mt-4">
          <span className="mr-2">Уже есть аккаунт?</span>
          <UnderlineLink href="/sign-in">Войти</UnderlineLink>
        </div>
      </div>
    </InputGroup>
  );
};

export default SignUpForm;
