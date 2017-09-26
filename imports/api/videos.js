import { Mongo } from 'meteor/mongo';
import { FilesCollection } from 'meteor/ostrio:files';

export const Videos = new FilesCollection({collectionName: 'Videos'});
