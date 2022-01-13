export default {
  // main navigation - side menu
  menu: [
    {
      key: '',
      text: '',
      items: [
        {
          icon: 'mdi-view-dashboard-outline',
          key: 'menu.dashboard',
          text: 'Dashboard',
          link: '/'
        }
      ]
    },
    {
      key: 'menu.admin',
      text: 'Admin',
      items: [
        {
          icon: 'mdi-account-multiple-outline',
          key: 'menu.users',
          text: 'Users',
          link: '/admin/users'
        },
        {
          icon: 'mdi-cog-outline',
          key: 'menu.setting',
          text: 'Setting',
          link: '/admin/setting'
        }
      ]
    }
  ]
}
