"use strict"

// app.use(authentication)

const Token = require('../models/token')
const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {

    const auth = req.headers?.authorization || null // Token ...tokenKey...
    const tokenKey = auth ? auth.split(' ') : null // ['Token', '...tokenKey...']

    if (tokenKey) {

        if (tokenKey[0] == 'Token') {
        // SimpleToken:

            const tokenData = await Token.findOne({ token: tokenKey[1] }).populate('userId')
            req.user = tokenData ? tokenData.userId : undefined

        } else if (tokenKey[0] == 'Bearer') {
        // JWT:

            jwt.verify(tokenKey[1], process.env.ACCESS_KEY, (error, data) => {
                // //? Hata gösterimi yok:
                req.user = data
            })
        }
    }

        next()
    }
  

   // "use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
  ------------------------------------------------------- *
// app.use(authentication)

const Token = require('../models/token');
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    const auth = req.headers?.authorization || null; // Token ...tokenKey...
    const tokenKey = auth ? auth.split(' ') : null; // ['Token', '...tokenKey...']

    if (tokenKey) {
        if (tokenKey[0] == 'Token') {
            // SimpleToken:
            const tokenData = await Token.findOne({ token: tokenKey[1] }).populate('userId');
            req.user = tokenData ? tokenData.userId : undefined;
            next(); // 'Token' durumunda next() çağırılıyor
        } else if (tokenKey[0] == 'Bearer') {
            // JWT:
            jwt.verify(tokenKey[1], process.env.ACCESS_KEY, (error, data) => {
                if (error) {
                    return res.status(401).send({ error: true, message: "Unauthorized: Invalid token" });
                }
                req.user = data;
                next(); // 'Bearer' durumunda next() çağırılıyor
            });
        } else {
            return res.status(401).send({ error: true, message: "Unauthorized: Invalid token format" });
        }
    } else {
        return res.status(401).send({ error: true, message: "Unauthorized: No token provided" });
    }
};
------------------------------------------------------- */
//"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team

// app.use(authentication)

const Token = require('../models/token');
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    const auth = req.headers?.authorization || null; // Token ...tokenKey...
    const tokenKey = auth ? auth.split(' ') : null; // ['Token', '...tokenKey...']

    console.log('Authorization Header:', auth);

    if (tokenKey) {
        if (tokenKey[0] == 'Token') {
            // SimpleToken:
            const tokenData = await Token.findOne({ token: tokenKey[1] }).populate('userId');
            req.user = tokenData ? tokenData.userId : undefined;
            console.log('Token user:', req.user);
            next(); // 'Token' durumunda next() çağırılıyor
        } else if (tokenKey[0] == 'Bearer') {
            // JWT:
            jwt.verify(tokenKey[1], process.env.ACCESS_KEY, (error, data) => {
                if (error) {
                    console.error('JWT Verification Error:', error);
                    return res.status(401).send({ error: true, message: "Unauthorized: Invalid token" });
                }
                req.user = data;
                console.log('Bearer user:', req.user);
                next(); // 'Bearer' durumunda next() çağırılıyor
            });
        } else {
            console.error('Invalid token format');
            return res.status(401).send({ error: true, message: "Unauthorized: Invalid token format" });
        }
    } else {
        console.error('No token provided');
        return res.status(401).send({ error: true, message: "Unauthorized: No token provided" });
    }
};
------------------------------------------------------- */