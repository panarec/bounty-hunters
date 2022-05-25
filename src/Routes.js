import { Route, Routes as RouterRoutes } from 'react-router-dom';

import { CriminalDetailPage } from './pages/CriminalDetailPage';
import { Homepage } from './pages/Homepage';
import { NotFoundPage } from './pages/NotFoundPage';

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route index element={<Homepage />} />
      <Route path="/detail/:slug" element={<CriminalDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </RouterRoutes>
  );
};
