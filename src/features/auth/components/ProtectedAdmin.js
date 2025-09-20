import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLoggedInUser } from '../authSlice';
import { selectUserInfo } from '../../user/userSlice';

function ProtectedAdmin({ children }) {
  const user = useSelector(selectLoggedInUser);
  const userInfo = useSelector(selectUserInfo);

  console.log('ProtectedAdmin - user:', user);
  console.log('ProtectedAdmin - userInfo:', userInfo);
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Wait for userInfo to be fetched before deciding
  // if (userInfo === undefined) {
  //   return <div>Loading...</div>; // Or a proper spinner/loader
  // }

  // if (userInfo.role !== 'admin') {
  //   return <Navigate to="/" replace />;
  // }

  return children;
}

export default ProtectedAdmin;
