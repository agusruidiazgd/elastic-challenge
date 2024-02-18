import React, { HTMLInputTypeAttribute } from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputTypeAttribute> {
  label?: string;
  icon?: JSX.Element;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
}
