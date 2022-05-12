import { BrowserRouter } from 'react-router-dom';
import { Layout } from './Components/Layout';
import { Routes } from './Routes';
import './custom.scss';
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
