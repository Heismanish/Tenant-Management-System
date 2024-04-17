import { Route, Routes } from "react-router-dom";
import "./App.css";

import OwnerDashBoard from "./Components/OwnerDashBoard";
import TenantDashBoard from "./Components/TenantDashBoard";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";


function App() {
  console.log(  import.meta.env.VITE_SUPABASE_ANON_KEY)
  return  <div className="mt-12 h-full  w-screen flex justify-center items-center"> <Routes>  <Route  element={<Login/>} path="/"/>
    <Route  element={<Signup/>} path="/signup"/>
    <Route  element={<OwnerDashBoard/>} path="/owner/:userId" 
          // loader={async ({ params }) => {
          //   return fetch(
          //     `/fake/api/teams/${params.teamId}.json
          //   );
          // }}
    />
    <Route  element={<TenantDashBoard/>} path="/tenant"/>
    <Route  element={<TenantDashBoard/>} path="/tenant/:userId"/>
  </Routes>
    </div>
}

export default App;
 