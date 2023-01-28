const appDriver = require('createWebdriver.js');

let connectToSite = async (url) => {
    return new Promise(async (resolve, reject) => {
        try{
            await appDriver.get(url);
            resolve('Connected to site!');
        }catch(err){
            reject(err + ' Could not connect to site!');
        }
    })
};

module.exports = connectToSite();