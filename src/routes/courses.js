const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);
router.post(
    '/store',
    [
        body('name').notEmpty().withMessage('Vui lòng nhập tên khóa học'),
        body('description').notEmpty().withMessage('Vui lòng nhập Mô tả'),
        body('videoId').notEmpty().withMessage('Vui lòng nhập video Id'),
    ],
    courseController.store,
);
router.get('/:slug', courseController.show);

module.exports = router;
