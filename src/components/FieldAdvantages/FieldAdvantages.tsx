import { Field, FieldArray, FieldConfig, FormikState } from 'formik';
import './FieldAdvantages.css';
import { FC } from 'react';

interface FieldAdvantagesProps extends FieldConfig<string> {
  label: string;
  placeholder: string;
  form: FormikState<Record<string, any>>;
}

export const FieldAdvantages: FC<FieldAdvantagesProps> = ({
  label, placeholder, validate, name,
  form: {
    values
  }
  // touched, errors
}) => {
  const options: string[] = (values && values[name]) ? values[name] as [] : [];

  return (
    <div className="form__advantages">
      <label className="form__description">{label}</label>
      <FieldArray
        name={name}
        render={(helpers) => (
          <div>
            <ul className="step2__list-text">
              {/* @ts-ignore */}
              {options.length > 0 && values[name]?.map((_item, index) => (
                <li className="step2__wrapper" key={`${index}`}>
                  <Field
                    id={`field-${name}-${index + 1}`}
                    key={`${index}`}
                    className="form__input advantages"
                    type="text"
                    name={`${name}.${index}`}
                    placeholder={placeholder}
                    validate={validate}
                  />
                  <button type="button" id="button-remove-1" className="advantages-delete"
                    onClick={() => helpers.remove(index)}
                  ></button>
                  {/* {touched.advantages1 && errors.advantages1 && (
                      <div className="form__error">{errors.advantages1}</div>
                    )} */}
                </li>
              ))}
            </ul>
            <button type='button' id="button-add" className="step2__button-add"
              onClick={() => helpers.push('')} >
              +
            </button>
          </div>
        )}
      />



    </div>
  );
}