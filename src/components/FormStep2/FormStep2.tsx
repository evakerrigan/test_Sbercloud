import './FormStep2.css';
import { Field, Form, Formik, FormikConfig } from 'formik';
import { FormStepProps } from '../../pages/Create/Create';
import { useDispatch, useSelector } from 'react-redux';
import { FormValues, formSlice, selectorFormValues } from '../../store/slice/formSlice';
import { FieldAdvantages } from '../FieldAdvantages/FieldAdvantages';
import * as Yup from 'yup';

const checkboxSchema = Yup.object().shape({
  checked: Yup.array().min(1, 'At least one option must be selected'),
});

const radioSchema = Yup.object().shape({
  picked: Yup.string().required('At least one option must be selected'),
});

const validationSchema = Yup.object().concat(checkboxSchema).concat(radioSchema);

export const FormStep2 = ({ setActiveStep }: FormStepProps) => {

  const dispatch = useDispatch();

  const formValues = useSelector(selectorFormValues);

  const onSubmit: FormikConfig<Partial<FormValues>>['onSubmit'] = (values) => {
    dispatch(formSlice.actions.updateFormValues(values));
    setActiveStep(2);
  }

  return (
    <div className="step step2">
      <Formik
        initialValues={formValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(form) => (
          <Form className="form">
            <FieldAdvantages
              label={'Advantages'}
              placeholder={'Placeholder'}
              name={'advantages'}
              form={form}
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
              {form.errors.checked && form.touched.checked && (
                <div className="form__error" style={{ position: 'relative' }}>{form.errors.checked}</div>
              )}
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
              {form.errors.picked && form.touched.picked && (
                <div className="form__error" style={{ position: 'relative' }}>{form.errors.picked}</div>
              )}
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
