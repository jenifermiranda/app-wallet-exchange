const initialState = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_CURRENCY':
    return {
      ...state,
      currencies: action.payload,
    };
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case 'DELETE_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== Number(action.payload)),
    };
  default:
    return state;
  }
};

export default wallet;
