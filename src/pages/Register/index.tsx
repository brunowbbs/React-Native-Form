import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import RegisterComponent from './RegisterComponent';

type argumentType = {
  name: string,
  value: string
}

const Register = () => {

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({})

  const onChange = ({ name, value }: argumentType) => {
    setForm({ ...form, [name]: value });
  }

  const onSubmit = () => {
    //validations
    console.log("Form :>> ", form);

    if (!form.username) {
      setErrors((prev) => {
        return { ...prev, username: 'Please add a username' }
      })
    }

    if (!form.phone) {
      setErrors((prev) => {
        return { ...prev, phone: 'Please add a phone' }
      })
    }

    if (!form.password) {
      setErrors((prev) => {
        return { ...prev, password: 'Please add a password' }
      })
    }


  }


  return (
    <SafeAreaView>
      <RegisterComponent
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        errors={errors}
      />
    </SafeAreaView>
  )
}

export default Register


