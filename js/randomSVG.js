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
        img.width = 240; // Set width to 240 pixels
        img.height = 240; // Set height to 240 pixels

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