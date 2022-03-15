package main

import "fmt"

func main() {
	//Variables declaration
	var publisher, writer, artist, title string
	var year, pageNumber int
	var grade float32

	//First comic
	title = "Mr. GoToSleep"
	writer = "Tracey Hatchet"
	artist = "Jewel Tampson"
	publisher = "DizzyBooks Publishing Inc."
	year = 1997
	pageNumber = 14
	grade = 6.5
	fmt.Println(title, "written by", writer, "drawn by", artist, "published by", publisher, "year is", year, "has", pageNumber, "pages", "graded with", grade)

	//Second comic
	title = "Epic Vol. 1"
	writer = "Ryan N. Shawn"
	artist = "Phoebe Paperclips"
	publisher = "DizzyBooks Publishing Inc."
	year = 2013
	pageNumber = 160
	grade = 9.0
	fmt.Println(title, "written by", writer, "drawn by", artist, "published by", publisher, "year is", year, "has", pageNumber, "pages", "graded with", grade)
}
