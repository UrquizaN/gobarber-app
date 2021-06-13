import React, { useEffect, useRef } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}

const Button: React.FC<InputProps> = ({name, icon, ...rest}) => {
  const inputElementRef = useRef<any>(null);
  const { registerField, defaultValue, fieldName, error } = useField(name);
  const inputRef = useRef<InputValueReference>({ value: defaultValue });

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref, value){
        inputRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue(){
        inputRef.current.value = ''
        inputElementRef.current.clear();
      }
    });
  }, [fieldName, registerField]);

  return(
    <Container >
      <Icon name={icon} size={20} color="#666360" />
      <TextInput
        placeholderTextColor="#666360"
        keyboardAppearance="dark"
        defaultValue={defaultValue}
        onChangeText={value => inputRef.current.value = value}
        {...rest}
      />
    </Container>
  )
}


export default Button;
