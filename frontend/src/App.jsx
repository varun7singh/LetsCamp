import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
import MyBootcamps from "./Pages/MyBootcamps";
import BootcampPage from "./Pages/BootcampPage";
import Addbootcamp from "./Pages/Addbootcamp";
import Wishlist from "./Pages/Wishlist";
import Profile from "./Pages/Profile";
import NotFound from "./Pages/NotFound";
import Ongoing from "./Pages/Ongoing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/home" exact element={<Dashboard />} />
        <Route path="/mybootcamps" exact element={<MyBootcamps />} />
        <Route path="/bootcamps/:id" exact element={<BootcampPage />} />
        <Route path="/addbootcamp" exact element={<Addbootcamp />} />
        <Route path="/wishlist" exact element={<Wishlist />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/ongoing" exact element={<Ongoing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
