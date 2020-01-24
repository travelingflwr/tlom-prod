const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Remover',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
  },

  app: {
    title: 'Aplicação',
  },

  entities: {
    customer: {
      name: 'Customer',
      label: 'Customers',
      menu: 'Customers',
      exporterFileName: 'Customer_exportados',
      list: {
        menu: 'Customers',
        title: 'Customers',
      },
      create: {
        success: 'Customer salvo com sucesso',
      },
      update: {
        success: 'Customer salvo com sucesso',
      },
      destroy: {
        success: 'Customer deletado com sucesso',
      },
      destroyAll: {
        success: 'Customer(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Customer',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        'subscribed': 'Subscribed',
        'subscription': 'Subscription',
        'project': 'Project',
        'location': 'Location',
        'about': 'About',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Customer',
      },
      view: {
        title: 'Visualizar Customer',
      },
      importer: {
        title: 'Importar Customers',
        fileName: 'customer_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    subscription: {
      name: 'Subscription',
      label: 'Subscriptions',
      menu: 'Subscriptions',
      exporterFileName: 'Subscription_exportados',
      list: {
        menu: 'Subscriptions',
        title: 'Subscriptions',
      },
      create: {
        success: 'Subscription salvo com sucesso',
      },
      update: {
        success: 'Subscription salvo com sucesso',
      },
      destroy: {
        success: 'Subscription deletado com sucesso',
      },
      destroyAll: {
        success: 'Subscription(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Subscription',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        'description': 'Description',
        'unitPriceRange': 'Unit Price',
        'unitPrice': 'Unit Price',
        'photo': 'Photo',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Subscription',
      },
      view: {
        title: 'Visualizar Subscription',
      },
      importer: {
        title: 'Importar Subscriptions',
        fileName: 'subscription_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    order: {
      name: 'Order',
      label: 'Orders',
      menu: 'Orders',
      exporterFileName: 'Order_exportados',
      list: {
        menu: 'Orders',
        title: 'Orders',
      },
      create: {
        success: 'Order salvo com sucesso',
      },
      update: {
        success: 'Order salvo com sucesso',
      },
      destroy: {
        success: 'Order deletado com sucesso',
      },
      destroyAll: {
        success: 'Order(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Order',
      },
      fields: {
        id: 'Id',
        'customer': 'Customer',
        'subscription': 'Subscription',
        'employee': 'Employee',
        'delivered': 'Delivered',
        'attachments': 'Attachments',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Order',
      },
      view: {
        title: 'Visualizar Order',
      },
      importer: {
        title: 'Importar Orders',
        fileName: 'order_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    project: {
      name: 'Project',
      label: 'Projects',
      menu: 'Projects',
      exporterFileName: 'Project_exportados',
      list: {
        menu: 'Projects',
        title: 'Projects',
      },
      create: {
        success: 'Project salvo com sucesso',
      },
      update: {
        success: 'Project salvo com sucesso',
      },
      destroy: {
        success: 'Project deletado com sucesso',
      },
      destroyAll: {
        success: 'Project(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Project',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        'description': 'Description',
        'customer': 'Customer',
        'subscription': 'Subscription',
        'list': 'List',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Project',
      },
      view: {
        title: 'Visualizar Project',
      },
      importer: {
        title: 'Importar Projects',
        fileName: 'project_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    list: {
      name: 'List',
      label: 'Lists',
      menu: 'Lists',
      exporterFileName: 'List_exportados',
      list: {
        menu: 'Lists',
        title: 'Lists',
      },
      create: {
        success: 'List salvo com sucesso',
      },
      update: {
        success: 'List salvo com sucesso',
      },
      destroy: {
        success: 'List deletado com sucesso',
      },
      destroyAll: {
        success: 'List(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar List',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        'description': 'Description',
        'project': 'Project',
        'task': 'Task',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo List',
      },
      view: {
        title: 'Visualizar List',
      },
      importer: {
        title: 'Importar Lists',
        fileName: 'list_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    task: {
      name: 'Task',
      label: 'Tasks',
      menu: 'Tasks',
      exporterFileName: 'Task_exportados',
      list: {
        menu: 'Tasks',
        title: 'Tasks',
      },
      create: {
        success: 'Task salvo com sucesso',
      },
      update: {
        success: 'Task salvo com sucesso',
      },
      destroy: {
        success: 'Task deletado com sucesso',
      },
      destroyAll: {
        success: 'Task(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Task',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Task',
      },
      view: {
        title: 'Visualizar Task',
      },
      importer: {
        title: 'Importar Tasks',
        fileName: 'task_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    inspiration: {
      name: 'Inspiration',
      label: 'Inspirations',
      menu: 'Inspirations',
      exporterFileName: 'Inspiration_exportados',
      list: {
        menu: 'Inspirations',
        title: 'Inspirations',
      },
      create: {
        success: 'Inspiration salvo com sucesso',
      },
      update: {
        success: 'Inspiration salvo com sucesso',
      },
      destroy: {
        success: 'Inspiration deletado com sucesso',
      },
      destroyAll: {
        success: 'Inspiration(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Inspiration',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        'description': 'Description',
        'photo': 'Photo',
        'tag': 'Tag',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Inspiration',
      },
      view: {
        title: 'Visualizar Inspiration',
      },
      importer: {
        title: 'Importar Inspirations',
        fileName: 'inspiration_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    tag: {
      name: 'Tag',
      label: 'Tags',
      menu: 'Tags',
      exporterFileName: 'Tag_exportados',
      list: {
        menu: 'Tags',
        title: 'Tags',
      },
      create: {
        success: 'Tag salvo com sucesso',
      },
      update: {
        success: 'Tag salvo com sucesso',
      },
      destroy: {
        success: 'Tag deletado com sucesso',
      },
      destroyAll: {
        success: 'Tag(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Tag',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        'description': 'Description',
        'inspiration': 'Inspiration',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Tag',
      },
      view: {
        title: 'Visualizar Tag',
      },
      importer: {
        title: 'Importar Tags',
        fileName: 'tag_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },
  },

  auth: {
    profile: {
      title: 'Editar Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    owner: {
      label: 'Proprietário',
      description: 'Acesso completo a todos os recursos',
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
      description: 'Acesso para edição a todos os recursos',
    },
    viewer: {
      label: 'Visualizador',
      description:
        'Acesso de visualização a todos os recursos',
    },
    auditLogViewer: {
      label: 'Visualizador de Registros de Autoria',
      description:
        'Acesso de visualização dos registros de autoria',
    },
    iamSecurityReviewer: {
      label: 'Revisor de segurança',
      description: `Acesso total para gerenciar as funções do usuário`,
    },
    entityEditor: {
      label: 'Editor de Entidades',
      description: 'Acesso de edição a todas as entidades',
    },
    entityViewer: {
      label: 'Visualizador de Entidades',
      description:
        'Acesso de visualização a todas as entidades',
    },
    customerEditor: {
      label: 'Editor de Customers',
      description: 'Acesso de edição aos Customers',
    },
    customerViewer: {
      label: 'Visualizador de Customers',
      description: 'Acesso de visualização aos Customers',
    },
    subscriptionEditor: {
      label: 'Editor de Subscriptions',
      description: 'Acesso de edição aos Subscriptions',
    },
    subscriptionViewer: {
      label: 'Visualizador de Subscriptions',
      description: 'Acesso de visualização aos Subscriptions',
    },
    orderEditor: {
      label: 'Editor de Orders',
      description: 'Acesso de edição aos Orders',
    },
    orderViewer: {
      label: 'Visualizador de Orders',
      description: 'Acesso de visualização aos Orders',
    },
    projectEditor: {
      label: 'Editor de Projects',
      description: 'Acesso de edição aos Projects',
    },
    projectViewer: {
      label: 'Visualizador de Projects',
      description: 'Acesso de visualização aos Projects',
    },
    listEditor: {
      label: 'Editor de Lists',
      description: 'Acesso de edição aos Lists',
    },
    listViewer: {
      label: 'Visualizador de Lists',
      description: 'Acesso de visualização aos Lists',
    },
    taskEditor: {
      label: 'Editor de Tasks',
      description: 'Acesso de edição aos Tasks',
    },
    taskViewer: {
      label: 'Visualizador de Tasks',
      description: 'Acesso de visualização aos Tasks',
    },
    inspirationEditor: {
      label: 'Editor de Inspirations',
      description: 'Acesso de edição aos Inspirations',
    },
    inspirationViewer: {
      label: 'Visualizador de Inspirations',
      description: 'Acesso de visualização aos Inspirations',
    },
    tagEditor: {
      label: 'Editor de Tags',
      description: 'Acesso de edição aos Tags',
    },
    tagViewer: {
      label: 'Visualizador de Tags',
      description: 'Acesso de visualização aos Tags',
    },
  },

  iam: {
    title: 'Gerenciamento de usuários e permissões',
    menu: 'IAM',
    disable: 'Desabilitar',
    disabled: 'Desabilitado',
    enabled: 'Habilitado',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuário habilitado com sucesso',
    doDisableSuccess: 'Usuário desabilitado com sucesso',
    doDisableAllSuccess:
      'Usuário(s) desabilitado(s) com sucesso',
    doEnableAllSuccess:
      'Usuário(s) habilidatos com sucesso',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    viewBy: 'Visualizar por',
    users: {
      name: 'users',
      label: 'Usuários',
      exporterFileName: 'usuarios_exportados',
      doRemoveAllSelectedSuccess:
        'Permissões removidas com sucesso',
    },
    roles: {
      label: 'Perfis',
      doRemoveAllSelectedSuccess:
        'Permissões removidas com sucesso',
    },
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
      'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço.<br/> Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      disablingHimself: `Você não pode desativar-se`,
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Id de autenticação',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      subscription: 'Subscription',
      isSubscribed: 'Is Subscribed?',
      status: 'Estado',
      disabled: 'Desativado',
      // phoneNumber: 'Telefone',
      nickName: 'Nick Name',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      rememberMe: 'Lembrar-me',
    },
    enabled: 'Habilitado',
    disabled: 'Desabilitado',
    isSubscribed: 'Is subscribed',
    notSubscribed: 'Is not subscribed',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success:
        'Configurações salvas com sucesso. A página irá recarregar em {0} para que as alterações tenham efeito.',
    },
    fields: {
      theme: 'Tema',
    },
    colors: {
      default: 'Escuro',
      light: 'Claro',
      cyan: 'Ciano',
      'geek-blue': 'Azul escuro',
      gold: 'Ouro',
      lime: 'Limão',
      magenta: 'Magenta',
      orange: 'Laranja',
      'polar-green': 'Verde polar',
      purple: 'Roxo',
      red: 'Vermelho',
      volcano: 'Vúlcão',
      yellow: 'Amarelo',
    },
  },
  home: {
    menu: 'Inicial',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/view/home/HomePage.js.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: '${path} deve possuir ao menos ${min} itens',
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser: '{0}'.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
    noOptions: 'Não foram encontrados resultados',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },

  table: {
    noData: 'Nenhum Registro Encontrado',
    loading: 'Carregando...',
  },

  pagination: {
    // Options.jsx
    items_per_page: '/ página',
    jump_to: 'Vá até',
    jump_to_confirm: 'confirme',
    page: '',

    // Pagination.jsx
    prev_page: 'Página anterior',
    next_page: 'Próxima página',
    prev_5: '5 páginas anteriores',
    next_5: '5 próximas páginas',
    prev_3: '3 páginas anteriores',
    next_3: '3 próximas páginas',
  },

  firebaseErrors: {
    'auth/user-disabled': 'Sua conta está desativada',
    'auth/user-not-found': `Desculpe, não reconhecemos suas credenciais`,
    'auth/wrong-password': `Desculpe, não reconhecemos suas credenciais`,
    'auth/weak-password': 'Esta senha é muito fraca',
    'auth/email-already-in-use':
      'O email já está sendo usado',
    'auth/invalid-email':
      'Por favor forneça um email válido',
    'auth/account-exists-with-different-credential':
      'O email já está em uso para um método de autenticação diferente.',
    'auth/credential-already-in-use':
      'Credenciais já estão em uso',
  },
};

export default ptBR;
