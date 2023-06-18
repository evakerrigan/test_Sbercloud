import { Field, FieldConfig, FormikState } from 'formik';
import './FieldAdvantages.css';
import { FC } from 'react';
import { FormValues } from '../../store/slice/formSlice';

interface FieldAdvantagesProps extends FieldConfig<string>, Partial<FormikState<FormValues>> {
  label: string;
  placeholder: string;
}

export const FieldAdvantages: FC<FieldAdvantagesProps> = ({
  label, placeholder, validate, name,
  // touched, errors
}) => {
  return (
    <div>
      <label className="form__description">{label}</label>
      <ul className="step2__list-text">
        <li className="step2__wrapper">
          <Field
            id="field-advantages-1"
            className="form__input advantages"
            type="text"
            name={name}
            placeholder={placeholder}
            validate={validate}
          />
          <div id="button-remove-1" className="advantages-delete"></div>
          {/* {touched.advantages1 && errors.advantages1 && (
            <div className="form__error">{errors.advantages1}</div>
          )} */}
        </li>
      </ul>

      <div id="button-add" className="step2__button-add" >
        +
      </div>
    </div>
  );
}