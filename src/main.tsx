import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import Card from './components/Card';
import { HashRouter, Routes, Route } from 'react-router-dom';
import routes from './routes/routes';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <HashRouter>
            <Suspense fallback={<Card />}>
              <Routes>
                {routes.map(({ path, element }, index) => (
                  <Route key={index} path={path} element={element} />
                ))}
              </Routes>
            </Suspense>
          </HashRouter>
        </ChakraProvider>
      </QueryClientProvider>
    </>
  </React.StrictMode>,
);
