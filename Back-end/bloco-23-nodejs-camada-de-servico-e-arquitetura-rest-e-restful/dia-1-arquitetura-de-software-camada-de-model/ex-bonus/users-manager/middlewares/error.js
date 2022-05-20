module.exports = (err, _req, res, _next) => {
	if (err.status) {
		return res.status(err.stauts).json({ message: err.message });
	}

	if (err.isJoi) {
		return res.status(400).json({ message: err.details[0].message });
	}

	console.error(err);
	res.status(500).json({ message: 'Erro interno do servidor' });
};