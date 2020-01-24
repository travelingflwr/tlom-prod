import { Formik } from 'formik';
import { i18n } from 'i18n';
import actions from 'modules/mylom/list/mylomListActions';
import selectors from 'modules/mylom/list/mylomListSelectors';
import model from 'modules/mylom/mylomModel';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FormFilterSchema from 'view/shared/form/formFilterSchema';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import DatePickerRangeFormItem from 'view/shared/form/items/DatePickerRangeFormItem';
import ButtonIcon from 'view/shared/ButtonIcon';
import FilterWrapper from 'view/shared/styles/FilterWrapper';
import UserAutocompleteFormItem from 'view/iam/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';
import CustomerAutocompleteFormItem from 'view/customer/autocomplete/CustomerAutocompleteFormItem';
import SubscriptionAutocompleteFormItem from 'view/subscription/autocomplete/SubscriptionAutocompleteFormItem';
import CategoryAutocompleteFormItem from 'view/category/autocomplete/CategoryAutocompleteFormItem';

const { fields } = model;

const schema = new FormFilterSchema([
  fields.id,
  fields.createdAtRange,
  fields.name,
  fields.description,
  fields.user,
  // fields.customer,
  // fields.subscription,
  // fields.dueDateRange,
  // fields.category,
  // fields.state,
  // fields.status,
]);

class MylomListFilter extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.doFetch(this.initialFilter()));
  }

  initialFilter = (user) => {
    // const filterCurrentUser = schema.cast(user);
    return schema.initialValues(
      this.props.filter,
      this.props.location,
    );
  };

  handleSubmit = (values) => {
    const valuesToSubmit = schema.cast(values);
    const { dispatch } = this.props;
    dispatch(actions.doFetch(valuesToSubmit));
  };

  handleReset = (form) => {
    form.setValues({});
    const { dispatch } = this.props;
    dispatch(actions.doReset());
  };

  render() {
    const { loading } = this.props;

    return (
      <FilterWrapper>
        <Formik
          initialValues={this.initialFilter()}
          validationSchema={schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <form onSubmit={form.handleSubmit}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name={fields.id.name}
                        label={fields.id.label}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name={fields.createdAtRange.name}
                        label={fields.createdAtRange.label}
                        showTimeInput
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name={fields.name.name}
                        label={fields.name.label}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <UserAutocompleteFormItem
                        name={fields.user.name}
                        label={fields.user.label}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name={fields.description.name}
                        label={fields.description.label}
                      />
                    </div>
                    
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 filter-buttons">
                    <button
                      className="btn btn-primary"
                      type="submit"
                    >
                      <ButtonIcon
                        loading={loading}
                        iconClass="fas fa-search"
                      />{' '}
                      {i18n('common.search')}
                    </button>
                    <button
                      className="btn btn-light"
                      type="button"
                      onClick={() =>
                        this.handleReset(form)
                      }
                    >
                      <ButtonIcon
                        loading={loading}
                        iconClass="fas fa-undo"
                      />{' '}
                      {i18n('common.reset')}
                    </button>
                  </div>
                </div>
              </form>
            );
          }}
        />
      </FilterWrapper>
    );
  }
}

function select(state) {
  return {
    filter: selectors.selectFilter(state),
  };
}

export default withRouter(connect(select)(MylomListFilter));
