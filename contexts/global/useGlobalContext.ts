import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

function useGlobalContext() {
  const state = useContext(GlobalContext);
  if (!state)
    throw new Error(
      "The hook should be used inside the Global Context Provider!"
    );
  return state;
}

export default useGlobalContext;
