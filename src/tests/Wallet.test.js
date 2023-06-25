import React from 'react';
import { getByTestId, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Testa a página de carteira', () => {
  it('Testa se a página mostra o email do usuário', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    act(() => {
      history.push('/carteira');
    });
    const email = screen.getByTestId('email-field');
    expect(email).toBeInTheDocument();
  });

  it('Testa se a página mostra as despesas totais', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    act(() => {
      history.push('/carteira');
    });
    const despesa = screen.getByTestId('total-field');
    expect(despesa).toBeInTheDocument();
  });
  it('Testa se a pagina mostra o valor em BRL', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    act(() => {
      history.push('/carteira');
    });
    const brl = screen.getByTestId('header-currency-field');
    expect(brl).toBeInTheDocument();
  });
  it('Testa se a página possui um botão `adicionar despesa`', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    act(() => {
      history.push('/carteira');
    });
    const despesaBtn = screen.getByRole('button', { name: /adicionar despesa/i });
    expect(despesaBtn).toBeInTheDocument();
    expect(despesaBtn.type).toBe('button');
    expect(despesaBtn).toHaveTextContent(/adicionar despesa/i);
  });
});

describe('Testa o formulário da página', () => {
  it('Testa se existe o campo `Valor`', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    act(() => {
      history.push('/carteira');
    });
    const valorInput = screen.getByTestId('value-input');
    expect(valorInput).toBeInTheDocument();
  });
  it('Testa se existe o campo `Moeda`', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    act(() => {
      history.push('/carteira');
    });
    const moedaInput = screen.getByTestId('currency-input');
    expect(moedaInput).toBeInTheDocument();
  });
  it('Testa se existe o campo `Método de Pagamento`', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    act(() => {
      history.push('/carteira');
    });
    const metodoInput = screen.getByTestId('method-input');
    expect(metodoInput).toBeInTheDocument();
  });
  it('Testa se existe o campo `Tag`', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    act(() => {
      history.push('/carteira');
    });
    const tagInput = screen.getByTestId('tag-input');
    expect(tagInput).toBeInTheDocument();
  });
  it('Testa se existe o campo `Descrição`', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    act(() => {
      history.push('/carteira');
    });
    const descriptionInput = screen.getByTestId('description-input');
    expect(descriptionInput).toBeInTheDocument();
  });
});

describe('Testa a funcionalidade da página', () => {
  it('Testa se, ao adicionar uma despesa, o campo `despesa total` é atualizado', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    act(() => {
      history.push('/carteira');
    });
    const despesa = screen.getByTestId('total-field');
    const valorInput = screen.getByTestId('value-input');
    const despesaBtn = screen.getByRole('button', { name: /adicionar despesa/i });

    userEvent.type(valorInput, '10');
    userEvent.click(despesaBtn);

    expect(despesa).toHaveTextContent('Despesa Total: 47,89');
  });
});
