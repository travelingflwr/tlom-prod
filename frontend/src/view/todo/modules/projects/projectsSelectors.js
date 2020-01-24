import { createSelector } from "reselect";

const selectRaw = state => state.projects;

const selectItems = createSelector(
  [selectRaw],
  raw => raw.items
);

const selectCount = createSelector(
  [selectItems],
  items => items.length
);

const projectsSelectors = {
  selectItems,
  selectCount
};

export default projectsSelectors;