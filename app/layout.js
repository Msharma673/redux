"use client";
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import './globals.css';  // Tailwind CSS

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex items-center justify-center">
        {children}
      </div>
    </Provider>
  );
};

export default Layout;