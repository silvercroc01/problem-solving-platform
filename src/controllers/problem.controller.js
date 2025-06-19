const NotImplementedError = require('../errors/notImplemented.error')
const { ProblemService } = require('../services')
const { ProblemRepository } = require("../repositories");
const { StatusCodes } = require('http-status-codes');

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
  return res.json({ message: 'problem controller up' })
}

async function addProblem(req, res, next) {
  try {
    const newproblem = await problemService.createProblem(req.body);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Problem added successfully",
      error: {},
      data: newproblem
    })
  } catch (error) {
    next(error)
  }
}

function getProblem(req, res, next) {
  try {
    // not implemented 
    throw new NotImplementedError('addProblem')
  } catch (error) {
    next(error)
  }
}

function getProblems(req, res) {
  try {
    // not implemented 
    throw new NotImplementedError('addProblem')
  } catch (error) {
    next(error)
  }
}

function deleteProblem(req, res) {
  try {
    // not implemented 
    throw new NotImplementedError('addProblem')
  } catch (error) {
    next(error)
  }
}


function updateProblem(req, res) {
  try {
    // not implemented 
    throw new NotImplementedError('addProblem')
  } catch (error) {
    next(error)
  }
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController
}
