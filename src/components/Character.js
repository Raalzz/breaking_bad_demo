import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Style.css";
import Loader from "./Loader";

const Character = () => {
  let { name } = useParams();
  const [characterData, setCharacterData] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get(`https://www.breakingbadapi.com/api/characters?name=${name}`)
      .then(resp => {
        console.log("hgvhg");
        setCharacterData(resp.data[0]);
        setLoader(false);
      })
      .catch(err => {
        console.log(err);
        setLoader(false);
      });
  }, []);

  if (loader) return <Loader />;

  return (
    <div className="gridlay bb_char">
      <div
        className="pimage"
        style={{ backgroundImage: `url(${characterData.img})` }}
      ></div>
      <div className="pdesc">
        <div className="cname">{characterData.name}</div>
        <div className="cnick_name">
          <span className="key">Alias</span>
          <span className="val">{characterData.nickname}</span>
        </div>
        <div className="coccu">
          <span className="key">Occupation</span>
          <span className="val">
            {characterData.occupation &&
              characterData.occupation[0] &&
              characterData.occupation.map(oc => <span>{oc}</span>)}
          </span>
        </div>

        <div className="cbday">
          <span className="key">Birthday</span>
          <span className="val">{characterData.birthday}</span>
        </div>
        <div className="cappearance">
          <span className="key">Appeared in</span>
          <span className="val">
            <ul>
              {characterData.appearance &&
                characterData.appearance.map(ep => <li>{ep}</li>)}
            </ul>
          </span>
        </div>
        <div className="cpotrayed">
          <span className="key">Portrayed by</span>
          <span className="val">{characterData.portrayed}</span>
        </div>
        <div className={`cstatus ${characterData.status}`}>
          <span className="key">Status</span>
          <span className="val">{characterData.status}</span>
        </div>
      </div>
    </div>
  );
};

export default Character;
