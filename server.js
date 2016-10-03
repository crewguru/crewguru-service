/**
 * Created by bbonet on 9/30/16.
 */
var Restify = require('restify');
var Request = require('request-promise');
var baseUri = "http://private-683b55-crewguru.apiary-mock.com/api";

var server = Restify.createServer();

server.get('/api/users', getUsers);
server.post('/api/users', addUser);

server.get('/api/users/:id', findUser);
server.del('/api/users/:id', deleteUser);

server.get('/api/users/:id/profiles', getProfiles);
server.post('/api/users/:id/profiles', addProfile);

server.get('/api/users/profiles/:id', findProfile);
server.del('/api/users/profiles/:id', deleteProfile);

server.get('/api/users/:id/projects', getProjects);
server.post('/api/users/:id/projects', addProject);

server.get('/api/users/projects/:id', findProject);
server.del('/api/users/projects/:id', deleteProject);

server.get('/api/industries', getIndustries);
server.get('/api/industries/:id', findIndustry);

server.get('/api/locations', getLocations);
server.get('/api/locations/:id', findLocation);

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});

function getUsers(req, res, next){
    console.log('getUsers');

    requestGet('/users', req, res, next);
}

function addUser(req, res, next){
    console.log('addUser');
    res.send('addUser');
    next();
}

function findUser(req, res, next){
    console.log('findUser', req.params.id);
    requestGet('/users/' + req.params.id, req, res, next);
}

function deleteUser(req, res, next){
    console.log('deleteUser', req.params.id);
    res.send(204);
    next();
}

function getProfiles(req, res, next){
    console.log('getProfiles', req.params.id);
    requestGet('/users/' + req.params.id + '/profiles', req, res, next)
}

function addProfile(req, res, next){
    console.log('addProfile', req.params.id);
    res.send('addProfile ' + req.params.id);
    next();
}

function findProfile(req, res, next){
    console.log('findProfile', req.params.id);
    requestGet('/users/profiles/' + req.params.id, req, res, next)
}

function deleteProfile(req, res, next){
    console.log('deleteProfile', req.params.id);
    res.send(204);
    next();
}

function getProjects(req, res, next){
    console.log('getProjects', req.params.id);
    requestGet('/users/' + req.params.id + '/projects', req, res, next)
}

function addProject(req, res, next){
    console.log('addProject', req.params.id);
    res.send('addProject ' + req.params.id);
    next();
}

function findProject(req, res, next){
    console.log('findProject', req.params.id);
    requestGet('/users/projects/' + req.params.id, req, res, next)
}

function deleteProject(req, res, next){
    console.log('deleteProject', req.params.id);
    res.send(204);
    next();
}

function getIndustries(req, res, next){
    console.log('getIndustries');
    requestGet('/industries', req, res, next);
}

function findIndustry(req, res, next){
    console.log('findIndustry', req.params.id);
    requestGet('/industries/' + req.params.id, req, res, next);
}

function getLocations(req, res, next){
    console.log('getLocations');
    requestGet('/locations', req, res, next);
    next();
}

function findLocation(req, res, next){
    console.log('findLocation', req.params.id);
    requestGet('/locations/' + req.params.id, req, res, next);
    next();
}

function requestGet(uri, req, res, next) {

    var options = {
        method: 'GET',
        uri: baseUri + uri,
        json: true
    };

    Request(options).then(function(json){
            res.send(200, json);
        }

    ).catch(function(error) {
            res.send(500, error);
        }
    );
}