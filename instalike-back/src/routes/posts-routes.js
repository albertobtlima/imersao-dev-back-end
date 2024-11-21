import express from "express";
import multer from "multer";

import {
  listarPosts,
  postarNovoPost,
  uploadImagem,
} from "../controllers/posts-controller.js";


const storage = multer.diskStorage({
  destination: function (req, file, cd) {
    cd(null, "uploads/");
  },
  filename: function (req, file, cd) {
    cd(null, file.originalname);
  },
});

const upload = multer({ dest: "./uploads", storage});

const routes = (app) => {
  app.use(express.json());
  app.get("/posts", listarPosts);
  app.post("/posts", postarNovoPost);
  app.post("/upload", upload.single("imagem"), uploadImagem);
};

export default routes;
