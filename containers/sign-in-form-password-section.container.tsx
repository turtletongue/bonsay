import Label from '@components/label.component';
import SignInFormPasswordInput from '@components/sign-in-form-password-input.component';

export const SignInFormPasswordSection = () => {
  return (
    <div className="my-4">
      <Label htmlFor="password" className="mb-2">
        Пароль
      </Label>
      <SignInFormPasswordInput />
    </div>
  );
};

export default SignInFormPasswordSection;
