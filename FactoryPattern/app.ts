// provides an interface to create objects without exposing the creation logic to the client.
// refers to the newly created object using a common interface.
// The Factory Pattern is also known as the Virtual Constructor.

const bike  = VehicleFactory.createVehicle("bike");
bike.drive();