import model from 'modules/mylom/mylomModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import UserViewItem from 'view/iam/view/UserViewItem';
import CustomerViewItem from 'view/customer/view/CustomerViewItem';
import SubscriptionViewItem from 'view/subscription/view/SubscriptionViewItem';
import CategoryViewItem from 'view/category/view/CategoryViewItem';

const { fields } = model;

class MylomViewUser extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <TextViewItem
          label={fields.name.label}
          value={fields.name.forView(record.name)}
        />

        <TextViewItem
          label={fields.description.label}
          value={fields.description.forView(record.description)}
        />

        <UserViewItem
          label={fields.user.label}
          value={fields.user.forView(record.user)}
        />

        <CustomerViewItem
          label={fields.customer.label}
          value={fields.customer.forView(record.customer)}
        />

        <SubscriptionViewItem
          label={fields.subscription.label}
          value={fields.subscription.forView(record.subscription)}
        />

        <TextViewItem
          label={fields.dueDate.label}
          value={fields.dueDate.forView(record.dueDate)}
        />

        <CategoryViewItem
          label={fields.category.label}
          value={fields.category.forView(record.category)}
        />

        <TextViewItem
          label={fields.state.label}
          value={fields.state.forView(record.state)}
        />

        <TextViewItem
          label={fields.status.label}
          value={fields.status.forView(record.status)}
        />

        <TextViewItem
          label={fields.createdAt.label}
          value={fields.createdAt.forView(record.createdAt)}
        />

        <TextViewItem
          label={fields.updatedAt.label}
          value={fields.updatedAt.forView(record.updatedAt)}
        />
      </ViewWrapper>
    );
  }

  render() {
    const { record, loading } = this.props;

    if (loading || !record) {
      return <Spinner />;
    }

    return this.renderView();
  }
}

export default MylomViewUser;
