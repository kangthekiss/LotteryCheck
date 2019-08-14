import { Router } from 'express'
import * as lottery from '../controllers/lottery'

const router = Router()

router.get('/', lottery.getData)
router.get('/filter', lottery.filter)

export default router
