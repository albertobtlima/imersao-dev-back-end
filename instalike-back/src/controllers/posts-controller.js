import { getTodosPosts, criarPost } from "../models/posts-model.js";

export async function listarPosts(req, res) {
  const posts = await getTodosPosts();
  res.status(200).json(posts);
}

export async function postarNovoPost(req, res) {
  const novoPost = req.body;

  try {
    const postCriado = await criarPost(novoPost);
    res.status(200).json(postCriado);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ Error: "Falha na requisição" });
  }
}

export async function uploadImagem(req, res) {
  const novoPost = req.body;

  try {
    const postCriado = await criarPost(novoPost);
    res.status(200).json(postCriado);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ Error: "Falha na requisição" });
  }
}
