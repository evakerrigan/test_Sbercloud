import { useNavigate } from 'react-router-dom';
import './FormMain.css';
import { Formik, Form, Field, FieldProps } from 'formik';
import { useSelector } from 'react-redux';
import TextMaskInput from 'react-text-mask';
import { selectorUserInfo } from '../../store/slice/userInfoSlice';

function validatePhone(value: string) {
  const digits = value.match(/\d/g);
  if (!value) {
    return 'Введите номер телефона';
  } else if (digits?.length !== 11) {
    return 'Номер телефона должен состоять из 11 цифр';
  }
}
function validateEmail(value: string) {
  if (!value) {
    return 'Введите email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Неверный email';
  }
}

export const FormMain = () => {
  const navigate = useNavigate();
  const initialValues = useSelector(selectorUserInfo);

  console.log('initialValues', initialValues);


  function createPhoneNumberMask() {
    return [
      '+',
      '7',
      ' ',
      '(',
      /\d/,
      /\d/,
      /\d/,
      ')',
      ' ',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
    ];
  }

  return (
    <div className="main">
      <Formik
        initialValues={{
          phone: initialValues.phone || '',
          email: initialValues.email || '',
        }}
        onSubmit={(values) => {
          console.log(values);
          navigate('/create');
        }}
      >
        {({ touched, errors }) => (
          <Form className="form">
            <div className="form__wrapper">
              <label className="form__description">Номер телефона</label>
              <Field name="phone" validate={validatePhone}>
                {({ field }: FieldProps<string>) => (
                  <TextMaskInput
                    {...field}
                    mask={createPhoneNumberMask()}
                    placeholder="Phone"
                    className="form__input"
                    disabled
                  />
                )}
              </Field>
              {touched.phone && errors.phone && <div className="form__error">{errors.phone}</div>}
            </div>

            <div className="form__wrapper">
              <label className="form__description">Email</label>
              <Field
                className="form__input"
                type="email"
                name="email"
                placeholder="Email"
                validate={validateEmail}
                disabled
              />
              {touched.email && errors.email && <div className="form__error">{errors.email}</div>}
            </div>

            <button id="button-start" type="submit" className="form__button next">
              Начать
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
