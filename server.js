/**
 * Created by bbonet on 9/30/16.
 */
var restify = require('restify');
//var baseUrl = "http://crewguru.apiary.io/api";

var server = restify.createServer();

server.get('/api/users', getUsers);
server.post('/api/users', addUser);

server.get('/api/users/:id', findUser);
server.del('/api/users/:id', deleteUser);

server.get('/api/users/:id/profiles', getProfiles);
server.post('/api/users/:id/profiles', addProfile);

server.get('/api/profiles/:id', findProfile);
server.del('/api/profiles/:id', deleteProfile);

server.get('/api/users/:id/projects', getProjects);
server.post('/api/users/:id/projects', addProject);

server.get('/api/projects/:id', findProject);
server.del('/api/projects/:id', deleteProject);

server.get('/api/industries', getIndustries);
server.get('/api/industries/:id', findIndustry);

server.get('/api/locations', getLocations);
server.get('/api/locations/:id', findLocation);

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});

function getUsers(req, res, next){
    console.log('getUsers');
    res.send('getUsers');
    next();
}

function addUser(req, res, next){
    console.log('addUser');
    res.send('addUser');
    next();
}

function findUser(req, res, next){
    console.log('findUser', req.params.id);
    res.send('findUser ' + req.params.id);
    next();
}

function deleteUser(req, res, next){
    console.log('deleteUser', req.params.id);
    res.send(204);
    next();
}

function getProfiles(req, res, next){
    console.log('getProfiles', req.params.id);
    res.send('getProfiles ' + req.params.id);
    next();
}

function addProfile(req, res, next){
    console.log('addProfile', req.params.id);
    res.send('addProfile ' + req.params.id);
    next();
}

function findProfile(req, res, next){
    console.log('findProfile', req.params.id);
    res.send('findProfile ' + req.params.id);
    next();
}

function deleteProfile(req, res, next){
    console.log('deleteProfile', req.params.id);
    res.send(204);
    next();
}

function getProjects(req, res, next){
    console.log('getProjects', req.params.id);
    res.send('getProjects ' + req.params.id);
    next();
}

function addProject(req, res, next){
    console.log('addProject', req.params.id);
    res.send('addProject ' + req.params.id);
    next();
}

function findProject(req, res, next){
    console.log('findProject', req.params.id);
    res.send('findProject ' + req.params.id);
    next();
}

function deleteProject(req, res, next){
    console.log('deleteProject', req.params.id);
    res.send(204);
    next();
}

function getIndustries(req, res, next){
    console.log('getIndustries');
    res.send('getIndustries');
    next();
}

function findIndustry(req, res, next){
    console.log('findIndustry', req.params.id);
    res.send('findIndustry ' + req.params.id);
    next();
}

function getLocations(req, res, next){
    console.log('getLocations');
    res.send('getLocations');
    next();
}

function findLocation(req, res, next){
    console.log('findLocation', req.params.id);
    res.send('findLocation ' + req.params.id);
    next();
}