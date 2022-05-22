const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');

// @route   GET api/goals
// @desc    Get goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

// @route   POST api/goals
// @desc    Set a goal
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  const goal = await Goal.create({ text: req.body.text });

  res.status(200).json(goal);
});

// @route   PUT api/goals/:id
// @desc    Update a goal
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

// @route   DELETE api/goals/:id
// @desc    Delete a goal
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  goal.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  updateGoal,
  setGoal,
  deleteGoal,
};
