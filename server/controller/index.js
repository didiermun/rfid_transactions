const {RFID,Transactions}  = require('../model')

exports.getAllTransactions = async(req, res) =>{
    const transactions = await Transactions.find({})
    return res.send(transactions).status(200);
}
exports.AllCards = async(req, res) =>{
    const cards = await RFID.find({});
    return res.send(cards);
}
exports.checkCard = async(req, res) =>{
    const card = await RFID.find({uuid:req.params.uuid});
    if(card){
        return res.send({card,success:true});
    }
    return res.send({success:false});
}
exports.getRFIDTransactions = async(req, res) =>{
    const transactions = await Transactions.find({card_id:req.params.uuid});
    return res.send(transactions).status(200);
}
exports.newTransaction = async(req, res)=>{
    const rfid = await RFID.findOne({uuid:req.body.rfid});
    if(!rfid){
        return res.status(404).send({message: 'RFID not found'})
    }
    if(!req.body.transaction_fare){
        return res.status(400).send({message: 'Transaction fare required'})
    }
    if(rfid.current_balance < req.body.transaction_fare){
        return res.status(400).send({message: 'Transaction fare is greater that card amount'});
    }
    rfid.current_balance = rfid.current_balance - parseInt(req.body.transaction_fare);
    const updated = await rfid.save();
    const transaction = new Transactions({
        card_id: updated.uuid,
        transaction_fare: parseInt(req.body.transaction_fare),
        new_balance: updated.current_balance,
    })

    const saved = await transaction.save();

    return res.status(200).send({saved});
}

exports.newCard = async(req, res) =>{
    console.log(req.body);
    const no_card = await RFID.findOne({uuid: req.body.uuid});
    if(no_card){
        return res.send({message: 'RFID already exists, can not be duplicated'}).status(400);
    }
    if(!req.body.uuid){
        return res.send({message: 'RFID UUID required'}).status(400);
    }
    if(!req.body.owner){
        return res.send({message: 'Owner required'}).status(400);
    }
    const card = new RFID({
        uuid: req.body.uuid,
        current_balance: parseInt(req.body.current_balance || 0),
        owner: req.body.owner,
    })
    const saved = await card.save();
    return res.send(saved).status(200);
}