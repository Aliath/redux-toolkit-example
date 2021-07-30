import React from "react";
import { useAuth } from "hooks/useAuth";

export const UserInfo: React.FC = () => {
  const { user, signIn, logout } = useAuth();

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