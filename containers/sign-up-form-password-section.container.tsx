import Label from '../components/label.component';
import SignUpFormPasswordInput from '../components/sign-up-form-password-input.component';

export const SignUpFormPasswordSection = () => {
  return (
    <div className="my-4">
      <Label htmlFor="password" className="mb-2">
        Придумайте пароль
      </Label>
      <SignUpFormPasswordInput />
    </div>
  );
};

export default SignUpFormPasswordSection;
