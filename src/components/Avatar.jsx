import { useState } from "react";
import { profile } from "../data/portfolioData";

export default function Avatar() {
  const [photoError, setPhotoError] = useState(false);
  const showPhoto = profile.photo && !photoError;

  return (
    <div className="avatar-ring">
      <div className="avatar">
        {showPhoto ? (
          <img
            src={profile.photo}
            alt={profile.name}
            className="avatar-img"
            onError={() => setPhotoError(true)}
          />
        ) : (
          <span className="avatar-initials">{profile.initials}</span>
        )}
      </div>
    </div>
  );
}
