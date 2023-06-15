import "./Main.css";
import { Formik, Form, Field } from "formik";

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

export const Main = () => {
  return (
    <div className="main">
      <Formik
        initialValues={{
          phone: "",
          email: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ touched, errors }) => (

          <Form className="form">

            <label className="form__description">Номер телефона</label>
            <Field type="phone" name="phone" placeholder="Phone" validate={validatePhone} />
            {touched.phone && errors.phone && (
              <div className="form__error">{errors.phone}</div>
            )}

            <label className="form__description">Email</label>
            <Field type="email" name="email" placeholder="Email" validate={validateEmail} />
            {touched.email && errors.email && (
              <div className="form__error">{errors.email}</div>
            )}

            <button type="submit" className="form__button">Начать</button>

          </Form>

        )}

      </Formik>
    </div>
  )
}