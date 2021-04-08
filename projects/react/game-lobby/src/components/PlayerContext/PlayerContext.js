import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../firebase";

const Context = React.createContext();
const UpdateContext = React.createContext();

export function usePlayers() {
  return useContext(Context);
}

export const usePlayersUpdate = () => {
  return useContext(UpdateContext);
};

export const COLORS = {
  default: "",
  blue: "blue",
  red: "red",
  green: "green",
  yellow: "yellow",
  purple: "purple",
};

export function PlayerContext({ children }) {
  const [players, setPlayers] = useState([
    {
      id: 1,
      text: "P1",
      color: COLORS.default,
    },
    {
      id: 2,
      text: "P2",
      color: COLORS.default,
    },
    {
      id: 3,
      text: "P3",
      color: COLORS.default,
    },
    {
      id: 4,
      text: "P4",
      color: COLORS.default,
    },
  ]);

  const changeColors = (compareId, compareColor) => {
    const chosenPlayer = players.filter((p) => p.id === compareId)[0];
    const usedColors = players.filter((p) => p.color !== COLORS.default);
    const colors = usedColors.map((c) => c.color);

    // if the player is already this color
    if (chosenPlayer.color === compareColor) {
      alert("You have already chosen this color.");
      return;
    }

    // if compareColor is not already used
    if (!colors.includes(compareColor)) {
      // set players color
      setPlayers(
        players.map((p) =>
          p.id === compareId ? { ...p, color: compareColor } : p
        )
      );
      // check if logged in, if so, axios post
      if (authState) {
        console.log("before post", players, uid);
        const newPlayers = players.map((p) =>
          p.id === compareId ? compareColor : p.color
        );
        console.log("newPlayers", newPlayers[0])
        axios
          .post(
            `https://us-central1-game-lobby-13650.cloudfunctions.net/setColors?uid=${uid}&p1=${newPlayers[0]}&p2=${newPlayers[1]}&p3=${newPlayers[2]}&p4=${newPlayers[3]}`
          )
          .then((response) => {
            //   setPlayers(
            //     players.map((p) => {
            //       console.log(p)
            //       // p.color = response.data.p + p.id
            //     }
            // ));
            console.log(response.data);
          });
        // axios
        //   .post(
        //     "https://us-central1-game-lobby-13650.cloudfunctions.net/postColors",
        //     { uid: uid, playersHttp: players }
        //   )
        //   .then((response) => {
        //     console.log(response.data);
        //   });
      }
    }
    // if color is already used
    else {
      alert("Color is already chosen, Please choose a different colour");
    }
  };

  const [authState, setAuthState] = useState(false);
  const [uid, setUid] = useState("");
  auth.onAuthStateChanged((user) => {
    if (user) {
      setAuthState(true);
      setUid(user.uid);
    } else {
      setAuthState(false);
      setUid("");
    }
  });

  // useEffect(() => {
  //   if (authState) {
  //     axios
  //       .get(
  //         `https://us-central1-game-lobby-13650.cloudfunctions.net/getColors?uid=${uid}`
  //       )
  //       .then((response) => {
  //         //   setPlayers(
  //         //     players.map((p) => {
  //         //       console.log(p)
  //         //       // p.color = response.data.p + p.id
  //         //     }
  //         // ));
  //         setPlayers([
  //           {
  //             id: 1,
  //             text: "P1",
  //             color: response.data.p1,
  //           },
  //           {
  //             id: 2,
  //             text: "P2",
  //             color: response.data.p2,
  //           },
  //           {
  //             id: 3,
  //             text: "P3",
  //             color: response.data.p3,
  //           },
  //           {
  //             id: 4,
  //             text: "P4",
  //             color: response.data.p4,
  //           },
  //         ]);
  //       });
  //   } else {
  //     console.log("logged out, please sign in to save colors");
  //   }
  // });

  return (
    <Context.Provider value={{ players, setPlayers }}>
      <UpdateContext.Provider value={changeColors}>
        {children}
      </UpdateContext.Provider>
    </Context.Provider>
  );
}
