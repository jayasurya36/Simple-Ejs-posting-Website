const router = require('express').Router();
const Post = require('../models/app.model');

router.get('/' , async(req , res) =>{
    try{
        const data = await Post.find();
        res.render('../views/viewpage.ejs' , {objval : data})
    }catch(err){
        res.send(err)
    }
})

router.get('/user/add', (req, res) => {
    res.render('../views/formpage.ejs')
})
router.post('/user/add', async (req, res) => {
    try {
        let post = new Post(req.body);
        const returnval = await post.save();
        if(returnval){
            res.redirect('/');
        }
    }catch(err){
        res.send(err.message)
    }
})



module.exports = router