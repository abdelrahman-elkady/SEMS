Router.route('/admin', {
  name: 'admin.panel',

  action() {
    Session.set('title', 'SEMS | Admin');
    this.render('adminPanel');
  },

});

Router.route('/users/manage', {
  name: 'users.manage',

  waitOn() {
    return Meteor.subscribe('users');
  },

  action() {
    Session.set('title', 'SEMS | Admin');
    this.render('manageUsers');
  },

});
