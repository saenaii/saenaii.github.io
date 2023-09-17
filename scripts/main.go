package main

import "scripts/build"

func main() {
	renderList := []build.Generator{
		build.Books{},
		build.AwsServices{},
	}

	for _, entity := range renderList {
		entity.Gen()
	}
}
