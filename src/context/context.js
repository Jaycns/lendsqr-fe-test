import React, { createContext, useState, useEffect, useCallback } from "react";
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
  //handling sideNav show
  const [clickId, setClickId] = useState(0);
  const handleSideNavClick = (e, data) => {
    e.stopPropagation();
    setClickId(data);
  };
  const handleSideNavClose = () => {
    clickId !== null && setClickId(0);
  };

  //handling filter-box show
  const [filterForm, setFilterForm] = useState(false);
  const handleFilterForm = () => {
    setFilterForm(!filterForm);
  };
  const handleFilterFormClose = useCallback(() => {
    filterForm && setFilterForm(false);
    clickId !== 0 && setClickId(0);
  }, [setFilterForm, filterForm, clickId]);

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
    handleSideNavClose,
    handleFilterForm,
    handleFilterFormClose,
  };
  return (
    <AppContext.Provider
      value={{
        usersPerPage,
        currentPage,
        usersInpage,
        users,
        clickId,
        filterForm,
        ...stateActions,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContext;
