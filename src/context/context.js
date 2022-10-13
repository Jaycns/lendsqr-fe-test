import React, { createContext, useState, useEffect } from "react";
const AppContext = createContext();
export const AppProvider = (props) => {
  //users data fetching
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
  //handling userDetails
  const [clickId, setClickId] = useState(0);
  const [userProfile, setUserProfile] = useState([]);
  const handleUserProfile = (data) => {
    setUserProfile(users.filter((item) => clickId === item.id));
  };
  //handling sideNav show
  const handleSideNavClick = (e, data) => {
    e.stopPropagation();
    setClickId(data);
  };
  // useEffect(() => {
  //   document.addEventListener("click", () => {
  //     clickId !== null && setClickId(null);
  //   });
  //   return () => {
  //     document.removeEventListener("click", () => setClickId(null));
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  //handling pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(9);

  const handleUsersPerPage = (e) => {
    const optionValue = Number(e.target.value);
    setUsersPerPage(optionValue);
  };
  const lastIndex = currentPage * usersPerPage;
  const initialIndex = lastIndex - usersPerPage;
  const usersInpage = users.slice(initialIndex, lastIndex);
  //end

  const stateActions = {
    setCurrentPage,
    handleUsersPerPage,
    handleSideNavClick,
    handleUserProfile,
  };
  return (
    <AppContext.Provider
      value={{
        usersPerPage,
        currentPage,
        usersInpage,
        users,
        clickId,
        userProfile,
        ...stateActions,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContext;
