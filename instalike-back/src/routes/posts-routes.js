import express from "express";

const routs = (app) => {
  app.use(express.json());
  app.get("/posts", async (req, res) => {
    const posts = await getTodosPosts();
    res.status(200).json(posts);
  });
};

export default routs;
