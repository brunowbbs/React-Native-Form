import React from 'react'
import { View, Text } from 'react-native'
import Button from '../../../components/Button';
import Input from '../../../components/Input'

type RegisterProps = {
  onSubmit: Function,
  onChange: Function,
  form: object,
  errors: ErrorProps
}

export type ErrorProps = {
  username: string,
  phone: string,
  password: string,
}


const RegisterComponent = ({ onSubmit, onChange, errors }: RegisterProps) => {
  return (
    <View style={{ padding: 20 }}>

      <Input
        label="Username"
        placeholder="Enter Username"
        onChangeText={(value: string) => {
          onChange({ name: 'username', value })
        }}
        error={errors.username}
      />

      <Input
        label="Phone"
        placeholder="Enter Phone"
        onChangeText={(value: string) => {
          onChange({ name: 'phone', value })
        }}
        error={errors.phone}
      />

      <Input
        label="Password"
        icon={<Text>HIDE</Text>}
        iconPosition="right"
        placeholder="Enter Password"
        secureTextEntry={true}
        onChangeText={(value: string) => {
          onChange({ name: 'password', value })
        }}
        error={errors.password}
      />


      <Button secondary title="Submit" onPress={onSubmit} />
    </View>
  )
}

export default RegisterComponent
