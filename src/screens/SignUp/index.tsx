import React, { useRef } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/logo.png';

import {Container, Title, BackToSignIn, BackToSignInText} from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null)
  const passwordInputRef = useRef<TextInput>(null)

  const navigation = useNavigation();

  return(
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={ Platform.OS === 'ios' ? 'padding' : undefined }
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}
        >
          <Container>
            <Image source={logoImg} />
            <Title>Criar uma conta</Title>

            <Form ref={formRef} onSubmit={(data) => {console.log(data)}}>
              <Input
                name="name"
                icon="user"
                placeholder="Nome"
                autoCapitalize="words"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}
              />
              <Input
                ref={emailInputRef}
                name="email"
                icon="mail"
                placeholder="Email"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                returnKeyType="send"
                secureTextEntry
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
            </Form>
            <Button onPress={() => {formRef.current?.submitForm()}}>Cadastrar</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignIn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackToSignInText>Voltar para logon</BackToSignInText>
      </BackToSignIn>
    </>
  )
}

export default SignUp;
