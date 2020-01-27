import Permissions from 'security/permissions';
import { i18n } from 'i18n';
const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/home',
    icon: 'fas fa-home',
    label: i18n('home.menu'),
    menu: {
      exact: true,
    },
    loader: () => import('view/home/HomePage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/profile',
    loader: () => import('view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
    menu: false,
  },

  {
    path: '/iam',
    loader: () => import('view/iam/list/IamPage'),
    permissionRequired: permissions.iamRead,
    exact: true,
    icon: 'fas fa-user-plus',
    label: i18n('iam.menu'),
    menu: true,
  },
  {
    path: '/iam/new',
    loader: () => import('view/iam/new/IamNewPage'),
    menu: false,
    permissionRequired: permissions.iamCreate,
    exact: true,
  },
  {
    path: '/iam/importer',
    loader: () =>
      import('view/iam/importer/IamImporterPage'),
    menu: false,
    permissionRequired: permissions.iamImport,
    exact: true,
  },
  {
    path: '/iam/:id/edit',
    loader: () => import('view/iam/edit/IamEditPage'),
    menu: false,
    permissionRequired: permissions.iamEdit,
    exact: true,
  },
  {
    path: '/iam/:id',
    loader: () => import('view/iam/view/IamViewPage'),
    menu: false,
    permissionRequired: permissions.iamRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    icon: 'fas fa-history',
    label: i18n('auditLog.menu'),
    loader: () => import('view/auditLog/AuditLogPage'),
    menu: true,
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: 'fas fa-cog',
    label: i18n('settings.menu'),
    loader: () => import('view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
    menu: true,
  },

  {
    path: '/customer',
    loader: () => import('view/customer/list/CustomerListPage'),
    permissionRequired: permissions.customerRead,
    exact: true,
    icon: 'fas fa-user',
    label: i18n('entities.customer.menu'),
    menu: true,
  },
  {
    path: '/customer/new',
    loader: () => import('view/customer/form/CustomerFormPage'),
    menu: false,
    permissionRequired: permissions.customerCreate,
    exact: true,
  },
  {
    path: '/customer/importer',
    loader: () =>
      import('view/customer/importer/CustomerImporterPage'),
    menu: false,
    permissionRequired: permissions.customerImport,
    exact: true,
  },
  {
    path: '/customer/:id/edit',
    loader: () => import('view/customer/form/CustomerFormPage'),
    menu: false,
    permissionRequired: permissions.customerEdit,
    exact: true,
  },
  {
    path: '/customer/:id',
    loader: () => import('view/customer/view/CustomerViewPage'),
    menu: false,
    permissionRequired: permissions.customerRead,
    exact: true,
  },

  {
    path: '/subscription',
    loader: () => import('view/subscription/list/SubscriptionListPage'),
    permissionRequired: permissions.subscriptionRead,
    exact: true,
    icon: 'fas fa-user-tag',
    label: i18n('entities.subscription.menu'),
    menu: true,
  },
  {
    path: '/subscription/new',
    loader: () => import('view/subscription/form/SubscriptionFormPage'),
    menu: false,
    permissionRequired: permissions.subscriptionCreate,
    exact: true,
  },
  {
    path: '/subscription/importer',
    loader: () =>
      import('view/subscription/importer/SubscriptionImporterPage'),
    menu: false,
    permissionRequired: permissions.subscriptionImport,
    exact: true,
  },
  {
    path: '/subscription/:id/edit',
    loader: () => import('view/subscription/form/SubscriptionFormPage'),
    menu: false,
    permissionRequired: permissions.subscriptionEdit,
    exact: true,
  },
  {
    path: '/subscription/:id',
    loader: () => import('view/subscription/view/SubscriptionViewPage'),
    menu: false,
    permissionRequired: permissions.subscriptionRead,
    exact: true,
  },

  {
    path: '/order',
    loader: () => import('view/order/list/OrderListPage'),
    permissionRequired: permissions.orderRead,
    exact: true,
    icon: 'fas fa-store',
    label: i18n('entities.order.menu'),
    menu: true,
  },
  {
    path: '/order/new',
    loader: () => import('view/order/form/OrderFormPage'),
    menu: false,
    permissionRequired: permissions.orderCreate,
    exact: true,
  },
  {
    path: '/order/importer',
    loader: () =>
      import('view/order/importer/OrderImporterPage'),
    menu: false,
    permissionRequired: permissions.orderImport,
    exact: true,
  },
  {
    path: '/order/:id/edit',
    loader: () => import('view/order/form/OrderFormPage'),
    menu: false,
    permissionRequired: permissions.orderEdit,
    exact: true,
  },
  {
    path: '/order/:id',
    loader: () => import('view/order/view/OrderViewPage'),
    menu: false,
    permissionRequired: permissions.orderRead,
    exact: true,
  },

  /* {
    path: '/project',
    loader: () => import('view/project/list/ProjectListPage'),
    permissionRequired: permissions.projectRead,
    exact: true,
    icon: 'fas fa-project-diagram',
    label: i18n('entities.project.menu'),
    menu: true,
  },
  {
    path: '/project/new',
    loader: () => import('view/project/form/ProjectFormPage'),
    menu: false,
    permissionRequired: permissions.projectCreate,
    exact: true,
  },
  {
    path: '/project/importer',
    loader: () =>
      import('view/project/importer/ProjectImporterPage'),
    menu: false,
    permissionRequired: permissions.projectImport,
    exact: true,
  },
  {
    path: '/project/:id/edit',
    loader: () => import('view/project/form/ProjectFormPage'),
    menu: false,
    permissionRequired: permissions.projectEdit,
    exact: true,
  },
  {
    path: '/project/:id',
    loader: () => import('view/project/view/ProjectViewPage'),
    menu: false,
    permissionRequired: permissions.projectRead,
    exact: true,
  }, */

  {
    path: '/mylom',
    loader: () => import('view/mylom/list/MylomListPage'),
    permissionRequired: permissions.mylomRead,
    exact: true,
    icon: 'fas fa-project-diagram',
    label: i18n('entities.mylom.menu'),
    menu: true,
  },
  {
    path: '/mylom/new',
    loader: () => import('view/mylom/form/MylomFormPage'),
    menu: false,
    permissionRequired: permissions.mylomCreate,
    exact: true,
  },
  {
    path: '/mylom/importer',
    loader: () =>
      import('view/mylom/importer/MylomImporterPage'),
    menu: false,
    permissionRequired: permissions.mylomImport,
    exact: true,
  },
  {
    path: '/mylom/:id/edit',
    loader: () => import('view/mylom/form/MylomFormPage'),
    menu: false,
    permissionRequired: permissions.mylomEdit,
    exact: true,
  },
  {
    path: '/mylom/:id',
    loader: () => import('view/mylom/view/MylomViewPage'),
    menu: false,
    permissionRequired: permissions.mylomRead,
    exact: true,
  },

  {
    path: '/mylomuser',
    loader: () => import('view/mylom/list/MylomListPageUser'),
    permissionRequired: permissions.mylomRead,
    exact: true,
    icon: 'fas fa-project-diagram',
    label: i18n('entities.mylomuser.menu'),
    menu: true,
  },
  {
    path: '/mylomuser/new',
    loader: () => import('view/mylom/form/MylomFormPageUser'),
    menu: false,
    permissionRequired: permissions.mylomCreate,
    exact: true,
  },
  {
    path: '/mylomuser/:id/edit',
    loader: () => import('view/mylom/form/MylomFormPageUser'),
    menu: false,
    permissionRequired: permissions.mylomEdit,
    exact: true,
  },
  {
    path: '/mylomuser/:id',
    loader: () => import('view/mylom/view/MylomViewPageUser'),
    menu: false,
    permissionRequired: permissions.mylomRead,
    exact: true,
  },

  {
    path: '/hive',
    loader: () => import('view/hive/list/HiveListPage'),
    permissionRequired: permissions.hiveRead,
    exact: true,
    icon: 'fas fa-chevron-right',
    label: i18n('entities.hive.menu'),
    menu: true,
  },
  {
    path: '/hive/new',
    loader: () => import('view/hive/form/HiveFormPage'),
    menu: false,
    permissionRequired: permissions.hiveCreate,
    exact: true,
  },
  {
    path: '/hive/importer',
    loader: () =>
      import('view/hive/importer/HiveImporterPage'),
    menu: false,
    permissionRequired: permissions.hiveImport,
    exact: true,
  },
  {
    path: '/hive/:id/edit',
    loader: () => import('view/hive/form/HiveFormPage'),
    menu: false,
    permissionRequired: permissions.hiveEdit,
    exact: true,
  },
  {
    path: '/hive/:id',
    loader: () => import('view/hive/view/HiveViewPage'),
    menu: false,
    permissionRequired: permissions.hiveRead,
    exact: true,
  },

  

  {
    path: '/list',
    loader: () => import('view/list/list/ListListPage'),
    permissionRequired: permissions.listRead,
    exact: true,
    icon: 'fas fa-stream',
    label: i18n('entities.list.menu'),
    menu: true,
  },
  {
    path: '/list/new',
    loader: () => import('view/list/form/ListFormPage'),
    menu: false,
    permissionRequired: permissions.listCreate,
    exact: true,
  },
  {
    path: '/list/importer',
    loader: () =>
      import('view/list/importer/ListImporterPage'),
    menu: false,
    permissionRequired: permissions.listImport,
    exact: true,
  },
  {
    path: '/list/:id/edit',
    loader: () => import('view/list/form/ListFormPage'),
    menu: false,
    permissionRequired: permissions.listEdit,
    exact: true,
  },
  {
    path: '/list/:id',
    loader: () => import('view/list/view/ListViewPage'),
    menu: false,
    permissionRequired: permissions.listRead,
    exact: true,
  },

  {
    path: '/task',
    loader: () => import('view/task/list/TaskListPage'),
    permissionRequired: permissions.taskRead,
    exact: true,
    icon: 'fas fa-tasks',
    label: i18n('entities.task.menu'),
    menu: true,
  },
  {
    path: '/task/new',
    loader: () => import('view/task/form/TaskFormPage'),
    menu: false,
    permissionRequired: permissions.taskCreate,
    exact: true,
  },
  {
    path: '/task/importer',
    loader: () =>
      import('view/task/importer/TaskImporterPage'),
    menu: false,
    permissionRequired: permissions.taskImport,
    exact: true,
  },
  {
    path: '/task/:id/edit',
    loader: () => import('view/task/form/TaskFormPage'),
    menu: false,
    permissionRequired: permissions.taskEdit,
    exact: true,
  },
  {
    path: '/task/:id',
    loader: () => import('view/task/view/TaskViewPage'),
    menu: false,
    permissionRequired: permissions.taskRead,
    exact: true,
  },

  {
    path: '/inspiration',
    loader: () => import('view/inspiration/list/InspirationListPage'),
    permissionRequired: permissions.inspirationRead,
    exact: true,
    icon: 'fas fa-lightbulb',
    label: i18n('entities.inspiration.menu'),
    menu: true,
  },
  {
    path: '/inspiration/new',
    loader: () => import('view/inspiration/form/InspirationFormPage'),
    menu: false,
    permissionRequired: permissions.inspirationCreate,
    exact: true,
  },
  {
    path: '/inspiration/importer',
    loader: () =>
      import('view/inspiration/importer/InspirationImporterPage'),
    menu: false,
    permissionRequired: permissions.inspirationImport,
    exact: true,
  },
  {
    path: '/inspiration/:id/edit',
    loader: () => import('view/inspiration/form/InspirationFormPage'),
    menu: false,
    permissionRequired: permissions.inspirationEdit,
    exact: true,
  },
  {
    path: '/inspiration/:id',
    loader: () => import('view/inspiration/view/InspirationViewPage'),
    menu: false,
    permissionRequired: permissions.inspirationRead,
    exact: true,
  },

  {
    path: '/tag',
    loader: () => import('view/tag/list/TagListPage'),
    permissionRequired: permissions.tagRead,
    exact: true,
    icon: 'fas fa-tags',
    label: i18n('entities.tag.menu'),
    menu: true,
  },
  {
    path: '/tag/new',
    loader: () => import('view/tag/form/TagFormPage'),
    menu: false,
    permissionRequired: permissions.tagCreate,
    exact: true,
  },
  {
    path: '/tag/importer',
    loader: () =>
      import('view/tag/importer/TagImporterPage'),
    menu: false,
    permissionRequired: permissions.tagImport,
    exact: true,
  },
  {
    path: '/tag/:id/edit',
    loader: () => import('view/tag/form/TagFormPage'),
    menu: false,
    permissionRequired: permissions.tagEdit,
    exact: true,
  },
  {
    path: '/tag/:id',
    loader: () => import('view/tag/view/TagViewPage'),
    menu: false,
    permissionRequired: permissions.tagRead,
    exact: true,
  },

  {
    path: '/category',
    loader: () => import('view/category/list/CategoryListPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
    icon: 'fas fa-chevron-right',
    label: i18n('entities.category.menu'),
    menu: true,
  },
  {
    path: '/category/new',
    loader: () => import('view/category/form/CategoryFormPage'),
    menu: false,
    permissionRequired: permissions.categoryCreate,
    exact: true,
  },
  {
    path: '/category/importer',
    loader: () =>
      import('view/category/importer/CategoryImporterPage'),
    menu: false,
    permissionRequired: permissions.categoryImport,
    exact: true,
  },
  {
    path: '/category/:id/edit',
    loader: () => import('view/category/form/CategoryFormPage'),
    menu: false,
    permissionRequired: permissions.categoryEdit,
    exact: true,
  },
  {
    path: '/category/:id',
    loader: () => import('view/category/view/CategoryViewPage'),
    menu: false,
    permissionRequired: permissions.categoryRead,
    exact: true,
  },

  

  {
    path: '/todo',
    loader: () => import('view/todo'),
    permissionRequired: permissions.todoRead,
    exact: true,
    icon: 'fas fa-user-plus',
    label: i18n('todo.menu'),
    menu: true,
  },

  {
    path: '/mylomtest',
    loader: () => import('view/mylomtest/list/MylomTestListPage'),
    permissionRequired: permissions.mylomRead,
    exact: true,
    icon: 'fas fa-project-diagram',
    label: i18n('entities.mylomtest.menu'),
    menu: true,
  },
  {
    path: '/mylomtest/new',
    loader: () => import('view/mylomtest/form/MylomTestFormPage'),
    menu: false,
    permissionRequired: permissions.mylomCreate,
    exact: true,
  },
  {
    path: '/mylomtest/importer',
    loader: () =>
      import('view/mylomtest/importer/MylomTestImporterPage'),
    menu: false,
    permissionRequired: permissions.mylomImport,
    exact: true,
  },
  {
    path: '/mylomtest/:id/edit',
    loader: () => import('view/mylomtest/form/MylomTestFormPage'),
    menu: false,
    permissionRequired: permissions.mylomEdit,
    exact: true,
  },
  {
    path: '/mylomtest/:id',
    loader: () => import('view/mylomtest/view/MylomTestViewPage'),
    menu: false,
    permissionRequired: permissions.mylomRead,
    exact: true,
  },
  
];

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () => import('view/auth/ForgotPasswordPage'),
  },
  {
    path: '/',
    loader: () => import('view/landing/Landing'),
  },
  {
    path: '/about',
    loader: () => import('view/landing/About'),
  },
  {
    path: '/usecases',
    loader: () => import('view/landing/UseCases'),
  },
  {
    path: '/beinspired',
    loader: () => import('view/landing/BeInspired'),
  },
  
];

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () => import('view/auth/EmptyPermissionsPage'),
  },
];

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () => import('view/auth/EmailUnverifiedPage'),
  },
];

const simpleRoutes = [
  {
    path: '/403',
    loader: () => import('view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () => import('view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () => import('view/shared/errors/Error404Page'),
  },
];

export default {
  privateRoutes,
  publicRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
