import { useSelector } from "react-redux";
import { RootState } from "redux/store";

function useAuth() {
  const { user, isLoading } = useSelector((state: RootState) => state.auth);
  return { user, isLoading };
}

export default useAuth;
