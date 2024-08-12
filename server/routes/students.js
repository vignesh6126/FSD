const express = require('express')
const router = express.Router()
const Student = require('../models/student')

router.get('/',async(req,res) =>{
    try{
        const students = await Student.find()
        res.json(students)
    }
    catch(err){
        res.send('Error'+err)
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const student = await Student.findById(req.params.id)
        res.json(student)
    }
    catch(err){
        res.send('Error' +err)
    }
})

router.post('/',async(req,res)=>{
    const student= new Student({
        name : req.body.name,
        roll : req.body.roll,
        branch: req.body.branch,
        backlogs : req.body.backlogs,
        mobile : req.body.mobile
    })

    try{
        const a1 = await student.save()
        res.json(a1)
    }
    catch(err){
        res.send('Error')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
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
        if (!student) {
            return res.status(404).send('Student not found');
        }

        res.json(student);
    } catch (err) {
        res.status(500).send('Error: ' + err.message);
    }
});



router.delete('/:id',async(req,res)=>{
    try{
      const result =  await Student.deleteOne({_id : req.params.id})
      res.send('Deleted')
        
    }
    catch(err){
        res.send('Error')
    }
})

module.exports = router