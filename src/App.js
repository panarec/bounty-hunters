import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import { Layout } from './Components/Layout/Layout';
import { FilterContextProvider } from './FilterContext';
import { Routes } from './Routes';

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <FilterContextProvider>
          <Layout>
            <Routes></Routes>
          </Layout>
        </FilterContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
