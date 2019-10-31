const Pessoa = require('../models/Pessoa');

module.exports = {

    async index(req, res) {
      await Pessoa.findAll({ order: [['id', 'DESC']] }).then(result => {
          res.render("lista", { result });
      }).catch((erro) => {
        return res.status(401).json({ error: 'Houve um erro' });
      });
    },

    async store(req, res) {
      if (req.body.nome !== undefined && req.body.nome !== null && req.body.nome !== '') {
        if (!req.body.id) {
          await Pessoa.create({
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone
          }).then(function () {
            res.redirect('/');
          }).catch(function (erro) {
            return res.status(401).json({ error: 'Houve um erro' });
          });
        } else {
          Pessoa.update({
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone
          }, {
            where: {
              id: req.body.id
            }
          }).then(() => {
            res.redirect('/');
          }).catch(function (erro) {
            return res.status(401).json({ error: 'Houve um erro' });
          });
        }
      } else {
        res.render("cadastro");
      }
    },

    async update(req, res) {
      Pessoa.findOne({ where: { id: req.params.id } }).then((result) => {
        res.render('cadastro', { result });
      }).catch((err) => {
        return res.status(401).json({ error: 'Houve um erro' });
      });
    },

    async destroy(req, res) {
      await Pessoa.destroy({
        where: { id: req.params.id }
      }).then(function () {
        res.redirect('/');
      }).catch(function (erro) {
        return res.status(401).json({ error: 'Houve um erro' });
      });
    }
}