const sequelize = require('../db')
const {DataTypes, INTEGER, STRING, BOOLEAN}=require('sequelize')

const User=sequelize.define('users',{
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: STRING, unique: true, allowNull: false},
    password: {type: STRING, allowNull: false},
    isActivated: {type: BOOLEAN, allowNull: false, defaultValue: false},
    activationLink: {type: STRING},
    
})

const Token=sequelize.define('tokens',{
    userId: {type: INTEGER},
    refreshToken: {type: STRING(300), allowNull: false}
})

User.hasOne(Token)
Token.belongsTo(User)

module.exports={
    User,
    Token
}