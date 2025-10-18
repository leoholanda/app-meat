const jsonServer = require('json-server')
const path = require('path')

// Cria o servidor
const server = jsonServer.create()

// Configura o arquivo db.json como base de dados
const router = jsonServer.router(path.join(__dirname, 'db.json'))

// Middlewares padrões (logger, CORS, etc)
const middlewares = jsonServer.defaults()
server.use(middlewares)

// Permite parsing de JSON no body
server.use(jsonServer.bodyParser)

/**
 * =============================================
 * ROTAS PERSONALIZADAS
 * =============================================
 */

// Menu de um restaurante específico
server.get('/restaurants/:id/menu', (req, res) => {
  const restaurantId = req.params.id
  const db = router.db // Acesso direto ao lowdb
  const menu = db.get('menu').filter({ restaurantId }).value()
  res.jsonp(menu)
})

// Reviews de um restaurante específico
server.get('/restaurants/:id/reviews', (req, res) => {
  const restaurantId = req.params.id
  const db = router.db
  const reviews = db.get('reviews').filter({ restaurantId }).value()
  res.jsonp(reviews)
})

/**
 * =============================================
 * ENDPOINTS PADRÕES
 * =============================================
 */
server.use(router)

// Inicia o servidor
const PORT = 3000
server.listen(PORT, () => {
  console.log(`✅ JSON Server rodando na porta ${PORT}`)
  console.log(`➡️  Endpoints:`)
  console.log(`   http://localhost:${PORT}/restaurants`)
  console.log(`   http://localhost:${PORT}/restaurants/:id/menu`)
  console.log(`   http://localhost:${PORT}/restaurants/:id/reviews`)
})
