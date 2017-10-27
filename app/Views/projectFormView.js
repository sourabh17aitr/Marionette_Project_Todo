import Marionette from 'backbone.marionette';
import ProjectFormTemplate from '../templates/projectForm.jst';

var ProjectFormView = Marionette.View.extend({
    tagname: 'form',
    template: ProjectFormTemplate,
    
    modelEvents: {
      change: 'render'
    },
  
    ui: {
      assignee: '#id_projectName',
      text: '#id_text',
      create:'#btn-add'
    },
    triggers: {
      'click @ui.create': 'create:project'
    }
    /* onSaveForm: function(){
      console.log(this.ui.assignee.val())
    } */

})

module.exports = ProjectFormView;