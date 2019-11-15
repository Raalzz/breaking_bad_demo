import React from "react";

const FullscreenFallBack = () => {
  return (
    <div className="fullscreen loader fallback">
      <img src="https://media.giphy.com/media/unFLKoAV3TkXe/giphy.gif"></img>
      <h2>Oops Something went Wrong...!!!</h2>
      <button>Lemme Go Home...</button>
    </div>
  );
};

export default FullscreenFallBack;
