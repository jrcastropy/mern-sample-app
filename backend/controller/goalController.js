const asyncHandler = require('express-async-handler')
const Goal = require('../model/goalModel')
// @desc Get goals
// @route GET /api/goals
// @access Private

const getGoals = asyncHandler( async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

const getGoal = asyncHandler( async (req, res) => {
    const goals = await Goal.findById(req.params.id)
    res.status(200).json(goals)
})

// @desc post goals
// @route POST /api/goals
// @access Private
const postGoals = asyncHandler(async (req, res) => {
    console.log(req.body)
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    console.log(req.body)
    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal)
})

// @desc put goals
// @route PUT /api/goals/:id
// @access Private
const putGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
      }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedGoal)
})

// @desc delete goals
// @route DELETE /api/goals/:id
// @access Private
const delGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    await goal.remove()
    res.status(200).json({message: `deleted goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    getGoal,
    postGoals,
    putGoals,
    delGoals
}