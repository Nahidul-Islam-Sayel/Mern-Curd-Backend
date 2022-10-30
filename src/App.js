import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Delete from "./Componant/Delete/Delete";
import DeleteReport from "./Componant/DeleteReport/DeleteReport";
import Doctor from "./Componant/Doctor/Doctor";
import EditSingle from "./Componant/Doctor/EditSingle";
import DoctorProfile from "./Componant/DoctorsProfile/DoctorProfile";
import EditFile from "./Componant/EditFile/EditFile";
import Login from "./Componant/LoginPage/Login";
import Nevbar from "./Componant/Nevbar/Nevbar";
import EditProfile from "./Componant/Profile/EditProfile";
import Load from "./Componant/Profile/Load";
import Profile from "./Componant/Profile/Profile";
import User from "./Componant/SignInPage/User";
import UserUploadFile from "./Componant/UserUploadFile/UserUploadFile";

export const userContext = createContext();
function App() {
  const [login, setLogin] = useState(0);
  const [docLogin, setDocLogin] = useState(0);


  return (
    <userContext.Provider value={[login,setLogin,docLogin, setDocLogin]}>
 
      <BrowserRouter>
        <Nevbar />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/profileDoc" element={<DoctorProfile />} />
          <Route path="/signup" element={<User />} />
          <Route path="/delete/:id" element={<Delete/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/EdiProfile" element={<EditProfile />} />
          <Route path="/uploadFIle" element={<UserUploadFile />} />
          <Route path="/viewReport/:id" element={<Load />} />
          <Route path="/delete/:id" element={<DeleteReport/>} />
          <Route path="/Edit/:id" element={<EditFile/>} />
          <Route path="/EditSingle/:id" element={<EditSingle/>} />
          <Route path="/" element={<Doctor />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
