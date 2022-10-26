
const _ = require('lodash');

exports.exists = (array, param) => {
for(const item of array){
    if(_.lowerCase(item.postTitle) === _.lowerCase(param)) return true
}
return false;
};

exports.retrieve = (array, param ) => {
    for(const item of array){
        if(_.lowerCase(item.postTitle) ===  _.lowerCase(param)) return item;
    }
    return null;   
}