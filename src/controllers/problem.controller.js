const { StatusCodes } = require('http-status-codes')
const NotImplementedError = require('../errors/notImplemented.error')
const BadRequest = require('../errors/badRequest.error')

function pingProblemController(req, res) {
  return res.json({ message: 'problem controller up' })
}

function addProblem(req, res, next) {
  try {
    throw new BadRequest('Problem Name', { missing: ['Problem Name'] });
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
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "not implemented yet"
  })

}

function deleteProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "not implemented yet"
  })

}


function updateProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "not implemented yet"
  })

}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController
}
