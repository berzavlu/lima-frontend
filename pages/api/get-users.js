export default function handler(req, res) {
  const {
    query: { pid },
  } = req

  const arrayUsers = [
    {
      name: 'Luis'
    },
    {
      name: 'Percy'
    },
    {
      name: 'Estefano'
    }
  ]

  const data = {
    success: true,
    data: arrayUsers,
    message: 'Hola Lima Frontend'
  }

  switch (req.method) {
    case 'GET':
        return res.json(data)
    default:
      return res.status(405).json({ succes: false, message: 'Method not allowed' })
  }


}