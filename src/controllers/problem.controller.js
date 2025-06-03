const { StatusCodes } = require('http-status-codes')
const NotImplementedError = require('../errors/notImplemented.error')
const BadRequest = require('../errors/badRequest.error')

function pingProblemController(req, res) {
  return res.json({ message: 'problem controller up' })
}

function addProblem(req, res, next) {
  try {
    // not implemented 
    throw new NotImplementedError('addProblem')
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
