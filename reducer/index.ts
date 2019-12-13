// actions.
export const SET_ID = "SET_ID";

// @ts-ignore
export const reducer = (state, action) => {
  switch (action.type) {
    case SET_ID:
      return {
        ...state,
        id: action.id
      };
  }

  return state;
};
