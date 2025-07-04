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
    const deletedProblem = await this.problemRepository.deleteProblem(problemID);
    return deletedProblem;
  }

  async updateProblem(problemID, updateData, options) {
    const problem = await this.problemRepository.updateProblem(problemID, updateData, options);
    return problem;
  }

}

module.exports = ProblemService;
