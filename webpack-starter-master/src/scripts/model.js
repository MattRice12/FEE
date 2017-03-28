import App from './app';
import View from './view';
// store login info in local storage

var model = {
	usersUrl: `http://tiny-za-server.herokuapp.com/collections/mattschatappusers`,
	messagesUrl: `http://tiny-za-server.herokuapp.com/collections/mattschatappmessages`,

	// CreatePerson: function(name) {
	// 	this.name = name
	// },

	loginSubmit: function(view) {
		let form = $(view).find('form')
		let input = $(view).find('input')
		$(form).on('submit', (e) => {
			e.preventDefault();
			let text = input.val()
			this.postUser(view, text)
		})
	},

	postUser: function(view, text) {
		$.ajax({
			type: 'POST',
			url: this.usersUrl,
			data: JSON.stringify({
				name: text
			}),
			contentType: 'application/json'
		}).then((data) => {
			// new CreatePerson(data.name)
			view.hide();
			View.render(View.chatView(data.name))
		});
	},

	getMessages: function(output) {
		$.ajax({
			type: 'GET',
			url: this.messagesUrl,
			dataType: 'json'
		}).then((messages) => {
			messages.forEach((message) => {
				output.prepend(`<p><bold>${message.name}: </bold>${message.text}</p>`)
			})
			// setTimeout(View.render(View.chatView(message.name)), 2000)
		})
	},

	messageSubmit: function(view, name) {
		let form = view.find('.chat-form');
		$(form).on('submit', (e) => {
			e.preventDefault();
			this.postMessage(view, name)
		})
	},

	postMessage: function(view, name) {
		let input = view.find('.chat-input').val();
		let output = view.find('.chat-output')
		$.ajax({
			type: 'POST',
			url: this.messagesUrl,
			data: JSON.stringify({
				name: name,
				text: input
			}),
			contentType: 'application/json'
		}).then((message) => {
			output.append(`<p><bold>${message.name}: </bold>${message.text}</p>`)
			view.find('.chat-input').val('')
		})
	},
}

export default model
