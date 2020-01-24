import model from 'modules/customer/customerModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import SubscriptionViewItem from 'view/subscription/view/SubscriptionViewItem';
import ProjectViewItem from 'view/project/view/ProjectViewItem';

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

        <TextViewItem
          label={fields.name.label}
          value={fields.name.forView(record.name)}
        />

        <TextViewItem
          label={fields.subscribed.label}
          value={fields.subscribed.forView(record.subscribed)}
        />

        <SubscriptionViewItem
          label={fields.subscription.label}
          value={fields.subscription.forView(record.subscription)}
        />

        <ProjectViewItem
          label={fields.project.label}
          value={fields.project.forView(record.project)}
        />

        <TextViewItem
          label={fields.location.label}
          value={fields.location.forView(record.location)}
        />

        <TextViewItem
          label={fields.about.label}
          value={fields.about.forView(record.about)}
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
