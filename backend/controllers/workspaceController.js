import Workspace from "../models/Workspace.js";

export const createWorkspace = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Workspace name required" });
  }

  const workspace = await Workspace.create({
    name,
    owner: req.user._id
  });

  res.status(201).json(workspace);
};

export const getMyWorkspaces = async (req, res) => {
  const workspaces = await Workspace.find({ owner: req.user._id });
  res.json(workspaces);
};
