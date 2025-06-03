function pingProblemController(req, res) {
  return res.json({ message: 'problem controller up' })
}

function addProblem(req, res) {
  return res.status(501).json({
    message: "not implemented yet"
  })
}

function getProblem(req, res) {
  return res.status(501).json({
    message: "not implemented yet"
  })

}

function getProblems(req, res) {
  return res.status(501).json({
    message: "not implemented yet"
  })

}

function deleteProblem(req, res) {
  return res.status(501).json({
    message: "not implemented yet"
  })

}


function updateProblem(req, res) {
  return res.status(501).json({
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
