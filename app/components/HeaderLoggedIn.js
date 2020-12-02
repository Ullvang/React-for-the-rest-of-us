import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";

export default function HeaderLoggedIn() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  function handleLogout() {
    appDispatch({ type: "logout" });
  }

  return (
    <div className="flex-row my-3 my-md-0">
      <a href="#" className="text-white mr-2 header-search-icon">
        <i className="fas fa-search"></i>
      </a>
      <span className="mr-2 header-chat-icon text-white">
        <i className="fas fa-comment"></i>
        <span className="chat-count-badge text-white"> </span>
      </span>
      <a href="#" className="mr-2">
        <img className="small-header-avatar" src={appState.user.avatar} />
      </a>
      <Link to="/create-post" className="btn btn-sm btn-success mr-2">
        Create Post
      </Link>
      <button className="btn btn-sm btn-secondary" onClick={handleLogout}>
        Sign Out
      </button>
    </div>
  );
}
