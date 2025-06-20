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

async function getProblems(req, res,next) {
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

async function deleteProblem(req, res,next ) {
  try {
    const deletedProblem = await problemService.deleteProblem(req.params.id)
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Problem deleted succedssfully",
      error: {},
      data: deletedProblem
    })
  } catch (error) {
    next(error)
  }
}


async function updateProblem(req, res,next) {
  try {
    // const {title, description, difficulty,testcases,editorial }= req.body;
    const updateData = req.body;
    const options = { new: true };
    const problem = await problemService.updateProblem(req.params.id, updateData, options);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Problem updated succedssfully",
      error: {},
      data: problem
    })
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
