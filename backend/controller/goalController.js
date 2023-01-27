// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
    res.status(200).json({message: 'get goals'})
}

// @desc post goals
// @route POST /api/goals
// @access Private
const postGoals = (req, res) => {
    res.status(200).json({message: 'post goals'})
}

// @desc put goals
// @route PUT /api/goals/:id
// @access Private
const putGoals = (req, res) => {
    res.status(200).json({message: `put goals ${req.params.id}`})
}

// @desc delete goals
// @route DELETE /api/goals/:id
// @access Private
const delGoals = (req, res) => {
    res.status(200).json({message: `delete goals ${req.params.id}`})
}

module.exports = {
    getGoals,
    postGoals,
    putGoals,
    delGoals
}