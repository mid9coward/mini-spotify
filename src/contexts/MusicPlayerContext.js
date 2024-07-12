import React, { useState, createContext } from "react";
import Track1 from "../mp3/blind (esentrik remix).mp3";
import Track2 from "../mp3/boy's a liar pt. 2.5.mp3";
import Track3 from "../mp3/Doja Cat - Agora Hills (Body Party Remix).mp3";
import Track4 from "../mp3/Frank Ocean - Chanel (Phulla's UKG Refix).mp3";
import Track5 from "../mp3/SZA - GOOD DAYS (ETHAN TOMAS + REV ROLLINS UK GARAGE REMIX).mp3";
import Track6 from "../mp3/Tyla x Drake - Rich Baby Water (NIE Flip).mp3";

const MusicPlayerContext = createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "blind (esentrik remix)",
      file: Track1,
    },
    {
      name: "boy's a liar pt. 2.5",
      file: Track2,
    },
    {
      name: "Doja Cat - Agora Hills (Body Party Remix)",
      file: Track3,
    },
    {
      name: "Frank Ocean - Chanel (Phulla's UKG Refix)",
      file: Track4,
    },
    {
      name: "SZA - GOOD DAYS (ETHAN TOMAS + REV ROLLINS UK GARAGE REMIX)",
      file: Track5,
    },
    {
      name: "Tyla x Drake - Rich Baby Water (NIE Flip)",
      file: Track6,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
