import OrderFormPhoneInput from '@components/order-form-phone-input.component';

export const OrderFormPhoneSection = () => {
  return (
    <div className="flex flex-col">
      <div className="text-primary">
        Номер телефона <span className="text-red">*</span>
      </div>
      <div className="flex flex-col sm:flex-row my-2">
        <OrderFormPhoneInput />
      </div>
    </div>
  );
};

export default OrderFormPhoneSection;
