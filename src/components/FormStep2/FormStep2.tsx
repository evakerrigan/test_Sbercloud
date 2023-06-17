import './FormStep2.css';
import { Field, Form, Formik } from 'formik';
import { FormStepProps } from '../../pages/Create/Create';
// import { useDispatch } from "react-redux";
// import { addAdvantSlice } from '../../store/addAdvantSlice';


export const FormStep2 = ({ setActiveStep }: FormStepProps) => {

  // const dispatch = useDispatch();

  // function addAdvantageRedux() {
  //   dispatch(addAdvantSlice({ ' ' }));
  // }


  return (
    <div className="step step2">
      <Formik
        initialValues={{
          advantages1: '',
          advantages2: '',
          advantages3: '',
          checked: [],
          picked: '',
        }}
        onSubmit={(values) => {
          console.log(values);
          setActiveStep(2);
        }}
      >
        {({ touched, errors }) => (
          <Form className="form">
            <label className="form__description">Advantages</label>
            <ul className="step2__list-text">
              <li className="step2__wrapper">
                <Field
                  id="field-advantages-1"
                  className="form__input advantages"
                  type="text"
                  name="advantages1"
                  placeholder="Placeholder"
                />
                <div id="button-remove-1" className="advantages-delete"></div>
              </li>
              <li className="step2__wrapper">
                <Field
                  id="field-advantages-2"
                  className="form__input advantages"
                  type="text"
                  name="advantages2"
                  placeholder="Placeholder"
                />
                <div id="button-remove-2" className="advantages-delete"></div>
              </li>
              <li className="step2__wrapper">
                <Field
                  id="field-advantages-3"
                  className="form__input advantages"
                  type="text"
                  name="advantages3"
                  placeholder="Placeholder"
                />
                <div id="button-remove-3" className="advantages-delete"></div>
              </li>
            </ul>

            <div id="button-add" className="step2__button-add" 
            // onClick={() => { addAdvantageRedux() }}
            >
              +
            </div>

            <div id="checkbox-group" className="checkbox__title">
              Checkbox group
            </div>
            <div role="group" aria-labelledby="checkbox-group">
              <label className="form__checkbox">
                <Field
                  id="field-checkbox-group-option-1"
                  type="checkbox"
                  name="checked"
                  value="1"
                />
                1
              </label>
              <label className="form__checkbox">
                <Field
                  id="field-checkbox-group-option-2"
                  type="checkbox"
                  name="checked"
                  value="2"
                />
                2
              </label>
              <label className="form__checkbox">
                <Field
                  id="field-checkbox-group-option-3"
                  type="checkbox"
                  name="checked"
                  value="3"
                />
                3
              </label>
            </div>

            <div id="my-radio-group" className="radio__title">
              Radio group
            </div>
            <div role="group" aria-labelledby="my-radio-group">
              <label className="form__radio">
                <Field id="field-radio-group-option-1" type="radio" name="picked" value="1" />1
              </label>
              <label className="form__radio">
                <Field id="field-radio-group-option-2" type="radio" name="picked" value="2" />2
              </label>
              <label className="form__radio">
                <Field id="field-radio-group-option-3" type="radio" name="picked" value="3" />3
              </label>
            </div>

            {touched.advantages1 && errors.advantages1 && (
              <div className="form__error">{errors.advantages1}</div>
            )}

            <div className="form__wrapper-button">
              <button
                id="button-back"
                className="form__button back"
                onClick={() => {
                  setActiveStep(0);
                }}
              >
                Back
              </button>
              <button id="button-next" type="submit" className="form__button next">
                Далее
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
