const { launches } = require("../../models/launches.model");

function getAllLaunches(req, res) {
  res
    .status(200)
    .json(
      Array.from(launches.values(), (launch) => ({
        ...launch,
        launchDate: launch.launchDate.toISOString(),
      })),
    );
}

module.exports = {
  getAllLaunches,
};
