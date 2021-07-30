import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "services/authService";
import { selectUser, setUser, clearUser } from "store/authSlice";
import { RequestState } from "types/request";

export const useAuth = () => {
  const [requestState, setRequestState] = useState<RequestState>('idle');
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signIn = async () => {
    setRequestState('loading');

    try {
      const user = await getUser();

      setRequestState('success');
      dispatch(setUser(user));
    } catch {
      setRequestState('error');
    }
  };

  const logout = () => {
    dispatch(clearUser());
  };

  return { user, requestState, signIn, logout };
};
