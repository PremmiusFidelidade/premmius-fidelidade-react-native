import React from 'react';
import { TouchableOpacityProps, Text } from 'react-native';
import * as S from './Button.styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: Props) {

  return (
    <S.Container {...rest} >
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}