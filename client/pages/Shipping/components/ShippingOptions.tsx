import * as React from 'react';

import { IChangableFields } from '../reducers/types';


interface ShippingOptions {
  [key: string]: {
    onSelect: () => void;
  };
}

interface DefaultShippingOptions {
  [key: string]: {
    condition: () => boolean;
  };
}

interface Props {
  currentOption: string;
  totalPrice: number;
  updateField: (field: IChangableFields) => void;
  updatePrice: (price: number) => void;
}

export const ShippingOptions = (props: Props): React.ReactElement => {
  let defaultOption = '';
  const {
    totalPrice,
    updateField,
    updatePrice,
    currentOption,
  } = props;

  const defaultShippingOptions: DefaultShippingOptions = {
    'Free express shipping': {
      condition: () => totalPrice >= 300
    },
    'Free shipping': {
      condition: () => totalPrice < 300
    }
  };

  const shippingOptions: ShippingOptions = {
    'Express shipping - additional 9.99 €': {
      onSelect: () => {
        updatePrice(9.99);
      }
    },
    'Courier shipping - additional 19.99 €': {
      onSelect: () => {
        updatePrice(19.99);
      }
    }
  };

  const setDefaultOption = (): void => {
    let optionKey;

    for (optionKey in defaultShippingOptions) {
      const { condition } = defaultShippingOptions[optionKey];

      if (condition() === true) {
        if ((currentOption in defaultShippingOptions || currentOption === '')
          && currentOption !== optionKey) {
            updateField({ shippingOption: optionKey });
          }

        defaultOption = optionKey;
        break;
      }
    }
  };

  const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { value } = event.target;

    if (value in shippingOptions) {
      shippingOptions[value].onSelect();
    } else {
      updatePrice(0);
    }

    updateField({ shippingOption: event.target.value });
  }

  setDefaultOption();

  return (
    <select className="shipping-options"
      defaultValue={currentOption}
      onChange={selectHandler}>
        <option key="default">
          {defaultOption}
        </option>
        {Object.keys(shippingOptions).map(
          (shippingOption) => (
            <option key={shippingOption}>
              {shippingOption}
            </option>
          )
        )}
    </select>
  );
};
