const Roles = require('./roles');
const roles = Roles.values;

/**
 * List of Permissions and the Roles allowed of using them.
 */
class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [
          roles.owner,
          roles.admin,
        ],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [
          roles.owner,
          roles.admin,
        ],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [
          roles.owner,
          roles.admin,
        ],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [
          roles.owner,
          roles.admin,
        ],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.admin,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.owner, roles.admin],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.owner, roles.admin],
      },

      viewHome: {
        id: 'viewHome',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.moderator,
          roles.customer,
          roles.subscriber,
        ],
      },
      viewGuestHome: {
        id: 'viewGuestHome',
        allowedRoles: [
          roles.guest,
        ],
      },
      customerImport: {
        id: 'customerImport',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.customerEditor,
        ],
      },
      customerCreate: {
        id: 'customerCreate',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.customerEditor,
        ],
        allowedStorageFolders: ['customer'],
      },
      customerEdit: {
        id: 'customerEdit',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.customerEditor,
        ],
        allowedStorageFolders: ['customer'],
      },
      customerDestroy: {
        id: 'customerDestroy',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.customerEditor,
        ],
        allowedStorageFolders: ['customer'],
      },
      customerRead: {
        id: 'customerRead',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.customerEditor,
          roles.customerViewer,
        ],
      },
      customerAutocomplete: {
        id: 'customerAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.customerEditor,
          roles.customerViewer,
          roles.orderEditor,
          roles.orderViewer,
          roles.projectEditor,
          roles.projectViewer,
        ],
      },

      subscriptionImport: {
        id: 'subscriptionImport',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.subscriptionEditor,
        ],
      },
      subscriptionCreate: {
        id: 'subscriptionCreate',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.subscriptionEditor,
        ],
        allowedStorageFolders: ['subscription'],
      },
      subscriptionEdit: {
        id: 'subscriptionEdit',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.subscriptionEditor,
        ],
        allowedStorageFolders: ['subscription'],
      },
      subscriptionDestroy: {
        id: 'subscriptionDestroy',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.subscriptionEditor,
        ],
        allowedStorageFolders: ['subscription'],
      },
      subscriptionRead: {
        id: 'subscriptionRead',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.subscriptionEditor,
          roles.subscriptionViewer,
        ],
      },
      subscriptionAutocomplete: {
        id: 'subscriptionAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.subscriptionEditor,
          roles.subscriptionViewer,
          roles.customerEditor,
          roles.customerViewer,
          roles.orderEditor,
          roles.orderViewer,
          roles.projectEditor,
          roles.projectViewer,
        ],
      },

      orderImport: {
        id: 'orderImport',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.orderEditor,
        ],
      },
      orderCreate: {
        id: 'orderCreate',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.orderEditor,
        ],
        allowedStorageFolders: ['order'],
      },
      orderEdit: {
        id: 'orderEdit',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.orderEditor,
        ],
        allowedStorageFolders: ['order'],
      },
      orderDestroy: {
        id: 'orderDestroy',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.orderEditor,
        ],
        allowedStorageFolders: ['order'],
      },
      orderRead: {
        id: 'orderRead',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.orderEditor,
          roles.orderViewer,
        ],
      },
      orderAutocomplete: {
        id: 'orderAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.orderEditor,
          roles.orderViewer,

        ],
      },

      mylomImport: {
        id: 'mylomImport',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.mylomEditor,
        ],
      },
      mylomCreate: {
        id: 'mylomCreate',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.mylomEditor,
        ],
        allowedStorageFolders: ['mylom'],
      },
      mylomEdit: {
        id: 'mylomEdit',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.mylomEditor,
        ],
        allowedStorageFolders: ['mylom'],
      },
      mylomDestroy: {
        id: 'mylomDestroy',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.mylomEditor,
        ],
        allowedStorageFolders: ['mylom'],
      },
      mylomRead: {
        id: 'mylomRead',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.mylomEditor,
          roles.mylomViewer,
        ],
      },
      mylomAutocomplete: {
        id: 'mylomAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.mylomEditor,
          roles.mylomViewer,
          roles.hiveEditor,
          roles.hiveViewer,
        ],
      },

      hiveImport: {
        id: 'hiveImport',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.hiveEditor,
        ],
      },
      hiveCreate: {
        id: 'hiveCreate',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.hiveEditor,
        ],
        allowedStorageFolders: ['hive'],
      },
      hiveEdit: {
        id: 'hiveEdit',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.hiveEditor,
        ],
        allowedStorageFolders: ['hive'],
      },
      hiveDestroy: {
        id: 'hiveDestroy',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.hiveEditor,
        ],
        allowedStorageFolders: ['hive'],
      },
      hiveRead: {
        id: 'hiveRead',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.hiveEditor,
          roles.hiveViewer,
        ],
      },
      hiveAutocomplete: {
        id: 'hiveAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.hiveEditor,
          roles.hiveViewer,
          roles.customerEditor,
          roles.customerViewer,
          roles.listEditor,
          roles.listViewer,
        ],
      },

      projectImport: {
        id: 'projectImport',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.projectEditor,
        ],
      },
      projectCreate: {
        id: 'projectCreate',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.subscriber,
          roles.editor,
          roles.entityEditor,
          roles.projectEditor,
        ],
        allowedStorageFolders: ['project'],
      },
      projectEdit: {
        id: 'projectEdit',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.projectEditor,
        ],
        allowedStorageFolders: ['project'],
      },
      projectDestroy: {
        id: 'projectDestroy',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.projectEditor,
        ],
        allowedStorageFolders: ['project'],
      },
      projectRead: {
        id: 'projectRead',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.subscriber,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.projectEditor,
          roles.projectViewer,
        ],
      },
      projectAutocomplete: {
        id: 'projectAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.subscriber,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.projectEditor,
          roles.projectViewer,
          roles.customerEditor,
          roles.customerViewer,
          roles.listEditor,
          roles.listViewer,
        ],
      },

      myListImport: {
        id: 'projectImport',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.projectEditor,
        ],
      },
      myListCreate: {
        id: 'projectCreate',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.subscriber,
          roles.editor,
          roles.entityEditor,
          roles.projectEditor,
        ],
        allowedStorageFolders: ['project'],
      },
      myListEdit: {
        id: 'projectEdit',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.projectEditor,
        ],
        allowedStorageFolders: ['project'],
      },
      myListDestroy: {
        id: 'projectDestroy',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.projectEditor,
        ],
        allowedStorageFolders: ['project'],
      },
      myListRead: {
        id: 'projectRead',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.subscriber,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.projectEditor,
          roles.projectViewer,
        ],
      },
      myListAutocomplete: {
        id: 'projectAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.subscriber,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.projectEditor,
          roles.projectViewer,
          roles.customerEditor,
          roles.customerViewer,
          roles.listEditor,
          roles.listViewer,
        ],
      },

      listImport: {
        id: 'listImport',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.listEditor,
        ],
      },
      listCreate: {
        id: 'listCreate',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.subscriber,
          roles.editor,
          roles.entityEditor,
          roles.listEditor,
        ],
        allowedStorageFolders: ['list'],
      },
      listEdit: {
        id: 'listEdit',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.listEditor,
        ],
        allowedStorageFolders: ['list'],
      },
      listDestroy: {
        id: 'listDestroy',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.listEditor,
        ],
        allowedStorageFolders: ['list'],
      },
      listRead: {
        id: 'listRead',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.subscriber,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.listEditor,
          roles.listViewer,
        ],
      },
      listAutocomplete: {
        id: 'listAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.subscriber,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.listEditor,
          roles.listViewer,
          roles.projectEditor,
          roles.projectViewer,
        ],
      },
      todoRead: {
        id: 'todoRead',
        allowedRoles: [
          roles.owner,
          roles.admin,
        ],
      },
      taskImport: {
        id: 'taskImport',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.taskEditor,
        ],
      },
      taskCreate: {
        id: 'taskCreate',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.subscriber,
          roles.editor,
          roles.entityEditor,
          roles.taskEditor,
        ],
        allowedStorageFolders: ['task'],
      },
      taskEdit: {
        id: 'taskEdit',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.taskEditor,
        ],
        allowedStorageFolders: ['task'],
      },
      taskDestroy: {
        id: 'taskDestroy',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.taskEditor,
        ],
        allowedStorageFolders: ['task'],
      },
      taskRead: {
        id: 'taskRead',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.subscriber,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.taskEditor,
          roles.taskViewer,
        ],
      },
      taskAutocomplete: {
        id: 'taskAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.subscriber,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.taskEditor,
          roles.taskViewer,
          roles.listEditor,
          roles.listViewer,
        ],
      },

      inspirationImport: {
        id: 'inspirationImport',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.inspirationEditor,
        ],
      },
      inspirationCreate: {
        id: 'inspirationCreate',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.inspirationEditor,
        ],
        allowedStorageFolders: ['inspiration'],
      },
      inspirationEdit: {
        id: 'inspirationEdit',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.inspirationEditor,
        ],
        allowedStorageFolders: ['inspiration'],
      },
      inspirationDestroy: {
        id: 'inspirationDestroy',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.inspirationEditor,
        ],
        allowedStorageFolders: ['inspiration'],
      },
      inspirationRead: {
        id: 'inspirationRead',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.subscriber,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.inspirationEditor,
          roles.inspirationViewer,
        ],
      },
      inspirationAutocomplete: {
        id: 'inspirationAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.subscriber,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.inspirationEditor,
          roles.inspirationViewer,
          roles.tagEditor,
          roles.tagViewer,
        ],
      },

      tagImport: {
        id: 'tagImport',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.tagEditor,
        ],
      },
      tagCreate: {
        id: 'tagCreate',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.tagEditor,
        ],
        allowedStorageFolders: ['tag'],
      },
      tagEdit: {
        id: 'tagEdit',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.tagEditor,
        ],
        allowedStorageFolders: ['tag'],
      },
      tagDestroy: {
        id: 'tagDestroy',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.tagEditor,
        ],
        allowedStorageFolders: ['tag'],
      },
      tagRead: {
        id: 'tagRead',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.subscriber,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.tagEditor,
          roles.tagViewer,
        ],
      },
      tagAutocomplete: {
        id: 'tagAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.subscriber,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.tagEditor,
          roles.tagViewer,
          roles.inspirationEditor,
          roles.inspirationViewer,
        ],
      },

      categoryImport: {
        id: 'categoryImport',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.categoryEditor,
        ],
      },
      categoryCreate: {
        id: 'categoryCreate',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.categoryEditor,
        ],
        allowedStorageFolders: ['category'],
      },
      categoryEdit: {
        id: 'categoryEdit',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.categoryEditor,
        ],
        allowedStorageFolders: ['category'],
      },
      categoryDestroy: {
        id: 'categoryDestroy',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.entityEditor,
          roles.categoryEditor,
        ],
        allowedStorageFolders: ['category'],
      },
      categoryRead: {
        id: 'categoryRead',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.categoryEditor,
          roles.categoryViewer,
        ],
      },
      categoryAutocomplete: {
        id: 'categoryAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.categoryEditor,
          roles.categoryViewer,
          roles.mylomEditor,
          roles.mylomViewer,
          roles.hiveEditor,
          roles.hiveViewer,
          roles.listEditor,
          roles.listViewer,
          roles.taskEditor,
          roles.taskViewer,
        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

module.exports = Permissions;
