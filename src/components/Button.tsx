import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: 'delete' | 'edit' | 'add' | 'save';
}

const ButtonStyle = (props: ButtonProps) => {
  switch (props.buttonType) {
    case 'delete':
      return `
          background-color: #bd1b1b;
        `;
    case 'edit':
      return `
          background-color: #ff9696;
        `;

    case 'add':
      return `
          background-color: #c5d43d;
        `;
    case 'save':
      return `
          background-color: #72fa3d;
        `;
    default:
      return '';
  }
};

const MyButton = styled.button<ButtonProps>`
  padding: 12px 24px;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  ${ButtonStyle}
`;

const Button = ({ buttonType, children, onClick }: ButtonProps) => {
  return (
    <MyButton buttonType={buttonType} onClick={onClick}>
      {children}
    </MyButton>
  );
};

Button.defaultProps = {
  type: 'default',
};
export default Button;
