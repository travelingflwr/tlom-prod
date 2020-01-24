import { Formik } from 'formik';
import { i18n } from 'i18n';
import model from 'modules/customer/customerModel';
import React, { Component } from 'react';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import Spinner from 'view/shared/Spinner';
import FormWrapper from 'view/shared/styles/FormWrapper';
import FormSchema from 'view/shared/form/formSchema';
import ButtonIcon from 'view/shared/ButtonIcon';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import TextAreaFormItem from 'view/shared/form/items/TextAreaFormItem';
import SwitchFormItem from 'view/shared/form/items/SwitchFormItem';
import SubscriptionAutocompleteFormItem from 'view/subscription/autocomplete/SubscriptionAutocompleteFormItem';
import ProjectAutocompleteFormItem from 'view/project/autocomplete/ProjectAutocompleteFormItem';

const { fields } = model;

class CustomerForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.name,
    fields.subscribed,
    fields.subscription,
    fields.project,
    fields.location,
    fields.about,
  ]);

  handleSubmit = (values) => {
    const { id, ...data } = this.schema.cast(values);
    this.props.onSubmit(id, data);
  };

  initialValues = () => {
    const record = this.props.record;
    return this.schema.initialValues(record || {});
  };

  renderForm() {
    const { saveLoading, isEditing } = this.props;

    return (
      <FormWrapper>
        <Formik
          initialValues={this.initialValues()}
          validationSchema={this.schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <form onSubmit={form.handleSubmit}>
                {isEditing && (
                  <ViewFormItem
                    name={fields.id.name}
                    label={fields.id.label}
                  />
                )}

                <InputFormItem
                  name={fields.name.name}
                  label={fields.name.label}
                  required={fields.name.required}
                  autoFocus
                />
                <SwitchFormItem
                  name={fields.subscribed.name}
                  label={fields.subscribed.label}
                />
                <SubscriptionAutocompleteFormItem
                  name={fields.subscription.name}
                  label={fields.subscription.label}
                  required={fields.subscription.required}
                  showCreate={!this.props.modal}
                  form={form}
                />
                <ProjectAutocompleteFormItem
                  name={fields.project.name}
                  label={fields.project.label}
                  required={fields.project.required}
                  showCreate={!this.props.modal}
                  form={form}
                  mode="multiple"
                />
                <InputFormItem
                  name={fields.location.name}
                  label={fields.location.label}
                  required={fields.location.required}
                />
                <TextAreaFormItem
                  name={fields.about.name}
                  label={fields.about.label}
                  required={fields.about.required}
                />

                <div className="form-buttons">
                  <button
                    className="btn btn-primary"
                    disabled={saveLoading}
                    type="button"
                    onClick={form.handleSubmit}
                  >
                    <ButtonIcon
                      loading={saveLoading}
                      iconClass="far fa-save"
                    />{' '}
                    {i18n('common.save')}
                  </button>

                  <button
                    className="btn btn-light"
                    type="button"
                    disabled={saveLoading}
                    onClick={form.handleReset}
                  >
                    <i className="fas fa-undo"></i>{' '}
                    {i18n('common.reset')}
                  </button>

                  {this.props.onCancel ? (
                    <button
                      className="btn btn-light"
                      type="button"
                      disabled={saveLoading}
                      onClick={() => this.props.onCancel()}
                    >
                      <i className="fas fa-times"></i>{' '}
                      {i18n('common.cancel')}
                    </button>
                  ) : null}
                </div>
              </form>
            );
          }}
        />
      </FormWrapper>
    );
  }

  render() {
    const { isEditing, findLoading, record } = this.props;

    if (findLoading) {
      return <Spinner />;
    }

    if (isEditing && !record) {
      return <Spinner />;
    }

    return this.renderForm();
  }
}

export default CustomerForm;
