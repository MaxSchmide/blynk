import { useEffect } from "react";
import { setInitComments, setInitItems, useAppDispatch } from "../store";

const useLocalStorage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setInitItems());
    dispatch(setInitComments());
  }, [dispatch]);
};

export default useLocalStorage;
