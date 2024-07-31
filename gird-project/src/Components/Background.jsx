import React, { useState } from "react";
import Bg from "../assets/Bg.png";
import Lottie from "react-lottie";
import blink from "../assets/blink.json";
import Dubai from "../assets/Dubai.jpg";
import "./Background.css";

export default function Background() {
  const [visibility, setVisibility] = useState("hidden");
  const [top, setTop] = useState();
  const [right, setRight] = useState();
  const [toggle, setToggle] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: blink,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const details = [
    {
      id: 1,
      text: "Bab Al Qasr",
      top: "41.18vw",
      right: "6vw",
    },
    {
      id: 2,
      text: "Fairmount Bab Al Bahr",
      top: "41.18vw",
      right: "3.8vw",
    },
    {
      id: 3,
      text: "InterContinental Hotel Abu Dhabi and Residence",
      top: "38.59vw",
      right: "6vw",
    },
    {
      id: 4,
      text: "Al Raha Beach Hotel",
      top: "38.59vw",
      right: "3.8vw",
    },
    {
      id: 5,
      text: "Shangri-La, Qaryat Al Beri, Abu Dhabi",
      top: "36vw",
      right: "6vw",
    },
    {
      id: 6,
      text: "Dusit Thani Abu Dhabi",
      top: "36vw",
      right: "3.8vw",
    },
    {
      id: 7,
      text: "Erth Abu Dhabi",
      top: "33.41vw",
      right: "6vw",
    },
    {
      id: 8,
      text: "Abu Dhabi National Hotels",
      top: "33.41vw",
      right: "3.8vw",
    },
    {
      id: 9,
      text: "Nirvana Travel and Tourism",
      top: "30.82vw",
      right: "6vw",
    },
    {
      id: 10,
      text: "Travco LLC",
      top: "30.82vw",
      right: "3.8vw",
    },
    {
      id: 11,
      text: "Orient Tours",
      top: "28.23vw",
      right: "6vw",
    },
    {
      id: 12,
      text: "The Abu Dhabi Edition",
      top: "28.23vw",
      right: "3.8vw",
    },
    {
      id: 13,
      text: "Southern Sun",
      top: "25.64vw",
      right: "6vw",
    },
    {
      id: 14,
      text: "W Abu Dhabi Yas Island",
      top: "25.64vw",
      right: "3.8vw",
    },
    {
      id: 15,
      text: "Hilton Abu Dhabi, Yas Island",
      top: "23.05vw",
      right: "6vw",
    },
    {
      id: 16,
      text: "Yas Plaza Hotels",
      top: "23.05vw",
      right: "3.8vw",
    },
    {
      id: 17,
      text: "Ethara",
      top: "20.46vw",
      right: "6vw",
    },
    {
      id: 18,
      text: "Yas Island - Abu Dhabi",
      top: "20.46vw",
      right: "3.8vw",
    },
    {
      id: 19,
      text: "Conrad Abu Dhabi Etihad Towers",
      top: "17.87vw",
      right: "6vw",
    },
    {
      id: 20,
      text: "Passage to Arabia",
      top: "17.87vw",
      right: "3.8vw",
    },
    {
      id: 21,
      text: "Desert Adventures Tourism (DBL)",
      top: "15.28vw",
      right: "6vw",
    },
    {
      id: 22,
      text: "Sharaf Tours",
      top: "15.28vw",
      right: "3.8vw",
    },
    {
      id: 23,
      text: "Sofitel Abu Dhabi Corniche",
      top: 0,
      right: 5,
    },
    {
      id: 24,
      text: "Qasr Al Watan",
      top: 0,
      right: 5,
    },
    {
      id: 25,
      text: "Rida International DMC",
      top: 0,
      right: 5,
    },
  ];

  const details2 = [
    {
      id: 26,
      text: "Le Royal Meridian Abu Dhabi",
      top: 0,
      right: 5,
    },
    {
      id: 27,
      text: "Surprise Tourism",
      top: 0,
      right: 5,
    },
    {
      id: 28,
      text: "Arabian Explores (DBL)",
      top: 0,
      right: 5,
    },
    {
      id: 29,
      text: "Desert Gate Tourism (DBL)",
      top: 0,
      right: 5,
    },
    {
      id: 30,
      text: "Elevate DMC",
      top: 0,
      right: 5,
    },
    {
      id: 31,
      text: "Tourism 365 (DBL)",
      top: 0,
      right: 5,
    },
    {
      id: 32,
      text: "Etihad Airways",
      top: 0,
      right: 5,
    },
  ];

  const details3 = [
    {
      id: 1,
      text: "Experience Abu Dhabi (DCT Germany)",
      top: 0,
      right: 5,
    },
    {
      id: 2,
      text: "Rios Premium Saadiyat Island",
      top: 0,
      right: 5,
    },
    {
      id: 3,
      text: "Saadiyat Rotana Resort & Villas - Abu Dhabi",
      top: 0,
      right: 5,
    },
    {
      id: 4,
      text: "Park Hyatt Abu Dhabi Hotel and Villas",
      top: 0,
      right: 5,
    },
  ];

  const details4 = [
    {
      id: 1,
      text: "Louvre Abu Dhabi (LAD)",
      top: 0,
      right: 5,
    },
    {
      id: 2,
      text: "Etihad Airways",
      top: 0,
      right: 5,
    },
    {
      id: 3,
      text: "Rotana",
      top: 0,
      right: 5,
    },
    {
      id: 4,
      text: "Al Ain",
      top: 0,
      right: 5,
    },
    {
      id: 5,
      text: "Sheikh Zayed Grand Mosque (SZGM)",
      top: 0,
      right: 5,
    },
  ];

  const handleClick = (data) => {
    setTop(data.top);
    setRight(data.right);
    setToggle(true);
    console.log(data.top);
    console.log(data.right);
    return visibility === "hidden"
      ? setVisibility("visible")
      : setVisibility("hidden");
  };

  const handleToggle = () => {
    setToggle(false);
  };

  return (
    <div>
      {toggle === false ? (
        <div>
          <img className="bg-image" src={Bg} alt="background" />
          <div className="main-text-container">
            <div className="text-container1">
              {details.map((data, id) => (
                <p
                  onClick={() => handleClick(data)}
                  className="container1-text"
                  key={id}
                >
                  {data.id}. {data.text}
                </p>
              ))}
            </div>
            <div className="text-container2">
              <div className="semi-container1">
                {details2.map((detail, id) => (
                  <p className="container1-text" key={id}>
                    {detail.id}. {detail.text}
                  </p>
                ))}
              </div>
              <div className="semi-container2">
                <p className="container-text-heading">SADIYAT ISLAND</p>
                {details3.map((detail, id) => (
                  <p className="container1-text" key={id}>
                    {detail.id}. {detail.text}
                  </p>
                ))}
              </div>
              <div className="semi-container3">
                <p className="container-text-heading">PREMIUM SPACES</p>
                {details4.map((detail, id) => (
                  <p onClick={handleClick} className="container1-text" key={id}>
                    {detail.id}. {detail.text}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div
            className="indicater"
            style={{
              top: top,
              right: right,
              visibility: visibility,
            }}
          >
            <Lottie options={defaultOptions} className="lottie" />
          </div>
        </div>
      ) : (
        <div>
          <img className="bg-image" src={Bg} alt="background" />
          <div className="img-des-container">
            <div className="tour-div">
              <img className="image-tour" src={Dubai} alt="image" />
            </div>
            <div className="des-container">
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                reiciendis tempora, nam, numquam adipisci sit perferendis odio
                quas corrupti aperiam tenetur id veritatis molestias dignissimos
                ut. Necessitatibus corporis omnis distinctio. Placeat, ut
                distinctio illo, illum ratione iusto fuga dolorem est nesciunt
                nisi temporibus natus accusantium saepe, nihil mollitia
                voluptatum ducimus in! Totam, sint asperiores. Atque adipisci in
                possimus ab sequi. Odio ipsa et doloribus deleniti incidunt
                possimus unde accusamus distinctio excepturi doloremque,
                reprehenderit inventore deserunt? Magni nulla voluptatum libero
                assumenda nam? Culpa delectus at magnam eum mollitia dolores hic
                similique! Delectus, maiores officia est saepe nam laudantium
                consectetur impedit cupiditate natus fugit sint commodi dolorem
                praesentium similique id in beatae. Accusamus
              </p>
            </div>
          </div>
          <button className="back-btn" onClick={handleToggle}>
            Back
          </button>
        </div>
      )}
    </div>
  );
}
