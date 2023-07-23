// This file contain code of redux store
//in redux core we require CREATE_STORE but in Toolkit we use CONFIGURE_STORE to define store

const configureStore = require('@reduxjs/toolkit').configureStore
const icecreamReducer = require('../features/icecream/icecreamSlice')
const cakeReducer = require('../features/cake/cakeSlice')
const store = configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer,
    },
})

module.exports = store