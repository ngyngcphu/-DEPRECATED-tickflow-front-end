import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@states';
import './index.css';
import App from './App';
import { Flowbite } from 'flowbite-react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Flowbite>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Flowbite>
  </Provider>
);
