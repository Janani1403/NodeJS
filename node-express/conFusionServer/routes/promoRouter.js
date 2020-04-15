const express = require('express');
const bodyParser=require('body-parser');

const promoRouter=express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('will send all the promotions to you');
})
.post((req,res,next)=>{
    res.end('will add the promotions: '+req.body.name+' with details: '+req.body.description);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('PUT operation is not spported on /promotions');
})

.delete((req,res,next)=>{
    res.end('deleting all the promotions');
});


promoRouter.route('/:promoId')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('will send details of the promotions:'+req.params.promoId+" to you")
})
.post((req,res,next)=>{
    res.end('Post operation not supported on /promotions/'+req.params.promoId)
})

.put((req,res,next)=>{
    res.statusCode=403;
    res.write('Updating the promotions:'+req.params.promoId+'\n');
    res.end("will update the promotions: "+req.body.name+" with details: "+req.body.description);
})

.delete((req,res,next)=>{
    res.end('delete the promotions '+req.params.promoId)
});

module.exports=promoRouter;