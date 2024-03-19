// const AddUserUseCase = require('../../../../Applications/use_case/AddUserUseCase');

class ThreadsHandler {
  constructor(container) {
    this._container = container;

    this.postThreadHandler = this.postThreadHandler.bind(this);
  }

  async postThreadHandler(request, h) {
    // const addUserUseCase = this._container.getInstance(AddUserUseCase.name);
    // const addedUser = await addUserUseCase.execute(request.payload);

    const response = h.response({
      status: 'success',
      data: {
        // addedUser,
      },
    });
    response.code(201);
    return response;
  }
}

module.exports = ThreadsHandler;
