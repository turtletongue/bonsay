import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from '../hooks';
import {
  clear,
  register,
  selectEmail,
  selectPassword,
  selectPasswordConfirmation,
  selectPasswordsError,
  setEmail,
  setPassword,
  setPasswordConfirmation,
  selectSuccess,
  selectError,
} from '../store/sign-up/sign-up.slice';
import Button from '../components/button.component';
import InputGroup from '../components/input-group.component';
import Input from '../components/input.component';
import Label from '../components/label.component';
import UnderlineLink from '../components/underline-link.component';

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

  const email = useAppSelector(selectEmail);
  const changeEmail = (event) => {
    dispatch(setEmail(event.target.value));
  };

  const password = useAppSelector(selectPassword);
  const changePassword = (event) => {
    dispatch(setPassword(event.target.value));
  };

  const passwordConfirmation = useAppSelector(selectPasswordConfirmation);
  const changePasswordConfirmation = (event) => {
    dispatch(setPasswordConfirmation(event.target.value));
  };

  const passwordsError = useAppSelector(selectPasswordsError);

  const error = useAppSelector(selectError);

  const signUp = () => {
    dispatch(register({ email, password }));
  };

  return (
    <InputGroup className="w-64 sm:w-96 flex justify-center items-center my-16 mx-auto rounded-lg py-4">
      <div className="relative">
        {error && (
          <div className="absolute text-sm text-red -top-6 text-center w-full">
            {error}
          </div>
        )}
        <div className="my-4">
          <Label htmlFor="login" className="mb-2">
            Введите ваш email
          </Label>
          <Input
            name="login"
            type="text"
            className="w-52 sm:w-60"
            value={email}
            onChange={changeEmail}
          />
        </div>
        <div className="my-4">
          <Label htmlFor="password" className="mb-2">
            Придумайте пароль
          </Label>
          <Input
            name="password"
            type="password"
            className="w-52 sm:w-60"
            value={password}
            onChange={changePassword}
            error={passwordsError}
          />
        </div>
        <div className="mt-4">
          <Label htmlFor="password" className="mb-2">
            Введите пароль ещё раз
          </Label>
          <Input
            name="passwordСonfirmation"
            type="password"
            className="w-52 sm:w-60"
            value={passwordConfirmation}
            onChange={changePasswordConfirmation}
            error={passwordsError}
          />
        </div>
        <Button className="w-60 mt-6" onClick={signUp}>
          ЗАРЕГИСТРИРОВАТЬСЯ
        </Button>
        <div className="flex text-sm mt-4">
          <span className="mr-2">Уже есть аккаунт?</span>
          <UnderlineLink href="/sign-in">Войти</UnderlineLink>
        </div>
      </div>
    </InputGroup>
  );
};

export default SignUpForm;
