import { Meteor } from 'meteor/meteor';
import { resetDatabase } from 'meteor/xolvio:cleaner';

import { Videos } from './videos.js';

var fs = require('fs');
var path = require('path');

if (Meteor.isServer) {
  describe('Videos', () => {
    describe('methods', () => {

      beforeEach(function() {
        resetDatabase()
      });

      it('can insert video', function() {
        // Build path to sample file
        console.log('__dirname=', __dirname);
        console.log('resolve(.)', path.resolve('.'));
        console.log('path.resolve(__dirname)=', path.resolve(__dirname));
        var sampleFile = path.join(__dirname, '..', '..', 'tests', 'data') + 'sample.webm';
        console.log('sampleFile=', sampleFile);


        // Get file obj
        fs.open(sampleFile, 'r', function(err, fd) {
          if (fd) {
            console.log('cool, got the fd')
          }

          if (err) {
            console.log('got the err', err)
          }
        });
        // Insert video
        // Check that db contains that video
      })

    })
  })
}
