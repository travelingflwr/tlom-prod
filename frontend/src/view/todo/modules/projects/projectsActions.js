const projectsActions = {
    PROJECT_ADDED: `PROJECT_ADDED`,
  
    doAddProject: project => {
      return {
        type: projectsActions.PROJECT_ADDED,
        payload: project
      };
    }
  };
  
  export default projectsActions;