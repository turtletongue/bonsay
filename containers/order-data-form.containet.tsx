import Input from '../components/input.component';
import OrderSummary from './order-summary.container';

export const AddressForm = () => {
  return (
    <div className='grid grid-cols-1 gap-4 justify-center'>
      <div className='text-2xl text-center text-primary text-nunito my-3'>
        Детали заказа
      </div>
      <div className='flex flex-col'>
        <div className='text-primary'>
          ФИО <span className='text-red'>*</span>
        </div>
        <div className='flex flex-col sm:flex-row my-2'>
          <Input className='mr-2 my-1 w-52' type='text' placeholder='Имя' />
          <Input className='mr-2 my-1 w-52' type='text' placeholder='Фамилия' />
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='text-primary'>
          Адрес <span className='text-red'>*</span>
        </div>
        <div>
          <div className='flex flex-col sm:flex-row my-2'>
            <Input className='mr-2 my-1 w-52' type='text' placeholder='Город' />
            <Input className='mr-2 my-1 w-52' type='text' placeholder='Улица' />
          </div>
          <div className='flex flex-col sm:flex-row my-2'>
            <Input className='mr-2 my-1 w-52' type='text' placeholder='Дом' />
            <Input
              className='mr-2 my-1 w-52'
              type='text'
              placeholder='Почтовый индекс'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='text-primary'>
          Номер телефона <span className='text-red'>*</span>
        </div>
        <div className='flex flex-col sm:flex-row my-2'>
          <Input className='mr-2 w-52' type='text' placeholder='+79050335910' />
        </div>
      </div>
      <OrderSummary />
    </div>
  );
};

export default AddressForm;
