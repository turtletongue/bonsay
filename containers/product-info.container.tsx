import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { useAppDispatch, useAppSelector } from '../hooks';
import {
  increaseProductQty,
  selectProductsIds,
} from '../store/cart/cart.slice';
import { getAgeWord } from '../utils/get-age-word';
import { DEFAULT_IMAGE, DEFAULT_PRODUCT_IMAGE } from '../variables';
import { IMAGE_API_URL } from '../api';
import Button from '../components/button.component';
import LittleImage from '../components/little-image.component';
import OutlineButton from '../components/outline-button.component';

import { Product, Upload } from '../declarations';

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const { push } = useRouter();

  const dispatch = useAppDispatch();

  const cartProductsIds = useAppSelector(selectProductsIds);

  const [photos, setPhotos] = useState<Upload[]>([]);
  const [mainImage, setMainImage] = useState<Upload>(DEFAULT_IMAGE);

  useEffect(() => {
    setPhotos(product.photos || []);

    setMainImage(product.upload || { id: 0, path: product.path });
  }, [product]);

  const changeMainImage = (event) => {
    const selectedImage = photos.find(
      (photo) => photo.id.toString() === event.target.id
    );

    setPhotos((photos) => [...photos, mainImage]);

    setMainImage(selectedImage || DEFAULT_IMAGE);

    setPhotos((photos) =>
      photos.filter(
        (photo) => photo.id.toString() !== selectedImage.id.toString()
      )
    );
  };

  const addToCart = () => {
    dispatch(increaseProductQty(product));
  };

  const navigateToCart = () => {
    push('/cart');
  };

  return (
    <div className="grid grid-cols-2 justify-center items-center grid-auto-flow gap-4 py-2 sm:py-10 px-2">
      <div className="flex flex-col-reverse sm:flex-row justify-center items-center h-full mx-2">
        <div className="flex flex-row sm:flex-col justify-around mx-1 mb-1 sm:h-full max-h-screen mt-1 sm:mt-0">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="flex items-center cursor-pointer mx-1"
              onClick={changeMainImage}
            >
              <LittleImage
                src={IMAGE_API_URL + photo.path}
                alt={product.name}
                id={photo.id}
              />
            </div>
          ))}
        </div>
        <div className="relative">
          <Image
            src={
              mainImage.path
                ? IMAGE_API_URL + mainImage.path
                : DEFAULT_PRODUCT_IMAGE
            }
            width={450}
            height={500}
            alt={product.name}
          />
        </div>
      </div>
      <div className="max-w-lg">
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
                {Number(product.price).toLocaleString()} ₽
              </div>
              <div className="text-center sm:hidden text-sm font-medium text-primary">
                {product.age} лет
              </div>
            </div>
          </div>
          <div className="w-full mt-6 sm:mt-0 flex items-center">
            {cartProductsIds.includes(product.id.toString()) ? (
              <OutlineButton onClick={navigateToCart}>В КОРЗИНЕ</OutlineButton>
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
  );
};

export default ProductInfo;
