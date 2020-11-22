import { handleActions } from "redux-actions";
import produce from "immer";

import {
  fetchFilmByIdFailed,
  fetchFilmByIdRequested,
  fetchFilmByIdSucceed,
} from "../actions/filmsActions";

const initialState = {
  loading: false,
  error: "",
  film: {},
};

const filmCard = handleActions(
  {
    [fetchFilmByIdRequested]: produce((state) => {
      state.loading = true;
    }),
    [fetchFilmByIdSucceed]: produce((state, { payload }) => {
      state.loading = false;
      state.film = payload;
    }),
    [fetchFilmByIdFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),
  },
  initialState
);

export default filmCard;
