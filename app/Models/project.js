import Backbone from 'backbone';

export default Backbone.Model.extend({
    defaults: {
        projectName: '',
        text: ''
    },

    validate: function (attrs) {
        var errors = {};
        var hasError = false;
        if (!attrs.projectName) {
            errors.projectName = 'project name must be set';
            hasError = true;
        }
        if (!attrs.text) {
            errors.text = 'text must be set';
            hasError = true;
        }

        if (hasError) {
            return errors;
        }
    }
})