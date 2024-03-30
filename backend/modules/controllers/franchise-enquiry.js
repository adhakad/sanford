'use strict';
const StudentModel = require('../models/student');
const StudentUserModel = require('../models/users/student-user');
const AdmissionEnquiryModel = require('../models/admission-enquiry');
const FeesStructureModel = require('../models/fees-structure');
const FeesCollectionModel = require('../models/fees-collection');
const AdmitCardModel = require('../models/admit-card');
const ExamResultModel = require('../models/exam-result');
const ClassSubjectModal = require('../models/class-subject');
const IssuedTransferCertificateModel = require('../models/issued-transfer-certificate');
const { DateTime } = require('luxon');


let GetStudentAdmissionEnquiryPagination = async (req, res, next) => {
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
        const admissionEnquiryList = await AdmissionEnquiryModel.find(searchObj).sort({ _id: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();
        const countAdmissionEnquiry = await AdmissionEnquiryModel.count();
        let admissionEnquiryData = { countAdmissionEnquiry: 0 };
        admissionEnquiryData.admissionEnquiryList = admissionEnquiryList;
        admissionEnquiryData.countAdmissionEnquiry = countAdmissionEnquiry;
        return res.json(admissionEnquiryData);
    } catch (error) {
        return res.status(500).json('Internal Server Error !');
    }
}

let CreateStudentAdmissionEnquiry = async (req, res, next) => {
    const currentDateIst = DateTime.now().setZone('Asia/Kolkata');
    const doae = currentDateIst.toFormat('dd-MM-yyyy');
    let { session,name, contact, city,message } = req.body;
    
    const studentData = {
        session,name, contact, city,message, doae: doae
    }
    try {
        const checkContact = await AdmissionEnquiryModel.findOne({ name: name, contact: contact });
        if (checkContact) {
            return res.status(400).json(`Name: ${name} phone ${contact} is already fill online admission form, please visit school and confirm your admission !`);
        }
        let createAdmissionEnquiryModel = await AdmissionEnquiryModel.create(studentData);
        if (createAdmissionEnquiryModel) {
            return res.status(200).json({ successMsg: 'Online admission form submited successfully.' });
        }
    } catch (error) {
        return res.status(500).json('Internal Server Error !');
    }
}

let DeleteAdmissionEnquiry = async (req, res, next) => {
    try {
        const id = req.params.id;
        const admissionEnquiry = await AdmissionEnquiryModel.findByIdAndRemove(id);
        return res.status(200).json('Student Online admission form delete successfully.');
    } catch (error) {
        return res.status(500).json('Internal Server Error!');
    }
}

module.exports = {
    GetStudentAdmissionEnquiryPagination,
    CreateStudentAdmissionEnquiry,
    DeleteAdmissionEnquiry
}