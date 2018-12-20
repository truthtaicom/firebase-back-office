import React, { Suspense, lazy } from 'react';
import { Loading } from '../Loading';

export function withLazyComponent(Component) {
  return props => {
    return (
      <Suspense fallback={<Loading />}>
        <Component {...props} />
      </Suspense>
    )
  };
}

const lazyComponent = (fn) => withLazyComponent(lazy(fn))
export default lazyComponent