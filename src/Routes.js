import { Route, Routes as RouterRoutes } from 'react-router-dom';

import { Homepage } from './pages/Homepage';

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route index element={<Homepage />}></Route>
    </RouterRoutes>
  );
};
