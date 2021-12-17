const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => journey.distance > minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((runningTotal, journey) => { 
    return runningTotal + journey.distance
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const result = [];
  this.journeys.forEach(function(journey) {
    // JS brings me -1 if something does not exist inside of the array. If it is in the array then skip it.
    if (result.indexOf(journey.transport) === -1) {
      result.push(journey.transport)
    };
  });
  return result;
};

// Other option to getUniqueModesOfTransport 
////////////////////////////////////////////
Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.map((journey) => {
    return journey.transport;
  })
  .filter((transport, index, array) => {
    return array.indexOf(transport) === index;
  });
};


module.exports = Traveller;