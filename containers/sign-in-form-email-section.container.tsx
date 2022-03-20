import Label from '@components/label.component';
import SignInFormEmailInput from '@components/sign-in-form-email-input.component';

export const SignInFormEmailSection = () => {
  return (
    <div className="my-4">
      <Label htmlFor="login" className="mb-2">
        Email
      </Label>
      <SignInFormEmailInput />
    </div>
  );
};

export default SignInFormEmailSection;
