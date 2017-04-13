import {
    createStore
} from 'redux'
import loginView from './login_view.js'
import appView from './app_view.js'
import postUser from './server_requests.js'
import getTasks from './get_posts.js'


export default function app() {
    console.log(createStore(function(state = [], action) {
        return state;
    }));

    let initialState = {
        user: '',
        tasks: [],
        view: loginView
    }

    const appReducer = function(state, action) {
        if (state === undefined) {
            state = initialState;
        }
        switch (action.type) {
            case "TESTING":
                console.log("It works!");
                console.log(state);
                return state

            case "LOGGED_IN":
                console.log('I did log in!');
                var newUser = action.user
                if (newUser === '' || action.email === '' || action.password === '') {
                    alert('Complete Form')
                } else {
                    postUser(store, action.email, action.password);
                    return Object.assign({}, state, {
                        user: newUser,
                        view: appView
                    })
                }

            case "AUTHENTICATED":
                console.log('My token saved');
                var userToken = action.userToken;
                return Object.assign({}, state, {
                    userToken: userToken
                })

            case "GET_TASKS":
                console.log('I fetched tasks');
                getTasks(store);
                return state;

            case "TASKS_LOADED":
                console.log('Tasks loaded!');
                var newState = {
                    tasks: action.tasks
                }
                return Object.assign({}, state, newState);

            case "POST_TASK":
                console.log('I posted task');
                // var newState = {
                //     tasks: action.tasks
                // }
                return Object.assign({}, state);

            case "LOG_OUT":
                console.log('Logged Out');
                return Object.assign({}, initialState);

            default:
                return state;

        }
    }

    const store = createStore(appReducer);

    const render = function() {
        let state = store.getState();
        $('#app').html(state.view(store));
        console.log(state);
    }

    store.subscribe(render)

    store.dispatch({
        type: "TESTING",
    });
}
