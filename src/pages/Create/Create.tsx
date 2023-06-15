import { FormStep1 } from "../../components/FormStep1/FormStep1"
import { Stepper } from "../../components/Stepper/Stepper"

export const Create = () => {
  return (
    <div className="create">
      <Stepper />
      <FormStep1 />
    </div>
  )
}