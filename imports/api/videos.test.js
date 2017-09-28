import {Meteor} from 'meteor/meteor';
import {resetDatabase} from 'meteor/xolvio:cleaner';

import {Videos} from './videos.js';

let fs = require('fs');
let path = require('path');


if (Meteor.isServer) {
  describe('Videos', () => {
    describe('methods', () => {

      beforeEach(function () {
        resetDatabase()
      });

      it('can insert video', function () {
        // Build path to sample file
        const sampleFile = path.join(Meteor.settings.test.dataPath, 'sample.webm');

        // Get file obj
        fs.open(sampleFile, 'r', function (err, fd) {
          if (fd) {
            console.log('opened file');
            console.log('Videos=', Videos);
            const video = Videos.insert({
              file: sampleFile,
              onError: function () {
                console.log('errr!')
              },
              onStart: function () {
                console.log('started!')
              }
            }, true);
            console.log('video', video);
            console.log('after')
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
