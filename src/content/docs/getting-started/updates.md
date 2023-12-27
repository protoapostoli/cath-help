---
title: Updates
description: Updates to the site.
---

:::tip
Most recent updates will be at the top, and then continue in descending order.
:::

## 27 December 2023

 - Fixed an issue with new event requests, added Day Light Savings (DST) support for exceptions.

## 15 December 2023

 - Added the new **Reception Sick Call and Event Log** features to the site.
 - This will keep priests and necessary staff up-to-date on events and incoming sick call requests.

## 13 December 2023

 - Ported the help docs to Starlight built on Astro.build.
 - Now hosting help docs on Cloudflare Pages instead of having it run on Google App Engine.
   - In the longrun this should save on instance costs.
 - Help docs are now accessible at [help.catholicoffice.com](https://help.catholicoffice.com).
 - Will soon be hosting the main page on Cloudflare Pages as well accessible from the primary web address [catholicoffice.com](https://catholicoffice.com).
 - The app itself will be accessible from [app.catholicoffice.com](https://app.catholicoffice.com)

## 15 November 2023

 - **Major update released over the weekend**. I focused on the underlying recurrence rule, and how the system understands it. Before it would parse the rule, and programatically create all the events, which took several seconds. Now, I have the system actually create the events and put them in the database. This reduced load times into the milliseconds zone, which is a great improvement.
 - Released the **new Month and Week views** for the calendar. These have been hand crafted to allow for complete control over the look and feel of the calendar, and consequently, how things run in the background. Before, it was like throwing data into a black box and hoping it did what I expected.
 - **Added "Deleted Events"** to the Calendar menu dropdown. This effectively acts as a trashcan. This needed to be added because I started using soft deletes.
 - Also made some **small adjustments to running reports** which was requested by users. Moved the day of the week into its own column so that proper sorting can be done.
 - **Added HoneyBadger.io error reporting** to the system, so the user never sees what the errors are, they just know there was an error. The errors are logged and emailed to me so I can work on them. Most users wouldn't report the error as requested, so I figured I'd just programatically do it for them. 😊
 - Noticed errors were being thrown when a calendar app would hit our webdav url, because it would take 22+ seconds to load the data and send it. Now we're pre-fetching all the data the calendar will use which reduces load times substantially, and then putting that data into cache for 2 hours, which reduces load times even more upon subsequent hits. We should be seeing sub 10 seconds load times for webdav the first time, and then sub 1 second load times for webdav on subsequent requests.
 - Only one downside to caching calendar data is that it will be upto 2 hours out of date. I figure this is acceptable when 99% of events are not input the day they occur.
 - **Updated the way Start and End time** are handled when the user requests a new event. Changed this to "defer" hoping that it'll prevent the *"Start time cannot be after End Time"* error that occasionally pops up.

## 1 August 2023

 - Small updates today. Fixed a small bug that prevented some users from being able to update events even though they had the correct permissions.
 - Hopefully fixed a bug with time inputs on the event request page. Users were complaining that they'd get notifications incorrectly telling them that the start time was after their end time. Hopefully fixed this bug.


## 27 June 2023

 - The most obvsious update is the **help documentation** that you're currently reading! I'll do my best to keep this all up to date.
 - Small update to the **quick links** on the dashboard, making them more user friendly and readable, plus added a quick link to the help docs.
 - You can now **double click on the Calendar** in order to open the **Event Request Page** and have it auto-populate the date and times.
 - I've added some validation to the **Event Request Page** that checks to make sure that your start time is **before** your end time. This prevents issues with room booking and displaying events in the Calendar.
 - **Exceptions Bug** - There was a bug with the exceptions options in the recurring event button. It's been squashed.
 - You should have noticed some **small tweaks to the UI**, like the favicon has been updated to be dark-mode friendly. And we finally have a new icon/logo in the top left of the website!