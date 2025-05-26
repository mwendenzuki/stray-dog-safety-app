# Project Summary
The project is a mobile-friendly web application designed for reporting stray dogs. It allows users to upload photos, provide GPS location details, describe the dog's behavior, and indicate aggression levels. The application features a vibrant interface with large buttons and joyful animations, enhancing user engagement. A new map screen has been added to visualize reported stray dog locations with color-coded pins based on aggression levels, creating a community-driven experience.

# Project Module Description
The application consists of several functional modules:
- **Photo Upload**: Users can upload images of stray dogs with drag-and-drop functionality.
- **Location Picker**: Utilizes GPS for automatic location detection.
- **Description Text Area**: Allows users to provide detailed descriptions of the stray dog.
- **Aggression Level Dropdown**: Users select the dog's aggression level (low, medium, high).
- **Submission Confirmation Animation**: Displays an animation upon successful form submission.
- **Map Screen**: Displays reported stray dog locations with color-coded pins and interactive popups for details.

# Directory Tree
```
react_template/
├── README.md               # Project documentation
├── eslint.config.js        # ESLint configuration
├── index.html              # Main HTML file
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── public/
│   ├── assets/
│   │   └── images/        # Contains sample images of stray dogs
│   └── data/
│       └── example.json    # Sample data for the application
└── src/
    ├── App.jsx             # Main application component with navigation
    ├── components/
    │   ├── ConfirmationAnimation.jsx # Animation component for submission confirmation
    │   ├── Form.jsx        # Form container component
    │   ├── FormField.jsx   # Component for consistent form field styling
    │   ├── ImageUpload.jsx # Component for handling photo uploads
    │   ├── LocationPicker.jsx # Component for GPS location selection
    │   ├── MapScreen.jsx    # Component for displaying the map with pins
    │   ├── DogMarker.jsx     # Component for rendering individual dog markers
    │   └── DogDetailPopup.jsx # Component for displaying dog details in a popup
    ├── index.css           # Global styles
    └── main.jsx            # Entry point for the React application
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite configuration
```

# File Description Inventory
- `README.md`: Overview and instructions for the project.
- `eslint.config.js`: Configuration for ESLint to maintain code quality.
- `index.html`: Main HTML file that loads the React application.
- `package.json`: Lists project dependencies and scripts for building and running the application.
- `postcss.config.js`: Configuration for PostCSS, used for processing CSS.
- `public/assets/images/`: Contains sample images of stray dogs for the map markers.
- `public/data/example.json`: Contains example data for testing purposes.
- `src/App.jsx`: Main component that renders the application and handles navigation.
- `src/components/ConfirmationAnimation.jsx`: Displays animation upon successful form submission.
- `src/components/Form.jsx`: Contains the form structure and logic.
- `src/components/FormField.jsx`: Ensures consistent styling for form fields.
- `src/components/ImageUpload.jsx`: Manages image uploads.
- `src/components/LocationPicker.jsx`: Handles GPS location input.
- `src/components/MapScreen.jsx`: Displays the map with reported dog locations.
- `src/components/DogMarker.jsx`: Renders individual markers on the map.
- `src/components/DogDetailPopup.jsx`: Displays detailed information about the dog when a marker is clicked.
- `src/index.css`: Contains global CSS styles.
- `src/main.jsx`: Entry point for the React application.
- `tailwind.config.js`: Configuration file for Tailwind CSS.
- `vite.config.js`: Configuration file for Vite, the build tool.

# Technology Stack
- **React**: JavaScript library for building user interfaces.
- **JavaScript**: Programming language used for application logic.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Build tool for fast development and production builds.
- **ESLint**: Tool for identifying and fixing problems in JavaScript code.
- **Leaflet**: Library for interactive maps.

# Usage
1. **Install Dependencies**: Run `pnpm install` to install all necessary packages.
2. **Lint the Code**: Execute `pnpm run lint` to check for code quality.
3. **Run the Development Server**: Start the server with `pnpm run dev` to see the application in action.
