const diveRouter = require('express').Router()
const Dive = require('../models/dive')
const requireAuthentication = require('../middleware/authenticate')
const Event = require('../models/event')
const handleEndDate = require('../middleware/dates')

// This will be removed later
diveRouter.get('/unauth', async (req, res) => {
  try {
    const dives = await Dive
      .find({})
      .populate('user', { username: 1 })
      .populate('event', { title: 1, description: 1 })

    res.json(dives.map(Dive.format))
  } catch (exception) {
    console.log(exception)

    return res.status(500).json({ error: 'something went wrong...' })
  }

})

// From here on require authentication on all routes.
diveRouter.all('*', requireAuthentication)

diveRouter.get('/', async (req, res) => {
  try {
    const dives = await Dive
      .find({})
      .populate('user', { username: 1 })
      .populate('event', { title: 1, description: 1 })

    res.json(dives.map(Dive.format))
  } catch (exception) {
    console.log(exception)

    return res.status(500).json({ error: 'something went wrong...' })
  }

})

diveRouter.post('/', async (req, res) => {
  try {
    const { startdate, enddate, event, latitude, longitude } = req.body
    const { user } = res.locals

    if (!event || !longitude || !latitude || !startdate) {
      return res.status(400).json({ error: 'missing fields' })
    }

    const dive = new Dive({
      startdate: startdate || new Date(),
      enddate: handleEndDate(startdate || new Date(), enddate),
      event: event,
      user: user.id,
      latitude,
      longitude
    })

    const savedDive = await dive.save()

    user.dives = user.dives.concat(savedDive.id)
    await user.save()

    const diveEvent = await Event.findById(event)

    diveEvent.dives = diveEvent.dives.concat(savedDive.id)
    await diveEvent.save()
    console.log(savedDive)
    res.json(Dive.format(savedDive))

  } catch (exception) {
    console.log(exception)

    return res.status(500).json({ error: 'something went wrong...' })
  }
})

diveRouter.delete('/:id', async (req, res) => {
  try {

    await Dive.findByIdAndRemove(req.params.id)

    res.status(204).end()
  } catch (exception) {
    res.status(400).send({ error: 'malformatted id' })
  }
})

diveRouter.put('/:id', async (req, res) => {
  try {
    const { startdate, enddate, event, latitude, longitude } = req.body

    if (!startdate || !enddate || !event || !latitude || !longitude) {
      return res.status(400).json({ error: 'missing fields' })
    }

    const dive = await Dive.findById(req.params.id)
      .populate('user', { username: 1 })

    if (dive.user.id !== res.locals.user.id) {
      return res.status(401).json({ error: 'unauthorized request' })
    }

    const updatedDive = await Dive.findByIdAndUpdate(
      req.params.id,
      { startdate, enddate, event, latitude, longitude },
      { new: true }
    ).populate('user', { username: 1 })
      .populate('event', { title: 1, description: 1 })

    res.json(Dive.format(updatedDive))

  } catch (exception) {
    if (exception.name === 'JsonWebTokenError') {
      res.status(401).json({ error: exception.message })
    } else {
      console.log(exception)
      res.status(500).json({ error: 'something went wrong...' })
    }
  }
})
module.exports = diveRouter