const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

const apiRoutes = require('./routes/index');

// const userService = require('./services/user-service');
const db = require('./models/index');

const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',apiRoutes);

    app.listen(PORT, async () => {
        console.log(`server Started at port ${PORT}`);
        if(process.env.DB_SYNC) {
          db.sequelize.sync({alter: true});
        }
        

        // const service = new userService ();
        // const newToken = service.createToken({email: 'ashimbarman@gmail.com', id: 5});
        // console.log("new token is ", newToken);
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzaGltYmFybWFuQGdtYWlsLmNvbSIsImlkIjo1LCJpYXQiOjE2ODE2NTc0NTEsImV4cCI6MTY4MTY2MTA1MX0.PI-z4gedJLeNevXjorI1vCkEX63mBRWXX2IyyLHKS1E'
        // const response = service.verifyToken(token);
        // console.log(response);

    });
}

prepareAndStartServer();