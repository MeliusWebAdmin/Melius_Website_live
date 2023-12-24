# Melius - MSI(T)  Web Portfolio
Melius -The Consulting and Analytics Club at Maharaja Surajmal Institute, affiliated with GGSIP University, is a student-led consulting hub. Founded on Nov 2022.
This, the official web portfolio is designed and developed by CSI, MSI Chapter. 

## About
This is the official frontend code repository of the Melius - MSI(T) website.  
The website is built on `React` using `JavaScript` and `Tailwind CSS`. 
The React App was configured by `VITE` using SWC JavaScript.  
Tailwind CSS is used for most of the styling, but at some stages pure inline CSS is also used (for example, to set background image), but no external CSS.    
As the components are rendered dynamically, we used `REST APIs` to fetch the required data.  
Not enough comments are made in the code as it is mostly self explanatory, but place comments incase of any modifications.

## To be kept in mind
* As this is not any open source project, makes sure you hold the required permission to make changes on the project.  
* Make sure to run and test the changes you made on your local, and be sure it won't effect or cause erros on production.
* Follow the usual coding conventions as well as try to maintain the structure and the way of doing things the same it is.
* Most production errors are caused by React image rendering, so make sure how you are importing images on React, for now its just relative path of image while importing and its working fine.
* Make sure to leave comments of your modifications as well as on Commit messages in detailed.
* Always make responsive components and pages that fits with the already designed website, build the mobile page first, then continue the responsiveness for Tab and PC.


## Getting Started
Incase you want to fix some bugs or add a new feature required. Follow the following to deploy the repo on your local machine.
Make sure `Git` & `NodeJS` (with `npm`) is installed on your local machine.

* **Clone the repo to your machine**  
  Copy the URL of the Git repository and then execute the following on the directory you want to work on:

    ```sh
    git clone <url of the repository>
    ```

* **Install Dependencies**  
  Change directory to the cloned repository, and execute `npm install`:

  ```sh
    # changing directory to the cloned repo folder,
    cd <directory name>

    # installing dependencies, can also use `npm i`
    npm install
  ```

* **Run the ReactApp**  
  Execute the following to run the React App.  

    ```sh
    npm run dev
    ```

Now the cloned repo must be working on your local machine on some port, usually its `port:5173`.

  
## Directory Structure
**Project repository contains 3 Folders**,   
* `Misc`: Contains Pure HTML forms for admin panel.  
    * The Admin panel forms are purely based on Bootstrap.
* `Public`: All the static images that are to be rendered on the webpages.
    * NOTE: All the images are need to be imported using relative path to avoid production failure.  
* `src`: Contains the main source code, and has 2 nested folders:
    * Components: Contains most of the code needs to be rendered on `main.jsx`   
    * API: Contains API related JS, for now only root endpoint.
    * And contains 2 files called `index.css` and `main.jsx`, `main.jsx` is the one that finally renders the website. (There's no `App.jsx`)
* And all `config` files are in the root folder itself. (The `index.html` is also on the root directory)

## Portfolio Sections

### Landing Page
1) **Home**  
Filename: `Home.jsx`  
The landing page for the user and is totally statically rendered, the Get in touch button redirects to the Contant Page. The Linkedin and Instagram are SVGs embedded hyper links.

2) **Services**  
Filename: `Services.jsx`    
Displays the services given by Melius, rendered statically, using a design of 4 responsive size boxes containing service information.

3) **Info**  
Filename: `Info.jsx`  
Purely static content displaying basic info about Melius, the Read more redirects to About Us component, and Past Experiences contains flex container, each item in container renders an image, all are statically rendered.

4) **Meet The Team**  
  Filename: `Team.jsx`  
  This Component renders the Core members dynamically, through the REST API using Axios, the same component is rendered on `Hompage.jsx` & `TeamList.jsx`.

5) **Contact Us**  
  Filename: `Contact.jsx`  
  This is a React form with controlled inputs, saves the entered data on the client devices after each unit of input.
  The data of the form are encapsulated inside an object, sent to the `/contactus/` endpoint using `POST` method when submitted.  
  It also has an embedded maps location of Melius - MSI(T)

6) **Footer**  
  Filename: `Footer.jsx`  
  Contains footer related information, rendered statically. Like some SVGs with hyperlinks, etc.


### Other Components
* **About Us**  
  Component: `About.jsx`  
  Renders static data and images, includes sections like About Us, Our Vision, and Our Missions.  
  The Our Missions section has fixed image sizing for mobile, tab, and desktop `(1920x1080px)`, the fixed sizing is only used here because of facing abnormal responsive behaviour when done without fixed image width/height, fix this if you like to.

* **All Events Display**  
  Component: `Events.jsx`  
  This page renders all events dynamically, just the outer component, with event name, date and image using map method, clicking it will render its event details which is done by `event_detail.jsx`.

* **Event Details**  
  Component: `event_detail.jsx`  
  This component renders the actual in depth details of event that was clicked on the `All Events Display` component, i.e, `Events.jsx`.
  The connection of Event between this component an `Events.jsx` is done through React Router.
  Thus, this also renders dynamic content using React Router, contains usual details, images, and a pdf.

* **All Projects Display**  
  Component: `Project.jsx`  
  This page renders all projects dynamically, just the outer component, with project name, description and image using map method, clicking `Read More` will render its event details which is done by `ProjectDetail.jsx`.

* **Project Details**  
  Component: `event_detail.jsx`  
  This component renders the actual in depth details of project that was clicked on the `All Project Display` component, i.e, `Projects.jsx`.
  The connection of Project between this component an `Events.jsx` is done through React Router.
  Thus, this also renders dynamic content using React Router, contains usual details, images, and a pdf.

* **Team Members**  
  Component: `TeamList.jsx`  
  This renders the `Team.jsx` component, which renders the Core Members of the club.
  and also has a Row-Column table, which dynamially renders the details of Non-core Members, i.e, conditional rendering is done in both Team based components, the table only renders their name, course, instagram and linkedin.

##

The project was succesfully executed by CSI, MSI Chapter. Developed by Alan K. Sijo, Manan Bhatia & Ishant Sikdar.
Contact Ishant for more details on `ishant9715@gmail.com`. Readme by Ishant.
Readme last updated on: `24 - 12 - 2023`.
