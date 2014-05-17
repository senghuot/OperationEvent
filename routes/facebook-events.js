

// Get the users events form facebook
exports.getEvents = function(req, res){
    
    FB.api('me/friends', {
        fields:         'name,picture',
        limit:          250,
        access_token:   req.session.access_token
    }, function (result) {
        if(!result || result.error) {
            return res.send(500, 'error');
        }
        res.send(result);
    });

};