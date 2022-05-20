import postMessage from "../models/postsMsg.js";

export const getPosts = async (req, res) => {
  try {
    const postMsgs = await postMessage.find();
    console.log(postMsgs);
    res.status(200).json(postMsgs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  const post = req.body;
  // const { title, message, creator, tags, selectedFile, likeCount, createdAt } =
  //   req.body;
  // const newPost = new postMessage(post);
  try {
    const p = await postMessage.create({
      post,
    });
    // await newPost.save();
    console.log(p);
    res.status(201).json(p);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
  // res.send("post creation!!");
};
