var express = require('express');
var router = express.Router();
const clients = require('./clients');


router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

/** POST Methods */
/**
 * @openapi
 * '/send-message':
 *  post:
 *     tags:
 *     - Send Message
 *     summary: Send a message across all connected clients
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - message
 *            properties:
 *              message:
 *                type: string
 *                default: anything 
 *     responses:
 *      200:
 *        description: sent
 *      400:
 *        description: Failed
 */

router.post('/send-message', (req, res) => {
    const message = req.body.message;
    console.log(clients);
    if(clients.length()===0){
        return res.status(400).send({
            "error": "Failed to send. No clients connected"
        })
    }
    clients.forEach(client => {
      client.send(message);
    });
  
    res.status(200).send({"data":"'Message sent to all clients'"});
});

module.exports = router;