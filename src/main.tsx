import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import Card from "./components/Card";
const Homepage = lazy(() => import("./routes/homepage/index"));
const Generation = lazy(() => import("./routes/generacion/index"));
const Request = lazy(() => import("./routes/consultas/index"));
const Services = lazy(() => import("./routes/services/index"));
const Contacts = lazy(() => import("./routes/contacts/index"));
const Downloads = lazy(() => import("./routes/downloads/index"));
const Renovation = lazy(() => import("./routes/renovation/index"));
const Revocation = lazy(() => import("./routes/revocation/index"));
const Login = lazy(() => import("./routes/login/index"));
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
     <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <HashRouter>
          <Suspense fallback={<Card />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="home" element={<Homepage />} />
              <Route path="/generacion" element={<Generation />} />
              <Route path="/consultas" element={<Request />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/contacto" element={<Contacts />} />
              <Route path="/descargas" element={<Downloads />} />
              <Route path="/renovacion" element={<Renovation />} />
              <Route path="/revocacion" element={<Revocation />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </ChakraProvider>
     </QueryClientProvider> 
    </>
  </React.StrictMode>
);
