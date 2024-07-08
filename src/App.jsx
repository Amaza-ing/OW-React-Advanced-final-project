import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { lazy, Suspense } from "react";
const UsersPage = lazy(() => import("./pages/UsersPage"));

function App() {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
