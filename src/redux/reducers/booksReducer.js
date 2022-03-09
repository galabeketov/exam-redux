import { SET_CATEGORY, SET_ERROR, SET_LOADING, SET_BOOKS } from "../types";

const initialState = {
  books: [],
  category: [],
  loading: false,
  error: false,
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_BOOKS:
      return { ...state, books: action.payload };
    case SET_CATEGORY:
      return { ...state, category: action.payload };

    default:
      return state;
  }
};

export default booksReducer;
