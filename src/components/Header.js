import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";
import './Header.css'

function Header() {
  const { currentTrackName } = useMusicPlayer();
  return (
    <div className="marquee">
      <p>{currentTrackName}</p>
    </div>
  );
}

export default Header;