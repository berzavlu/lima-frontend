import { connectToDatabase } from '../../util/mongodb'

export default function handler(req, res) {
  const { client } = connectToDatabase()
  console.log(client)
  const data = {
    success: true,
    message: 'Hola Lima Frontend'
  }

  switch (req.method) {
    case 'GET':
        return res.json(data)
    default:
      return res.status(405).json({ succes: false, message: 'Method not allowed' })
  }


}