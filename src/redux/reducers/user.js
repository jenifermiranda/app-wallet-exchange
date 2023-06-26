import { ADD_EMAIL } from '../actions';

const initialState = {
  email: '',
};

const user = (state = initialState, { type, payload }) => {
  switch (type) {
  case ADD_EMAIL:
    return {
      email: payload.email,
    };
  default:
    return state;
  }
};

export default user;
