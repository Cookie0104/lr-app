import { createContext, useState } from "react";

export const PopupContext = createContext({
  isPopup: false,
  setIsPopup: () => {},
  getIndex:0,
  setgetIndex: () => {},
  ClosePopUp: () => {},
});

export const PopupProvider = ({ children }) => {
  const [isPopup, setIsPopup] = useState(false);
  const [getIndex, setgetIndex] = useState("0");

  const toggleIsPopup = ({id}) => {
    setIsPopup(true);
    setgetIndex(id);
  };

  const ClosePopUp = () =>{
    setIsPopup(false);
  };

  const value = {
    //已輸出
    toggleIsPopup,
    isPopup,
    setgetIndex,
    getIndex,
    ClosePopUp
  };
  return (
    <PopupContext.Provider value={value}>{children}</PopupContext.Provider>
  );
};
