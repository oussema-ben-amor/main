const router=require("express").Router()
const bankController=require("../controllers/bank.controller")
const {authenticateJWT} = require("../middleware.js")



router.post("/logIn",bankController.getOneUser)
router.post("/signUp",bankController.addUser)
router.get("/all",bankController.getAllUsers)
router.put("/transfer/:from/:to",authenticateJWT,bankController.transfer)
router.post("/getOne",bankController.getOne)
router.put("/changeName/:id",bankController.updateName)




module.exports=router