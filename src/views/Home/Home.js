import React from 'react';
import { compose } from 'recompose';
import withAuthorization from '../../components/Auth/withAuthorization';
import { isLogged } from '../../components/Auth'

const Home = () => {
  return (
    <div>
      <div>HOME</div>
    </div>
  )
}

export default compose(
  withAuthorization(isLogged)
)(Home)