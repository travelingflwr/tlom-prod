import React from "react";
import { connect } from "react-redux";
import projectsSelectors from "../modules/projects/projectsSelectors";
import projectsActions from "../modules/projects/projectsActions";
import { Formik } from "formik";
import * as yup from "yup";
import delay from "delay";

async function validateIsStudy(value) {
  await delay(2000);
  return value === "study";
}

class ProjectForm extends React.Component {
  validationSchema = () => {
    return yup.object({
      text: yup
        .string()
        .min(2)
        .max(25)
        .required()
        .test("test-study", "Is not study", value => {
          return validateIsStudy(value);
        })
    });
  };

  render() {
    return (
      <Formik
        validationSchema={this.validationSchema()}
        initialValues={{ text: "" }}
        onSubmit={this.handleSubmit}
        render={form => (
          <form onSubmit={form.handleSubmit}>
            <label htmlFor="new-project">What project needs to be added?</label>
            <input
              id="new-project"
              onChange={e => form.setFieldValue("text", e.target.value)}
              value={form.values.text}
            />
            {form.errors.text && <div>{form.errors.text}</div>}
            <button disabled={form.isSubmitting}>
              Add #{this.props.count + 1}
            </button>
          </form>
        )}
      />
    );
  }

  handleSubmit = (values, form) => {
    const newItem = {
      text: values.text,
      id: Date.now()
    };

    this.props.dispatch(projectsActions.doAddProject(newItem));
    form.resetForm();
  };
}

const select = state => {
  return {
    count: projectsSelectors.selectCount(state)
  };
};

export default connect(select)(ProjectForm);