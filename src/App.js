import React, { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactKeycloakProvider } from "@react-keycloak/web"
import keycloak from "./Keycloak"
import WelcomePage from "./pages/Homepage"
import Nav from './components/Nav'
import SecuredPage from './pages/Securedpage'
import PrivateRoute from './helpers/PrivateRoute'



const App = () => {
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak}>
        <React.StrictMode>
          <Nav />
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<WelcomePage />} />
              <Route 
                path="/secured"
                element={
                  <PrivateRoute>
                    <SecuredPage />
                  </PrivateRoute >
                }
              />
            </Routes>
          </BrowserRouter>
        </React.StrictMode>
      </ReactKeycloakProvider>
    </div>
  )
};

export default App;
