import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "services/authService";
import { selectUser, setUser, clearUser } from "store/authSlice";

export const UserInfo: React.FC = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signIn = async () => {
    const user = await getUser();

    dispatch(setUser(user));
  };

  const logout = () => {
    dispatch(clearUser());
  };

  if (!user) {
    return <button type="button" onClick={signIn}>Sign in</button>
  }

  return (
    <div>
      <code>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </code>
      <hr />
      <button onClick={logout} type="button">Log out</button>
    </div>
  );
};