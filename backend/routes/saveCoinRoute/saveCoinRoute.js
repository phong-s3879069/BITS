var router = require('express').Router();
const User = require('../../models/user').user;



//add saved coin
router.put("/add/:coinId/:userId", async (req,res) => {
  try {
    User.findByIdAndUpdate({_id: req.params.userId}, {
      $push: {savedCoin: req.params.coinId}
    }, function (error, data) {
      if(data){
        res.status(200).json(data)
      }
    })
    
  } catch(err) {
    res.status(500).json(err);
  }
});

//remove saved coin 
router.put("/delete/:coinId/:userId", async (req,res) => {
  try {
    User.findByIdAndUpdate({_id: req.params.userId}, {
      $pull: {savedCoin: req.params.coinId}
    }, function(error, data) {
      if(data) {
        res.status(200).json(data)  
      }
    })
  } catch(err) {
    res.status(500).json(err);
  }
});



//get saved coin id 
router.get("/find/:userId", async (req,res) => {
  try {   
    User.findOne({_id: req.params.userId}, (err, data) => {
      if (data) {
        res.status(200).json(data.savedCoin);
      }
    });
  } catch(err) {
    res.status(500).json(err);
  }
})





module.exports = router;
