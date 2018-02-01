const { Router } = require('express');
const { inject } = require('awilix-express');
const Status = require('http-status');

const ApoliceController = {
  get router() {
    const router = Router();

    router.use(inject('apoliceSerializer'));

    router.get('/', inject('getAllApolices'), this.index);
    router.get('/:id', inject('getApolice'), this.show);
    router.post('/', inject('createApolice'), this.create);
    router.put('/:id', inject('updateApolice'), this.update);
    router.delete('/:id', inject('deleteApolice'), this.delete);
    
    router.get('/:id/endossos', inject('findEndossos'), this.findEndossos);
    router.post('/:id/renovar', inject('renovar'), this.renovar);

    return router;
  },

  index(req, res, next) {
    const { getAllApolices, apoliceSerializer } = req;
    const { SUCCESS, ERROR } = getAllApolices.outputs;

    getAllApolices
      .on(SUCCESS, (apolices) => {
        res
          .status(Status.OK)
          .json(apolices.map(apoliceSerializer.serialize));
      })
      .on(ERROR, next);

    getAllApolices.execute();
  },

  show(req, res, next) {
    const { getApolice, apoliceSerializer } = req;

    const { SUCCESS, ERROR, NOT_FOUND } = getApolice.outputs;

    getApolice
      .on(SUCCESS, (apolice) => {
        res
          .status(Status.OK)
          .json(apoliceSerializer.serialize(apolice));
      })
      .on(NOT_FOUND, (error) => {
        res.status(Status.NOT_FOUND).json({
          type: 'NotFoundError',
          details: error.details
        });
      })
      .on(ERROR, next);

    getApolice.execute(Number(req.params.id));
  },

  create(req, res, next) {
    const { createApolice, apoliceSerializer } = req;
    const { SUCCESS, ERROR, VALIDATION_ERROR } = createApolice.outputs;

    createApolice
      .on(SUCCESS, (apolice) => {
        res
          .status(Status.CREATED)
          .json(apoliceSerializer.serialize(apolice));
      })
      .on(VALIDATION_ERROR, (error) => {
        res.status(Status.BAD_REQUEST).json({
          type: 'ValidationError',
          details: error.details
        });
      })
      .on(ERROR, next);

    createApolice.execute(req.body);
  },

  update(req, res, next) {
    const { updateApolice, apoliceSerializer } = req;
    const { SUCCESS, ERROR, VALIDATION_ERROR, NOT_FOUND } = updateApolice.outputs;

    updateApolice
      .on(SUCCESS, (apolice) => {
        res
          .status(Status.ACCEPTED)
          .json(apoliceSerializer.serialize(apolice));
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

    updateApolice.execute(Number(req.params.id), req.body);
  },

  delete(req, res, next) {
    const { deleteApolice } = req;
    const { SUCCESS, ERROR,  NOT_FOUND } = deleteApolice.outputs;

    deleteApolice
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

    deleteApolice.execute(Number(req.params.id));
  },

  findEndossos(req, res, next){
    const { findEndossos, apoliceSerializer } = req;
    const { SUCCESS, ERROR } = findEndossos.outputs;

    findEndossos
      .on(SUCCESS, (apolices) => {
        res
          .status(Status.OK)
          .json(apolices.map(apoliceSerializer.serialize));
      })
      .on(ERROR, next);

    findEndossos.execute(Number(req.params.id));
  },

  renovar(req, res, next){
    const { renovarApolice, apoliceSerializer } = req;
    const { SUCCESS, ERROR, VALIDATION_ERROR } = renovarApolice.outputs;

    renovarApolice
      .on(SUCCESS, (apolice) => {
        res
          .status(Status.CREATED)
          .json(apoliceSerializer.serialize(apolice));
      })
      .on(VALIDATION_ERROR, (error) => {
        res.status(Status.BAD_REQUEST).json({
          type: 'ValidationError',
          details: error.details
        });
      })
      .on(ERROR, next);

    renovarApolice.execute(Number(req.params.id));  
  }
};

module.exports = ApoliceController;
