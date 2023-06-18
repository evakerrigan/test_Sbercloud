import { Field } from 'formik';
import './Advantage.css';

export const Advantage = () => {
  return (
    <li className="step2__wrapper">
      <Field
        id="field-advantages-1"
        className="form__input advantages"
        type="text"
        name="advantages1"
        placeholder="Placeholder"
      />
      <div id="button-remove-1" className="advantages-delete"></div>
      {touched.advantages1 && errors.advantages1 && (
        <div className="form__error">{errors.advantages1}</div>
      )}
    </li>
  );
}