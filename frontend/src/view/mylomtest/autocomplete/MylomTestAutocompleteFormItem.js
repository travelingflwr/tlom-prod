import React, { Component } from 'react';
import AutocompleteInMemoryFormItem from 'view/shared/form/items/AutocompleteInMemoryFormItem';
import MylomTestService from 'modules/mylomtest/mylomTestService';
import MylomTestFormModal from 'view/mylomtest/form/MylomTestFormModal';
import { connect } from 'react-redux';
import selectors from 'modules/mylomtest/mylomSelectors';

class MylomTestAutocompleteFormItem extends Component {
  state = {
    modalVisible: false,
  };

  doCloseModal = () => {
    this.setState({
      modalVisible: false,
    });
  };

  doOpenModal = () => {
    this.setState({
      modalVisible: true,
    });
  };

  doCreateSuccess = (record) => {
    const { form, name, mode } = this.props;

    if (mode && mode === 'multiple') {
      form.setFieldValue(name, [
        ...(form.values[name] || []),
        record,
      ]);
    } else {
      form.setFieldValue(name, record);
    }

    this.doCloseModal();
  };

  /* fetchFn = (value, limit) => {
    return MylomService.listAutocomplete(value, limit);
  }; */
  
  fetchFn = (value) => {
    const { user } = this.props;
    return MylomTestService.listAutocomplete(value, user, 10);
  };

  

  mapper = {
    toAutocomplete(originalValue) {
      if (!originalValue) {
        return undefined;
      }

      const value = originalValue.id;
      let label = originalValue.label;

      if (originalValue['name']) {
        label = originalValue['name'];
      }

      return {
        key: value,
        value,
        label,
      };
    },

    toValue(originalValue) {
      if (!originalValue) {
        return undefined;
      }

      return {
        id: originalValue.value,
        label: originalValue.label,
      };
    },
  };

  render() {
    const { form, ...rest } = this.props;

    return (
      <React.Fragment>
        <AutocompleteInMemoryFormItem
          {...rest}
          fetchFn={this.fetchFn}
          mapper={this.mapper}
          onOpenModal={this.doOpenModal}
        />

        {this.state.modalVisible && (
          <MylomTestFormModal
            onClose={this.doCloseModal}
            onSuccess={this.doCreateSuccess}
          />
        )}
      </React.Fragment>
    );
  }
}

const select = (state) => ({
  hasPermissionToCreate: selectors.selectPermissionToCreate(
    state,
  ),
});

export default connect(select)(
  MylomTestAutocompleteFormItem,
);
