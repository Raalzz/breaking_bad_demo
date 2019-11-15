import React from "react";
import fallback from "../images/fallback.gif"

import { Redirect } from 'react-router'
const FullscreenFallBack = () => {

  const onClickHandler = () => {
    return <Redirect to="/" />;
  }

  return (
    <div className="fullscreen loader fallback">
      <img src={fallback} alt="loading..." />
      <h2>Oops Something went Wrong...!!!</h2>
      <button onClick={onClickHandler}>Lemme Go Home...</button>
    </div>
  );
};

export default FullscreenFallBack
