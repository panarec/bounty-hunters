import { BrowserRouter } from 'react-router-dom';

import { Layout } from './Components/Layout/Layout';
import { FilterContextProvider } from './FilterContext';
import { Routes } from './Routes';

const App = () => {
  return (
    <BrowserRouter>
      <FilterContextProvider>
        <Layout>
          <Routes />
        </Layout>
      </FilterContextProvider>
    </BrowserRouter>
  );
};

export default App;
