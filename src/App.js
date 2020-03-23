import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useUser } from './contexts/UserContext'
import FullPageSpinner from './components/FullPageSpinner';

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));

function App() {
  const user = useUser();

  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  )
}

export default App;
