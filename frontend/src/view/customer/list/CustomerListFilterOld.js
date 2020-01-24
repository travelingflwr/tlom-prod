import { Formik } from 'formik';
import { i18n } from 'i18n';
import actions from 'modules/customer/list/customerListActions';
import selectors from 'modules/customer/list/customerListSelectors';
import model from 'modules/customer/customerModel';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FormFilterSchema from 'view/shared/form/formFilterSchema';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import DatePickerRangeFormItem from 'view/shared/form/items/DatePickerRangeFormItem';
import ButtonIcon from 'view/shared/ButtonIcon';
import FilterWrapper from 'view/shared/styles/FilterWrapper';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';
import SubscriptionAutocompleteFormItem from 'view/subscription/autocomplete/SubscriptionAutocompleteFormItem';

const { fields } = model;

const schema = new FormFilterSchema([
  fields.name,
  fields.subscribed,
  fields.subscription,
  fields.location,
  fields.about,
]);

class CustomerListFilter extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.doFetch(this.initialFilter()));
  }

  initialFilter = () => {
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
                        name={fields.name.name}
                        label={fields.name.label}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name={fields.subscribed.name}
                        label={fields.subscribed.label}
                        options={[
                          {
                            value: 'true',
                            label: fields.subscribed.yesLabel,
                          },
                          {
                            value: 'false',
                            label: fields.subscribed.noLabel,
                          },
                        ]}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SubscriptionAutocompleteFormItem
                        name={fields.subscription.name}
                        label={fields.subscription.label}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name={fields.location.name}
                        label={fields.location.label}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name={fields.about.name}
                        label={fields.about.label}
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

export default withRouter(connect(select)(CustomerListFilter));
