

app.use(bodyParser.json());

// getallusers
app.get('/users', ctrl.getAllUsers)

// create new user
app.post('/post/user', ctrl.postUser)

// get favsport matches with query favsport
app.get('/get/user', ctrl.getSpecificUser)

// update item that matches params id
app.put('/update/user/:id', ctrl.updateUser)


