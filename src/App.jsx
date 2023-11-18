import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setWallet } from "./features/wallet/walletSlice";

import Layout from "./pages/Layout";
import Landing from "./pages/Landing";
import CreateExam from "./pages/CreateExam";
import MyExams from "./pages/MyExams";
import Exam from "./pages/Exam";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    window.mina
      .getAccounts()
      .then((accounts) => {
        if (accounts.length > 0) {
          dispatch(setWallet(accounts[0]));
        } else {
          dispatch(setWallet(undefined));
        }
      })
      .catch((err) =>
        console.log("Error occured while connectiong wallet!", err)
      );
  }, [dispatch]);

  window.mina?.on("accountsChanged", (accounts) => {
    if (accounts.length === 0) {
      dispatch(setWallet(undefined));
    }
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/create-exam" element={<CreateExam />} />
          <Route path="/my-exams" element={<MyExams />} />
        </Route>
        <Route path="/exam/:examId" element={<Exam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
