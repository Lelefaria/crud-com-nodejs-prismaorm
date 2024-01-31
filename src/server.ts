import 'dotenv/config';
import Fastify from "fastify";
import { prisma } from './lib/prisma';


const server = Fastify();

server.get('/pegar', () => {
  return 'Pegar usuario'
})

server.post('/user', async (req, res) => {

  const dataUser = req.body
  console.log(dataUser)

  const User = await prisma.user.create({
    data: {
      name: '',
      email: '',
      passowrd: ''
    }
  })

  return 'Usuário Criado com Sucesoso'
})

server.put('/atualizar', () => {
  return 'Atualizar usuario'
})

server.delete('/deletar', () => {
  return 'Deletar usuario'
})

const PORT = process.env.PORT

server.listen({
  port: typeof PORT === 'string' ? Number(PORT) : 3000
}) 