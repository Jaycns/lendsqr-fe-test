import React, { createContext, useState, useEffect } from "react";
const AppContext = createContext();
export const AppProvider = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    try {
      const handleFetch = async () => {
        const data = await fetch(
          "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
        );
        const userDetails = await data.json();
        console.log({ users: userDetails });
        setUsers(userDetails);
      };
      handleFetch();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 9;
  const lastIndex = currentPage * usersPerPage;
  const initialIndex = lastIndex - usersPerPage;
  const usersInpage = users.slice(initialIndex, lastIndex);
  const stateActions = {
    setCurrentPage,
  };
  return (
    <AppContext.Provider
      value={{ usersPerPage, currentPage, usersInpage, users, ...stateActions }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContext;
