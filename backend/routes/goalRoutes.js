const express = require('express')
const router = express.Router()
const { getGoals, postGoals, putGoals, delGoals } = require('../controller/goalController')

router.route('/').get(getGoals).post(postGoals)
router.route('/:id').put(putGoals).delete(delGoals)

// router.get('/', getGoals)
// router.post('/', postGoals)
// router.put('/:id', putGoals)
// router.delete('/:id', delGoals)

module.exports = router