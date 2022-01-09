import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from '../hooks';
import {
  selectEmail,
  setEmail,
  selectPassword,
  setPassword,
  login,
  clear,
  selectError,
} from '../store/sign-in/sign-in.slice';
import { selectIsAuthenticated } from '../store/core/core.slice';
import Button from '../components/button.component';
import InputGroup from '../components/input-group.component';
import Input from '../components/input.component';
import Label from '../components/label.component';
import UnderlineLink from '../components/underline-link.component';

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

  const email = useAppSelector(selectEmail);
  const changeEmail = (event) => {
    dispatch(setEmail(event.target.value));
  };

  const password = useAppSelector(selectPassword);
  const changePassword = (event) => {
    dispatch(setPassword(event.target.value));
  };

  const error = useAppSelector(selectError);

  const signIn = () => {
    dispatch(login({ email, password }));
  };

  return (
    <InputGroup className="w-64 sm:w-96 flex justify-center items-center my-16 mx-auto rounded-lg py-4">
      <div className="relative">
        {error && (
          <div className="absolute text-sm text-red -top-6 text-center w-full">
            Неправильный логин или пароль
          </div>
        )}
        <div className="my-4">
          <Label htmlFor="login" className="mb-2">
            Email
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
            Пароль
          </Label>
          <Input
            name="password"
            type="password"
            className="w-52 sm:w-60"
            value={password}
            onChange={changePassword}
          />
        </div>
        <Button className="w-60 mt-6" onClick={signIn}>
          ВОЙТИ
        </Button>
        <div className="flex text-sm mt-4">
          <span className="mr-2">Нет аккаунта?</span>
          <UnderlineLink href="/sign-up">Зарегистрироваться</UnderlineLink>
        </div>
      </div>
    </InputGroup>
  );
};

export default SignInForm;
