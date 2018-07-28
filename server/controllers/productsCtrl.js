module.exports = {
  get: (req, res) => {
    let db = req.app.get('db');
    db.getProducts().then(response => {
      res.status(200).send(response)
    })
  },

  create: (req, res) => {
    let db = req.app.get('db');
    let { name, price, description, imageUrl } = req.body
    db.createProduct([name, price, description, imageUrl]).then(response => {
      res.send(response[0])
    })
  },

  update: (req, res) => {
    let { location, price, description } = req.body
    let { id } = req.params
    let db = req.app.get('db');
    db.updateProduct([location, price, description, id]).then(response => {
      res.send(response[0])
    })
  },

  remove: (req, res) => {
    let { id } = req.params
    let db = req.app.get('db');
    db.removeProduct(id).then(response => res.sendStatus(200))
  }
}