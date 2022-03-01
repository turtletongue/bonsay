import Settings from './settings.container';

import { User } from '../declarations';

interface ProfileScreenProps {
  user: User;
}

export const ProfileScreen = ({ user }: ProfileScreenProps) => {
  return (
    <div className="w-full p-4 min-h-screen">
      <Settings user={user} />
    </div>
  );
};

export default ProfileScreen;
