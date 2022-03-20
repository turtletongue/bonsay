import Settings from '@containers/settings.container';

import { User } from '@app/declarations';

interface ProfileScreenProps {
  user: User;
}

export const ProfileScreen = ({ user }: ProfileScreenProps) => {
  return (
    <div className="w-full p-4">
      <Settings user={user} />
    </div>
  );
};

export default ProfileScreen;
