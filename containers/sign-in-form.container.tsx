import Button from '../components/button.component';
import InputGroup from '../components/input-group.component';
import Input from '../components/input.component';
import Label from '../components/label.component';

export const SignInForm = () => {
  return (
    <InputGroup className='border-2 border-secondary w-64 sm:w-96 flex justify-center items-center my-20 mx-auto rounded-lg h-96'>
      <div>
        <div className='text-2xl text-center text-primary mb-12 text-nunito'>
          Войдите в аккаунт
        </div>
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
        <Button className='w-60'>ВОЙТИ</Button>
      </div>
    </InputGroup>
  );
};

export default SignInForm;
