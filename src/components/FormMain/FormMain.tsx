// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./FormMain.css";
import { Formik, Form, Field } from "formik";
import { useSelector } from "react-redux";
import { IState, InitialState } from '../../store/initialSlice';


function validatePhone(value: string) {
  if (!value) {
    return "Введите номер телефона";
  } else if (value.length !== 11) {
    return "Номер телефона должен состоять из 11 цифр";
  }
}
function validateEmail(value: string) {
  if (!value) {
    return "Введите email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return "Неверный email";
  }
}

export const FormMain = () => {

  const navigate = useNavigate();
  // const initialPhone = useSelector(selectorInitial);
  const startData = useSelector<IState>((state) => state.initialS) as InitialState;

  return (
    <div className="main">

      <Formik
        initialValues={{
          phone: startData.phone,
          email: startData.email,
        }}
        onSubmit={(values) => {
          console.log(values);
          navigate("/create");
        }}
      >
        {({ touched, errors }) => (

          <Form className="form">

            <div className="form__wrapper">
              <label className="form__description">Номер телефона</label>
              <Field
                className="form__input"
                type="text"
                name="phone"
                placeholder="Phone"
                validate={validatePhone}
                disabled
              />
              {touched.phone && errors.phone && (
                <div className="form__error">{errors.phone}</div>
              )}
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
              {touched.email && errors.email && (
                <div className="form__error">{errors.email}</div>
              )}
            </div>

            <button id="button-start" type="submit" className="form__button next">Начать</button>

          </Form>

        )}

      </Formik>
    </div>
  )
}