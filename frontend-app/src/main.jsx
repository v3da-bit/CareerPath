/* eslint-disable react-hooks/rules-of-hooks */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { QuizProvider } from "./context/QuizContext";
import "./index.css";
import App from "./App.jsx";
import "./App.css";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Chatbot from "./pages/Chatbot";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Quiz from "./pages/Quiz";
import QuizDetailPage from "./pages/QuizDetailPage";
import Job from "./pages/Job";
import CareerSuggestions from "./pages/CareerSuggestions";
import SkillTracker from "./pages/SkillTracker";
import LeaderboardPage from "./pages/LeaderboardPage.jsx";
import Logout from "./pages/Logout.jsx";
import Admin from "./pages/Admin.jsx";
import Skills from "./pages/Skills.jsx";


const adminEmail="admin@gmail.com";
const adminPassword="admin123";
const router = ()=>{
  let isAdmin=false
  const currentUser=JSON.parse(localStorage.getItem("currentUser"))||{};
  let userEmail=currentUser?.email||"";
  console.log("userEmail//...",userEmail);
  
  let userPassword=currentUser?.password||"";
  if(userEmail==adminEmail&&userPassword==adminPassword){
    isAdmin=true
  }
  console.log("window.location.hre...",window.location.pathname);
  console.log("isAdmin...",isAdmin);
  
  if(window.location.pathname=="/admin"&&!isAdmin){
    window.location.href="/"
  }
  return createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Pages without sidebar */}
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/admin" element={<Admin/>}/>
      {/* Pages with sidebar wrapped in App layout */}
      <Route element={<App />}>
        <Route path="/home" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/:id" element={<QuizDetailPage />} />
        <Route path="/job" element={<Job />} />
        <Route path="/careersuggessions" element={<CareerSuggestions />} />
        <Route path="/skilltracker" element={<SkillTracker />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </>
  )
);}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QuizProvider>
      <Provider store={store}>
        <RouterProvider router={router()} />
      </Provider>
    </QuizProvider>
  </StrictMode>
);
