import { Routes, Route } from "react-router";
import { Main } from "./Main";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/:id" element={<Main />} />
    </Routes>
  );
};
