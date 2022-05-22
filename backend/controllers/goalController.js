const asyncHandler = require('express-async-handler');

// @route   GET api/goals
// @desc    Get goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get goals' });
});

// @route   POST api/goals
// @desc    Set a goal
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  res.status(200).json({ message: 'Set goal' });
});

// @route   PUT api/goals/:id
// @desc    Update a goal
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @route   DELETE api/goals/:id
// @desc    Delete a goal
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  updateGoal,
  setGoal,
  deleteGoal,
};
