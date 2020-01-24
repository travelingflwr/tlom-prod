/**
 * List of Roles available for the Users.
 */
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
}

module.exports = Roles;
