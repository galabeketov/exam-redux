import { GetDataBook } from "../../api";
import { dispatch } from "../store";
import { SET_CATEGORY, SET_ERROR, SET_LOADING, SET_BOOKS } from "../types";

export const setLoading = (state) => {
  dispatch({ type: SET_LOADING, payload: state });
};

export const setError = (state) => {
  dispatch({ type: SET_ERROR, payload: state });
};

export const setBooksByCategory = async () => {
  setLoading(true);
  setError(false);

  const obj = await GetDataBook();
  if (obj.success) dispatch({ type: SET_BOOKS, payload: obj.data });
  else setError(true);
  setLoading(false);
};

export const setCategory = async () => {
  setLoading(true);
  setError(false);

  const category = await GetDataBook();
  if (category.success) dispatch({ type: SET_CATEGORY, payload: category });
  else setError(true);
  setLoading(false);
};
