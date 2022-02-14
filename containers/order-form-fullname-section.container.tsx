import OrderFormFirstnameInput from '../components/order-form-firstname-input.component';
import OrderFormLastnameInput from '../components/order-form-lastname-input.component';

export const OrderFormFullnameSection = () => {
  return (
    <div className="flex flex-col">
      <div className="text-primary">
        ФИО <span className="text-red">*</span>
      </div>
      <div className="flex flex-col sm:flex-row my-2">
        <OrderFormFirstnameInput />
        <OrderFormLastnameInput />
      </div>
    </div>
  );
};

export default OrderFormFullnameSection;
