const initialState = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_EXPENSE':
    return {
      ...state,
      currencies: action.payloa,
    };
  default:
    return state;
  }
};

export default wallet;
