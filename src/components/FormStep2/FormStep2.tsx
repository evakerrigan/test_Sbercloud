import './FormStep2.css';
import { Field, Form, Formik, FormikConfig } from 'formik';
import { FormStepProps } from '../../pages/Create/Create';
import { useDispatch } from 'react-redux';
import { FormValues, formSlice } from '../../store/slice/formSlice';
import { FieldAdvantages } from '../FieldAdvantages/FieldAdvantages';

export const FormStep2 = ({ setActiveStep }: FormStepProps) => {

  const dispatch = useDispatch();

  const onSubmit: FormikConfig<Partial<FormValues>>['onSubmit'] = (values) => {
    dispatch(formSlice.actions.updateFormValues(values));
    setActiveStep(2);
  }
  // function validateAdvantages(value: string) {
  //   if (!value) {
  //     return 'Введите значение';
  //   }
  // }

  return (
    <div className="step step2">
      <Formik
        initialValues={{
          advantages: ['', '', ''],
          // advantages1: '',
          // advantages2: '',
          // advantages3: '',
          checked: [],
          picked: '',
        }}
        onSubmit={onSubmit}
      >
        {(form) => (
          <Form className="form">
            <FieldAdvantages
              label={'Advantages'}
              placeholder={'Placeholder'}
              name={'advantages'}
              form={form}
            // validate={validateAdvantages}
            />

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
