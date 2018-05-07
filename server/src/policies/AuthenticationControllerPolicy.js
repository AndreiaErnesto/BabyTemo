const Joi = require('joi')

module.exports = {
  register (req, res, next){
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}')
      )
    }

    const {error, value} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key){
        case 'email':
          res.status(400).send({
            error: 'Tem de inserir um endereço de email válido.'
          })
          break
        case 'password':
          res.status(400).send({
            error: `A password inserida não corresponde as seguinte regras:
              <br>
              1. Deve ter pelo menos uma maiúscula, minúscula e um valor numérico.
              <br>
              2. Deve ter entre 8 e 32 caracteres.
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Informação de registo inválida.'
          })
      }
    } else {
      next()
    }
  }
}