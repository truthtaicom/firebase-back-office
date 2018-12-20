import * as actionTypes from './Register.ActionType'
import Firebase from '../../components/Firebase';

export const registerUserRequest = () => ({
  type: actionTypes.REGISTER_USER_REQUEST
})

export const registerUserSuccess = (data) => ({
  type: actionTypes.REGISTER_USER_SUCCESS,
  data
})

export const registerUserFailure = (error) => ({
  type: actionTypes.REGISTER_USER_FAILURE,
  error
})

export const registerUser = ({ username, email, password, roles = [] }) => {
  return async (dispatch) => {
    dispatch(registerUserRequest())
    try {
      const userInfo = await Firebase.doCreateUserWithEmailAndPassword(email, password)
      await Firebase.user(userInfo.user.uid).set({
        username,
        email,
        roles,
      });

      // await this.props.firebase.doSendEmailVerification();
      dispatch(registerUserSuccess(userInfo))
      window.location.href = '/'
    } catch(error) {
      dispatch(registerUserFailure(error))
    }
  }
}
