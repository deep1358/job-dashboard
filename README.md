# Job Listings Platform

This project implements a job listings platform with features including job cards, filters, infinite scroll, and responsive design. It is built using ReactJS, Redux, CSS, and Material UI.

## Features

### Job Cards

Each job listing is displayed as a card containing the following information:

-   Job title
-   Company name
-   Location
-   Job description (limited to a certain number of characters with an option to expand)
-   Experience
-   Apply button

### Filters

Users can refine the job listings based on:

-   Minimum experience
-   Company name
-   Location
-   Role
-   Minimum base pay

### Infinite Scroll

Infinite scroll is implemented to load additional job listings as the user scrolls down the page. The platform fetches and displays more jobs automatically without requiring the user to click on a "Load More" button.

### Responsive Design

The platform is responsive and works well on different screen sizes, including mobile devices.

## Technology Stack

The project is built using the following technology stack:

-   ReactJS
-   Redux
-   CSS
-   Material UI

To run in the local machine follow below commands:

```shell
npm install

npm run dev
```

[Live Demo](https://job-dashboard-weekday.vercel.app/)
