import styled from 'styled-components';

const theme = {
  background: '#ffffff',
  border: '#e2e3e3',
  primary: '#2196f3',
  hover: '#1976d2',
  radius: '4px',
  spacing: '8px',
  height: '32px',
};

export const Container = styled.div`
  display: flex;
  gap: ${theme.spacing};
  padding: ${theme.spacing};
  background: ${theme.background};
  border-bottom: 1px solid ${theme.border};
`;

export const Input = styled.input`
  height: ${theme.height};
  padding: 0 ${theme.spacing};
  border: 1px solid ${theme.border};
  border-radius: ${theme.radius};
  outline: none;

  &:focus {
    border-color: ${theme.primary};
  }

  &[type='number'] {
    width: 80px;
  }

  &[type='text'] {
    width: 200px;
  }
`;

export const Button = styled.button`
  height: ${theme.height};
  padding: 0 ${theme.spacing};
  background: ${theme.primary};
  color: white;
  border: none;
  border-radius: ${theme.radius};
  cursor: pointer;
  outline: none;

  &:hover {
    background: ${theme.hover};
  }
`;
