
import { toastr } from 'react-redux-toastr';

const Toast = ({
	showSuccess: (title: string) => {
		toastr.success(title, '');
	},
	showMessage: (title: string) => {
		toastr.info(title, '');
	},
	showWarning: (title: string) => {
		toastr.warning(title, '');
	},
	showError: (title: string) => {
		toastr.error(title, '');
	}
})

export default Toast;
