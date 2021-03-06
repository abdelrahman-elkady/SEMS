Images = new FS.Collection('images', {
  stores: [new FS.Store.FileSystem('images', {
    path: '~/public/.uploads/.images',

    transformWrite(fileObj, readStream, writeStream) {
      gm(readStream, fileObj.name).autoOrient().stream().pipe(writeStream);
    }

  })],

});

Images.filters({
  maxSize: 5242880, // 5 MB in bytes
  allow: {
    contentTypes: ['image/*'],
    extensions: ['png', 'jpg', 'jpeg']
  },

  onInvalid(message) {
    if (Meteor.isClient) {
      sAlert.error(message);
    }
  },

});
