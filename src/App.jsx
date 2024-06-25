import { Routes, Route, Navigate } from "react-router-dom";
import { UserLayout, AuthLayout } from "./layouts";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<UserLayout />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="*" element={<Navigate to="/user/home" replace />} />
    </Routes>
  );
}

export default App;
