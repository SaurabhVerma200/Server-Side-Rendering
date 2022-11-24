const axios = require('axios');

// adding the loan list for the views 
exports.getLoan = async (req, res) => {
  const query = await axios.get('http://localhost:3000/api/v1/loans')
  console.log(query.data.data.loans)
  res.status(200).render('loanlist', {
    title: `Get loanlists`,
    "loans": query.data.data.loans
  });
};

exports.getLandingPAge = async (req, res) => {
  res.status(200).render('overview', {
    title: `Over View`
  
  });
};

exports.getCourse = async (req, res) => {
  res.status(200).render('Course', {
    title: `Get Course`
  });
};

exports.createNewCourse = async (req, res) => {
  res.status(200).render('newCourse', {
    title: `Create New Course`
  });
};

exports.getSignInForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Sign in New User'
  });
};
exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

exports.getLoginUser = (req, res) => {
  const {email, password} = req.body;
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

