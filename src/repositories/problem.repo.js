const logger = require("../config/logger.config");
const NotFound = require("../errors/notfound.error");
const { Problem } = require("../models");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description
      });
      return problem;

    } catch (err) {
      console.log(err)
      throw err;
    }
  }
  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;

    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async getProblem(id) {
    try {
      const problem = await Problem.findById(id);
      if (!problem) {
        throw new NotFound("Problem", id);
      }
      return problem
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  async deleteProblem(id) {
    try {
      const deletedProblem = await Problem.findByIdAndDelete(id);
      if (!deletedProblem) {
        logger.error("Problem");
        throw new NotFound("Problem", id);
      }
      return deletedProblem
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async updateProblem(id, updateData, options) {
    try {
      const problem = await Problem.findByIdAndUpdate(id, updateData, options)
      if (!problem) {
        throw new NotFound("Problem", id)
      }
      return problem;
    } catch (err) {
      console.log(err);
      throw err;

    }
  }
}
module.exports = ProblemRepository;
