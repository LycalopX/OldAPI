const Joi = require('joi');
const db = require('./connection');

const schema = Joi.object().keys({
	processador: Joi.string().required(),
	ram: Joi.string().required(),
	maquina: Joi.string().required(),
	versao: Joi.string().required(),
	benchmark: Joi.string().required(),
	device: Joi.string().required(),
	tempo: Joi.number().required(),
});

const inputs = db.get('inputs');

function getAll() {
	return inputs.find();
}

function create(input) {
	const result = schema.validate(input);

	if (result.error == null) {
		// eslint-disable-next-line no-param-reassign
		input.created = new Date();
		return inputs.insert(input);
	}
	return Promise.reject(result.error);
}

module.exports = {
	create,
	getAll,
};
