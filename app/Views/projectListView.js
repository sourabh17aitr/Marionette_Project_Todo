import Marionette from 'backbone.marionette';
import ProjectListtemplate from '../templates/projectList.jst'
 
var Project = Marionette.View.extend({
    tagname:'li',
    template: ProjectListtemplate
})

var ProjectList = Marionette.CollectionView.extend({
    tagName: 'ul',
    childView: Project
  });

  module.exports = ProjectList;