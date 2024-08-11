const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

router.get('/',async(req,res) =>{
    try{
        const aliens = await Alien.find()
        res.json(aliens)
    }
    catch(err){
        res.send('Error'+err)
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    }
    catch(err){
        res.send('Error' +err)
    }
})

router.post('/',async(req,res)=>{
    const alien= new Alien({
        name : req.body.name,
        roll : req.body.roll,
        branch: req.body.branch,
        backlogs : req.body.backlogs,
        mobile : req.body.mobile
    })

    try{
        const a1 = await alien.save()
        res.json(a1)
    }
    catch(err){
        res.send('Error')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const alien = await Alien.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                roll: req.body.roll,
                branch: req.body.branch,
                backlogs: req.body.backlogs,
                mobile: req.body.mobile
            },
            { new: true }
            );
        if (!alien) {
            return res.status(404).send('Alien not found');
        }

        res.json(alien);
    } catch (err) {
        res.status(500).send('Error: ' + err.message);
    }
});



router.delete('/:id',async(req,res)=>{
    try{
      const result =  await Alien.deleteOne({_id : req.params.id})
      res.send('Deleted')
        
    }
    catch(err){
        res.send('Error')
    }
})

module.exports = router