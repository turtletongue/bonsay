import Label from '../components/label.component';
import SignUpFormPasswordConfirmationInput from '../components/sign-up-form-password-confirmation-input.component';

export const SignUpFormPasswordConfirmationSection = () => {
  return (
    <div className="mt-4">
      <Label htmlFor="password" className="mb-2">
        Введите пароль ещё раз
      </Label>
      <SignUpFormPasswordConfirmationInput />
    </div>
  );
};

export default SignUpFormPasswordConfirmationSection;
