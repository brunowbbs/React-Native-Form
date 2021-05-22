import React, {useState} from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Button from './src/components/Button';
import Input from './src/components/Input';

const App = () => {
  const [name, setName] = useState<string | undefined>();

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        enabled={true}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled" //fechando teclado ao clicar fora
          >
            <View>
              <Text>Cadastro de Usuário</Text>
            </View>
            <View>
              <Input
                label="Nome"
                placeholder="Digite um nome"
                keyboardType="default"
                value={name}
                setValue={setName}
              />
              <Input
                label="Email"
                placeholder="Digite um nome"
                keyboardType="email-address"
                value={name}
                setValue={setName}
              />
              <Input
                label="Telefone"
                placeholder="Digite um nome"
                keyboardType="email-address"
                value={name}
                setValue={setName}
              />
              <Input
                label="Telefone"
                placeholder="Digite um nome"
                keyboardType="email-address"
                value={name}
                setValue={setName}
              />
              <Input
                label="Telefone"
                placeholder="Digite um nome"
                keyboardType="email-address"
                value={name}
                setValue={setName}
              />
            </View>

            <Button text="Cadastrar" onPress={() => alert('ok')} />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
