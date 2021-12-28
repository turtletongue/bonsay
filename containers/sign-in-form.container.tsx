import Button from '../components/button.component';
import InputGroup from '../components/input-group.component';
import Input from '../components/input.component';
import Label from '../components/label.component';
import UnderlineLink from '../components/underline-link.component';

export const SignInForm = () => {
  return (
    <InputGroup className='w-64 sm:w-96 flex justify-center items-center my-16 mx-auto rounded-lg py-4'>
      <div>
        <div className='my-4'>
          <Label htmlFor='login' className='mb-2'>
            Email
          </Label>
          <Input name='login' type='text' className='w-52 sm:w-60' />
        </div>
        <div className='my-4'>
          <Label htmlFor='password' className='mb-2'>
            Пароль
          </Label>
          <Input name='password' type='password' className='w-52 sm:w-60' />
        </div>
        <Button className='w-60 mt-6'>ВОЙТИ</Button>
        <div className='flex text-sm mt-4'>
          <span className='mr-2'>Нет аккаунта?</span>
          <UnderlineLink href='/sign-up'>Зарегистрироваться</UnderlineLink>
        </div>
      </div>
    </InputGroup>
  );
};

export default SignInForm;
