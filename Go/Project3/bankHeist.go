package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	//Seed to get pseudoRandom numbers
	rand.Seed(time.Now().UnixNano())

	//Variables declaration
	isHeistOn := true
	eludedGuards := rand.Intn(100)

	//Check if we have elude enough Guards
	if eludedGuards >= 50 {
		fmt.Println("Looks like you've managed to make it past the guards. Good job, but remember, this is the first step.")
	} else {
		isHeistOn = false
		fmt.Println("Plan a better disguise next time?")
	}

	openedVault := rand.Intn(100)

	//Check probability of open the vault and how to act according to this
	if isHeistOn && openedVault >= 70 {
		fmt.Println("Grab and GO!")
	} else if isHeistOn {
		isHeistOn = false
		fmt.Println("The vault can't be opened")
	}

	leftSafely := rand.Intn(5)

	//Check if the thieves left safely
	if isHeistOn {
		switch leftSafely {
		case 0:
			isHeistOn = false
			fmt.Println("the heist failed")
		case 1:
			isHeistOn = false
			fmt.Println("Turns out vault doors don't open from the inside...")
		case 2:
			isHeistOn = false
			fmt.Println("A cat killed the thieves")
		case 3:
			isHeistOn = false
			fmt.Println("You fall sleep in the middle of the heist")
		default:
			fmt.Println("Start the getaway car!")
		}
	}

	//The amount that they have stolen
	if isHeistOn {
		amtStolen := 10000 + rand.Intn(1000000)
		fmt.Println("We have stolen:", amtStolen)
	}
	fmt.Println(isHeistOn)

}
