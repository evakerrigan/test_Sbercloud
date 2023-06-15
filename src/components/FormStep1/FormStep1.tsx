import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";

function validateNickName(value: string) {
  if (!value) {
    return "Введите никнейм";
  } else if (value.length !== 3) {
    return "Никнейм должен состоять из 3 символов";
  }
}
function validateName(value: string) {
  if (!value) {
    return "Введите Имя";
  } else if (value.length !== 3) {
    return "Имя должно состоять из 3 символов";
  }
}
function validateSurName(value: string) {
  if (!value) {
    return "Введите Фамилию";
  } else if (value.length !== 3) {
    return "Фамилия должна состоять из 3 символов";
  }
}
function validateSex(value: string) {
  if (!value) {
    return "Выберите пол";
  }
}

export const FormStep1 = () => {
  return (
    <div>
      <Formik
        initialValues={{
          nickname: "",
          name: "",
          surname: "",
          sex: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ touched, errors }) => (

          <Form className="form">

            <div className="form__wrapper">
              <label className="form__description">Nickname</label>
              <Field className="form__input" type="nickname" name="nickname" placeholder="Nickname" validate={validateNickName} />
              {touched.nickname && errors.nickname && (
                <div className="form__error">{errors.nickname}</div>
              )}
            </div>

            <div className="form__wrapper">
              <label className="form__description">Name</label>
              <Field className="form__input" type="name" name="name" placeholder="Name" validate={validateName} />
              {touched.name && errors.name && (
                <div className="form__error">{errors.name}</div>
              )}
            </div>

            <div className="form__wrapper">
              <label className="form__description">Surname</label>
              <Field className="form__input" type="surname" name="surname" placeholder="Surname" validate={validateSurName} />
              {touched.surname && errors.surname && (
                <div className="form__error">{errors.surname}</div>
              )}
            </div>

            <div className="form__wrapper">
              <label className="form__description">Sex</label>
              <Field className="form__input" type="name" name="name" placeholder="Name" validate={validateSex} />
              {touched.name && errors.name && (
                <div className="form__error">{errors.name}</div>
              )}
            </div>

            <button id="button-start" type="submit" className="form__button back">Назад</button>
            <Link className="form__button back" to="/">Назад 2</Link>
            <button id="button-start" type="submit" className="form__button forward">Далее</button>

          </Form>

        )}

      </Formik>
    </div>
  )
}