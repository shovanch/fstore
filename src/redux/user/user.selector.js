import { createSelector } from "reselect";

// User state from root Store
const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
