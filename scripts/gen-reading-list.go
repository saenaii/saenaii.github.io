package main

import (
	"bufio"
	"encoding/csv"
	"encoding/json"
	"log"
	"os"
	"sort"
	"strconv"
	"strings"
	"time"
)

type book struct {
	Name      string `json:"name"`
	ISBN      string `json:"isbn"`
	StartDate string `json:"startDate"`
	EndDate   string `json:"endDate"`
	sortKey   time.Time
	Status    string `json:"status"`
}

type books []book

const (
	filename   = "../blogs/reading/reading-list.md"
	source     = "../data/reading-list.csv"
	timeLayout = "2006-01-02"

	statusDoing = "Doing"
)

const (
	tableTitle = "| Name | ISBN | Start Date | End Date | Status |"
	delimit    = "| --- | --- | --- | --- | --- |"
	rowLayout  = "| {{name}} | `{{isbn}}` | {{startDate}}| {{endDate}} | {{status}} |"

	content = `---
title: Reading List
date: {{date}}
tags:
	- books
categories: 
	- reading
---
`
)

func main() {
	list := parseCSV(source)

	data := render(list)
	save(data)
}

func parseCSV(input string) books {
	f, err := os.Open(input)
	if err != nil {
		log.Fatal(err)
	}
	defer f.Close()

	reader := csv.NewReader(bufio.NewReader(f))

	data, err := reader.ReadAll()
	if err != nil {
		log.Fatal(err)
	}

	list := make([]book, 0, len(data))
	for i, item := range data {
		if i == 0 || len(item) < 5 {
			continue
		}

		name, isbn, startDate, status, endDate := item[0], item[1], item[2], item[3], item[4]

		sortKey := time.Time{}
		if status == statusDoing {
			sortKey = time.Now().Add(time.Hour * 24 * 365)
		}

		if date, err := time.Parse(timeLayout, endDate); err == nil {
			sortKey = date
		}

		list = append(list, book{
			Name:      name,
			ISBN:      isbn,
			StartDate: startDate,
			EndDate:   endDate,
			Status:    status,
			sortKey:   sortKey,
		})
	}
	return list
}

func parseJSON(input string) books {
	b, err := os.ReadFile(input)
	if err != nil {
		log.Fatalf("open source file failed: %v", err)
	}

	var list books
	if err := json.Unmarshal(b, &list); err != nil {
		log.Fatalf("unmarshal JSON failed: %v\n", err)
	}

	for i, item := range list {
		if item.Status == statusDoing {
			// set a future time ensure the Doing list on the top
			list[i].sortKey = time.Now().Add(time.Hour * 24 * 365)
			continue
		}

		date, err := time.Parse(timeLayout, item.EndDate)
		if err != nil {
			log.Printf("parse time error: %s", item.EndDate)
			continue
		}

		list[i].sortKey = date
	}

	return list
}

func render(list books) string {
	var builder strings.Builder

	builder.WriteString(strings.Replace(content, "{{date}}", time.Now().Format(timeLayout), -1))

	if len(list) == 0 {
		return builder.String()
	}

	sort.Sort(list)

	for i, item := range list {
		if i == 0 || list[i].sortKey.Year() != list[i-1].sortKey.Year() {
			builder.WriteString(buildTitle(item))
			builder.WriteString(tableTitle + "\n")
			builder.WriteString(delimit + "\n")
		}

		row := strings.Replace(rowLayout, "{{name}}", item.Name, -1)
		row = strings.Replace(row, "{{isbn}}", item.ISBN, -1)
		row = strings.Replace(row, "{{startDate}}", item.StartDate, -1)
		row = strings.Replace(row, "{{endDate}}", item.EndDate, -1)
		row = strings.Replace(row, "{{status}}", item.Status, -1)

		builder.WriteString(row + "\n")
	}
	return builder.String()
}

func buildTitle(item book) string {
	if item.Status == statusDoing {
		return "\n ## Doing \n\n"
	}

	return "\n## " + strconv.Itoa(item.sortKey.Year()) + "\n\n"
}

func save(data string) {
	if err := os.WriteFile(filename, []byte(data), 0666); err != nil {
		log.Fatalf("save file failed: %v", err)
	}
}

func (b books) Len() int {
	return len(b)
}

func (b books) Swap(i, j int) {
	b[i], b[j] = b[j], b[i]
}

func (b books) Less(i, j int) bool {
	return b[i].sortKey.After(b[j].sortKey)
}
