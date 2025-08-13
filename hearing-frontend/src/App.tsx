import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import ProfilePage from './pages/ProfilePage';
import DonePage from './pages/DonePage';
import AuthPage from './pages/AuthPage';
import { useAppDispatch, useAppSelector } from './hooks';
import { checkUserSession } from './features/auth/authSlice';
// import MyFormPage from './pages/MyFormPage';
import VideoPlayerPage from './pages/VideoPlayerPage';
import GroupedFormsPage from './pages/MyFormPage';

function App() {
  const dispatch = useAppDispatch();
  const { isAuthenticated, loading, profile } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              isAuthenticated
                ? profile?.full_name && profile?.age
                  ? <Navigate to="/done" />
                  : <Navigate to="/profile" />
                : <Navigate to="/login" />
            }
          />
          <Route
            path="login"
            element={isAuthenticated ? <Navigate to="/" /> : <AuthPage />}
          />
          <Route
            path="profile"
            element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />}
          />
          <Route
            path="done"
            element={isAuthenticated ? <DonePage /> : <Navigate to="/login" />}
          />
          <Route path="/form-group/:groupId" element={<GroupedFormsPage />} />

          <Route path="/videos" element={<VideoPlayerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
