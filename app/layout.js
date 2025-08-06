"use client";
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import './globals.css';  // Tailwind CSS

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <div className="min-h-screen flex items-center justify-center">
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}