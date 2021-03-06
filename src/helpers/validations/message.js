import Joi from 'joi';

const messageValidate = {
  async validate(req, res, next) {
    const schema = Joi.object().keys({
      subject: Joi.string().trim().min(3),
      message: Joi.string().trim().min(6),
      status: Joi.string().alphanum().valid('sent')
        .required(),
    });
    const { value, error } = Joi.validate(req.body, schema);
    if (error && error.details) {
      return res.status(400).send({
        status: 400,
        error: error.details[0].message
      });
    }
    next();
  },

  async validateDraft(req, res, next) {
    const schema = Joi.object().keys({
      subject: Joi.string().trim().min(3),
      message: Joi.string().trim().min(6),
      status: Joi.string().alphanum().valid('draft')
        .required(),
    });
    const { value, error } = Joi.validate(req.body, schema);
    if (error && error.details) {
      return res.status(400).send({
        status: 400,
        error: error.details[0].message
      });
    }
    next();
  },


  async validateMessageGroup(req, res, next) {
    const schema = Joi.object().keys({
      subject: Joi.string().trim().min(3),
      message: Joi.string().trim().min(6),
      status: Joi.string().alphanum().valid('sent')
        .required(),
    });
    const { value, error } = Joi.validate(req.body, schema);
    if (error && error.details) {
      return res.status(400).send({
        status: 400,
        error: error.details[0].message
      });
    }
    next();
  }
};

export default messageValidate;
