import Label from '../components/label.component';
import ProfileNewPasswordInput from '../components/profile-new-password-input.component';
import ProfilePasswordInput from '../components/profile-password-input.component';

export const ProfilePasswordSection = () => {
  return (
    <div>
      <div className="my-4">
        <Label htmlFor="password" className="font-medium text-secondary mb-2">
          Придумайте новый пароль
        </Label>
        <ProfileNewPasswordInput />
      </div>
      <div className="my-4">
        <Label htmlFor="password" className="font-medium text-secondary mb-2">
          Введите новый пароль ещё раз
        </Label>
        <ProfilePasswordInput />
      </div>
    </div>
  );
};

export default ProfilePasswordSection;
