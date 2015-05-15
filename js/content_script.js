$(document).ready(function(){	

    $('textarea, textbox, text, .editable').textcomplete([{
        match: /(^|\s)(\w{2,})$/,
        search: function (term, callback) {
            var words = ['google', 'facebook', 'github', 'microsoft', 'yahoo'];
            callback($.map(words, function (word) {
                return word.indexOf(term) === 0 ? word : null;
            }));
        },
        replace: function (word) {
            return word + ' ';
        }
    }]);

});