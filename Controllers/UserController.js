const {
  createNewUserCore,
  getallUserCore,
  getSingleuserCore,
} = require("../Core/UserCore");
//create new category
const addNewUser = async (req, res) => {
  const user = await createNewUserCore(req, res);
  if (!user) return res.status(400).send("the user cannot be created!");
  return res.send(user);
};

// get all category data
const getallUser = async (req, res) => {
  const getalluserdata = await getallUserCore();
  if (!getalluserdata) return res.status(500).send("the data is not found");
  res.status(200).send(getalluserdata);
};

// get single catgory
const getSingleuser = async (req, res) => {
  console.log("rber");
  const signleuser = await getSingleuserCore(req);
  if (!signleuser)
    return res.status(500).json({
      message: "The category with the given ID was not found.",
    });
  res.status(200).send(signleuser);
};

// put single catgory
const updateuser = async (req, res) => {
  const updateuser = await updateCategoryCore(req);
  if (!updateuser)
    return res.status(500).json({
      message: "The updateuser with the given ID was not found.",
    });
  res.status(200).send(updateuser);
};

// delete single catgory
const deleteUser = async (req, res) => {
  const deteleuser = await deleteCategoryCore(req);
  if (!deteleuser)
    return res.status(500).json({
      message: "The deteleuser with the given ID was not found.",
    });
  res
    .status(200)
    .json({ success: true, message: "the deteleuser is deleted!" });
};

module.exports = {
  addNewUser,
  getallUser,
  getSingleuser,
  updateuser,
  deleteUser,
};
