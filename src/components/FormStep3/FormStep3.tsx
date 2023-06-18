import './FormStep3.css';
import { Form, Field, Formik, FormikConfig } from 'formik';
import { FormStepProps } from '../../pages/Create/Create';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormValues, formSlice, selectorFormValues } from '../../store/slice/formSlice';
import axios from 'axios';
import { useSelector } from 'react-redux';


const API_URL = 'https://api.sbercloud.ru/content/v1/bootcamp/frontend';

export const FormStep3 = ({ setActiveStep }: FormStepProps) => {
  const [count, setCount] = useState(0);
  const formValues = useSelector(selectorFormValues);

  const dispatch = useDispatch();

  function validateAbout(value: string) {
    setCount(value.length);
    if (!value) {
      return 'Введите текст о себе';
    }
  }
  const onSubmit: FormikConfig<Partial<FormValues>>['onSubmit'] = (values) => {
    dispatch(formSlice.actions.updateFormValues(values));

    axios.post(API_URL, {
      ...formValues,
      ...values
    }).then(({ status }) => {
      if (status !== 200) {
        alert('Ошибка');
        return;
      }
      dispatch(formSlice.actions.doOpenSuccessModal());
    });
  }

  return (
    <div className="step step3">
      <Formik
        initialValues={formValues}
        onSubmit={onSubmit}
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
              <div className="form__count">{count}/200</div>
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
