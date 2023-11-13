var dog = require('../models/dog');
// List of all dog
exports.dog_list = async function(req, res) {
    try{
        thedog = await dog.find();
        res.send(thedog);
    }
    catch(err)
    {
        res.status(500);
        res.send(`{"error":${err}}`);
    }
};


// VIEWS
// Handle a show all view
exports.dog_view_all_Page = async function(req, res) {
try{
thedog = await dog.find();
res.render('Dog', { title: 'dog Search Results', results: thedog });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};



// for a specific dog.
exports.dog_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await dog.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };






//Handle Custom create on Post
exports.dog_create_post = async function(req, res) {
    console.log(req.body)
    let document = new dog();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"dog_type":"goat", "cost":12, "size":"large"}
    document.dog_color = req.body.dog_color;
    document.dog_breed = req.body.dog_breed;
    document.dog_price = req.body.dog_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };



// Handle dog delete on DELETE.
exports.dog_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await dog.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };


exports.dog_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body${JSON.stringify(req.body)}`)
     try {
    let toUpdate = await dog.findById( req.params.id)
    // Do updates of properties
    
    if(req.body.dog_color)
    toUpdate.dog_color = req.body.dog_color;
    if(req.body.dog_breed) toUpdate.dog_breed = req.body.dog_breed;
    if(req.body.dog_price) toUpdate.dog_price = req.body.dog_price;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
   };


   // Handle a show one view with id specified by query
exports.dog_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await dog.findById( req.query.id)
    res.render('dogdetail',{ title: 'dog Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };



