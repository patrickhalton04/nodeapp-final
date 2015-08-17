/**
 * Created by patrickhalton on 8/16/15.
 */
var mongoose = require('mongoose');



// Config Vars
// =============================================================================
var uriString = process.env.MONGOLAB_URI || 'mongodb://localhost/default';

// Connection with minor error handling
mongoose.connect(uriString, function(err, res){
    if(err){
        console.log('Connection[ERROR]: ' + uriString + '---' + err);
    } else {
        console.log('Connection[Success]: ' + uriString);
    }
});