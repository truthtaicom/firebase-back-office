import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';
import { compose } from 'recompose'
import { CircularProgress } from '@material-ui/core';
import * as ROLES from '../../constants/roles'

const styles = theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class RegisterForm extends React.Component {

  state = {
    email: '',
    passwordOne: ''
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { username, email, passwordOne, isAdmin } = this.state;
    const roles = [];
    if (isAdmin) {
      roles.push(ROLES.ADMIN);
    }
    this.props.onSubmit({
      username,
      email,
      password: passwordOne,
      isAdmin
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  isValid  = () => this.state.email && this.state.password

  render() {
    const { classes, loading, error } = this.props;
    const { username, email, passwordOne, passwordTwo } = this.state;
    const isInValid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === '';
  
    return (
      <form className={classes.form} onSubmit={this.onSubmit}>
        <FormControl margin="normal" error={isInValid || !!error} required fullWidth>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input id="username" name="username" autoComplete="username" autoFocus onChange={this.onChange} />
        </FormControl>
        <FormControl margin="normal" error={isInValid || !!error} required fullWidth>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.onChange} />
        </FormControl>
        <FormControl margin="normal" error={isInValid || !!error} required fullWidth>
          <InputLabel htmlFor="passwordOne">Password</InputLabel>
          <Input name="passwordOne" type="password" id="passwordOne" autoComplete="current-password"  onChange={this.onChange} />
        </FormControl>
        <FormControl margin="normal" error={isInValid || !!error} required fullWidth>
          <InputLabel htmlFor="passwordTwo">Repeat Password</InputLabel>
          <Input name="passwordTwo" type="password" id="passwordTwo" autoComplete="repeat-password"  onChange={this.onChange} />
        </FormControl>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={loading}
        >
          { loading ? <CircularProgress size={24} /> : 'Register' }
        </Button>
      </form>
    );
  }
}

export default compose(withStyles(styles))(RegisterForm);