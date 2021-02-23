import { connectToDatabase } from '../../util/mongodb'

export default async function handler(req, res) {
  const { db } = await connectToDatabase()


    switch (req.method) {
      case 'GET':
        try {
          const response = await db.collection('team').find().toArray()
          const data = {
            success: true,
            data: response,
            message: 'Hola Lima Frontend'
          }
          return res.json(data)
        } catch (error) {
          console.log(error)
          const errJson = {
            success: false,
            message: 'Error'
          }
          return res.json(errJson)
        }
    default:
      return res.status(405).json({ succes: false, message: 'Method not allowed' })
  }


}