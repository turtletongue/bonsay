export interface OrderState {
  fullname: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    house: string;
    postcode: string;
  };
  phone: string;
}
