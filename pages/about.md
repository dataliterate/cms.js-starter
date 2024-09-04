---
title: About
---
<!--![Image of Christophe](./assets/ch.png)-->
<!--![Gradient Circle](./assets/circle.svg)-->

<script>
    function displayRandomSVG(category, containerId) {
        // Define the base path for SVG files
        const basePath = './assets/';
        
        // List of SVG files in each category (you'll need to maintain this list)
        const svgFiles = {
            'home': ['home1.svg', 'home2.svg', 'home3.svg'],
            'about': ['about1.svg', 'about2.svg', 'about3.svg'],
            'links': ['links1.svg', 'links2.svg', 'links3.svg']
            // Add more categories as needed
        };
        
        // Check if the category exists
        if (!svgFiles.hasOwnProperty(category)) {
            console.error(`Category "${category}" not found`);
            return;
        }
        
        // Get the list of SVGs for the specified category
        const categoryFiles = svgFiles[category];
        
        // Select a random SVG from the category
        const randomSVG = categoryFiles[Math.floor(Math.random() * categoryFiles.length)];
        
        // Construct the full path to the SVG file
        const svgPath = basePath + category + '/' + randomSVG;
        
        // Create an img element
        const img = document.createElement('img');
        img.src = svgPath;
        img.alt = 'Random SVG from ' + category;
        
        // Get the container element and append the img
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = ''; // Clear any existing content
            container.appendChild(img);
        } else {
            console.error(`Container with id "${containerId}" not found`);
        }
    }

    // Initial display of random SVGs
    displayRandomSVG('home', 'home-container');
    displayRandomSVG('about', 'about-container');
    displayRandomSVG('links', 'links-container');
</script>

<div id="about-container"></div>

## Crafting Experiences, Embracing Complexity

For 25 years, I've immersed myself in the world of design. Though I didn't attend design school initially, I've since bridged that gap by collaborating with students as a lecturer and mentor, sharing my real-world experience.  
  
My portfolio spans a diverse range of projects:  
  
* Tangible artifacts: record covers, visual identities (eg for conferences)
* Conceptual work: design systems for products, services, and platforms
* Educational initiatives: design teaching assignments
* Design tools: creating tools to help designers design better
  
Whether it's called user experience design, interaction design, product design, or design consulting, I approach each project with equal passion for both the thinking behind it and the craft itself.

### Collaboration

I thrive on collaboration, working with:  
  
* Fellow designers
* Professionals from related disciplines
* Business stakeholders
* Customers and consumers

### Approach

Sharing my experience is a joy, but I'm equally driven by an insatiable curiosity to learn. I welcome debate about design, viewing it as a source of positive friction that drives innovation.  
  
In my work, I aim to:  
  
* Think like an entrepreneur
* Listen like a therapist
* Lead by example
* Empathize deeply with the people I design for and with

### Mission

As a designer, I see my mission as:  
  
* Make complexity tangible, joy and beautiful
* Help other designers design better by providing design tools and training that enhance their creativity and effectiveness
* Empower people to understand and utilize technological means responsibly
* Support everyone in becoming more data literate

Looking ahead, I believe the next 25 years will be both very challenging and wonderful. I'm excited to continue growing, learning, and making a positive impact through design.