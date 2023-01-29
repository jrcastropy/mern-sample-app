const express = require('express')
const router = express.Router()
const { getGoals, getGoal, postGoals, putGoals, delGoals } = require('../controller/goalController')

router.route('/').get(getGoals).post(postGoals)
router.route('/:id').put(putGoals).delete(delGoals).get(getGoal)

// router.get('/', getGoals)
// router.post('/', postGoals)
// router.put('/:id', putGoals)
// router.delete('/:id', delGoals)

module.exports = router