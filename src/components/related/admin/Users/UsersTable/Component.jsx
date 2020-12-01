import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";

import { Wrapper, Loading, CenterContainer, FetchButton } from "./styles";

const Component = ({
  loading,
  fetchUsersAdminPanelInitialRequested,
  users,
  error,
  deleteUserRequested,
  allCount,
  count,
  fetchUsersAdminPanelNextRequested,
  currentUser,
  loadingCurrentUser,
  errorCurrentUser,
}) => {
  const handleGetMoreButtonOnClick = event => {
    event.preventDefault();

    if (count < allCount) {
      fetchUsersAdminPanelNextRequested();
    }
  };

  const handleConfirmDeleteRequest = userUid => {
    deleteUserRequested(userUid);
  };

  const handleDeleteUser = userUid => {
    deleteUserRequested(userUid);
  };

  useEffect(() => {
    fetchUsersAdminPanelInitialRequested();
  }, []);

  return (
    <>
      <Wrapper>
        {users.length > 0 &&
          users.map(item => (
            <Card
              key={uuidv4()}
              currentUser={currentUser}
              user={item}
              onConfirmDeleteRequest={handleConfirmDeleteRequest}
              onDelete={handleDeleteUser}
            />
          ))}
      </Wrapper>
      {loading || error || loadingCurrentUser || errorCurrentUser ? (
        <Loading>Loading</Loading>
      ) : (
        count < allCount && (
          <CenterContainer>
            <FetchButton onClick={handleGetMoreButtonOnClick}>Get more</FetchButton>
          </CenterContainer>
        )
      )}
    </>
  );
};

Component.defaultProps = {
  users: [],
  loading: true,
  error: "",
  fetchUsersAdminPanelInitialRequested: () => {},
  fetchUsersAdminPanelNextRequested: () => {},
  count: 0,
  allCount: 0,
  deleteUserRequested: () => {},
  currentUser: {},
  loadingCurrentUser: false,
  errorCurrentUser: "",
};

Component.propTypes = {
  users: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  fetchUsersAdminPanelInitialRequested: PropTypes.func.isRequired,
  fetchUsersAdminPanelNextRequested: PropTypes.func.isRequired,
  count: PropTypes.number,
  allCount: PropTypes.number,
  deleteUserRequested: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  loadingCurrentUser: PropTypes.bool.isRequired,
  errorCurrentUser: PropTypes.string,
};

export default Component;
