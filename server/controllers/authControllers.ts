// const bcrypt = require('bcrypt');
// import {Request, Response, NextFunction} from 'express';

// const authController = {};

// authController.postLogin = function (req, res, next) {
//   const {username, password} = req.body;

//   if (!username || !password) {
//     res.locals.loggedIn = 'Rejected';
//     return next();
//   } else {
//     const queryStr = `SELECT * FROM account WHERE username = $1;`;
//     // check database
//     db.query(queryStr, [username], (err, result) => {
//       if (err) return next(err);
//       if (result.rows.length > 0) {
//         const hashPassword = result.rows[0].password;
//         const id = result.rows[0].id;

//         if (bcrypt.compareSync(password, hashPassword)) {
//           res.locals.loggedIn = id;
//         } else {
//           res.locals.loggedIn = 'Rejected';
//         }
//         return next();
//       } else {
//         res.locals.loggedIn = 'Rejected';
//       }
//     });
//   }
// };

// module.exports = authController;
