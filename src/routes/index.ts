var express = require("express")
var router = express.Router()

// a middleware function with no mount path. This code is executed for every request to the router
// router.use((req?: any, res?: any, next?: any) => {
//     console.log('Time:', Date.now())
//     next()
// })

router.get('', (req: any, res: any, next: any) => {
    res.send("woking fine")
})


module.exports = router;