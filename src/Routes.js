import { Route, Routes as RouterRoutes } from 'react-router-dom';

import { CriminalDetailPage } from './pages/CriminalDetailPage';
import { Homepage } from './pages/Homepage';
import { NotFound } from './pages/NotFound';

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route index element={<Homepage />} />
      <Route path="/detail/:slug" element={<CriminalDetailPage />} />
      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  );
};
