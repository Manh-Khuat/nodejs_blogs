const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
const { body, validationResult } = require('express-validator');

class CourseController {
    // get /course//:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('course/show', { course: mongooseToObject(course) });
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render('course/create');
    }

    store(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().reduce((acc, error) => {
                acc[error.path] = error.msg;
                return acc;
            }, {});
            const { name, description, videoId } = req.body;
            return res.render('course/create', {
                name,
                description,
                videoId,
                errors: errorMessages,
            });
        }
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) => {
                res.render('course/edit', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }

    // put courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
}

module.exports = new CourseController();
