import { Route, Routes as RouterRoutes } from 'react-router-dom';

import { CriminalDetailPage } from './pages/CriminalDetailPage';
import { Homepage } from './pages/Homepage';

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route index element={<Homepage />}></Route>
      <Route path="/:slug" element={<CriminalDetailPage />}></Route>
    </RouterRoutes>
  );
};
