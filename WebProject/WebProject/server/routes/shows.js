let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect with the showsModels

let Shows = require('../models/shows');

router.get('/', (req,res,next)=>{
    Shows.find((err, showslist)=>{
        if(err)
        {
            return console.error(err);
        }
        else{
            res.render('shows/list', {title:"Shows List", Showslist: showslist});
        }
    });
});
//Add operation
router.get('/add', (req,res,next)=> {
    res.render('book/add', {title: 'Add Show'})
});
//post route
router.get('/add', (req,res,next)=> {
    let newShow = Shows ({
        "name": req.body.name,
        "createdBy":req.body.createdBy,
        "address":req.body.address,
        "genre":req.body.genre,
    })
    Shows.create(newShow,(err,Shows) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/shows/list');
        }
    }
    )
});
//edit operation
router.get('/edit/:id', (req,res,next)=> {
    let id = req.params.id;
    Shows.findById(id,(err,showsToEdit) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            res.end('shows/edit',{title: 'Edit Show', shows:showsToEdit});
        }
    });
});
//post route
router.post('/edit/:id', (req,res,next)=> {
    let id=req.params.id;
    let updateShows = Shows({
        "_id": id,
        "name": req.body.name,
        "createdBy":req.body.createdBy,
        "address":req.body.address,
        "genre":req.body.genre,

    });
    Shows.updateOne({_id:id},updateShows,(err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/shows/list');
        }
    });
});
//delete operation
router.get('/delete/:id', (req,res,next)=> {
    let id=req.params.id;
    Shows.deleteOne({_id:id},(err)=>{
    if(err)
    {
        console.log(err);
        res.end(err);
    }
    else{
        res.redirect('/shows/list');
     }
    });
});

module.exports = router;