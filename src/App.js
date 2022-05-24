import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import { Layout } from './Components/Layout/Layout';
import { Routes } from './Routes';

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Routes></Routes>
        </Layout>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
