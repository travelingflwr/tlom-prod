import projectsActions from "./projectsActions";

const initialData = {
  items: []
};

export default (state = initialData, { type, payload }) => {
  if (type === projectsActions.PROJECT_ADDED) {
    return {
      ...state,
      items: state.items.concat(payload)
    };
  }

  return state;
};