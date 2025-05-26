// Mock data service for stray dog reports
const generateMockDogReports = () => {
  // Sample dog images (these would normally come from user uploads)
  const dogImages = [
    "/assets/images/stray-dog-1.jpg",
    "/assets/images/stray-dog-2.jpg",
    "/assets/images/stray-dog-3.jpg",
    "/assets/images/stray-dog-4.jpg",
    "/assets/images/stray-dog-5.jpg",
  ];

  // Mock location data for New York City area
  const locations = [
    { lat: 40.7128, lng: -74.006, address: "Downtown Manhattan, NY" },
    { lat: 40.7282, lng: -73.7949, address: "Queens, NY" },
    { lat: 40.6782, lng: -73.9442, address: "Brooklyn, NY" },
    { lat: 40.8448, lng: -73.8648, address: "The Bronx, NY" },
    { lat: 40.5795, lng: -74.1502, address: "Staten Island, NY" },
    { lat: 40.7831, lng: -73.9712, address: "Upper East Side, Manhattan, NY" },
    { lat: 40.7484, lng: -73.9857, address: "Midtown, Manhattan, NY" },
  ];

  // Sample descriptions
  const descriptions = [
    "Medium-sized brown dog, appears malnourished but friendly. Wearing a torn blue collar.",
    "Small black and white dog, possibly a terrier mix. Very skittish but not aggressive.",
    "Large tan dog with some shepherd features. Seems lost and confused but approachable.",
    "Golden-colored dog with long fur, limping slightly on back right leg. Friendly to approach.",
    "Gray dog, medium size, appears to have been on the street for some time. Cautious of humans.",
    "Black dog with white chest patch. Looks well-fed, might be lost rather than stray. Has a collar but no tag.",
    "Spotted dog, medium-to-large size. Staying in the area for the past few days. Approaches when offered food.",
  ];

  // Aggression levels
  const aggressionLevels = ["low", "medium", "high"];

  // Generate random reports
  const reports = [];
  const count = 5 + Math.floor(Math.random() * 5); // 5-9 reports

  for (let i = 0; i < count; i++) {
    // Create a timestamp within the last week
    const timestamp =
      Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000);

    reports.push({
      id: `dog-${i + 1}`,
      photoUrl: dogImages[i % dogImages.length],
      location: locations[i % locations.length],
      description: descriptions[i % descriptions.length],
      aggressionLevel: aggressionLevels[Math.floor(Math.random() * 3)],
      timestamp,
    });
  }

  return reports;
};

// In-memory storage for dog reports
let dogReports = null;

// Get all dog reports
export const getAllDogReports = () => {
  // Initialize mock data if not already done
  if (!dogReports) {
    dogReports = generateMockDogReports();
  }
  return dogReports;
};

// Add a new dog report
export const addDogReport = (reportData) => {
  // Ensure dogReports is an array before accessing length
  if (!dogReports) {
    dogReports = [];
  }
  // Generate a unique ID
  const newId = `dog-${dogReports.length + 1}`;

  // Create the new report
  const newReport = {
    id: newId,
    photoUrl: reportData.photo ? URL.createObjectURL(reportData.photo) : null,
    location: reportData.location,
    description: reportData.description,
    aggressionLevel: reportData.aggressionLevel,
    timestamp: Date.now(),
  };

  // Add to the list
  dogReports.push(newReport);

  return newReport;
};
