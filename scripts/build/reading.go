package build

import (
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

type Books []book

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

func (b Books) Gen() {
	list := buildBooks(source)
	data := renderBook(list)
	save(data, filename)
}

func buildBooks(input string) Books {
	data := parseCSV(input)

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

func renderBook(list Books) string {
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

func (b Books) Len() int {
	return len(b)
}

func (b Books) Swap(i, j int) {
	b[i], b[j] = b[j], b[i]
}

func (b Books) Less(i, j int) bool {
	return b[i].sortKey.After(b[j].sortKey)
}
