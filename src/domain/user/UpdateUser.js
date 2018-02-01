const Operation = require('src/domain/Operation');
const User = require('src/domain/user/User');

class UpdateUser extends Operation {
  constructor({ usersRepository }) {
    super();
    this.usersRepository = usersRepository;
  }

  async execute(userId, userData) {
    const {
      SUCCESS, NOT_FOUND, VALIDATION_ERROR, ERROR
    } = this.outputs;

    try {
      const userAux = await this.endossoRepository.getById(userId);
      
      for (var key in userData) {
        userAux[key] = userData[key];
      }

      const validacao = new User(userAux);
      const { valid, errors } = validacao.validate();
      
      if(!valid) {
        const error = new Error('ValidationError');
        error.details = errors;
  
        throw error;
      }

      const user = await this.usersRepository.update(userId, userData);
      this.emit(SUCCESS, user);
    } catch(error) {
      switch(error.message) {
      case 'ValidationError':
        return this.emit(VALIDATION_ERROR, error);
      case 'NotFoundError':
        return this.emit(NOT_FOUND, error);
      default:
        this.emit(ERROR, error);
      }
    }
  }
}

UpdateUser.setOutputs(['SUCCESS', 'NOT_FOUND', 'VALIDATION_ERROR', 'ERROR']);

module.exports = UpdateUser;
