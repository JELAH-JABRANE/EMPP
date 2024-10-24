import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Signup } from "./signup/signup.js"
import { Dashbord } from "./pages/dashbord/Dashbord.js";
import { ProtectedRoutes } from "./ProtectedRoutes.js";

function App() {
  return (
    <div className="App">
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<Signup />} />
            <Route
              path="/Dashbord"
              element={
                <ProtectedRoutes role={"admin"}>
                  <Dashbord />
                </ProtectedRoutes>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
