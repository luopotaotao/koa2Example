/**
 * Created by tt on 2016/11/4.
 */
var register = require('babel-core/register');

register({
    presets:['stage-3']
});
require('./app');