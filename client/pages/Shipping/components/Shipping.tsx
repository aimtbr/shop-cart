import * as React from 'react';
import isEmail from 'validator/lib/isEmail';

import { shippingOptions } from '../config/options';
import { ShippingFields, IShipping } from '../reducers/types';

import '../style/shipping';


interface Props extends IShipping {
  totalPrice: number;
  saveField: (field: ShippingFields) => void;
}

type IChangeEvent<T = HTMLInputElement | HTMLSelectElement> = React.ChangeEvent<T>;


const Shipping = (props: Props): React.ReactElement => {
  const {
    saveField,
    name,
    address,
    phone,
    email,
    totalPrice,
    ready,
  } = props;
  let { shippingOptions: currentShippingOption } = props;

  if (currentShippingOption === '') {
    const { free, express } = shippingOptions.default;
    currentShippingOption = totalPrice > 300 ? express : free;
  }

  const fieldChangeHandler = (
      event: IChangeEvent,
      validate?: (value: string) => boolean
    ): void => {
      const { value, name } = event.target;

      if (validate === undefined || validate(value)) {
        saveField({ [name]: value });
      } else {
        highlightInvalid(event);
      }
    };

  const highlightInvalid = (event: IChangeEvent): void => {
    event.target.style.boxShadow = '0px 0px 3px 1px #ff0000';
  };

  const fillShippingOptions = (): React.ReactElement[] => {
    const options = Object.entries(shippingOptions)
      .reduce(
        (accumulator: React.ReactElement[], [key, value]) => {
          let option = (
            <option key={key}>
              {value}
            </option>
          );

          if (key === 'default') {
            option = (
              <option key={key}>
                {value}
              </option>
            );
          }

          accumulator.push(option);
          return accumulator;
        }, []);

    return options;
  };

  const formIsReady = (): boolean => {
    const allFieldsAreValid = Object.values(ready).every((field) => field === true);

    return allFieldsAreValid;
  };

  const onSubmitHandler = (): void => {
    alert('Thank you for your purchase');
  };

  return (
    <div className="shipping">
      <form onSubmit={onSubmitHandler}>
        <label className="shipping-name-field-label-required">
          Name<span className="required-field">*</span>
          <input name="name" className="shipping-name-field"
            placeholder="John Brown" type="text" required
            defaultValue={name}
            />
        </label>

        <label className="shipping-address-field-label">
          Address<span className="required-field">*</span>
          <input name="address" className="shipping-address-field"
            type="text" defaultValue={address} required/>
        </label>

        <label className="shipping-phone-field-label">
          Phone
          <input name="phone" className="shipping-phone-field"
            placeholder="+380" type="tel" maxLength={13}
            pattern="+380[0-9]{9}" defaultValue={phone}/>
        </label>

        <label className="shipping-email-field-label">
          E-mail
          <input name="email" className="shipping-email-field"
            type="email" defaultValue={email}
            onChange={(event: IChangeEvent) => (
              fieldChangeHandler(event, isEmail)
            )}/>
        </label>

        <label className="shipping-options">
          Shipping options
          <select name="shippingOptions"
            defaultValue={currentShippingOption}
            onChange={(event: IChangeEvent) => {
              fieldChangeHandler(event);
            }}>
            {fillShippingOptions()}
          </select>
        </label>
      </form>
      <div className="shipping-pay-button-wrapper">
        <button className="shipping-pay-button" disabled={!formIsReady()}
          type="submit">PAY</button>
      </div>
    </div>
  );
};

export default Shipping;
