const express = require('express');

const router = express.Router();

//  /admin/add-product => GET
router.get('/add-product',(req, res, next) => {
    // console.log('In add product middleware');
    res.send('<form action = "/admin/add-product" method = "POST"><input type = "text" name = "title"><button type = "submit">Add product</form>');
    next();             //Allows the request to continue to the next middleware in the line
});

//  /admin/add-product => POST
router.post('/add-product', (req,res,next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;