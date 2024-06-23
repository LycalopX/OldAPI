module.exports = {
	parser: '@babel/eslint',
	'env': {
		'es6': true,
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/essential'
	],
	'parserOptions': {
		'ecmaVersion': 12,
		requireConfigFile: false,
	},
	'plugins': [
		'vue'
	],
	'rules': {
	}
};
