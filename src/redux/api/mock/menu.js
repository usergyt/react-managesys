module.exports = {
    menus: [
       
      {
        key: 1,
        name: '用户管理',
        icon: 'user',
        child: [
          {
            name: '用户列表',
            key: 305,
            url: '/userManage'
          }
           
        ]
      },
      {
        key: 2,
        name: '角色管理',
        icon: 'laptop',
        child: [
          {
            name: '角色列表',
            key: 201,
            url: '/cards'
          },
          {
            name: '测试菜单',
            key: 202,
            url: '/test'
            
          } 
        ]
      },
      {
        key: 3,
        name: '系统管理',
        icon: 'notification',
        child: [
          {
            name: '菜单管理',
            key: 301
          },
          {
            name: '基础参数管理',
            key: 302
          } 
        ]
      }
    ]
  }
