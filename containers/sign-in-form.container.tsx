import { useEffect } from 'react';
import { useRouter } from 'next/router';

import InputGroup from '@components/input-group.component';
import UnderlineLink from '@components/underline-link.component';
import SignInButton from '@components/sign-in-button.component';
import SignInFormEmailSection from '@containers/sign-in-form-email-section.container';
import SignInFormPasswordSection from '@containers/sign-in-form-password-section.container';
import { clear, selectError } from '@store/sign-in/sign-in.slice';
import { selectIsAuthenticated } from '@store/core/core.slice';
import { useAppDispatch, useAppSelector } from '@app/hooks';

export const SignInForm = () => {
  const dispatch = useAppDispatch();

  const { push } = useRouter();

  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(clear());

      push('/');
    }
  }, [dispatch, push, isAuthenticated]);

  const error = useAppSelector(selectError);

  return (
    <InputGroup className="w-64 sm:w-96 flex justify-center items-center my-16 mx-auto rounded-lg py-4">
      <div className="relative">
        {error && (
          <div className="absolute text-sm text-red -top-6 text-center w-full">
            Неправильный логин или пароль
          </div>
        )}
        <SignInFormEmailSection />
        <SignInFormPasswordSection />
        <SignInButton />
        <div className="flex text-sm mt-4">
          <span className="mr-2">Нет аккаунта?</span>
          <UnderlineLink href="/sign-up">Зарегистрироваться</UnderlineLink>
        </div>
      </div>
    </InputGroup>
  );
};

export default SignInForm;
