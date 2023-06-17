import './FormStep3.css';
import { Form, Field, Formik } from 'formik';
// import { Dispatch, SetStateAction } from "react";
import { FormStepProps } from '../../pages/Create/Create';
import { useState } from 'react';

// interface FormStep3Props {
//   setActiveStep: Dispatch<SetStateAction<number>>,
// }

export const FormStep3 = ({ setActiveStep }: FormStepProps) => {
  const [count, setCount] = useState(0);

  function validateAbout(value: string) {
    setCount(value.length);
    if (!value) {
      return 'Введите текст о себе';
    }
  }

  return (
    <div className="step step3">
      <Formik
        initialValues={{
          about: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ touched, errors }) => (
          <Form className="form">
            <div className="form__wrapper">
              <label className="form__description">About</label>
              <Field
                id="field-about"
                className="form__input about"
                type="text"
                name="about"
                placeholder="Placeholder"
                as="textarea"
                validate={validateAbout}
              />
              {touched.about && errors.about && <div className="form__error">{errors.about}</div>}
              <p>{count}</p>
            </div>

            <div className="form__wrapper-button">
              <button
                id="button-next"
                className="form__button back"
                onClick={() => {
                  setActiveStep(1);
                }}
              >
                Назад
              </button>
              <button id="button-send" type="submit" className="form__button next">
                Отправить
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
