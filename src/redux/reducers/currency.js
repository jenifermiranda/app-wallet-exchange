const initialState = {
  currencies: [],
};

const currency = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_CURRENCY':
    return {
      ...state,
      curencies: action.payload,
    };
  default:
    return state;
  }
};

export default currency;
