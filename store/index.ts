import { createStore } from "redux";
import { reducer } from "../reducer";

type State = {
  id: string;
};

const initialState: State = {
  id: ""
};

const store = createStore(reducer, initialState);

export default store;
