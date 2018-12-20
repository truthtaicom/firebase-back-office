import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';
import { compose } from 'recompose'
import { CircularProgress } from '@material-ui/core';

const styles = theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class LoginForm extends React.Component {

  state = {
    email: '',
    password: ''
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  isValid  = () => this.state.email && this.state.password

  render() {
    const { classes, loading, error } = this.props;
    const { email, password } = this.state;
    const isInValid = email === '' && password === ''
    return (
      <form className={classes.form} onSubmit={this.onSubmit}>
        <FormControl margin="normal" error={isInValid || !!error} required fullWidth>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.onChange} />
        </FormControl>
        <FormControl margin="normal" error={isInValid || !!error} required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input name="password" type="password" id="password" autoComplete="current-password"  onChange={this.onChange} />
        </FormControl>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={loading}
        >
          { loading ? <CircularProgress size={24} /> : 'Login' }
        </Button>
      </form>
    );
  }
}

export default compose(withStyles(styles))(LoginForm);