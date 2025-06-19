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
      console.log(err);
      throw error;
    }
  }
}

module.exports = ProblemRepository;
