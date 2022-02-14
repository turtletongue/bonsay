import OutlineButton from './outline-button.component';
import {
  clearPasswordFields,
  selectIsPasswordChange,
  togglePasswordChange,
} from '../store/settings/settings.slice';
import { useAppDispatch, useAppSelector } from '../hooks';

export const ProfilePasswordChangeButton = () => {
  const dispatch = useAppDispatch();

  const isPasswordChange = useAppSelector(selectIsPasswordChange);
  const onIsPasswordChangeToggle = () => {
    if (isPasswordChange) {
      dispatch(clearPasswordFields());
    }

    dispatch(togglePasswordChange());
  };

  return (
    <OutlineButton className="mt-6" onClick={onIsPasswordChangeToggle}>
      {isPasswordChange ? 'ОТМЕНИТЬ' : 'ИЗМЕНИТЬ ПАРОЛЬ'}
    </OutlineButton>
  );
};

export default ProfilePasswordChangeButton;
