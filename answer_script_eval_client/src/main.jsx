// main.jsx
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import store from './redux/store'; // Import as default export
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Suspense fallback={()=> <div>Loading...</div>}>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </Suspense>
  </Provider>
);
