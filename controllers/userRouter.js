const userRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const { requireAuthentication } = require('../middleware/authenticate')

userRouter.post('/', async (req, res) => {
  try {
    const body = req.body

    if (!body.username || !body.password || !body.email) {
      return res.status(400).json({ error: 'username or password missing' })
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
      username: body.username,
      password: passwordHash,
      events: body.events,
      dives: body.dives,
      email: body.email
    })

    const savedUser = await user.save()

    res.json(User.format(savedUser))

  } catch (exception) {
    console.log(exception._message)
    if (exception.message.includes('User validation failed')){
      res.status(400).json({ error: 'username not unique' })
    } else {
      res.status(500).json({ error: 'something went wrong...' })
    }
  }
})

// Returns all current events from database as JSON
userRouter.all('*', requireAuthentication)

userRouter.get('/', async (req, res) => {
  try {
    const users = await User
      .find({})

    res.json(users.map(User.format))
  } catch (exception) {
    console.log(exception)

    return res.status(500).json({ error: 'something went wrong...' })
  }
})

userRouter.get('/names', async (req, res) => {
  try {
    const users = await User
      .find({})

    const formattedUsers = []

    users.forEach(u => {
      formattedUsers.push({
        _id: u._id,
        username: u.username
      })
    })

    res.json(formattedUsers)
  } catch (exception) {
    console.log(exception)

    return res.status(500).json({ error: 'something went wrong...' })
  }
})

userRouter.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id)

  res.json(User.format(user))
})

module.exports = userRouter
