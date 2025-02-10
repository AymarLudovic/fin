import React, { createContext, useState } from "react";

interface ProfileContextInterface {
  profile: any;
  setProfile: (profile: any) => void;
  isProfileLoaded: boolean;
  setIsProfileLoaded: (isProfileLoaded: boolean) => void;
}

export const ProfileContext = createContext<ProfileContextInterface>({
  profile: null,
  setProfile: () => {},
  isProfileLoaded: false,
  setIsProfileLoaded: () => {},
});

export const ProfileProvider: React.FC = ({ children }) => {
  const [profile, setProfile] = useState<any>(null);
  const [isProfileLoaded, setIsProfileLoaded] = useState<boolean>(false);

  return (
    <ProfileContext.Provider
      value={{
        profile,
        setProfile,
        isProfileLoaded,
        setIsProfileLoaded,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};