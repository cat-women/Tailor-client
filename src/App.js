import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import axiosConfig from "./api/config.js";

import { getJobs, getUserJob } from "./api/jobApi.js";
import { signOut } from "./api/userApi.js";
import { getQuotationByUserId } from "./api/quotationApi.js";

import Form from "./components/Auth/form.js";
import Navbar from "./components/Navbar/navbar.js";
import Jobs from "./components/Jobs/jobs.js";
import Quotation from "./components/Quotations/Quotation/quotation.js";

function App() {
  const dispatch = useDispatch();
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const { user, isLoggedIn, token } = useSelector(store => store.auth);

  axiosConfig(token);

  if (storedUser) {
    const expiresAt = new Date(storedUser.token.expires_at).getTime();
    const currentTime = new Date().getTime();
    if (currentTime > expiresAt) {
      // Token has expired, remove user from local storage
      localStorage.removeItem("user");
    }
  }
  console.log(user,isLoggedIn,"==================");
  /** get jobs  */
  useEffect(() => {
    dispatch(getJobs());
  }, []);
  
  /** get logged in users quotation  */
  if (user) console.log("=====>",user, isLoggedIn);
  useEffect(
    () => {
      if (isLoggedIn) {
        dispatch(getQuotationByUserId(user.id));
        dispatch(getUserJob(user.id));
      }
    },
    [isLoggedIn]
  );
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={isLoggedIn ? <Jobs /> : <Form />} />
          <Route exact path="/quotation" element={<Quotation />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
