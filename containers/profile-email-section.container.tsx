import Label from '@components/label.component';
import ProfileEmailInput from '@components/profile-email-input.component';

export const ProfileEmailSection = () => {
  return (
    <div>
      <Label htmlFor="email" className="font-medium text-secondary mb-2">
        Email
      </Label>
      <ProfileEmailInput />
    </div>
  );
};

export default ProfileEmailSection;
