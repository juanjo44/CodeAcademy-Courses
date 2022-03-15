package main

import "fmt"

//Function that tell us how many fuel we have available
func fuelGauge(fuel int) {
	fmt.Println("You have:", fuel, "of fuel")
}

//Function to calculate the amount of fuel that we require for travel to another plantet

func calculateFuel(planet string) int {
	var fuel int
	switch planet {
	case "Venus":
		fuel = 300000
	case "Mercury":
		fuel = 500000
	case "Mars":
		fuel = 700000
	default:
		fuel = 0
	}
	return fuel
}

//Function to greet a Planet
func greetPlanet(planet string) {
	fmt.Println("Dear Passengers, We are visiting:", planet)
}

// functionn to say that the crew cannot fly to a planet
func cantFly() {
	fmt.Println("We do not have the available fuel to fly there.")
}

//function that calculate the amount of fuel remaining after a travel
func flyToPlanet(planet string, fuel int) int {
	var fuelRemaining, fuelCost int
	fuelRemaining = fuel
	fuelCost = calculateFuel(planet)

	if fuelRemaining >= fuelCost {
		greetPlanet(planet)
		fuelRemaining -= fuelCost
	} else {
		cantFly()
	}

	return fuelRemaining
}

func main() {
	//testing
	//fuelGauge(50)
	// fmt.Println(calculateFuel("Venus"))
	// fmt.Println(calculateFuel("Mercury"))
	// fmt.Println(calculateFuel("Mars"))
	// fmt.Println(calculateFuel("Earth"))
	var fuel int
	fuel = 1000000
	planetChoice := "Venus"
	fuel = flyToPlanet(planetChoice, fuel)
	fuelGauge(fuel)

}
