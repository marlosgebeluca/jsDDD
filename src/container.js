const { createContainer, Lifetime } = require('awilix');
const { scopePerRequest } = require('awilix-express');

const config = require('../config');
const Application = require('./app/Application');
const {
  CreateUser,
  GetAllUsers,
  GetUser,
  UpdateUser,
  DeleteUser
} = require('./domain/user');

const {
  CreateApolice,
  GetAllApolices,
  GetApolice,
  UpdateApolice,
  DeleteApolice,
  FindEndossos
} = require('./domain/apolice');

const {
  CreateEndosso,
  GetAllEndossos,
  GetEndosso,
  UpdateEndosso,
  DeleteEndosso
} = require('./domain/endosso');

const UserSerializer = require('./app/interfaces/http/user/UserSerializer');
const ApoliceSerializer = require('./app/interfaces/http/apolice/ApoliceSerializer');
const EndossoSerializer = require('./app/interfaces/http/endosso/EndossoSerializer');

const Server = require('./app/interfaces/http/Server');
const router = require('./app/interfaces/http/router');
const loggerMiddleware = require('./app/interfaces/http/logging/loggerMiddleware');
const errorHandler = require('./app/interfaces/http/errors/errorHandler');
const devErrorHandler = require('./app/interfaces/http/errors/devErrorHandler');

const logger = require('./infra/logging/logger');
const SequelizeUsersRepository = require('./infra/user/SequelizeUsersRepository');
const SequelizeApoliceRepository = require('./infra/apolice/SequelizeApoliceRepository');
const SequelizeEndossoRepository = require('./infra/endosso/SequelizeEndossoRepository');
const { database, User: UserModel, Apolice: ApoliceModel, Endosso: EndossoModel } = require('./infra/database/models');

const container = createContainer();

// System
container
  .registerClass({
    app: [Application, { lifetime: Lifetime.SINGLETON }],
    server: [Server, { lifetime: Lifetime.SINGLETON }]
  })
  .registerFunction({
    router: [router, { lifetime: Lifetime.SINGLETON }],
    logger: [logger, { lifetime: Lifetime.SINGLETON }]
  })
  .registerValue({ config });

// Middlewares
container
  .registerFunction({
    loggerMiddleware: [loggerMiddleware, { lifetime: Lifetime.SINGLETON }]
  })
  .registerValue({
    containerMiddleware: scopePerRequest(container),
    errorHandler: config.production ? errorHandler : devErrorHandler
  });

// Repositories
container.registerClass({
  usersRepository: [SequelizeUsersRepository, { lifetime: Lifetime.SINGLETON }],
  apoliceRepository: [SequelizeApoliceRepository, { lifetime: Lifetime.SINGLETON }],
  endossoRepository: [SequelizeEndossoRepository, { lifetime: Lifetime.SINGLETON }],
});

// Database
container.registerValue({
  database,
  UserModel,
  ApoliceModel,
  EndossoModel
});

// Operations
container.registerClass({
  createUser: CreateUser,
  getAllUsers: GetAllUsers,
  getUser: GetUser,
  updateUser: UpdateUser,
  deleteUser: DeleteUser,

  createApolice: CreateApolice,
  getAllApolices: GetAllApolices,
  getApolice: GetApolice,
  updateApolice: UpdateApolice,
  deleteApolice: DeleteApolice,
  findEndossos: FindEndossos,

  createEndosso: CreateEndosso,
  getAllEndossos: GetAllEndossos,
  getEndosso: GetEndosso,
  updateEndosso: UpdateEndosso,
  deleteEndosso: DeleteEndosso
});

// Serializers
container.registerValue({
  userSerializer: UserSerializer,
  apoliceSerializer: ApoliceSerializer,
  endossoSerializer: EndossoSerializer
});

module.exports = container;
