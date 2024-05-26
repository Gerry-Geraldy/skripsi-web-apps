import { UserLayout, AuthLayout } from "./layouts";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/*" element={<UserLayout />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="*" element={<Navigate href="/user/home" replace />} />
    </Routes> 
  );
}

export default App;
