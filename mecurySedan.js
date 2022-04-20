const VehicleModule = require("./vehicle").Vehicle
//this shows how to call from this module...
/* let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make) */

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maxPassengers = 5
        this.passenger = 0
        this.numberOfWheels = 4
        this.maxSpeed = 160
        this.fuel = 10
        this.scheduleService = false
    }

    loadPassenger(num){
        if(this.passenger < this.maxPassengers) {
            if((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num
                return this.passenger
            } else {
                console.log(`${this.model} ${this.make} is full`)
            }
        } else {
            console.log(`${this.model} ${this.make} is full.`)
        }
    }

    start() {
        if(this.fuel > 0 ){
            console.log("Engine has started!")
            return this.started = false 
        } else {
            console.log("Car has no fuel and cannot start.")
            return this.started = false
        }
    }
   
    needService(mileageDriven) {
        if(this.mileage <= 30000){
            if((this.mileage + mileageDriven) > 30000){
                this.scheduleService = true
                return this.scheduleService
            } else {
                return this.scheduleServie = false
            }
        } else {
            return this.scheduleService = true
        }
        
    }
}

let newCar = new Car('Mercury', 'Sedan', '2002', 'Red', 25000)

newCar.loadPassenger(4)
newCar.start()
newCar.stop()
newCar.needService(7500)

console.log(newCar)