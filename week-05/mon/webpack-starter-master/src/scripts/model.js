import App from './app';
import View from './view';
// store login info in local storage

const model = {
	usersUrl: `http://tiny-za-server.herokuapp.com/collections/mattschatappusers`,
	messagesUrl: `http://tiny-za-server.herokuapp.com/collections/mattschatappmessages`,

	CreatePerson: function(name) {
		this.name = name
	},

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
			var person = new this.CreatePerson(data.name)
			view.hide();
			View.render(View.chatView(person.name))
		});
	},

	getMessages: function(output, name, length) {
		$.ajax({
			type: 'GET',
			url: this.messagesUrl,
			dataType: 'json'
		}).then((messages) => {
			if (messages.length !== length) {
				View.rerenderChat(output, messages, name)
			}
			setTimeout(() => {
				this.getMessages(output, name, messages.length)
			}, 2000);
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
			let line = $(`<p><bold>${message.name}: </bold>${message.text} <button class="del">X</button></p>`)
			let delButton = line.find('.del');
			this.deleteHandler(message, delButton, line);
			output.append(line)
			view.find('.chat-input').val('');
		})
	},

	deleteHandler: function(message, button, line) {
		$(button).on('click', () => {
			this.deleteMessage(message, line)
		})
	},

	deleteMessage: function(message, line) {
		$.ajax({
			type: 'DELETE',
			url: `${this.messagesUrl}/${message._id}`
		}).then(() => {
			line.hide();
		})
	}
}

export default model
