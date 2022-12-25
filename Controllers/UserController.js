const {
  createNewUserCore,
  getallUserCore,
  getSingleuserCore,
  updateuserCore,
  deleteUserCore,
} = require("../Core/UserCore");
//create new category
const addNewUser = async (req, res) => {
  const user = await createNewUserCore(req, res);
  if (!user) return res.status(400).send("the user cannot be created!");
  return res.status(200).json({ data: user });
};

// get all category data
const getallUser = async (req, res) => {
  const getalluserdata = await getallUserCore();
  if (!getalluserdata) return res.status(400).send("the data is not found");
  res.status(200).json({ data: getalluserdata });
};

// get single catgory
const getSingleuser = async (req, res) => {
  console.log("rber");
  const signleuser = await getSingleuserCore(req);
  if (!signleuser)
    return res.status(400).json({
      message: "The User with the given ID was not found.",
    });
  res.status(200).json({ data: signleuser });
};

// put single catgory
const updateuser = async (req, res) => {
  const updateuser = await updateuserCore(req);
  if (!updateuser)
    return res.status(400).json({
      message: "The updateuser with the given ID was not found.",
    });
  res.status(200).json({ data: updateuser });
};

// delete single user
const deleteUser = async (req, res) => {
  const deteleuser = await deleteUserCore(req);
  if (!deteleuser)
    return res.status(400).json({
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
