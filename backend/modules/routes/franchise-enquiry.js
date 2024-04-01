'use strict';
const express = require('express');
const router = express.Router();
const { GetFranchiseEnquiryPagination, CreateFranchiseEnquiry, DeleteFranchiseEnquiry } = require('../controllers/franchise-enquiry');

router.post('/franchise-enquiry-pagination', GetFranchiseEnquiryPagination);
router.post('/', CreateFranchiseEnquiry);
router.delete('/:id', DeleteFranchiseEnquiry);

module.exports = router;