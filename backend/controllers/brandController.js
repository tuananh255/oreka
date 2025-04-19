const BrandModel = require('../models/brandModel.js')

const addBrand = async(req,res)=>{
    try {
        const newBrand = await BrandModel.create(req.body)
        newBrand.save()
        res.status(200).send({
            success : true,
            message : "Create brand successfully",
            newBrand
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "create brand false!"
        })
    }
}

const getBrand = async(req,res)=>{
    const {_id}= req.params
    try {
        const getBrand = await BrandModel.findById(_id)
        res.status(200).send({
            success : true,
            message : "get Brand successfully",
            getBrand
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "get brand false!"
        })
    }
}

const getAllBrand = async(req,res)=>{
    try {
        const getBrand = await BrandModel.find()
        res.json(getBrand)
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "get all Brand false!"
        })
    }
}

const updateBrand = async(req,res)=>{
    const {_id}= req.params
    try {
        const udBrand = await BrandModel.findByIdAndUpdate(_id,req.body,{new :true})
        res.status(200).send({
            success : true,
            message : "update Brand successfully",
            udBrand
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "update Brand false!"
        })
    }
}


const deleteBrand = async(req,res)=>{
    const {_id}= req.params
    try {
        const delBrand = await BrandModel.findByIdAndDelete(_id)
        res.status(200).send({
            success : true,
            message : "delete Brand successfully",
            delBrand
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "delete Brand false!"
        })
    }
}

module.exports = {addBrand,getAllBrand,getBrand,updateBrand,deleteBrand}