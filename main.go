package main

import (
	"net/http"
	"strconv"
	"text/template"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	e.Static("/public", "public")
	// e.GET("/", func(c echo.Context) error {
	// 	return c.String(http.StatusOK, "Hello, world!")
	// })

	// e.GET("/About", func(c echo.Context) error {
	// 	return c.String(http.StatusOK, "Hello About")
	// })

	e.GET("/", home)
	e.GET("/contact", contact)
	e.GET("/testimonials", testimonials)
	e.GET("/myProject", myProject)
	e.GET("/detailProject", detailProject)

	e.POST("/saveProject", saveProject)

	e.Logger.Fatal(e.Start("Localhost:5000"))
}

func home(c echo.Context) error {
	var tmpl, err = template.ParseFiles("views/index.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}

	return tmpl.Execute(c.Response(), nil)
}

func contact(c echo.Context) error {
	var tmpl, err = template.ParseFiles("views/contact.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}

	return tmpl.Execute(c.Response(), nil)
}

func testimonials(c echo.Context) error {
	var tmpl, err = template.ParseFiles("views/testimonials.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}

	return tmpl.Execute(c.Response(), nil)
}

func myProject(c echo.Context) error {
	var tmpl, err = template.ParseFiles("views/myproject.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}

	return tmpl.Execute(c.Response(), nil)
}

func detailProject(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	data := map[string]interface{}{
		"id":       id,
		"title":    "Cyber Security",
		"duration": "Duration : 1 Month(s)",
		"detail":   "Cyber Security",
		"time":     "23 September 2023",
	}

	var tmpl, err = template.ParseFiles("views/detailProject.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}

	return tmpl.Execute(c.Response(), data)
}

func saveProject(c echo.Context) error {
	name := c.FormValue("inputProject")
	startDate := c.FormValue("startdate")
	endDate := c.FormValue("enddate")
	description := c.FormValue("desc")
	javascript := c.FormValue("javaScript")
	java := c.FormValue("java")
	python := c.FormValue("python")
	metasploit := c.FormValue("linux")

	println("Project name : " + name)
	println("Start date : " + startDate)
	println("End date : " + endDate)
	println("Description : " + description)
	println("JavaScript : " + javascript)
	println("Metasploit : " + metasploit)
	println("java : " + java)
	println("Python : " + python)

	return c.Redirect(http.StatusMovedPermanently, "/")
}
