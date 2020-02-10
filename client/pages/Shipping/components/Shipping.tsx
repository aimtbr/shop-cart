import * as React from 'react';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';

import { ShippingOptions } from './ShippingOptions';
import {
  IChangableFields,
  IShipping,
  IReadiness,
} from '../reducers/types';
import { isName, isAddress } from '../../../helpers/validations';

import '../style/shipping';


interface Props extends IShipping {
  totalPrice: number;
  updateField: (field: IChangableFields) => void;
  changeReady: (field: IReadiness) => void;
  updatePrice: (price: number) => void;
  resetField: (field: keyof IChangableFields) => void;
}

type IChangeEvent<T = HTMLInputElement | HTMLSelectElement> = React.ChangeEvent<T>;


const Shipping = (props: Props): React.ReactElement => {
  const {
    updateField,
    changeReady,
    updatePrice,
    resetField,
    name,
    address,
    phone,
    email,
    totalPrice,
    ready,
    shippingOption: currentOption,
  } = props;

  const fieldChangeHandler = (
      event: IChangeEvent,
      validate: (value: string) => boolean
    ): void => {
      const { value, name } = event.target;
      const isValid = validate(value);

      if (isValid) {
        highlightValid(event);
        updateField({ [name]: value });
      } else {
        resetField(name as keyof IChangableFields);
        highlightInvalid(event);
      }

      changeReady({ [name]: isValid });
    };

  const highlightInvalid = (event: IChangeEvent): void => {
    const { classList } = event.target;

    if (classList.contains('valid')) {
      classList.remove('valid');
    }

    classList.add('invalid');
  };

  const highlightValid = (event: IChangeEvent): void => {
    const { classList } = event.target;

    if (classList.contains('invalid')) {
      classList.remove('invalid');
    }

    event.target.classList.add('valid');
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
      <form className="shipping-form" onSubmit={onSubmitHandler}>
        <div className="shipping-field">
          <label className="shipping-field-label">
            Name<span className="required-field">*</span>
          </label>
          <input name="name" className="shipping-input-field"
            placeholder="John Brown" type="text"
            required defaultValue={name}
            onChange={(event: IChangeEvent) => {
              fieldChangeHandler(event, isName);
            }}
          />
        </div>
        <div className="shipping-field">
          <label className="shipping-field-label">
            Address<span className="required-field">*</span>
          </label>
          <input name="address" className="shipping-input-field"
            type="text" defaultValue={address} required
            placeholder="Ukraine, Kiev, Kievska, Shevchenko"
            onChange={(event: IChangeEvent) => {
              fieldChangeHandler(event, isAddress);
            }}
          />
        </div>
        <div className="shipping-field">
          <label className="shipping-field-label">
            Phone
          </label>
          <input name="phone" className="shipping-input-field"
            placeholder="+380" type="tel" maxLength={13}
            defaultValue={phone}
            onChange={(event: IChangeEvent) => {
              fieldChangeHandler(event, (value) => isMobilePhone(value, 'uk-UA'));
            }}
          />
        </div>
        <div className="shipping-field">
          <label className="shipping-field-label">
            E-mail
          </label>
          <input name="email" className="shipping-input-field"
            type="email" defaultValue={email}
            onChange={(event: IChangeEvent) => (
              fieldChangeHandler(event, isEmail)
            )}
          />
        </div>
        <div className="shipping-field">
          <label className="shipping-field-label">
            Shipping options
          </label>
          <ShippingOptions
            totalPrice={totalPrice}
            updateField={updateField}
            updatePrice={updatePrice}
            currentOption={currentOption}
          />
        </div>
      </form>
      <div className="shipping-pay-button-wrapper">
        <button className="shipping-pay-button" disabled={!formIsReady()}
          type="submit">PAY</button>
      </div>
    </div>
  );
};

export default Shipping;
