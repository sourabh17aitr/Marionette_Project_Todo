import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import ProjectModel from '../Models/project';

import ProjectLayoutTemplate from '../templates/projectLayout.jst';
import ProjectFormView from './projectFormView';
import ProjectListView from './projectListView';





var ProjectViewLayout = Marionette.View.extend({
    el: '#app',

    template: ProjectLayoutTemplate,

    regions: {
        form: ".form",
        list: ".list"
    },

    collectionEvents: {
        add: 'itemAdded'
    },

    onShow: function () {
        console.log(this)
        var formView = new ProjectFormView({ model: this.model });
        var listView = new ProjectListView({collection: this.collection});

        this.showChildView('form', formView);
        this.showChildView('list', listView);
    },


    onChildviewCreateProject: function(child){
        console.log(child)
        this.model.set({
            projectName: child.ui.assignee.val(),
            text: child.ui.text.val()
        }, { validate: true });

        var items = this.model.pick('projectName', 'text');
        console.log(items)
        this.collection.add(items);
    },

    itemAdded: function () {
        this.model.set({
            projectName: '',
            text: ''
        });
    },

    onShowProjectList: function(){
        console.log(this)
        var formView = new ProjectFormView({ model: this.model });
        var listView = new ProjectListView({collection: this.collection});

        this.showChildView('form', formView);
        this.showChildView('list', listView);
    }

})

module.exports = ProjectViewLayout;

