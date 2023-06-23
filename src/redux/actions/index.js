import moeda from '../../helper/currencyAPI';

export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_CURRENCY = 'ADD_CURRENCY';
export const ADD_ERROR = 'ADD_ERROR';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const CAL_EXPENSE = 'CAL_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  payload: email,
});

export const addCurrency = (currency) => ({
  type: ADD_CURRENCY,
  payload: currency,
});

export const addError = (erro) => ({
  type: ADD_ERROR,
  erro,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  id,
});

export const editExpense = (expense) => ({
  type: EDIT_EXPENSE,
  expense,
});

export const currencyThunk = () => {
  return async (dispatch) => {
    try {
      const coins = await moeda();
      const array = Object.keys(coins).filter((item) => item !== 'USDT');
      dispatch(addCurrency(array));
    } catch (error) {
      dispatch(addError(error));
    }
  };
};

export const expensesThunk = (form) => {
  return async (dispatch) => {
    try {
      const coins = await moeda();
      const formExpenses = {
        ...form,
        exchangeRates: coins,
      };
      dispatch(addExpense(formExpenses));
    } catch (error) {
      dispatch(addError(error));
    }
  };
};
