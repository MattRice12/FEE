import View from './view';
import Model from './model';

export default function app() {
	View.render(View.loginView())

	// deleteUsers()
	// deleteMessages();
	function deleteUsers() {
		$.ajax({
			type: 'GET',
			url: usersUrl,
			dataType: 'json'
		}).then((data) => {
			data.forEach((item) => {
				$.ajax({
					type: 'DELETE',
					url: usersUrl + "/" + item._id
				})
			})
		})
	}
	function deleteMessages() {
		$.ajax({
			type: 'GET',
			url: messagesUrl,
			dataType: 'json'
		}).then((data) => {
			data.forEach((item) => {
				$.ajax({
					type: 'DELETE',
					url: messagesUrl + "/" + item._id
				})
			})
		})
	}
}
