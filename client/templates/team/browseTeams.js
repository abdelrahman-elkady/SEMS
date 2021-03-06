let ionicClipboardHandler = {};

Template.browseTeam.onRendered(function () {

  // Don't recreate the clipboard object
  if (!_.isEmpty(ionicClipboardHandler))
    ionicClipboardHandler.destroy();

  // Initialize clipboard.js
  ionicClipboardHandler = new Clipboard('.ionic-copy');

  let self = this;

  ionicClipboardHandler.on('success', function (event) {
    sAlert.success('Ionic id is Copied to clipboard');
  });

});

Template.browseTeam.helpers({
  teams() {
    return Teams.find({}, { sort: { createdAt: 1 } });
  },

});

Template.teamCard.helpers({
  membersCount() {
    return this.members.length;
  },

});

Template.teamCard.events({
  'click .blue.large.server.link.icon': function () {
    analytics.track('Launch Deployment', {
      teamId: this.slug
    });
  },

  'click #ionicCopyIcon': function () {
    analytics.track('Copy ionic ID', {
      teamId: this.slug
    });
  }
});
