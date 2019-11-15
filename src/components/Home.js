import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../Style.css";
import Loader from "./Loader";
import FullscreenFallBack from "../FullscreenFallBack";

// import { sentryDefaultLog } from "../handleErrors/SentryConfig";

const Home = () => {
  let history = useHistory();
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get("https://www.breakingbadapi.com/api/characters")
      .then(resp => {
        setData(resp.data);
        setLoader(false);
      })
      .catch(err => {
        console.log(err);
        setLoader(false);
      });
  }, []);

  const _onClickHandler = name => {
    const modName = name.replace(" ", "+");
    history.push(`/character/${modName}`);
  };

  if (loader) return <Loader />;

  return (
    <div className="gridlay">
      {data.map(character => (
        <div className="grid_item_wrapper" key={character.char_id}>
          <div
            className="grid-item"
            style={{ backgroundImage: `url(${character.img})` }}
            onClick={() => _onClickHandler(character.name)}
          >
            <span className="char_name">{character.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;

// useEffect(() => {
//   const value = 1;
//   if (value === 1) {
//     console.log("Demo Error Triggereed");
//     sentryDefaultLog("Demo Error");
//   }
// }, []);
