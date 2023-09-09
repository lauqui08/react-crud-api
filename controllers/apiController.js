const Person = require('../models/Person');
const displayAll = async(req, res) => {
    const persons = await Person.find({});
    res.json(persons);
};

const displaySingleData = async(req, res) => {
    const {id} = req.params;
    const person = await Person.findById(id);
    res.json(person);
};

const createData = async(req, res) => {
    const {first_name, last_name,email,gender} = req.body;
    const person = await Person.create({first_name, last_name,email,gender});
    res.json(person);
};

const patchData = async(req, res) => {
    const {id} = req.params;
    const {first_name, last_name,email,gender} = req.body;
    const updatedPerson = await Person.updateOne({_id: id},{first_name, last_name,email,gender});
    console.log(updatedPerson);
    if(updatedPerson.matchedCount != 0){
        return res.json({message:"Successfully updated"});
    }
};

const deleteData = async(req, res) => {
    const {id} = req.params;
    const person = await Person.deleteOne({_id:id});
    res.json(person);
};






module.exports = {displayAll, displaySingleData, createData, patchData, deleteData};