# Work Day Scheduler

Webpage which breaks down by hour a daily schedule from 9am - 5pm

## Description

A simple calendar application which displays todays date at the top, and then an hour by hour display for the work day (in this case 9am - 5pm). Each hour's text area is color coded based on the current time of the day. This color is a dynamically generated HTML class which receives styling from CSS code and is calculated based on comparing the current hour to each hour on the schedule. The HTML elements are referenced using JQuery and the current hour is calculated using Day.js. The user has the ability to type in the text area of each hour and then select the save icon to the right. Upon selecting the save icon, the text is saved to local storage. This allows the calendar data to be maintained over multiple user sessions. Each time the page is loaded, a get local storage call is ran to access the cached values and populate them onto the scheduler

## Usage

The Work Day Scheduler web page can be accessed at the following URL:
https://natemcmahon.github.io/Work-Day-Scheduler

## Reference
![image](https://github.com/natemcmahon/Work-Day-Scheduler/assets/67451299/a0cada83-ec59-4873-a7fc-fc9027d03cfb)
