package build

import (
	"bufio"
	"encoding/csv"
	"log"
	"os"
)

type Generator interface {
	Gen()
}

func parseCSV(path string) [][]string {
	f, err := os.Open(path)
	if err != nil {
		log.Fatal(err)
	}
	defer f.Close()

	reader := csv.NewReader(bufio.NewReader(f))

	data, err := reader.ReadAll()
	if err != nil {
		log.Fatal(err)
	}

	return data
}

func save(data, target string) {
	if err := os.WriteFile(target, []byte(data), 0666); err != nil {
		log.Fatalf("save file failed: %v", err)
	}
}
