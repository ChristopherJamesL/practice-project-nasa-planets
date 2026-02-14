const {
  getAllLaunches,
  getLatestLaunch,
  addNewLaunch,
} = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;
  addNewLaunch(launch);
  res.status(200).json(getLatestLaunch());
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
};
