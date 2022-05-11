var router = require('express').Router();
const Conversation = require('../../models/conversation');
const Message = require('../../models/message');


//Create new messages
router.post("/", async (req, res) => {
  const newMessage = new Message(req.body)
  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch(err) {
    res.status(500).json(err);
  }
})

//Get Messages

router.get("/:conversationId", async (req, res) => {
  try { 
    const messages = await Message.find({
      conversationId: req.params.conversationId
    })
    res.status(200).json(messages)
  } catch(err) {
    res.status(500).json(err);
  }
})



module.exports = router;