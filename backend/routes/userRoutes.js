const jwt = require('jsonwebtoken');
const user = require('./dummyUser');

module.exports = function(app) {

    app.route('/login').post((req, res, next) => {

        const { body } = req;
        const { username } = body;
        const { password } = body;

        //checking to make sure the user entered the correct username/password combo
        if(username === user.username && password === user.password) { 
            //if user log in success, generate a JWT token for the user with a secret key
            jwt.sign({user}, 'privatekey', { expiresIn: '5m' }, (err, token) => {
                if(err) { console.log('error>'+err) }    
                res.json({'token': token});
                console.log(token);
            });
            //res.json({ok: true});
            //res.redirect('http://localhost:4200/secret');
        } else {
            console.log('ERROR: Could not log in');
            res.json({'token': false});
        }
    })

    //This is a protected route 
    app.route('/user/data').get(checkToken, (req, res) => {
        //verify the JWT token generated for the user
        jwt.verify(req.token, 'privatekey', (err, authorizedData) => {
            if(err){
                //If error send Forbidden (403)
                console.log('ERROR: Could not connect to the protected route');
                res.sendStatus(403);
            } else {
                //If token is successfully verified, we can send the autorized data 
                res.json({
                    message: 'Successful log in',
                    authorizedData
                });
                console.log('SUCCESS: Connected to protected route');
            }
        })
    });

}

//Check to make sure header is not undefined, if so, return Forbidden (403)
const checkToken = (req, res, next) => {
    const header = req.headers['authorization'];

    console.log(header);
    if(typeof header !== 'undefined') {

        const bearer = header.split(' ');
        const token = bearer[1];

        req.token = token;

        next();
    } else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403)
    }
}