const { Token, User }=require('../models/models')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService=require('./mailService')
const ApiError=require('../exeptions/apiError')
const tokenService = require('./tokenService')

class UserService{
    async registration(email, password) {
        const candidate = await User.findOne({ where: { email } })
        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuid.v4()
        const user = await User.create({ email, password: hashPassword, activationLink })
        await mailService.sendActivationMail(email, process.env.API_URL+'activate/'+activationLink)
        const tokens = tokenService.generateTokens({ id: user.id, email: user.email, password: user.password })
        await tokenService.saveToken(user.id, tokens.refreshToken)
        
        return {
            ...tokens,
            user
        }
    }

    async activate(activationLink){
        const user=await User.findOne({where: {activationLink}})
        if(!user){
            throw ApiError.BadRequest('Некорректная ссылка активации')
        }
        user.isActivated=true
        await user.save()
    }

    async login(email, password){
        const user=await User.findOne({where: {email}})
        if(!user)
            throw ApiError.BadRequest('Пользователь с таким адресом не найден')
        const isPassEquals=await bcrypt.compare(password, user.password)
        if(!isPassEquals)
            throw ApiError.BadRequest('Неверный пароль')
        const tokens = tokenService.generateTokens({ id: user.id, email: user.email, password: user.password })
        await tokenService.saveToken(user.id, tokens.refreshToken)
        return {
            ...tokens,
            user
        }
    }

    async logout(refreshToken){
        const token=await tokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken){
        if(!refreshToken)
            throw ApiError.UnauthorizedError()
        const userData=tokenService.validateRefteshToken(refreshToken)
        const tokenFromDB=await tokenService.findToken(refreshToken)
        if(!userData || !tokenFromDB)
            throw ApiError.UnauthorizedError()
        const user=await User.findOne({where: {id: userData.id}})
        const tokens = tokenService.generateTokens({ id: user.id, email: user.email, password: user.password })
        await tokenService.saveToken(user.id, tokens.refreshToken)
        return {
            ...tokens,
            user
        }
    }

    async getAllUsers(){
        return await User.findAll()
    }
}

module.exports = new UserService()