import model from 'modules/project/projectModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import CustomerViewItem from 'view/customer/view/CustomerViewItem';
import SubscriptionViewItem from 'view/subscription/view/SubscriptionViewItem';
import ListViewItem from 'view/list/view/ListViewItem';

const { fields } = model;

class ProjectView extends Component {
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

        <CustomerViewItem
          label={fields.customer.label}
          value={fields.customer.forView(record.customer)}
        />

        <SubscriptionViewItem
          label={fields.subscription.label}
          value={fields.subscription.forView(record.subscription)}
        />

        <ListViewItem
          label={fields.list.label}
          value={fields.list.forView(record.list)}
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

export default ProjectView;
