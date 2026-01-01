import { Content, Creator, Reader } from './features/index';
import { About, Home } from './pages/index';
import {Login, Register} from "./auth/index"

import {Navbar} from './components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import  useAuthCheck  from './hooks/useAuthCheck';
import ProtectedRoute from './auth/protectedRoute';

import ContentDetails from "./features/content/ContentDetails";
import UserLayout from "./features/user/UserLayout";
import AdminLayout from "./features/admin/AdminLayout";
import CreatorProfile from "./features/creator/CreatorProfile";
import ReaderProfile from "./features/reader/ReaderProfile";

function App() {

  useAuthCheck();

  return (

    
    <>
        <Router>
            <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>

              <Route path="/content" element={<Content/>}/>
              <Route path="/content/:id" element={<ContentDetails/>}/>

              <Route
                path="/user/*"
                element={
                  <ProtectedRoute>
                    <UserLayout/>
                  </ProtectedRoute>
                }
                >
                  <Route
                    path="reader/*"
                    element={
                    <ProtectedRoute allowedRoles={['reader','admin']}>
                      <ReaderProfile/>
                    </ProtectedRoute>
                    }
                  >
                  </Route>
                  <Route
                    path="creator/*"
                    element={
                    <ProtectedRoute allowedRoles={['creator','admin']}>
                      <CreatorProfile/>
                    </ProtectedRoute>
                    }
                  >
                  </Route>
              </Route>

              <Route
                    path="/admin/*"
                    element={
                    <ProtectedRoute allowedRoles={['admin']}>
                      <AdminLayout/>
                    </ProtectedRoute>
                    }
              />
              <Route path="*" element={<Home/>}/>
          </Routes>
        </Router>
    </>
  );
}

export default App
