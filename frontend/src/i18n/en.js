const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    remove: 'Remove',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
  },

  app: {
    title: 'The List of Minimums',
  },

  entities: {
    customer: {
      name: 'customer',
      label: 'Customers',
      menu: 'Customers',
      exporterFileName: 'customer_export',
      list: {
        menu: 'Customers',
        title: 'Customers',
      },
      create: {
        success: 'Customer saved successfully',
      },
      update: {
        success: 'Customer saved successfully',
      },
      destroy: {
        success: 'Customer deleted successfully',
      },
      destroyAll: {
        success: 'Customer(s) deleted successfully',
      },
      edit: {
        title: 'Edit Customer',
      },
      fields: {
        id: 'Id',
        'user': 'User',
        'subscribed': 'Subscribed',
        'displayName': 'DisplayName',
        'about': 'About',
        'subscription': 'Subscription',
        'project': 'Project',
        'lastName': 'LastName',
        'subscriptionTest': 'Subscription Test',
        'subscriptionExpirationRange': 'Subscription Expiration',
        'subscriptionExpiration': 'Subscription Expiration',
        'firstName': 'FirstName',
        'userFirstName': 'User First Name',
        'userLastName': 'User Last Name',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'subscriptionTest': {
          'lifetime': 'Lifetime',
          'annual': 'Annual',
          'monthly': 'Monthly',
          'demo': 'Demo',
          'beta': 'Beta',
        },
      },
      new: {
        title: 'New Customer',
      },
      view: {
        title: 'View Customer',
      },
      importer: {
        title: 'Import Customers',
        fileName: 'customer_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    subscription: {
      name: 'subscription',
      label: 'Subscriptions',
      menu: 'Subscriptions',
      exporterFileName: 'subscription_export',
      list: {
        menu: 'Subscriptions',
        title: 'Subscriptions',
      },
      create: {
        success: 'Subscription saved successfully',
      },
      update: {
        success: 'Subscription saved successfully',
      },
      destroy: {
        success: 'Subscription deleted successfully',
      },
      destroyAll: {
        success: 'Subscription(s) deleted successfully',
      },
      edit: {
        title: 'Edit Subscription',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        'description': 'Description',
        'unitPriceRange': 'Unit Price',
        'unitPrice': 'Unit Price',
        'photo': 'Photo',
        'durationRange': 'Duration (Months)',
        'duration': 'Duration (Months)',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Subscription',
      },
      view: {
        title: 'View Subscription',
      },
      importer: {
        title: 'Import Subscriptions',
        fileName: 'subscription_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    order: {
      name: 'order',
      label: 'Orders',
      menu: 'Orders',
      exporterFileName: 'order_export',
      list: {
        menu: 'Orders',
        title: 'Orders',
      },
      create: {
        success: 'Order saved successfully',
      },
      update: {
        success: 'Order saved successfully',
      },
      destroy: {
        success: 'Order deleted successfully',
      },
      destroyAll: {
        success: 'Order(s) deleted successfully',
      },
      edit: {
        title: 'Edit Order',
      },
      fields: {
        id: 'Id',
        'customer': 'Customer',
        'subscription': 'Subscription',
        'employee': 'Employee',
        'delivered': 'Delivered',
        'attachments': 'Attachments',
        'user': 'User',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Order',
      },
      view: {
        title: 'View Order',
      },
      importer: {
        title: 'Import Orders',
        fileName: 'order_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    project: {
      name: 'project',
      label: 'MyList',
      menu: 'MyList',
      exporterFileName: 'project_export',
      list: {
        menu: 'MyList',
        title: 'MyList',
      },
      create: {
        success: 'MyList saved successfully',
      },
      update: {
        success: 'MyList saved successfully',
      },
      destroy: {
        success: 'MyList deleted successfully',
      },
      destroyAll: {
        success: 'MyList(s) deleted successfully',
      },
      edit: {
        title: 'Edit MyList',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        'description': 'Description',
        'customer': 'Customer',
        'subscription': 'Subscription',
        'list': 'List',
        'owner': 'Owner',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Project',
      },
      view: {
        title: 'View Project',
      },
      importer: {
        title: 'Import Projects',
        fileName: 'project_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    mylist: {
      name: 'mylist',
      label: 'MyList',
      menu: 'MyList',
      exporterFileName: 'mylist_export',
      list: {
        menu: 'MyLists',
        title: 'MyLists',
      },
      create: {
        success: 'MyList saved successfully',
      },
      update: {
        success: 'MyList saved successfully',
      },
      destroy: {
        success: 'MyList deleted successfully',
      },
      destroyAll: {
        success: 'MyList(s) deleted successfully',
      },
      edit: {
        title: 'Edit MyList',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        'description': 'Description',
        'customer': 'Customer',
        'subscription': 'Subscription',
        'list': 'List',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New MyList',
      },
      view: {
        title: 'View MyList',
      },
      importer: {
        title: 'Import MyLists',
        fileName: 'mylist_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    mylom: {
      name: 'mylom',
      label: 'MyLom - Admin',
      menu: 'MyLom - Admin',
      exporterFileName: 'mylom_export',
      list: {
        menu: 'Myloms',
        title: 'MyLom - Admin',
      },
      create: {
        success: 'Mylom saved successfully',
      },
      update: {
        success: 'Mylom saved successfully',
      },
      destroy: {
        success: 'Mylom deleted successfully',
      },
      destroyAll: {
        success: 'Mylom(s) deleted successfully',
      },
      edit: {
        title: 'Edit Mylom',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        'description': 'Description',
        'user': 'User',
        'customer': 'Customer',
        'subscription': 'Subscription',
        'dueDateRange': 'Due Date',
        'dueDate': 'Due Date',
        'category': 'Category',
        'state': 'Completed?',
        'status': 'Status',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'status': {
          'active': 'Active',
          'pending': 'Pending',
          'waiting': 'Waiting',
          'cancelled': 'Cancelled',
          'complete': 'Complete',
        },
      },
      new: {
        title: 'New Mylom',
      },
      view: {
        title: 'View Mylom',
      },
      importer: {
        title: 'Import Myloms',
        fileName: 'mylom_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    mylomtest: {
      name: 'mylom',
      label: 'MyLom - Test',
      menu: 'MyLom - Test',
      exporterFileName: 'mylom_export',
      list: {
        menu: 'Myloms',
        title: 'MyLom - Test',
      },
      create: {
        success: 'Mylom saved successfully',
      },
      update: {
        success: 'Mylom saved successfully',
      },
      destroy: {
        success: 'Mylom deleted successfully',
      },
      destroyAll: {
        success: 'Mylom(s) deleted successfully',
      },
      edit: {
        title: 'Edit Mylom',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        'description': 'Description',
        'user': 'User',
        'customer': 'Customer',
        'subscription': 'Subscription',
        'dueDateRange': 'Due Date',
        'dueDate': 'Due Date',
        'category': 'Category',
        'state': 'Completed?',
        'status': 'Status',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'status': {
          'active': 'Active',
          'pending': 'Pending',
          'waiting': 'Waiting',
          'cancelled': 'Cancelled',
          'complete': 'Complete',
        },
      },
      new: {
        title: 'New Mylom',
      },
      view: {
        title: 'View Mylom',
      },
      importer: {
        title: 'Import Myloms',
        fileName: 'mylom_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    mylomuser: {
      name: 'mylomuser',
      label: 'My List of Minimums',
      menu: 'My List of Minimums',
      exporterFileName: 'mylom_export',
      list: {
        menu: 'Myloms',
        title: 'My List of Minimums',
      },
      create: {
        success: 'Mylom saved successfully',
      },
      update: {
        success: 'Mylom saved successfully',
      },
      destroy: {
        success: 'Mylom deleted successfully',
      },
      destroyAll: {
        success: 'Mylom(s) deleted successfully',
      },
      edit: {
        title: 'Edit Mylom',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        'description': 'Description',
        'user': 'User',
        'customer': 'Customer',
        'subscription': 'Subscription',
        'dueDateRange': 'Due Date',
        'dueDate': 'Due Date',
        'category': 'Category',
        'state': 'Completed?',
        'status': 'Status',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'status': {
          'active': 'Active',
          'pending': 'Pending',
          'waiting': 'Waiting',
          'cancelled': 'Cancelled',
          'complete': 'Complete',
        },
      },
      new: {
        title: 'New Mylom',
      },
      view: {
        title: 'View Mylom',
      },
      importer: {
        title: 'Import Myloms',
        fileName: 'mylom_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    hive: {
      name: 'hive',
      label: 'Groups',
      menu: 'Groups',
      exporterFileName: 'hive_export',
      list: {
        menu: 'Groups',
        title: 'Groups',
      },
      create: {
        success: 'Group saved successfully',
      },
      update: {
        success: 'Group saved successfully',
      },
      destroy: {
        success: 'Group deleted successfully',
      },
      destroyAll: {
        success: 'Group(s) deleted successfully',
      },
      edit: {
        title: 'Edit Group',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        'description': 'Description',
        'customer': 'Customer',
        'subscription': 'Subscription',
        'user': 'User',
        'mylom': 'Mylom',
        'category': 'Category',
        'status': 'Status',
        'state': 'Completed?',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'status': {
          'active': 'Active',
          'pending': 'Pending',
          'waiting': 'Waiting',
          'cancelled': 'Cancelled',
          'complete': 'Complete',
        },
      },
      new: {
        title: 'New Group',
      },
      view: {
        title: 'View Group',
      },
      importer: {
        title: 'Import Groups',
        fileName: 'hive_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    

    category: {
      name: 'category',
      label: 'Categories',
      menu: 'Categories',
      exporterFileName: 'category_export',
      list: {
        menu: 'Categories',
        title: 'Categories',
      },
      create: {
        success: 'Category saved successfully',
      },
      update: {
        success: 'Category saved successfully',
      },
      destroy: {
        success: 'Category deleted successfully',
      },
      destroyAll: {
        success: 'Category(s) deleted successfully',
      },
      edit: {
        title: 'Edit Category',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        'user': 'User',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Category',
      },
      view: {
        title: 'View Category',
      },
      importer: {
        title: 'Import Categories',
        fileName: 'category_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },



    list: {
      name: 'list',
      label: 'Lists',
      menu: 'Lists',
      exporterFileName: 'list_export',
      list: {
        menu: 'Lists',
        title: 'Lists',
      },
      create: {
        success: 'List saved successfully',
      },
      update: {
        success: 'List saved successfully',
      },
      destroy: {
        success: 'List deleted successfully',
      },
      destroyAll: {
        success: 'List(s) deleted successfully',
      },
      edit: {
        title: 'Edit List',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        'description': 'Description',
        'project': 'Project',
        'customer': 'Customer',
        'subscription': 'Subscription',
        'user': 'User',
        'dueDateRange': 'Due Date',
        'dueDate': 'Due Date',
        'category': 'Category',
        'state': 'Completed?',
        'status': 'Status',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'status': {
          'active': 'Active',
          'pending': 'Pending',
          'waiting': 'Waiting',
          'cancelled': 'Cancelled',
          'complete': 'Complete',
        },
      },
      new: {
        title: 'New List',
      },
      view: {
        title: 'View List',
      },
      importer: {
        title: 'Import Lists',
        fileName: 'list_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    task: {
      name: 'task',
      label: 'Tasks',
      menu: 'Tasks',
      exporterFileName: 'task_export',
      list: {
        menu: 'Tasks',
        title: 'Tasks',
      },
      create: {
        success: 'Task saved successfully',
      },
      update: {
        success: 'Task saved successfully',
      },
      destroy: {
        success: 'Task deleted successfully',
      },
      destroyAll: {
        success: 'Task(s) deleted successfully',
      },
      edit: {
        title: 'Edit Task',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        'description': 'Description',
        'dueDateRange': 'Due Date',
        'dueDate': 'Due Date',
        'customer': 'Customer',
        'user': 'User',
        'subscription': 'Subscription',
        'category': 'Category',
        'state': 'Completed?',
        'status': 'Status',
        'parent': 'Parent',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'status': {
          'active': 'Active',
          'pending': 'Pending',
          'waiting': 'Waiting',
          'cancelled': 'Cancelled',
          'complete': 'Complete',
        },
      },
      new: {
        title: 'New Task',
      },
      view: {
        title: 'View Task',
      },
      importer: {
        title: 'Import Tasks',
        fileName: 'task_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    inspiration: {
      name: 'inspiration',
      label: 'Inspiration',
      menu: 'Inspiration',
      exporterFileName: 'inspiration_export',
      list: {
        menu: 'Inspiration',
        title: 'Inspiration',
      },
      create: {
        success: 'Inspiration saved successfully',
      },
      update: {
        success: 'Inspiration saved successfully',
      },
      destroy: {
        success: 'Inspiration deleted successfully',
      },
      destroyAll: {
        success: 'Inspiration(s) deleted successfully',
      },
      edit: {
        title: 'Edit Inspiration',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        'description': 'Description',
        'photo': 'Photo',
        'tag': 'Tag',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Inspiration',
      },
      view: {
        title: 'View Inspiration',
      },
      importer: {
        title: 'Import Inspirations',
        fileName: 'inspiration_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    tag: {
      name: 'tag',
      label: 'Tags',
      menu: 'Tags',
      exporterFileName: 'tag_export',
      list: {
        menu: 'Tags',
        title: 'Tags',
      },
      create: {
        success: 'Tag saved successfully',
      },
      update: {
        success: 'Tag saved successfully',
      },
      destroy: {
        success: 'Tag deleted successfully',
      },
      destroyAll: {
        success: 'Tag(s) deleted successfully',
      },
      edit: {
        title: 'Edit Tag',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        'description': 'Description',
        'inspiration': 'Inspiration',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Tag',
      },
      view: {
        title: 'View Tag',
      },
      importer: {
        title: 'Import Tags',
        fileName: 'tag_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    profile: {
      title: 'Edit Profile',
      success: 'Profile updated successfully',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email sent successfully`,
    passwordResetEmailSuccess: `Password reset email sent successfully`,
    passwordResetSuccess: `Password changed successfully`,
    verifyEmail: {
      success: 'Email successfully verified',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    owner: {
      label: 'Owner',
      description: 'Full access to all resources',
    },
    admin: {
      label: 'Administrator',
      description: 'Near full access to all resources',
    },
    moderator: {
      label: 'Moderator',
      description: 'Ability to edit content and handle sales',
    },
    customer: {
      label: 'Customer',
      description: 'Ability to edit own resources and to subscribe',
    },
    subscriber: {
      label: 'Subscriber',
      description: 'A paid customer',
    },
    guest: {
      label: 'Guest',
      description: 'Has logged in but only rights to marketing material',
    },
    editor: {
      label: 'Editor',
      description: 'Edit access to all resources',
    },
    viewer: {
      label: 'Viewer',
      description: 'View access to all resources',
    },
    auditLogViewer: {
      label: 'Audit Log Viewer',
      description: 'Access to view audit logs',
    },
    iamSecurityReviewer: {
      label: 'Security Reviewer',
      description: `Full access to manage users roles`,
    },
    entityEditor: {
      label: 'Entity Editor',
      description: 'Edit access to all entities',
    },
    entityViewer: {
      label: 'Entity Viewer',
      description: 'View access to all entities',
    },
    customerEditor: {
      label: 'Customer Editor',
      description: 'Edit access to Customers',
    },
    customerViewer: {
      label: 'Customer Viewer',
      description: 'View access to Customers',
    },
    subscriptionEditor: {
      label: 'Subscription Editor',
      description: 'Edit access to Subscriptions',
    },
    subscriptionViewer: {
      label: 'Subscription Viewer',
      description: 'View access to Subscriptions',
    },
    orderEditor: {
      label: 'Order Editor',
      description: 'Edit access to Orders',
    },
    orderViewer: {
      label: 'Order Viewer',
      description: 'View access to Orders',
    },
    projectEditor: {
      label: 'Project Editor',
      description: 'Edit access to Projects',
    },
    projectViewer: {
      label: 'Project Viewer',
      description: 'View access to Projects',
    },
    listEditor: {
      label: 'List Editor',
      description: 'Edit access to Lists',
    },
    listViewer: {
      label: 'List Viewer',
      description: 'View access to Lists',
    },
    taskEditor: {
      label: 'Task Editor',
      description: 'Edit access to Tasks',
    },
    taskViewer: {
      label: 'Task Viewer',
      description: 'View access to Tasks',
    },
    inspirationEditor: {
      label: 'Inspiration Editor',
      description: 'Edit access to Inspirations',
    },
    inspirationViewer: {
      label: 'Inspiration Viewer',
      description: 'View access to Inspirations',
    },
    tagEditor: {
      label: 'Tag Editor',
      description: 'Edit access to Tags',
    },
    tagViewer: {
      label: 'Tag Viewer',
      description: 'View access to Tags',
    },
  },

  iam: {
    title: 'Users',
    menu: 'Users',
    disable: 'Disable',
    disabled: 'Disabled',
    enabled: 'Enabled',
    enable: 'Enable',
    doEnableSuccess: 'User enabled successfully',
    doDisableSuccess: 'User disabled successfully',
    doDisableAllSuccess: 'User(s) disabled successfully',
    doEnableAllSuccess: 'User(s) enabled successfully',
    doAddSuccess: 'User(s) saved successfully',
    doUpdateSuccess: 'User saved successfully',
    viewBy: 'View By',
    users: {
      name: 'users',
      label: 'Users',
      exporterFileName: 'users_export',
      doRemoveAllSelectedSuccess:
        'Permissions removed successfully',
    },
    roles: {
      label: 'Roles',
      doRemoveAllSelectedSuccess:
        'Permissions removed successfully',
    },
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'New User(s)',
      titleModal: 'New User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space.<br/> Relationships must be the ID of the referenced records separated by space.<br/> Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      disablingHimself: `You can't disable yourself`,
      revokingOwnPermission: `You can't revoke your own owner permission`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Authentication Uid',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      isSubscribed: 'Is Subscribed?',
      status: 'Status',
      subscription: 'Subscription',
      disabled: 'Disabled',
      // phoneNumber: 'Phone Number',
      nickName: 'Nick Name',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      rememberMe: 'Remember me',
    },
    enabled: 'Enabled',
    disabled: 'Disabled',
    isSubscribed: 'Is subscribed',
    notSubscribed: 'Is not subscribed',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings saved successfully. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
    },
    colors: {
      default: 'Dark',
      light: 'Light',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  home: {
    menu: 'Home',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/home/HomePage.js.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  guest: {
    menu: 'Welcome Guest',

  },
  todo: {
    menu: 'ToDo',

  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: '${path} field must have at least ${min} items',
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be '{0}'.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
    noOptions: 'No data found',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  table: {
    noData: 'No records found',
    loading: 'Loading...',
  },

  pagination: {
    items_per_page: '/ page',
    jump_to: 'Goto',
    jump_to_confirm: 'confirm',
    page: '',

    prev_page: 'Previous Page',
    next_page: 'Next Page',
    prev_5: 'Previous 5 Pages',
    next_5: 'Next 5 Pages',
    prev_3: 'Previous 3 Pages',
    next_3: 'Next 3 Pages',
  },

  firebaseErrors: {
    'auth/user-disabled': 'Your account is disabled',
    'auth/user-not-found': `Sorry, we don't recognize your credentials`,
    'auth/wrong-password': `Sorry, we don't recognize your credentials`,
    'auth/weak-password': 'This password is too weak',
    'auth/email-already-in-use': 'Email is already in use',
    'auth/invalid-email': 'Please provide a valid email',
    'auth/account-exists-with-different-credential':
      'Email is already in use for a different authentication method.',
    'auth/credential-already-in-use':
      'Credentials are already in use',
  },
};

export default en;
