import Backbone from 'backbone';

import Marionette from 'backbone.marionette';

import ProjectViewLayout from '../Views/projectViewLayout';
import ProjectListCollection from '../Collections/projectList';
import ProjectModel from '../Models/project';


var initialData = [
    {projectName: 'Scott', text: 'Write a book about Marionette'},
    {projectName: 'Andrew', text: 'Do some coding'}
  ];


var Controller = Marionette.Object.extend({
    initialize: function () {
        /** The region manager gives us a consistent UI and event triggers across
            our different layouts.
        */
        //this.options.regionManager = new Marionette.RegionManager;
        /* this.options.regionManager = new Marionette.Region({
          regions: {
            main: '#app'
          }
        }); */

        var layout = new ProjectViewLayout({
            collection: new ProjectListCollection(),
            model: new ProjectModel
        });

        //this.getOption('regionManager').get('main').show(layout);
        console.log(layout)
        this.options.layout = layout;
        console.log(this.options.layout)
        layout.render();

    },

    /** List all blog entrys with a summary */
    ProjectList: function () {

        var layout = this.getOption('layout');
        layout.triggerMethod('show:project:list');
    }
})

var Router = Marionette.AppRouter.extend({
    appRoutes: {
        '': 'ProjectList'
    },

    /** Initialize our controller with the options passed into the application,
        such as the initial posts list.
    */
    initialize: function () {
        this.controller = new Controller({
            initialData: initialData
        });
    }
});

module.exports = Router;