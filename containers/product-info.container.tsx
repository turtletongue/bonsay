import { useRouter } from 'next/router';
import Image from 'next/image';

import Button from '@components/button.component';
import OutlineButton from '@components/outline-button.component';
import SliderDialog from '@components/slider-dialog.component';
import { addProductToCart, selectProductsIds } from '@store/cart/cart.slice';
import LittleImage from '@components/little-image.component';
import { getAgeWord } from '@utils/get-age-word';
import { useAppDispatch, useAppSelector } from '@app/hooks';
import { DEFAULT_PRODUCT_IMAGE } from '@app/variables';

import { Product } from '@app/declarations';
import { useState } from 'react';

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const { push } = useRouter();

  const imageUrls = product.photos.map((photo) => photo.internalPath);

  const [isSliderOpen, setIsSliderOpen] = useState<boolean>(false);
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);

  const dispatch = useAppDispatch();

  const cartProductsIds = useAppSelector(selectProductsIds);

  const addToCart = () => {
    dispatch(addProductToCart(product));
  };

  const navigateToCart = () => {
    push('/cart');
  };

  const openSlider = (index: number) => {
    setCurrentSliderIndex(index);
    setIsSliderOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-2-fill lg:grid-cols-2 grid-auto-flow gap-4 py-2 sm:py-10 px-2 mx-auto">
        <div className="flex flex-col-reverse sm:flex-row justify-center h-full mx-2">
          <div className="flex flex-row sm:flex-col gap-2 sm:h-full max-h-screen justify-center mt-2 sm:mt-0">
            {product.photos.map((photo, index) => (
              <div key={photo.id} className="flex items-center cursor-pointer">
                <LittleImage
                  src={photo.internalPath}
                  alt={product.name}
                  id={photo.id}
                  index={index}
                  onClick={openSlider}
                />
              </div>
            ))}
          </div>
          <div className="relative sm:ml-2">
            <div className="w-full h-full flex justify-center items-center">
              <Image
                src={product.path ? product.path : DEFAULT_PRODUCT_IMAGE}
                width={505}
                height={503}
                alt={product.name}
              />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-lg">
          <div className="flex flex-col sm:flex-row p-2 sm:p-0 items-start sm:items-center justify-between">
            <div className="w-full">
              <div className="flex justify-between w-full">
                <div className="text-lg font-medium text-secondary">
                  {product.name}
                </div>
                <div className="text-center sm:hidden text-sm font-medium text-primary">
                  {product.height} см
                </div>
              </div>
              <div className="flex justify-between w-full">
                <div className="text-gray">
                  {Number(product.price).toLocaleString('ru')} ₽
                </div>
                <div className="text-center sm:hidden text-sm font-medium text-primary">
                  {product.age} лет
                </div>
              </div>
            </div>
            <div className="w-full mt-6 sm:mt-0 flex items-center">
              {cartProductsIds.includes(product.id.toString()) ? (
                <OutlineButton onClick={navigateToCart}>
                  В КОРЗИНЕ
                </OutlineButton>
              ) : (
                <Button onClick={addToCart}>ДОБАВИТЬ В КОРЗИНУ</Button>
              )}
            </div>
          </div>
          <div className="text-sm hidden sm:flex font-medium text-primary w-24 items-center justify-between mt-1">
            <div>{product.height} см</div>
            <div>
              {product.age} {getAgeWord(product.age)}
            </div>
          </div>
          <div className="text-justify my-4 p-2 sm:p-0">
            {product.description}
          </div>
        </div>
      </div>
      <SliderDialog
        isOpen={isSliderOpen}
        setIsOpen={setIsSliderOpen}
        urls={imageUrls}
        currentSliderIndex={currentSliderIndex}
        setCurrenSliderIndex={setCurrentSliderIndex}
      />
    </>
  );
};

export default ProductInfo;
