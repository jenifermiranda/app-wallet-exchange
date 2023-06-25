import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

const emailInput = 'email-input';

describe('Testa a página de login', () => {
  it('Testa se a página possui o campo de email', () => {
    renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByTestId(emailInput);
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });

  it('Testa se a página possui o campo de senha', () => {
    renderWithRouterAndRedux(<App />);

    const inputSenha = screen.getByTestId('password-input');
    expect(inputSenha).toBeInTheDocument();
    expect(inputSenha.type).toBe('password');
  });

  it('Testa se a página possui um botao de `entrar`', () => {
    renderWithRouterAndRedux(<App />);
    const button = screen.getByRole('button', { name: 'Entrar' });

    expect(button).toBeInTheDocument();
    expect(button.type).toBe('button');
    expect(button).toHaveTextContent('Entrar');
  });

  it('Testa se o botao de `entrar` está desabilitado quando é digitado um email e uma senha invalidos', () => {
    renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByTestId(emailInput);
    userEvent.type(inputEmail, 'testeAgmail.com');

    const inputSenha = screen.getByTestId(emailInput);
    userEvent.type(inputSenha, '12345');

    const button = screen.getByRole('button', { name: 'Entrar' });

    expect(button).toBeDisabled();
  });

  it('Testa se o botao de `entrar` é habilitado quando é digitado um email e uma senha validos', async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByTestId(emailInput);
    const inputSenha = screen.getByTestId(emailInput);
    const button = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(inputEmail, 'teste@gmail.com');
    userEvent.type(inputSenha, '1234567');
    userEvent.click(button);

    act(() => {
      history.push('/carteira');
    });
    expect(history.location.pathname).toBe('/carteira');
  });

  it('Testa se o usuário é direcionado para a página `carteira` depois de fazer o login corretamente', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const validEmail = 'email@valido.com';
    const validPassword = '1234567';

    const inputEmail = screen.getByTestId(emailInput);
    const inputSenha = screen.getByTestId('password-input');
    const button = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(inputEmail, validEmail);
    userEvent.type(inputSenha, validPassword);
    userEvent.click(button);
    expect(history.location.pathname).toBe('/carteira');
  });
});
