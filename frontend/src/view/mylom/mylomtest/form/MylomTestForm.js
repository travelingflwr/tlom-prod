import { Formik } from 'formik';
import { i18n } from 'i18n';
import model from 'modules/mylom/mylomModel';
import React, { Component } from 'react';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import Spinner from 'view/shared/Spinner';
import FormWrapper from 'view/shared/styles/FormWrapper';
import FormSchema from 'view/shared/form/formSchema';
import ButtonIcon from 'view/shared/ButtonIcon';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import TextAreaFormItem from 'view/shared/form/items/TextAreaFormItem';
import UserAutocompleteFormItem from 'view/iam/autocomplete/UserAutocompleteFormItem';
import CheckboxFormItem from 'view/shared/form/items/CheckboxFormItem';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';
import DatePickerFormItem from 'view/shared/form/items/DatePickerFormItem';
import CustomerAutocompleteFormItem from 'view/customer/autocomplete/CustomerAutocompleteFormItem';
import SubscriptionAutocompleteFormItem from 'view/subscription/autocomplete/SubscriptionAutocompleteFormItem';
import CategoryAutocompleteFormItem from 'view/category/autocomplete/CategoryAutocompleteFormItem';

const { fields } = model;

class MylomForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.name,
    fields.description,
    fields.user,
    // fields.customer,
    fields.subscription,
    fields.dueDate,
    fields.category,
    fields.state,
    fields.status,
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
                <UserAutocompleteFormItem
                  name={fields.user.name}
                  label={fields.user.label}
                  required={fields.user.required}
                  showCreate={!this.props.modal}
                  form={form}
                />
                <CustomerAutocompleteFormItem
                  name={fields.customer.name}
                  label={fields.customer.label}
                  
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
                <DatePickerFormItem
                  name={fields.dueDate.name}
                  label={fields.dueDate.label}
                  required={fields.dueDate.required}
                />
                <CategoryAutocompleteFormItem
                  name={fields.category.name}
                  label={fields.category.label}
                  required={fields.category.required}
                  showCreate={!this.props.modal}
                  form={form}
                />
                <CheckboxFormItem
                  name={fields.state.name}
                  label={fields.state.label}
                />
                <SelectFormItem
                  name={fields.status.name}
                  label={fields.status.label}
                  options={fields.status.options.map(
                    (item) => ({
                      value: item.id,
                      label: item.label,
                    }),
                  )}
                  required={fields.status.required}
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

export default MylomForm;
