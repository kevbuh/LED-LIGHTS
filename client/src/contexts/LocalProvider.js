import React, { createContext, useContext, useReducer, useState } from "react";

export const PostsContextProvider = ({ children, storageKey = "posts" }) => {
  const [isInitialized, setIsInitialized] = useState(false);

  const [posts, dispatchPost] = useReducer(reducer, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(storageKey, JSON.stringify(posts));
    }
  }, [posts]);

  useEffect(() => {
    dispatchPost({
      type: SET_POSTS,
      value: JSON.parse(localStorage.getItem(storageKey)) || [],
    });

    setIsInitialized(true);
  }, []);

  return (
    <PostsContext.Provider value={{ posts, dispatchPost }}>
      {children}
    </PostsContext.Provider>
  );
};
