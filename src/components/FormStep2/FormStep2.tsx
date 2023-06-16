import "./FormStep2.css";
import { Field, Form, Formik } from "formik";
import { FormStepProps } from "../../pages/Create/Create";

export const FormStep2 = ({ setActiveStep }: FormStepProps) => {
  return (
    <div className="step">
      <Formik
        initialValues={{
          advantages1: "",
          advantages2: "",
          advantages3: "",
          checked: [],
          picked: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ touched, errors }) => (

          <Form className="form">

            <label className="form__description">Advantages</label>
            <ul className="step2__list-text">
              <li className="step2__wrapper">
                <Field id="field-advantages-1" className="form__input advantages" type="text" name="advantages1" placeholder="Placeholder" />
                <div id="button-remove-1" className="advantages-delete"></div>
              </li>
              <li className="step2__wrapper">
                <Field id="field-advantages-2" className="form__input advantages" type="text" name="advantages2" placeholder="Placeholder" />
                <div id="button-remove-1" className="advantages-delete"></div>
              </li>
              <li className="step2__wrapper">
                <Field id="field-advantages-3" className="form__input advantages" type="text" name="advantages3" placeholder="Placeholder" />
                <div id="button-remove-1" className="advantages-delete"></div>
              </li>
            </ul>

            <div className="step2__button-add">+</div>

            <div id="checkbox-group">Checkbox group</div>
            <div role="group" aria-labelledby="checkbox-group">
              <label className="form__checkbox">
                <Field type="checkbox" name="checked" value="One" />
                1
              </label>
              <label className="form__checkbox">
                <Field type="checkbox" name="checked" value="Two" />
                2
              </label>
              <label className="form__checkbox">
                <Field type="checkbox" name="checked" value="Three" />
                3
              </label>
            </div>

            <div id="my-radio-group">Radio group</div>
            <div role="group" aria-labelledby="my-radio-group">
              <label className="form__radio">
                <Field type="radio" name="picked" value="1" />
                1
              </label>
              <label className="form__radio">
                <Field type="radio" name="picked" value="2" />
                2
              </label>
              <label className="form__radio">
                <Field type="radio" name="picked" value="3" />
                3
              </label>
            </div>


            {touched.advantages1 && errors.advantages1 && (
              <div className="form__error">{errors.advantages1}</div>
            )}

            <div className="form__wrapper-button">
              <button
                id="button-next"
                className="form__button back"
                onClick={() => { setActiveStep(0) }}
              >Назад</button>
              <button
                id="button-next"
                type="submit"
                className="form__button next"
                onClick={() => { setActiveStep(2) }}
              >Далее</button>
            </div>

          </Form>

        )}

      </Formik>
    </div>
  )
}