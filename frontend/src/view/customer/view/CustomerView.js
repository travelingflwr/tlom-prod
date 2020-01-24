import model from 'modules/customer/customerModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import UserViewItem from 'view/iam/view/UserViewItem';
import SubscriptionViewItem from 'view/subscription/view/SubscriptionViewItem';
import HiveViewItem from 'view/hive/view/HiveViewItem';

const { fields } = model;

class CustomerView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <UserViewItem
          label={fields.user.label}
          value={fields.user.forView(record.user)}
        />

        <TextViewItem
          label={fields.subscribed.label}
          value={fields.subscribed.forView(record.subscribed)}
        />

        <TextViewItem
          label={fields.displayName.label}
          value={fields.displayName.forView(record.displayName)}
        />

        <TextViewItem
          label={fields.about.label}
          value={fields.about.forView(record.about)}
        />

        <SubscriptionViewItem
          label={fields.subscription.label}
          value={fields.subscription.forView(record.subscription)}
        />

        <HiveViewItem
          label={fields.project.label}
          value={fields.project.forView(record.project)}
        />

        <TextViewItem
          label={fields.lastName.label}
          value={fields.lastName.forView(record.lastName)}
        />

        <TextViewItem
          label={fields.subscriptionTest.label}
          value={fields.subscriptionTest.forView(record.subscriptionTest)}
        />

        <TextViewItem
          label={fields.subscriptionExpiration.label}
          value={fields.subscriptionExpiration.forView(record.subscriptionExpiration)}
        />

        <TextViewItem
          label={fields.firstName.label}
          value={fields.firstName.forView(record.firstName)}
        />

        <UserViewItem
          label={fields.userFirstName.label}
          value={fields.userFirstName.forView(record.userFirstName)}
        />

        <UserViewItem
          label={fields.userLastName.label}
          value={fields.userLastName.forView(record.userLastName)}
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

export default CustomerView;
