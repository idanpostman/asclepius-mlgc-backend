const { postPredict, getPredictHistories } = require('../server/handler');
 
const routes = [
  
  {
    path: '/predict',
    method: 'POST',
    handler: postPredict,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
        maxBytes: 1000000
      }
    }
  },

  {
    path: '/predict/histories',
    method: 'GET',
    handler: getPredictHistories
  }

]
 
module.exports = routes;