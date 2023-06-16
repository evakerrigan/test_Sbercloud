import "./FormStep1.css";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { FormStepProps } from "../../pages/Create/Create";
// import Select from 'react-select';
// import { FormControl, MenuItem, Select, SelectChangeEvent,} from '@mui/material';

function validateNickName(value: string) {
  if (!value) {
    return "Введите никнейм";
  } else if (value.length <= 3) {
    return "Никнейм должен состоять из 3 символов";
  }
}
function validateName(value: string) {
  if (!value) {
    return "Введите Имя";
  } else if (value.length <= 3) {
    return "Имя должно состоять из 3 символов";
  }
}
function validateSurName(value: string) {
  if (!value) {
    return "Введите Фамилию";
  } else if (value.length <= 3) {
    return "Фамилия должна состоять из 3 символов";
  }
}
function validateSex(value: string) {
  if (value === 'null') {
    return "Выберите пол";
  }
}

export const FormStep1 = ({ setActiveStep }: FormStepProps) => {

  // const sexOptions = [
  //   { value: 'null', label: 'Не выбран' },
  //   { value: 'man', label: 'man' },
  //   { value: 'woman', label: 'woman' },
  // ];

  // const customStyles = {
  //   control: (provided) => ({
  //     ...provided,
  //     '& select__indicator-separator': {
  //       display: 'none',
  //     },
  //     width: 200,
  //   }),
  // };


  return (
    <div className="step">
      <Formik
        initialValues={{
          nickname: "",
          name: "",
          surname: "",
          sex: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          setActiveStep(1);
        }}
      >
        {({ touched, errors }) => (

          <Form className="form">

            <div className="form__wrapper">
              <label className="form__description">Nickname</label>
              <Field id="field-nickname" className="form__input" type="nickname" name="nickname" placeholder="Placeholder" validate={validateNickName} />
              {touched.nickname && errors.nickname && (
                <div className="form__error">{errors.nickname}</div>
              )}
            </div>

            <div className="form__wrapper">
              <label className="form__description">Name</label>
              <Field id="field-name" className="form__input" type="name" name="name" placeholder="Placeholder" validate={validateName} />
              {touched.name && errors.name && (
                <div className="form__error">{errors.name}</div>
              )}
            </div>

            <div className="form__wrapper">
              <label className="form__description">Surname</label>
              <Field id="field-surname" className="form__input" type="surname" name="surname" placeholder="Placeholder" validate={validateSurName} />
              {touched.surname && errors.surname && (
                <div className="form__error">{errors.surname}</div>
              )}
            </div>

            <div className="form__wrapper">
              <label className="form__description">Sex</label>
              <Field id="field-sex" className="form__input" type="sex" name="sex" validate={validateSex} as="select">
                <option value="null">Не выбран</option>
                <option id="field-sex-option-man" value="man">Man</option>
                <option id="field-sex-option-woman" value="woman">Woman</option>
              </Field>
              {/* <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={sexOptions[0]}
                styles={customStyles}
                name="color"
                options={sexOptions}
              /> */}
              {touched.sex && errors.sex && (
                <div className="form__error">{errors.sex}</div>
              )}
            </div>
            <div className="form__wrapper-button">
              <Link id="button-back" className="form__button back" to="/">Назад</Link>
              <button
                id="button-next"
                type="submit"
                className="form__button next"
              >Далее</button>
            </div>

          </Form>

        )}

      </Formik>
    </div>
  )
}