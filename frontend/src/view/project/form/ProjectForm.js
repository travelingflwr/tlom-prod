import { Formik } from 'formik';
import { i18n } from 'i18n';
import model from 'modules/project/projectModel';
import React, { Component } from 'react';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import Spinner from 'view/shared/Spinner';
import FormWrapper from 'view/shared/styles/FormWrapper';
import FormSchema from 'view/shared/form/formSchema';
import ButtonIcon from 'view/shared/ButtonIcon';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import TextAreaFormItem from 'view/shared/form/items/TextAreaFormItem';
import CustomerAutocompleteFormItem from 'view/customer/autocomplete/CustomerAutocompleteFormItem';
import SubscriptionAutocompleteFormItem from 'view/subscription/autocomplete/SubscriptionAutocompleteFormItem';
import ListAutocompleteFormItem from 'view/list/autocomplete/ListAutocompleteFormItem';

const { fields } = model;

class ProjectForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.name,
    fields.description,
    fields.customer,
    fields.subscription,
    fields.list,
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
                <TextAreaFormItem
                  name={fields.description.name}
                  label={fields.description.label}
                  required={fields.description.required}
                />
                <CustomerAutocompleteFormItem
                  name={fields.customer.name}
                  label={fields.customer.label}
                  required={fields.customer.required}
                  showCreate={!this.props.modal}
                  form={form}
                />
                <SubscriptionAutocompleteFormItem
                  name={fields.subscription.name}
                  label={fields.subscription.label}
                  required={fields.subscription.required}
                  showCreate={!this.props.modal}
                  form={form}
                />
                <ListAutocompleteFormItem
                  name={fields.list.name}
                  label={fields.list.label}
                  required={fields.list.required}
                  showCreate={!this.props.modal}
                  form={form}
                  mode="multiple"
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

export default ProjectForm;
