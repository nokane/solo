var bodyParser = require('body-parser');

module.exports = function (app, express) {
  // var userRouter = express.Router();

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));
  
};
