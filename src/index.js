const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

const apiRoutes = require('./routes/index');

// const { User } = require('./models/index');
// const bcrypt = require('bcrypt');
const UserRepository = require('./repository/user-repository');


const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',apiRoutes);

    app.listen(PORT, async () => {
        console.log(`server Started at port ${PORT}`);
        const repo = new UserRepository();
        const response = await repo.getById(5);
        console.log(response);
        // const incommingpassword = '1234amakusidediore@';
        // const user = await User.findByPk(5);
        // const response = bcrypt.compareSync(incommingpassword, user.password);
        // console.log(response);

    });
}

prepareAndStartServer();