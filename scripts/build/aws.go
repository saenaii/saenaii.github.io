package build

import (
	"fmt"
	"sort"
	"strings"
	"time"
)

type awsService struct {
	Name string `json:"name"`
	Link string `json:"link"`
	Desc string `json:"desc"`
}

type AwsServices []awsService

const (
	awsTarget = "../blogs/aws/aws.md"
	awsSource = "../data/aws-service.csv"
)

const (
	awsRowTitle  = "| Name | Desc |"
	awsDelimit   = "| --- | --- |"
	awsRowLayout = "| {{name}} | {{desc}} |"

	awsDocTitle = `---
title: AWS
date: {{date}}
tags:
	- aws
categories: 
	- aws 
---

`
)

func (aws AwsServices) Gen() {
	list := aws.build(awsSource)

	data := aws.render(list)

	save(data, awsTarget)
}

func (aws AwsServices) build(source string) AwsServices {
	data := parseCSV(source)

	list := make([]awsService, 0, len(data))
	for i, item := range data {
		if i == 0 || i < 3 {
			continue
		}

		name, link, desc := item[0], item[1], item[2]
		list = append(list, awsService{
			Name: name,
			Link: link,
			Desc: desc,
		})
	}

	return list
}

func (aws AwsServices) render(list AwsServices) string {
	var builder strings.Builder

	builder.WriteString(strings.Replace(awsDocTitle, "{{date}}", time.Now().Format(timeLayout), -1))

	if len(list) == 0 {
		return builder.String()
	}

	sort.Sort(list)

	builder.WriteString(awsRowTitle + "\n")
	builder.WriteString(awsDelimit + "\n")

	for _, item := range list {
		row := strings.Replace(awsRowLayout, "{{name}}", fmt.Sprintf("[%s](%s)", item.Name, item.Link), -1)
		row = strings.Replace(row, "{{desc}}", item.Desc, -1)

		builder.WriteString(row + "\n")
	}
	return builder.String()
}

func (aws AwsServices) Len() int {
	return len(aws)
}

func (aws AwsServices) Swap(i, j int) {
	aws[i], aws[j] = aws[j], aws[i]
}

func (aws AwsServices) Less(i, j int) bool {
	return aws[i].Name < aws[j].Name
}
