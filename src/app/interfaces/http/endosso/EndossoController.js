const { Router } = require('express');
const { inject } = require('awilix-express');
const Status = require('http-status');

const EndossoController = {
  get router() {
    const router = Router();

    router.use(inject('endossoSerializer'));

    router.get('/', inject('getAllEndossos'), this.index);
    router.get('/:id', inject('getEndosso'), this.show);
    router.post('/', inject('createEndosso'), this.create);
    router.put('/:id', inject('updateEndosso'), this.update);
    router.delete('/:id', inject('deleteEndosso'), this.delete);

    return router;
  },

  index(req, res, next) {
    const { getAllEndossos, endossoSerializer } = req;
    const { SUCCESS, ERROR } = getAllEndossos.outputs;

    getAllEndossos
      .on(SUCCESS, (endossos) => {
        res
          .status(Status.OK)
          .json(endossos.map(endossoSerializer.serialize));
      })
      .on(ERROR, next);

    getAllEndossos.execute();
  },

  show(req, res, next) {
    const { getEndosso, endossoSerializer } = req;

    const { SUCCESS, ERROR, NOT_FOUND } = getEndosso.outputs;

    getEndosso
      .on(SUCCESS, (endosso) => {
        res
          .status(Status.OK)
          .json(endossoSerializer.serialize(endosso));
      })
      .on(NOT_FOUND, (error) => {
        res.status(Status.NOT_FOUND).json({
          type: 'NotFoundError',
          details: error.details
        });
      })
      .on(ERROR, next);

    getEndosso.execute(Number(req.params.id));
  },

  create(req, res, next) {
    const { createEndosso, endossoSerializer } = req;
    const { SUCCESS, ERROR, VALIDATION_ERROR } = createEndosso.outputs;

    createEndosso
      .on(SUCCESS, (endosso) => {
        res
          .status(Status.CREATED)
          .json(endossoSerializer.serialize(endosso));
      })
      .on(VALIDATION_ERROR, (error) => {
        res.status(Status.BAD_REQUEST).json({
          type: 'ValidationError',
          details: error.details
        });
      })
      .on(ERROR, next);

    createEndosso.execute(req.body);
  },

  update(req, res, next) {
    const { updateEndosso, endossoSerializer } = req;
    const { SUCCESS, ERROR, VALIDATION_ERROR, NOT_FOUND } = updateEndosso.outputs;

    updateEndosso
      .on(SUCCESS, (endosso) => {
        res
          .status(Status.ACCEPTED)
          .json(endossoSerializer.serialize(endosso));
      })
      .on(VALIDATION_ERROR, (error) => {
        res.status(Status.BAD_REQUEST).json({
          type: 'ValidationError',
          details: error.details
        });
      })
      .on(NOT_FOUND, (error) => {
        res.status(Status.NOT_FOUND).json({
          type: 'NotFoundError',
          details: error.details
        });
      })
      .on(ERROR, next);

    updateEndosso.execute(Number(req.params.id), req.body);
  },

  delete(req, res, next) {
    const { deleteEndosso } = req;
    const { SUCCESS, ERROR,  NOT_FOUND } = deleteEndosso.outputs;

    deleteEndosso
      .on(SUCCESS, () => {
        res.status(Status.ACCEPTED).end();
      })
      .on(NOT_FOUND, (error) => {
        res.status(Status.NOT_FOUND).json({
          type: 'NotFoundError',
          details: error.details
        });
      })
      .on(ERROR, next);

    deleteEndosso.execute(Number(req.params.id));
  }
};

module.exports = EndossoController;
