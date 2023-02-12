import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Home, Error,  About, Dashboard, Login, ProtectedRoute, SharedLayout, SharedProductLayout, SingleProduct, Products } from './pages';
import { User } from './models/user';


function App() {
  const [user, setUser] = useState<User | null>(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />

          <Route path='products' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':productId' element={<SingleProduct />} />
          </Route>

          <Route path='login' element={<Login setUser={setUser}></Login>} />
          <Route
            path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
