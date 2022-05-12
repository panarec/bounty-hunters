import { BrowserRouter } from 'react-router-dom';
import { Layout } from './Components/Layout';
import { Routes } from './Routes';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes></Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
