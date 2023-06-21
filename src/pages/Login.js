import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEmail } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    disabled: true,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });

    const emailValid = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    const { email, password } = this.state;
    const n5 = 5;
    if (emailValid.test(email) && password.length >= n5) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  };

  handleClick = (event) => {
    event.preventDefault();
    const { history, dispatch } = this.props;

    dispatch(addEmail({ ...this.state }));

    history.push('/carteira');
  };

  render() {
    const { email, password, disabled } = this.state;
    return (
      <div>
        <div>Login </div>
        <form>
          <input
            type="email"
            name="email"
            value={ email }
            data-testid="email-input"
            placeholder="Email"
            onChange={ this.handleChange }
          />
          <input
            type="password"
            name="password"
            value={ password }
            data-testid="password-input"
            placeholder="******"
            onChange={ this.handleChange }
          />
          <button disabled={ disabled } onClick={ this.handleClick }>Entrar</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
