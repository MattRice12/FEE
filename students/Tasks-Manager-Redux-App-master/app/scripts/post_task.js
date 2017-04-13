export default function postTask(store, name, description, state, date, important) {
  const token = store.getState().userToken;
  console.log("HIHIHIHIHHIHIHIASDFASDFASFA!!!");
  console.log('token', token);
  console.log('name', name);
  console.log('description', description);
  console.log('state', state);
  console.log('date', date);
  console.log('important', important);


  $.ajax({
      type: 'POST',
      dataType: 'json',
      url: 'https://api.backendless.com/v1/data/tasks',
      headers: {
        'application-id': "85577861-2A70-62E0-FFC7-B56EDDAFC300",
        'secret-key': "71A87D8E-1294-CD5F-FFF6-C9311CC4CD00",
        'Content-Type': 'application/json',
        'application-type': 'REST',
        'user-token': token
      },
      data: JSON.stringify({
          "Name": 'name',
          "description": 'description',
          "state": state,
          "due_date": date,
          "important": important
      })
  })
} 
