const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')
require('dotenv').config()
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

// middleware
app.use(
  cors({
    origin: 'https://mern-car-service-center.web.app/',
    method: ['POST', 'GET', 'PATCH', 'PUT', 'DELETE'],
    credential: true,
  })
)
app.use(express.json())

// mongodb

const uri = `mongodb+srv://mdbaizedhasans:IIdKKRhi1OMXjEzb@cluster0.ypywhec.mongodb.net/?retryWrites=true&w=majority`

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect()

    // Create database
    const serviceCollection = client
      .db('carServiceCenter')
      .collection('services')

    const bookingCollection = client
      .db('carServiceCenter')
      .collection('bookings')

    // services routes..............
    // get all service data
    app.get('/services', async (req, res) => {
      const cursor = await serviceCollection.find()
      const result = await cursor.toArray()
      res.send(result)
    })

    // get single service data
    app.get('/services/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) }

      const result = await serviceCollection.findOne(query)
      res.send(result)
    })

    // bookings route

    // get bookings by email query
    app.get('/bookings', async (req, res) => {
      let query = {}
      if (req.query?.email) {
        query = { email: req.query.email }
      }
      const result = await bookingCollection.find().toArray()
      res.send(result)
    })

    // booking a service
    app.post('/bookings', async (req, res) => {
      const booking = req.body
      const result = await bookingCollection.insertOne(booking)
      res.send(result)
    })

    // update a booking
    app.patch('/bookings/:id', async (req, res) => {
      const id = req.params.id
      const filter = { _id: new ObjectId(id) }
      const updatedBooking = req.body
      const updatedDoc = {
        $set: {
          status: updatedBooking.status,
        },
      }
      const result = await bookingCollection.updateOne(filter, updatedDoc)
      res.send(result)
    })

    // delete a booking
    app.delete('/bookings/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) }
      const result = await bookingCollection.deleteOne(query)
      res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 })
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    )
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close()
  }
}
run().catch(console.dir)

// .....
app.get('/', (req, res) => {
  res.send('Hey Sinamika')
})

app.listen(port, () => {
  console.log(`car doctor is running on port ${port}`)
})

// mdbaizedhasans
// IIdKKRhi1OMXjEzb
//   'mongodb+srv://mdbaizedhasans:IIdKKRhi1OMXjEzb@cluster0.ypywhec.mongodb.net/?retryWrites=true&w=majority'
