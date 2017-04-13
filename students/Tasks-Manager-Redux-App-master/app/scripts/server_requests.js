export default function postUser(store, login, password) {

    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: 'https://api.backendless.com/v1/users/login',
        headers: {
            'application-id': "85577861-2A70-62E0-FFC7-B56EDDAFC300",
            'secret-key': "71A87D8E-1294-CD5F-FFF6-C9311CC4CD00",
            'Content-Type': 'application/json',
            'application-type': 'REST'
        },
        data: JSON.stringify({
            login: login,
            password: password
        })
    }).then((data) => {
        console.log(data);
        store.dispatch({
            type: 'AUTHENTICATED',
            userToken: data['user-token']
        })
        store.dispatch({
            type: 'GET_TASKS',
            // tasks:
        })
    })
}
