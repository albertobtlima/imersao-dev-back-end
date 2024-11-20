import express from "express";
import conectarAoBanco from "./src/config/db-config.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

const posts = [
  {
    id: 1,
    descricao: "Uma foto teste",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Um gato fofo dormindo",
    imagem: "https://placekitten.com/300/200",
  },
  {
    id: 3,
    descricao: "Uma paisagem montanhosa",
    imagem: "https://picsum.photos/300/200?random=1",
  },

  {
    id: 4,
    descricao: "Uma comida deliciosa",
    imagem: "https://source.unsplash.com/random/300x200/?food",
  },
  {
    id: 5,
    descricao: "Um carro esportivo vermelho",
    imagem: "https://source.unsplash.com/random/300x200/?car,red",
  },
];

const app = express();

app.listen(3000, () => {
  console.log("servidor escutando...");
});

async function getTodosPosts() {
  const db = conexao.db("imersao-instabyte");
  const colecao = db.collection("posts");

  return colecao.find().toArray();
}
