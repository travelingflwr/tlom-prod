import model from 'modules/task/taskModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import UserViewItem from 'view/iam/view/UserViewItem';
import CustomerViewItem from 'view/customer/view/CustomerViewItem';
import SubscriptionViewItem from 'view/subscription/view/SubscriptionViewItem';
import CategoryViewItem from 'view/category/view/CategoryViewItem';
import TaskViewItem from 'view/task/view/TaskViewItem';

const { fields } = model;

class TaskView extends Component {
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

        <TextViewItem
          label={fields.dueDate.label}
          value={fields.dueDate.forView(record.dueDate)}
        />

        <CustomerViewItem
          label={fields.customer.label}
          value={fields.customer.forView(record.customer)}
        />

        <UserViewItem
          label={fields.user.label}
          value={fields.user.forView(record.user)}
        />

        <SubscriptionViewItem
          label={fields.subscription.label}
          value={fields.subscription.forView(record.subscription)}
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

        <TaskViewItem
          label={fields.parent.label}
          value={fields.parent.forView(record.parent)}
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

export default TaskView;
