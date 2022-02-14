import Label from '../components/label.component';
import SignUpFormEmailInput from '../components/sign-up-form-email-input.component';

export const SignUpFormEmailSection = () => {
  return (
    <div className="my-4">
      <Label htmlFor="login" className="mb-2">
        Введите ваш email
      </Label>
      <SignUpFormEmailInput />
    </div>
  );
};

export default SignUpFormEmailSection;
