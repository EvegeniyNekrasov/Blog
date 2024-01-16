import * as dotenv from "dotenv"
import app from './server'

dotenv.config()

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`)
})
