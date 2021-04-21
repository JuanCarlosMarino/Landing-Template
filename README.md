# Landing Template

![GitHub all releases](https://img.shields.io/github/downloads/JuanCarlosMarino/Landing-Template/total)
![GitHub](https://img.shields.io/github/license/JuanCarlosMarino/Landing-Template)
![GitHub language count](https://img.shields.io/github/languages/count/JuanCarlosMarino/Landing-Template)
![GitHub top language](https://img.shields.io/github/languages/top/JuanCarlosMarino/Landing-Template)
![GitHub repo size](https://img.shields.io/github/repo-size/JuanCarlosMarino/Landing-Template)
![GitHub last commit](https://img.shields.io/github/last-commit/JuanCarlosMarino/Landing-Template)

This is a mobile app landing page that is editable using React and styled components to create a slick and modern web design.


<p align="center">
  <img src="/src/images/Demo.jpeg" alt="Demo template"/>
</p>
## Project Structure 🖥

The project is essentially divided into a few folder, the components folder which holds all the elements (and components) that are displayed on screen, things like the background (HeroSection) the Navbar, the section where the phone is implemented, and the sidebar (which in this case is only visible and for smaller screens making it a responsive landing page)

<p align="center">
  <img src="/src/images/Image2.jpg" alt="Image2"/>
</p>
This is the structure of the components of the landing page.

<p align="center">
  <img src="/src/images/Image3.jpg" alt="Image3"/>
</p>
Each component is separated into 2 files, the one name ‘[name]Elements’ are those files which contain the styles and arguments for the index, the index oversees formatting and creating the different elements.

## Examples of Components ⚙

<p align="center">
  <img src="/src/images/Image4.jpg" alt="Image4"/>
</p>

Example of HeroElements

<p align="center">
  <img src="/src/images/Image5.jpg" alt="Image5"/>
</p>

Example of hero index.

On the files name Index, you can change the images to you liking, simple import it by placing the image on the “images” folder and import it to the corresponding index.


<p align="center">
  <img src="/src/images/Image6.jpg" alt="Image6"/>
</p>
Import [name of image] from ‘../../images/[name of image].png

Finally the “pages” folder only contains 1 element, in theory there should be as many elements as pages you need. These elements should contain the corresponding elements such as the sidebar or any other elements you wish to add.
<p align="center">
  <img src="/src/images/Image7.jpg" alt="Image7"/>
</p>

Finally on the App.js at the bottom, is where you can manage the different pages, here using react router dom you can implement as many pages as you wish, in the template there is only 1 which is “home”

<p align="center">
  <img src="/src/images/Image8.jpg" alt="Image8"/>
</p>

## Requirements 📋

```
make sure you have node.js installed
```

## Quick Start 🚀

**1. Get the latest version**
You can start by cloning the latest version of the Repo on your local machine by running:

```
$ git clone https://github.com/JuanCarlosMarino/Landing-Template.git
```

**2. Run** npm install

**3. Run** npm start

## Built with 🛠️

* [Node.js](https://nodejs.org/es/)
* [React](https://es.reactjs.org/)

## Authors ✒️

* **Juan Carlos Mariño Morantes** - *Documentation* 
* **Jorge Luis Oñate Hernández** - *Development and documentation* 
* **Ciro Alberto Gamboa Entralgo** - *Documentation* 

## License 📄

This project is under the License (MIT License) - see the file LICENSE.md for details
