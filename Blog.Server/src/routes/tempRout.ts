import { Router } from 'express'

const router = Router()

router.get('/temp', (req, res) => {
  res.status(200)
  res.json({
    message: 'Temproral route',
  })
})

export default router
