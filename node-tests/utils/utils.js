module.exports.add = (a, b) => {
    return a + b;
}

module.exports.square = (a) => {
    return Math.sqrt(a);
}

module.exports.setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
}

module.exports.asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    },1000);
};

module.exports.asyncSquare = (a, callback) => {
    setTimeout(() => {
        callback(Math.sqrt(a));
    },1000);
};
//---------Packkage.json notes---------------------
//devDependencies npm i mocha@3.0.0 --save-dev
//This allows you to deploy you application without the devDependencies
//I configure pakage.json to moch and looking for any file in the folder
// with with this path. ---cmd npm test