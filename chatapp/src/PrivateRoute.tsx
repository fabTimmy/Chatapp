import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "./Hooks/StoreHook";

export const PrivateRoute = () => {
  const { user } = useAppSelector((state) => state.auth);

  return Boolean(user) ? <Outlet /> : <Navigate to="/signin" />;
};
