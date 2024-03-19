const threadRoutes = (handler) => ([
    {
      method: 'POST',
      path: '/threads',
      handler: handler.postThreadHandler,
    },
  ]);
  
  module.exports = threadRoutes;
  