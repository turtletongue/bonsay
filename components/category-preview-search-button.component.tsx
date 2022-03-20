import UnderlineLink from '@components/underline-link.component';
import { useAppDispatch } from '@app/hooks';
import { sortByOneCategory } from '@store/products/products.slice';

import { Id } from '@app/declarations';

interface CategoryPreviewSearchButtonProps {
  id: Id;
}

export const CategoryPreviewSearchButton = ({
  id,
}: CategoryPreviewSearchButtonProps) => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(sortByOneCategory(String(id)));
  };

  return (
    <div onClick={onClick}>
      <UnderlineLink href="/catalog">Найти в каталоге</UnderlineLink>
    </div>
  );
};

export default CategoryPreviewSearchButton;
