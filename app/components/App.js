import Marionette from 'backbone.marionette';

import ProjectModel from '../Models/project';
import ProjectViewLayout from '../Views/projectViewLayout';

import ProjectFormView from '../Views/projectFormView'

import Router from '../Routers/router.js'

/* var initialData = [
  {projectName: 'Scott', text: 'Write a book about Marionette'},
  {projectName: 'Andrew', text: 'Do some coding'}
]; */

export default Marionette.Application.extend({
  //region: '#app',

  onStart: function(options){
    var router = new Router(options);
    Backbone.history.start();
    /* var Project = new ProjectViewLayout({
      collection: new Backbone.Collection(),
      model: new ProjectModel()
    });
    Project.render();
    Project.triggerMethod('show'); */
  }
});
