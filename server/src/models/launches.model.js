const launches = new Map();

let latestFlightNumber = 101;

const launch = {
  flightNumber: 101,
  launchDate: new Date("December 27, 2030"),
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  target: "kepler-442 b",
  customers: ["Jeff Besos", "NASA"],
  upcoming: false,
  success: true,
};

const launch2 = {
  flightNumber: 100,
  launchDate: new Date("December 27, 2030"),
  mission: "Kepler Exploration X",
  rocket: "Explorer IS2",
  target: "kepler-442 b",
  customers: ["Richard Branson", "Elon Musk"],
  upcoming: false,
  success: true,
};

launches.set(launch2.flightNumber, launch2);
launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function getLatestLaunch() {
  return launches.get(latestFlightNumber);
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      customers: ["NASA", "Elon Musk"],
      upcoming: true,
      success: true,
    }),
  );
}

module.exports = {
  getAllLaunches,
  getLatestLaunch,
  addNewLaunch,
};
