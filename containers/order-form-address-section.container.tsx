import OrderFormCityInput from '../components/order-form-city-input.component';
import OrderFormHouseInput from '../components/order-form-house-input.component';
import OrderFormPostcodeInput from '../components/order-form-postcode-input.component';
import OrderFormStreetInput from '../components/order-form-street-input.component';

export const OrderFormAddressSection = () => {
  return (
    <div className="flex flex-col">
      <div className="text-primary">
        Адрес <span className="text-red">*</span>
      </div>
      <div>
        <div className="flex flex-col sm:flex-row my-2">
          <OrderFormCityInput />
          <OrderFormStreetInput />
        </div>
        <div className="flex flex-col sm:flex-row my-2">
          <OrderFormHouseInput />
          <OrderFormPostcodeInput />
        </div>
      </div>
    </div>
  );
};

export default OrderFormAddressSection;
