// Portfolio Projects Data
// Update this file to easily modify project information

const portfolioProjects = {
    featured: {
        title: "Smart Braille Vision Assistant",
        category: "Accessibility Innovation", 
        description: "A powerful React Native app empowering blind and deaf users with a virtual Braille keyboard featuring vibration feedback for text input and real-time descriptive image feedback.",
        technologies: ["React Native", "AI/ML", "Vibration API"],
        github: "https://github.com/samanderson2003/-Smart-Braille-Vision-Assistant-for-Blind-and-Deaf-Feel-Understand-Your-World-",
        features: ["Vision AI", "Braille Support"]
    },
    
    projects: [
        {
            title: "GenThinks",
            category: "AI Mobile Application",
            description: "AI-powered image chat app built with Flutter. Users can upload images, get smart responses, and view chat history—all stored securely using Firebase and Cloudinary.",
            technologies: ["Flutter", "AI Chat", "Firebase"],
            github: "https://github.com/samanderson2003/GenThinks"
        },
        {
            title: "Brain Tumor Detection", 
            category: "Medical AI",
            description: "CNN-based brain tumor detection using TensorFlow and Keras API. Leverages image preprocessing, data augmentation, and deep learning for accurate MRI image analysis.",
            technologies: ["Python", "TensorFlow", "CNN"],
            github: "https://github.com/samanderson2003/Brain-Tumor-Detection-using-CNN-TensorFlow-"
        },
        {
            title: "FishCare Smart Ecosystem",
            category: "Smart Ecosystem", 
            description: "Smart mobile app for aquarium lovers with climate-based care reminders, fish disease diagnosis via image/symptom input, and expert connections for aquascaping.",
            technologies: ["JavaScript", "Aquarium Care", "AI Diagnosis"],
            github: "https://github.com/samanderson2003/FishCare-Smart-Ecosystem-for-Aquarists-"
        },
        {
            title: "Pothole Detection System",
            category: "Smart Infrastructure",
            description: "AI-based pothole detection system using YOLOv8, high-resolution cameras, and GPS to detect and measure potholes in real-time for authorities.",
            technologies: ["HTML", "YOLOv8", "Computer Vision"],
            github: "https://github.com/samanderson2003/pothole-detection-with-measurements"
        },
        {
            title: "Secure Data Self-Destructing", 
            category: "Cloud Security",
            description: "Self-destructing cloud storage system using Key-Policy Attribute-Based Encryption with Time-Specified Attributes for enhanced data security and privacy.",
            technologies: ["Visual Basic", "Cloud Security", "Encryption"],
            github: "https://github.com/samanderson2003/SECURE-DATA-SELF-DESTRUCTING-SCHEME-IN-CLOUD-COMPUTING"
        }
    ],

    stats: {
        repositories: 27,
        experience: 3,
        happyClients: "40+"
    },

    skills: {
        frontend: ["React Native", "Flutter", "JavaScript", "HTML/CSS", "Bootstrap"],
        backend: ["Python", "Node.js", "Firebase", "SQLite", "Cloudinary"], 
        aiml: ["TensorFlow", "Keras", "CNN", "YOLOv8", "OpenCV"]
    },

    contact: {
        email: "sam.youngren2003@gmail.com",
        phone: "+91 9003854088",
        github: "https://github.com/samanderson2003",
        linkedin: "https://linkedin.com/in/samanderson2003",
        location: "Erode, Tamil Nadu, India",
        education: "MCA - Kongu Engineering College"
    }
};

// Export for use in other files if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioProjects;
}
