const Event = require('../models/event')
const Message = require('../models/message')
const User = require('../models/user')
const http = require('http')
const { app } = require('../index')

const { socketAuthentication } = require('../middleware/authenticate')

console.log('webSocketController running!!!!!')

let connections = []

const socketServer = http.createServer(app)
const io = require('socket.io')(socketServer)

const socketPort = 7821

io.listen(socketPort)

// const io = require('socket.io')(server, {
//   path: '/push',
//   serveClient: true,
//   // below are engine.IO options
//   pingInterval: 10000,
//   pingTimeout: 5000,
//   cookie: false
// })

// Edit to use token.
io.on('connection', async (socket) => {
  let userID = null

  await socket.on('authentication', async (data) => {
    console.log('authentication data: ', data)
    userID = await socketAuthentication(data)

    if(userID === 'unauthorized') {
      socket.emit('unauthorized')
      console.log('unauthorized')

      return
    }

    const index = connections.map(c => c.userID).indexOf(userID)

    const connection = {
      userID,
      socket,
    }

    // Still need to check and remove inactive connections.
    if (index !== -1) connections[index] = connection
    else connections[connections.length] = connection

    console.log('user:', userID, 'connected to the server!')
  })

})

io.on('disconnect', userID => {
  const connection = connections.find(c => c.userID === userID)

  if(connection) connection.socket = null

  console.log('user:', userID, 'disconnected from the server.')
})

// Send data to user.
const send = (user, type, data) => {

  const connection = connections.find(c => String(user) === String(c.userID))

  if (connection) {
    try {
      connection.socket.emit(type, data)
      console.log('SENDING EVENT TROUGH SOCKET: ', type)
      console.log(data)
    } catch (exception) {
      'sending data through socket failed.'
    }
  }
}

// Send data to user if they are not the sender.
const sendIfNotSender = (user, senderID, type, data) => {
  if(String(user) === String(senderID)) {
    send(user, type, data)
  }
}

// Sends updated event to all participants.
io.updateEvent = async (eventID, senderID) => {
  let event = await Event.findById(eventID)

  event = Event.format(event)

  sendIfNotSender(event.creator._id, senderID, 'updatedEvent', event)

  for (let i = 0; i < event.admins.length; i++) {
    sendIfNotSender(event.admins[i]._id, senderID, 'updatedEvent', event)
  }
  for (let i = 0; i < event.participants.length; i++) {
    sendIfNotSender(event.participants[i]._id, senderID, 'updatedEvent', event)
  }
}

// Sends a new message to all receivers.
io.newMessage = async (message) => {
  const msg = Message.format(message)

  const sender = await User.findById(String(msg.sender))

  msg.sender = { username: sender.username, _id: sender._id }

  for (let i = 0; i < msg.receivers.length; i++) {
    send(msg.receivers[i], 'newMessage', msg)
  }
}

module.exports = {
  io
}