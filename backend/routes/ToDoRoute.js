const {Router} = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo } = require("../controllers/ToDoController");

const router =Router()

// for testing  used

// router.get('/' ,(req, res)=>{
//     res.json({message: "hi there....."})
// })

router.get('/', getToDo)
router.post('/save', saveToDo)
router.put('/update', updateToDo)
router.delete('/delete', deleteToDo)


module.exports = router;