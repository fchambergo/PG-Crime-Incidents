import React from 'react';
import CanvasJSReact from "../assets/canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graph extends React.Component {

    render() {

        /* Filter data for crime incidents that happened in given year - prop*/
        let data = this.props.json.filter(e=>new Date(e.date).getYear() == this.props.year_num);
        console.log(data)

        /* Declare array for each crime incident */
        var accident = [];
        var assault = [];
        var auto = [];
        var be = [];
        var homicide = [];
        var robbery = [];
        var sexOffense = [];
        var theft = [];
        var vandalism = [];

        /* Find total of each crime incident in data */
        data.forEach(function(item){

            var month = new Date(item.date).getMonth();
            var type = item.clearance_code_inc_type;

            if  (type.startsWith("ACCIDENT")){
                if(month in accident){
                    accident[month] += 1;
                } else {
                    accident[month] = 1;
                }
            } else if (type.startsWith("ASSAULT")){
                if (month in assault){
                    assault[month] += 1;
                } else {
                    assault[month] = 1;
                }
            } else if (type.startsWith("AUTO")){
                if (month in auto){
                    auto[month] += 1;
                } else {
                    auto[month] = 1;
                }
            } else if (type.startsWith("B & E")){
                if (month in be){
                    be[month] += 1;
                } else {
                    be[month] = 1;
                }
            } else if (type.startsWith("HOMICIDE")){
                if (month in homicide){
                    homicide[month] += 1;
                } else {
                    homicide[month] = 1;
                }
            } else if (type.startsWith("ROBBERY")){
                if (month in robbery){
                    robbery[month] += 1;
                } else {
                    robbery[month] = 1;
                }
            } else if (type.startsWith("SEX")){
                if (month in sexOffense){
                    sexOffense[month] += 1;
                } else {
                    sexOffense[month] = 1;
                }
            } else if (type.startsWith("THEFT")){
                if (month in theft){
                    theft[month] += 1;
                } else {
                    theft[month] = 1;
                }
            } else if (type.startsWith("VANDALISM")){
                if (month in vandalism){
                    vandalism[month] += 1;
                } else {
                    vandalism[month] = 1;
                }
            }
        });

         CanvasJS.addColorSet("sunsetShades",
         [//colorSet Array

         "#003f5c",
         "#2f4b7c",
         "#665191",
         "#a05195",
         "#d45087",
         "#f95d6a",
         "#ff7c43",
         "#ffa600",
         "#ffd100"
     ]);

        /* Canvas JS Graph variables */
		const options = {
            height: 500,
            colorSet: "sunsetShades",
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", //"light1", "light2", "dark1", "dark2"
			title:{
				text: " Crime Incidents in " + this.props.year
            },
            axisY: {
                title: "Number of Crimes",
                includeZero: false
            },
            toolTip: {
                shared: true
            },
			data: [{
                type: "spline",
                name: "Accident",
                showInLegend: true,
                dataPoints: [
                    { y: accident[0], label: "Jan" },
                    { y: accident[1], label: "Feb" },
                    { y: accident[2], label: "Mar" },
                    { y: accident[3], label: "Apr" },
                    { y: accident[4], label: "May" },
                    { y: accident[5], label: "Jun" },
                    { y: accident[6], label: "Jul" },
                    { y: accident[7], label: "Aug" },
                    { y: accident[8], label: "Sept" },
                    { y: accident[9], label: "Oct" },
                    { y: accident[10], label: "Nov" },
                    { y: accident[11], label: "Dec" }
                ]
            },
            {
                type: "spline",
                name: "Assault",
                showInLegend: true,
                dataPoints: [
                    { y: assault[0], label: "Jan" },
                    { y: assault[1], label: "Feb" },
                    { y: assault[2], label: "Mar" },
                    { y: assault[3], label: "Apr" },
                    { y: assault[4], label: "May" },
                    { y: assault[5], label: "Jun" },
                    { y: assault[6], label: "Jul" },
                    { y: assault[7], label: "Aug" },
                    { y: assault[8], label: "Sept" },
                    { y: assault[9], label: "Oct" },
                    { y: assault[10], label: "Nov" },
                    { y: assault[11], label: "Dec" }
                ]
            },
            {
                type: "spline",
                name: "Auto",
                showInLegend: true,
                dataPoints: [
                    { y: auto[0], label: "Jan" },
                    { y: auto[1], label: "Feb" },
                    { y: auto[2], label: "Mar" },
                    { y: auto[3], label: "Apr" },
                    { y: auto[4], label: "May" },
                    { y: auto[5], label: "Jun" },
                    { y: auto[6], label: "Jul" },
                    { y: auto[7], label: "Aug" },
                    { y: auto[8], label: "Sept" },
                    { y: auto[9], label: "Oct" },
                    { y: auto[10], label: "Nov" },
                    { y: auto[11], label: "Dec" }
                ]
            },
            {
                type: "spline",
                name: "Breaking & Entering",
                showInLegend: true,
                dataPoints: [
                    { y: be[0], label: "Jan" },
                    { y: be[1], label: "Feb" },
                    { y: be[2], label: "Mar" },
                    { y: be[3], label: "Apr" },
                    { y: be[4], label: "May" },
                    { y: be[5], label: "Jun" },
                    { y: be[6], label: "Jul" },
                    { y: be[7], label: "Aug" },
                    { y: be[8], label: "Sept" },
                    { y: be[9], label: "Oct" },
                    { y: be[10], label: "Nov" },
                    { y: be[11], label: "Dec" }
                ]
            },
            {
                type: "spline",
                name: "Homicide",
                showInLegend: true,
                dataPoints: [
                    { y: homicide[0], label: "Jan" },
                    { y: homicide[1], label: "Feb" },
                    { y: homicide[2], label: "Mar" },
                    { y: homicide[3], label: "Apr" },
                    { y: homicide[4], label: "May" },
                    { y: homicide[5], label: "Jun" },
                    { y: homicide[6], label: "Jul" },
                    { y: homicide[7], label: "Aug" },
                    { y: homicide[8], label: "Sept" },
                    { y: homicide[9], label: "Oct" },
                    { y: homicide[10], label: "Nov" },
                    { y: homicide[11], label: "Dec" }
                ]
            },
            {
                type: "spline",
                name: "Robbery",
                showInLegend: true,
                dataPoints: [
                    { y: robbery[0], label: "Jan" },
                    { y: robbery[1], label: "Feb" },
                    { y: robbery[2], label: "Mar" },
                    { y: robbery[3], label: "Apr" },
                    { y: robbery[4], label: "May" },
                    { y: robbery[5], label: "Jun" },
                    { y: robbery[6], label: "Jul" },
                    { y: robbery[7], label: "Aug" },
                    { y: robbery[8], label: "Sept" },
                    { y: robbery[9], label: "Oct" },
                    { y: robbery[10], label: "Nov" },
                    { y: robbery[11], label: "Dec" }
                ]
            },
            {
                type: "spline",
                name: "Sexual Offense",
                showInLegend: true,
                dataPoints: [
                    { y: sexOffense[0], label: "Jan" },
                    { y: sexOffense[1], label: "Feb" },
                    { y: sexOffense[2], label: "Mar" },
                    { y: sexOffense[3], label: "Apr" },
                    { y: sexOffense[4], label: "May" },
                    { y: sexOffense[5], label: "Jun" },
                    { y: sexOffense[6], label: "Jul" },
                    { y: sexOffense[7], label: "Aug" },
                    { y: sexOffense[8], label: "Sept" },
                    { y: sexOffense[9], label: "Oct" },
                    { y: sexOffense[10], label: "Nov" },
                    { y: sexOffense[11], label: "Dec" }
                ]
            },
            {
                type: "spline",
                name: "Theft",
                showInLegend: true,
                dataPoints: [
                    { y: theft[0], label: "Jan" },
                    { y: theft[1], label: "Feb" },
                    { y: theft[2], label: "Mar" },
                    { y: theft[3], label: "Apr" },
                    { y: theft[4], label: "May" },
                    { y: theft[5], label: "Jun" },
                    { y: theft[6], label: "Jul" },
                    { y: theft[7], label: "Aug" },
                    { y: theft[8], label: "Sept" },
                    { y: theft[9], label: "Oct" },
                    { y: theft[10], label: "Nov" },
                    { y: theft[11], label: "Dec" }
                ]
            },
            {
                type: "spline",
                name: "Vandalism",
                showInLegend: true,
                dataPoints: [
                    { y: vandalism[0], label: "Jan" },
                    { y: vandalism[1], label: "Feb" },
                    { y: vandalism[2], label: "Mar" },
                    { y: vandalism[3], label: "Apr" },
                    { y: vandalism[4], label: "May" },
                    { y: vandalism[5], label: "Jun" },
                    { y: vandalism[6], label: "Jul" },
                    { y: vandalism[7], label: "Aug" },
                    { y: vandalism[8], label: "Sept" },
                    { y: vandalism[9], label: "Oct" },
                    { y: vandalism[10], label: "Nov" },
                    { y: vandalism[11], label: "Dec" }
                ]
            },
        ]
		}
		
		return (
		<div className="graph-div">
			<CanvasJSChart options = {options} 
                /* onRef={ref => this.chart = ref} */
            />
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default Graph;