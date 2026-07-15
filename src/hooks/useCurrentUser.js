"use client";

import useAuth from "./useAuth";

const useCurrentUser = () => {
  const { user } = useAuth();

  return user;
};

export default useCurrentUser;