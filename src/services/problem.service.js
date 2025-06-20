const sanitizeMarkdownContent = require

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }
  async createProblem(problemData) {
    problemData.description = sanitizeMarkdownContent(problemData.description);
    const problem = await this.problemRepository.createProblem(problemData);
    return problem;
  }

  async getAllProblems() {
    const problems = await this.problemRepository.getAllProblems();
    return problems;
  }

  async getProblem(problemID) {
    const problem = await this.problemRepository.getProblem(problemID);
    return problem;
  }

  async deleteProblem(problemID) {
    const deletedproblem = await this.problemRepository.deleteProblem(problemID);
    return deletedproblem;
  }

}

module.exports = ProblemService;
