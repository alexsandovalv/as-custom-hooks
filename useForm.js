
import { useState } from "react";

const useForm = (initialForm = {}) => {

  const [formState, setFormState] = useState(initialForm);

  const onInputchange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  }
  const onResetForm = () => setFormState(initialForm);
  return {
    ...formState, formState, onInputchange, onResetForm
  }
}

export default useForm
