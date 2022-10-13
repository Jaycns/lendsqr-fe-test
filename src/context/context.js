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
  //handling userDetails
  const [clickId, setClickId] = useState(0);
  //handling sideNav show
  const handleSideNavClick = (e, data) => {
    e.stopPropagation();
    setClickId(data);
  };
  const handleSideNavClose = () => {
    clickId !== null && setClickId(0);
  };
  // const [active, setActive] = useState(false);
  // const handleActive = () => {
  //   setActive(true);
  // };
  // useEffect(() => {
  //   document.addEventListener("click", () => {
  //     if (clickId !== null && active) setClickId(null);
  //   });
  //   return () => {
  //     document.removeEventListener("click", () => setClickId(null));
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const [filterForm, setFilterForm] = useState(false);
  const handleFilterForm = () => {
    setFilterForm(!filterForm);
  };

  const handleFilterFormClose = useCallback(() => {
    filterForm && setFilterForm(false);
    clickId !== 0 && setClickId(0);
  }, [setFilterForm, filterForm, clickId]);
  useEffect(() => {
    document.addEventListener("click", () => {
      filterForm && setFilterForm(false);
    });
    return () => {
      document.removeEventListener("click", () => setFilterForm(false));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
