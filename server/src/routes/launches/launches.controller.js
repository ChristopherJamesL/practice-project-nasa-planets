const {
  getAllLaunches,
  getLatestLaunch,
  addNewLaunch,
} = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const { mission, rocket, target } = req.body;
  let { launchDate } = req.body;

  if (!mission || !rocket || !launchDate || !target) {
    return res.status(400).json({
      error: "Missing Required Launch Property",
    });
  }

  launchDate = new Date(launchDate);

  if (isNaN(launchDate.getTime())) {
    return res.status(400).json({
      error: "Invalid Launch Date",
    });
  }

  const launch = {
    mission,
    rocket,
    target,
    launchDate,
  };

  addNewLaunch(launch);
  res.status(201).json(getLatestLaunch());
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
};
