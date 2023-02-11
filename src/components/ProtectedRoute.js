import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const { children, loggedIn } = props;

  if (loggedIn) {
    return children ? children : <Outlet />;
  }
  return <Navigate to="/sign-in" replace />;
};

export default ProtectedRoute;
