export function validateCPF(cpf) {
	if (!cpf) return false;

	cpf = cpf.replace(/[^\d]+/g, '');
	if (cpf === '') return false;
	// Elimina CPFs invalidos conhecidos
	if (
		cpf.length !== 11 ||
		cpf === '00000000000' ||
		cpf === '11111111111' ||
		cpf === '22222222222' ||
		cpf === '33333333333' ||
		cpf === '44444444444' ||
		cpf === '55555555555' ||
		cpf === '66666666666' ||
		cpf === '77777777777' ||
		cpf === '88888888888' ||
		cpf === '99999999999'
	)
		return false;
	// Valida 1o digito
	var add = 0;
	var rev = 0;
	for (var i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
	rev = 11 - (add % 11);
	if (rev === 10 || rev === 11) rev = 0;
	if (rev !== parseInt(cpf.charAt(9))) return false;
	// Valida 2o digito
	add = 0;
	for (var i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
	rev = 11 - (add % 11);
	if (rev === 10 || rev === 11) rev = 0;
	if (rev !== parseInt(cpf.charAt(10))) return false;
	return true;
}

export function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export function validDate(value) {
	if (!value) return false;

	// First check for the pattern
	if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(value)) return false;

	// Parse the date parts to integers
	var parts = value.split('/');
	var day = parseInt(parts[0], 10);
	var month = parseInt(parts[1], 10);
	var year = parseInt(parts[2], 10);

	// Check the ranges of month and year
	if (year < 1000 || year > 3000 || month === 0 || month > 12) return false;

	var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	// Adjust for leap years
	if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
		monthLength[1] = 29;

	// Check the range of the day
	return day > 0 && day <= monthLength[month - 1];
}

export function validatePhoneNumber(value) {
	value = value.replace(/[^\d]+/g, '');
	value = value.replace('(', '');
	value = value.replace(')', '');
	value = value.replace('-', '');
	value = value.replace(' ', '').trim();
	if (value === '0000000000') {
		return false;
	} else if (value === '00000000000') {
		return false;
	}
	if (
		[
			'00',
			'01',
			'02',
			'03',
			'04',
			'05',
			'06',
			'07',
			'08',
			'09',
			'10'
		].indexOf(value.substring(0, 2)) !== -1
	) {
		return false;
	}
	if (value.length < 10 || value.length > 11) {
		return false;
	}
	if (['2', '3', '6', '7', '8', '9'].indexOf(value.substring(2, 3)) === -1) {
		return false;
	}
	return true;
}

export function validateCNPJ(c) {
	var b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

	if ((c = c.replace(/[^\d]/g, '')).length !== 14) return false;

	if (/0{14}/.test(c)) return false;

	for (var i = 0, n = 0; i < 12; n += c[i] * b[++i]);
	if (c[12] !== ((n %= 11) < 2 ? 0 : 11 - n)) return false;

	for (var i = 0, n = 0; i <= 12; n += c[i] * b[i++]);
	if (c[13] !== ((n %= 11) < 2 ? 0 : 11 - n)) return false;

	return true;
}
