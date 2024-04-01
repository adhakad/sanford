'use strict';

const FranchiseEnquiryModel = require('../models/franchise-enquiry');
const { DateTime } = require('luxon');


let GetFranchiseEnquiryPagination = async (req, res, next) => {
    let searchText = req.body.filters.searchText;
    let searchObj = {};
    if (searchText) {
        searchObj = /^(?:\d*\.\d{1,2}|\d+)$/.test(searchText)
            ? {
                $or: [{ contact: searchText }],
            }
            : { name: new RegExp(`${searchText.toString().trim()}`, 'i') };
    }
    try {
        let limit = (req.body.limit) ? parseInt(req.body.limit) : 10;
        let page = req.body.page || 1;
        const franchiseEnquiryList = await FranchiseEnquiryModel.find(searchObj).sort({ _id: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();
        const countFranchiseEnquiry = await FranchiseEnquiryModel.count();
        let franchiseEnquiryData = { countFranchiseEnquiry: 0 };
        franchiseEnquiryData.franchiseEnquiryList = franchiseEnquiryList;
        franchiseEnquiryData.countFranchiseEnquiry = countFranchiseEnquiry;
        return res.json(franchiseEnquiryData);
    } catch (error) {
        return res.status(500).json('Internal Server Error !');
    }
}

let CreateFranchiseEnquiry = async (req, res, next) => {
    const currentDateIst = DateTime.now().setZone('Asia/Kolkata');
    const doae = currentDateIst.toFormat('dd-MM-yyyy');
    let { name,email, contact,state, city,investment, message } = req.body;
    
    const franchiseData = {
        name,email, contact,state, city,investment, message, doae: doae
    }
    try {
        const checkContact = await FranchiseEnquiryModel.findOne({ name: name, contact: contact });
        if (checkContact) {
            return res.status(400).json(`Name: ${name} phone ${contact} is already fill franchise enquiry form, we will contact you soon !`);
        }
        let createFranchiseEnquiryModel = await FranchiseEnquiryModel.create(franchiseData);
        if (createFranchiseEnquiryModel) {
            return res.status(200).json({ successMsg: 'Franchise enquiry submitted successfully, we will contact you soon.' });
        }
    } catch (error) {
        return res.status(500).json('Internal Server Error !');
    }
}

let DeleteFranchiseEnquiry = async (req, res, next) => {
    try {
        const id = req.params.id;
        const franchiseEnquiry = await FranchiseEnquiryModel.findByIdAndRemove(id);
        return res.status(200).json('Franchise enquiry delete successfully.');
    } catch (error) {
        return res.status(500).json('Internal Server Error!');
    }
}

module.exports = {
    GetFranchiseEnquiryPagination,
    CreateFranchiseEnquiry,
    DeleteFranchiseEnquiry
}