// auth script taken directly from the UCB Bootcamp Gitlab repo:
//   https://ucb.bootcampcontent.com/UCB-Coding-Bootcamp/UCB-VIRT-FSF-PT-05-2022-U-LOLC/-/blob/main/14-MVC/01-Activities/28-Stu_Mini-Project/Main/utils/auth.js
const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  