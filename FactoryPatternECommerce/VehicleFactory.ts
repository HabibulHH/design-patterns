type VehicleType = "car" | "bike";

interface Vehicle {
  drive(): void;
}

class Car implements Vehicle {
  drive() {
    console.log("Driving a car...");
  }
}

class Bike implements Vehicle {
  drive() {
    console.log("Riding a bike...");
  }
}

class VehicleFactory {
  static createVehicle(type: VehicleType): Vehicle {
    if (type === "car") {
      return new Car();
    } else if (type === "bike") {
      return new Bike();
    } else {
      throw new Error("Invalid vehicle type");
    }
  }
}
