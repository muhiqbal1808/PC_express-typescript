import express, { type Request, type Application, type Response } from 'express'
import 'dotenv/config'

const app: Application = express()
const port: number =
  process.env.PORT != null ? parseInt(process.env.PORT) : 7000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
})
