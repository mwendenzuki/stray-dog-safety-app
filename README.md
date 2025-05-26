# 🧩 Stray Dog Safety App

## Project Summary

The project is a mobile-friendly web application designed for reporting stray dogs. It allows users to upload photos, provide GPS location details, describe the dog's behavior, and indicate aggression levels. The application features a vibrant interface with large buttons and joyful animations, enhancing user engagement. A new map screen has been added to visualize reported stray dog locations with color-coded pins based on aggression levels, creating a community-driven experience.

## Deployment link

🔗:

# 🎤 Pitchdeck

🔗:

# 🚀 Project Description

The application consists of several functional modules:

- **Photo Upload**: Users can upload images of stray dogs with drag-and-drop functionality.
- **Location Picker**: Utilizes GPS for automatic location detection.
- **Description Text Area**: Allows users to provide detailed descriptions of the stray dog.
- **Aggression Level Dropdown**: Users select the dog's aggression level (low, medium, high).
- **Submission Confirmation Animation**: Displays an animation upon successful form submission.
- **Map Screen**: Displays reported stray dog locations with color-coded pins and interactive popups for details.

# 📁 Project Structure

```
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles (Tailwind)
├── public/              # Static assets
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── eslint.config.js     # ESLint configuration
```

## File Description Inventory

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

# 📦 Available Scripts

1. **Install Dependencies**: Run `pnpm install` to install all necessary packages.
2. **Lint the Code**: Execute `pnpm run lint` to check for code quality.
3. **Run the Development Server**: Start the server with `pnpm run dev` to see the application in action.

# 🧪 Tech Stack

- **React**: JavaScript library for building user interfaces.
- **JavaScript**: Programming language used for application logic.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Build tool for fast development and production builds.
- **ESLint**: Tool for identifying and fixing problems in JavaScript code.
- **Leaflet**: Library for interactive maps.

# 🙌 Created through

MGX & Supabase

## MGX PromptS

Prompt 1: Report Form Screen
"Design a clean and friendly mobile form interface for reporting stray dogs. Include fields: photo upload, location picker with GPS button, description text area, aggression level dropdown (low, medium, high), and a prominent submit button. Use bright, welcoming colors, large buttons, and clear labels. Add a joyful confirmation animation after submission."

Prompt 2: Map View Screen
"Create a mobile-friendly map screen that shows pins for each reported stray dog location. Pins should be color-coded by aggression level: green for low, yellow for medium, red for high. Include a popup detail view when tapping a pin that displays the dog photo, description, and report timestamp. Use a clean, minimalistic design with smooth animations."

Prompt 3: General UI Vibe
"The app should feel safe, approachable, and community-driven. Use playful yet professional fonts, warm colors, and simple intuitive navigation between screens."

Prompt 4: Add Auth Screens
"Design a sleek user authentication flow with the following screens:

Sign Up: email, password, confirm password, and optional username

Login: email and password

Logged-in home screen redirect to report form

Logout button in app header
Use friendly UI, simple form validation, and smooth transitions. Keep it joyful but trustworthy — this is a safety-focused community app."

"Add user session logic using Supabase Auth. Only logged-in users should be able to submit a report or view the map."
