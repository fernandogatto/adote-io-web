import { toastr } from 'react-redux-toastr';

const Toast = ({
	showSuccess: message => {
		toastr.success(message);
	},
	showMessage: (message) => {
		toastr.info(message);
	},
	showWarning: (message) => {
		toastr.warning(message);
	},
	showError: (message) => {
		toastr.error(message);
	}
})

export default Toast;