const router = require('express').Router();

var dataBase = require("../data/dataBase");

router.delete("/", (req, res)=> {
   for(let table in dataBase) {
       delete dataBase[table];
   }
    res.status(200).send('All in dataBase Was Deleted');
});

router.delete("/:tableName", (req, res)=> {
    const tableName = req.params.tableName;
    if(!dataBase[tableName]){
        res.status(404).send(`${tableName} Not Found`);
    }
    else{
        delete dataBase[tableName];
        res.status(200).send(`${tableName} was deleted successfuly`)
    }
});

router.delete("/:tableName/:id", (req, res)=> {
    const {tableName, id} = req.params;
    if(!dataBase[tableName][id]){
        res.status(404).send(`${id} Not Found in ${tableName}`);
    }
    else{
        delete dataBase[tableName][id];
        res.status(200).send(`${tableName}/${id} was deleted successfully`)
    }
});

router.delete("/:tableName/:id/:property", (req, res)=> {
    const {tableName, id,property} = req.params;
    if(!dataBase[tableName][id][property]){
        res.status(404).send(`${id} has no property called "${property}"`);
    }
    else{
        delete dataBase[tableName][id][property];
        res.status(200).send(`${tableName}/${id}/${property} was deleted successfully`)
    }
});

module.exports = router;
