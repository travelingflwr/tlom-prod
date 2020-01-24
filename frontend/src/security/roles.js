import { i18n } from 'i18n';
import _values from 'lodash/values';

class Roles {
  static get values() {
    return {
      owner: 'owner',
      admin: 'admin',
      guest: 'guest',
      moderator: 'moderator',
      customer: 'customer',
      subscriber: 'subscriber',
      editor: 'editor',
      viewer: 'viewer',
      auditLogViewer: 'auditLogViewer',
      iamSecurityReviewer: 'iamSecurityReviewer',
      entityEditor: 'entityEditor',
      entityViewer: 'entityViewer',
      customerEditor: 'customerEditor',
      customerViewer: 'customerViewer',
      subscriptionEditor: 'subscriptionEditor',
      subscriptionViewer: 'subscriptionViewer',
      orderEditor: 'orderEditor',
      orderViewer: 'orderViewer',
      projectEditor: 'projectEditor',
      projectViewer: 'projectViewer',
      listEditor: 'listEditor',
      listViewer: 'listViewer',
      taskEditor: 'taskEditor',
      taskViewer: 'taskViewer',
      inspirationEditor: 'inspirationEditor',
      inspirationViewer: 'inspirationViewer',
      tagEditor: 'tagEditor',
      tagViewer: 'tagViewer',
    };
  }

  static labelOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.label`);
  }

  static descriptionOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.description`);
  }

  static get selectOptions() {
    return _values(this.values).map((value) => ({
      id: value,
      value: value,
      title: this.descriptionOf(value),
      label: this.labelOf(value),
    }));
  }
}

export default Roles;
