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

async function getProblem(req, res, next) {
  try {
    const problem = await problemService.getProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Problem fetched succedssfully",
      error: {},
      data: problem

    })
  } catch (error) {
    next(error)
  }
}

async function getProblems(req, res) {
  try {
    const data = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "All problems fetched succedssfully",
      error: {},
      data: data
    })
  } catch (error) {
    next(error)
  }
}

async function deleteProblem(req, res) {
  try {
    console.log("controller")
    const problem = await problemService.deleteProblem(req.params.id)
    console.log(problem)
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Problem deleted succedssfully",
      error: {},
      data: problem
    })
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
