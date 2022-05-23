import { BrowserRouter } from 'react-router-dom';

import { Layout } from './Components/Layout/Layout';
import { ContextProvider } from './AppContext';
import { Routes } from './Routes';

const App = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Layout>
          <Routes />
        </Layout>
      </ContextProvider>
    </BrowserRouter>
  );
};

export default App;
