'use strict';
const mongoose = require('mongoose');

const AdmissionEnquiryModel = mongoose.model('admission-enquiry', {
    // session: {
    //     type: String,
    //     required: true,
    //     trim: true,
    // },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    contact: {
        type: Number,
        required: true,
        trim: true,
    },
    city: {
        type: String,
        required: true,
        trim: true,
    },
    message:{
        type: String,
        required: true,
        trim: true,
    },
    doae: {
        type: String,
        required: true,
        trim: true,
    },});
module.exports = AdmissionEnquiryModel;