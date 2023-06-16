import { Field, Formik } from "formik";
// import { Dispatch, SetStateAction } from "react";
import { Form } from "react-router-dom";
import { FormStepProps } from "../../pages/Create/Create";

// interface FormStep3Props {
//   setActiveStep: Dispatch<SetStateAction<number>>,
// }

function validateAbout(value: string) {
  if (!value) {
    return "Введите текст о себе";
  }
}

export const FormStep3 = ({ setActiveStep }: FormStepProps) => {
  return (
    <div className="step">
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
                className="form__input"
                type="text"
                name="about"
                placeholder="Placeholder"
                as="textarea"
                validate={validateAbout}
              />
              {touched.about && errors.about && (
                <div className="form__error">{errors.about}</div>
              )}
            </div>

            <div className="form__wrapper-button">
              <button
                id="button-next"
                className="form__button back"
                onClick={() => { setActiveStep(1) }}
              >Назад</button>
              <button
                id="button-send"
                type="submit"
                className="form__button next"
              >Отправить</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}