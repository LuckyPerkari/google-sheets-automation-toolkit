function AIRPORT_DISTANCE(travelType, airport, location) {
  try {
    // Check for blank values
    if (!travelType || !airport || !location) {
      return "";
    }

    travelType = travelType.toString().trim().toLowerCase();
    airport = airport.toString().trim();
    location = location.toString().trim();

    // Ignore placeholder values
    const invalidValues = [
      "",
      "-",
      "—",
      "na",
      "n/a",
      "null",
      "none",
      "not applicable"
    ];

    if (
      invalidValues.includes(airport.toLowerCase()) ||
      invalidValues.includes(location.toLowerCase())
    ) {
      return "";
    }

    // Set origin and destination based on travel type
    let origin, destination;

    switch (travelType) {
      case "arrival":
        origin = airport;
        destination = location;
        break;

      case "departure":
        origin = location;
        destination = airport;
        break;

      default:
        return "Invalid Travel Type";
    }

    // Get driving directions
    const directions = Maps.newDirectionFinder()
      .setOrigin(origin)
      .setDestination(destination)
      .setMode(Maps.DirectionFinder.Mode.DRIVING)
      .getDirections();

    // Validate route
    if (
      !directions ||
      !directions.routes ||
      directions.routes.length === 0
    ) {
      return "Route Not Found";
    }

    const leg = directions.routes[0].legs[0];

    // Validate distance and duration
    if (
      !leg ||
      !leg.distance ||
      leg.distance.value == null ||
      !leg.duration ||
      !leg.duration.text
    ) {
      return "Distance Unavailable";
    }

    // Convert meters to kilometers
    const km = leg.distance.value / 1000;
    const duration = leg.duration.text;

    return `${km.toFixed(1)} KM | ${duration}`;

  } catch (error) {
    return "Distance Error: " + error.message;
  }
}	
