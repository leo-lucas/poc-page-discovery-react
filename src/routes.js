import { lazy } from 'react';
const routes = [
  lazy(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(import('./pages/test/testecopy.page.jsx'));
        }, 3000);
      })
  ),
  lazy(() => import('./pages/test/testecopy2.page.jsx')),
  lazy(() => import('./pages/test/testecopy3.page.jsx')),
  lazy(() => import('./pages/teste.page.jsx')),
];
export default routes;
