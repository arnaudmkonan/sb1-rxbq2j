import { Level, Question } from '../types';

export const fallbackQuestions: { [key in Level]: Question[] } = {
  beginner: [
    {
      id: 1,
      category: "Landforms",
      text: "What is the largest desert in the world?",
      options: ["Gobi", "Sahara", "Atacama", "Antarctic"],
      correctAnswer: "Sahara"
    },
    {
      id: 2,
      category: "Climate Zones",
      text: "Which of these cities is known for its tropical climate?",
      options: ["Moscow", "Rio de Janeiro", "Toronto", "Berlin"],
      correctAnswer: "Rio de Janeiro"
    },
    {
      id: 3,
      category: "Cultures & Traditions",
      text: "Which country is famous for its Carnival celebration?",
      options: ["Italy", "Brazil", "India", "Spain"],
      correctAnswer: "Brazil"
    },
    {
      id: 4,
      category: "Current Events",
      text: "Which country hosted the 2021 United Nations Climate Change Conference (COP26)?",
      options: ["United States", "France", "United Kingdom", "Japan"],
      correctAnswer: "United Kingdom"
    },
    {
      id: 5,
      category: "Historical Geography",
      text: "Which ancient civilization built the pyramids of Giza?",
      options: ["Greeks", "Romans", "Egyptians", "Mayans"],
      correctAnswer: "Egyptians"
    },
    {
      id: 6,
      category: "Landforms",
      text: "What is the name of the world's largest coral reef system?",
      options: ["Great Barrier Reef", "Red Sea Coral Reef", "New Caledonia Barrier Reef", "Mesoamerican Barrier Reef"],
      correctAnswer: "Great Barrier Reef"
    },
    {
      id: 7,
      category: "Climate Zones",
      text: "Which of these countries experiences all four seasons?",
      options: ["Egypt", "Canada", "Indonesia", "Kenya"],
      correctAnswer: "Canada"
    },
    {
      id: 8,
      category: "Cultures & Traditions",
      text: "Which country is known for its traditional tea ceremony?",
      options: ["India", "China", "Japan", "United Kingdom"],
      correctAnswer: "Japan"
    },
    {
      id: 9,
      category: "Current Events",
      text: "Which country recently joined NATO in 2023?",
      options: ["Ukraine", "Sweden", "Finland", "Georgia"],
      correctAnswer: "Finland"
    },
    {
      id: 10,
      category: "Historical Geography",
      text: "Which empire was ruled by Genghis Khan?",
      options: ["Roman Empire", "Ottoman Empire", "Mongol Empire", "Persian Empire"],
      correctAnswer: "Mongol Empire"
    },
    // ... (continue with more beginner questions up to 33)
  ],
  advanced: [
    {
      id: 34,
      category: "Landforms",
      text: "Which mountain range stretches across seven countries in South America?",
      options: ["Rocky Mountains", "Alps", "Himalayas", "Andes"],
      correctAnswer: "Andes"
    },
    {
      id: 35,
      category: "Climate Zones",
      text: "Which climate zone is characterized by hot summers and cold winters with deciduous trees?",
      options: ["Tropical", "Mediterranean", "Temperate Deciduous", "Tundra"],
      correctAnswer: "Temperate Deciduous"
    },
    {
      id: 36,
      category: "Cultures & Traditions",
      text: "Which African country is known for its Maasai warriors?",
      options: ["Nigeria", "Kenya", "South Africa", "Egypt"],
      correctAnswer: "Kenya"
    },
    {
      id: 37,
      category: "Current Events",
      text: "Which country announced its withdrawal from the Paris Climate Agreement in 2020 but rejoined in 2021?",
      options: ["China", "Russia", "United States", "India"],
      correctAnswer: "United States"
    },
    {
      id: 38,
      category: "Historical Geography",
      text: "Which strait separates Europe and Africa?",
      options: ["Bering Strait", "Strait of Malacca", "Strait of Gibraltar", "Strait of Hormuz"],
      correctAnswer: "Strait of Gibraltar"
    },
    {
      id: 39,
      category: "Landforms",
      text: "What is the name of the deepest oceanic trench on Earth?",
      options: ["Mariana Trench", "Puerto Rico Trench", "Java Trench", "Challenger Deep"],
      correctAnswer: "Challenger Deep"
    },
    {
      id: 40,
      category: "Climate Zones",
      text: "Which of these cities has a Mediterranean climate?",
      options: ["London", "Barcelona", "New York", "Tokyo"],
      correctAnswer: "Barcelona"
    },
    {
      id: 41,
      category: "Cultures & Traditions",
      text: "Which Southeast Asian country is known for its traditional shadow puppet theater called Wayang?",
      options: ["Thailand", "Vietnam", "Indonesia", "Philippines"],
      correctAnswer: "Indonesia"
    },
    {
      id: 42,
      category: "Current Events",
      text: "Which country experienced a major volcanic eruption at Fagradalsfjall in 2021?",
      options: ["Japan", "Italy", "Iceland", "Indonesia"],
      correctAnswer: "Iceland"
    },
    {
      id: 43,
      category: "Historical Geography",
      text: "Which ancient trade route connected China to the Mediterranean region?",
      options: ["Spice Route", "Silk Road", "Amber Road", "Tea Horse Road"],
      correctAnswer: "Silk Road"
    },
    // ... (continue with more advanced questions up to 66)
  ],
  expert: [
    {
      id: 67,
      category: "Landforms",
      text: "Which geological feature is formed by the subduction of the Nazca Plate under the South American Plate?",
      options: ["Andes Mountains", "Rocky Mountains", "Himalayas", "Alps"],
      correctAnswer: "Andes Mountains"
    },
    {
      id: 68,
      category: "Climate Zones",
      text: "Which climate phenomenon is characterized by the warming of surface waters in the eastern Pacific Ocean?",
      options: ["La Niña", "El Niño", "Indian Ocean Dipole", "North Atlantic Oscillation"],
      correctAnswer: "El Niño"
    },
    {
      id: 69,
      category: "Cultures & Traditions",
      text: "Which indigenous people of the Arctic regions practice throat singing as a traditional form of musical expression?",
      options: ["Sami", "Inuit", "Aleut", "Yupik"],
      correctAnswer: "Inuit"
    },
    {
      id: 70,
      category: "Current Events",
      text: "Which country's 'Belt and Road Initiative' aims to connect Asia with Africa and Europe via land and maritime networks?",
      options: ["Russia", "India", "China", "Japan"],
      correctAnswer: "China"
    },
    {
      id: 71,
      category: "Historical Geography",
      text: "Which ancient city, located in modern-day Jordan, was carved into rose-colored rocks and rediscovered in 1812?",
      options: ["Persepolis", "Petra", "Palmyra", "Ephesus"],
      correctAnswer: "Petra"
    },
    {
      id: 72,
      category: "Landforms",
      text: "Which African rift valley is gradually splitting the continent apart?",
      options: ["Great Rift Valley", "Olduvai Gorge", "Ngorongoro Crater", "Zambezi Valley"],
      correctAnswer: "Great Rift Valley"
    },
    {
      id: 73,
      category: "Climate Zones",
      text: "Which climate classification system, widely used today, was developed by Russian-German climatologist Wladimir Köppen?",
      options: ["Trewartha climate classification", "Köppen climate classification", "Thornthwaite climate classification", "Holdridge life zones"],
      correctAnswer: "Köppen climate classification"
    },
    {
      id: 74,
      category: "Cultures & Traditions",
      text: "Which Central Asian country is known for its tradition of eagle hunting?",
      options: ["Kazakhstan", "Uzbekistan", "Kyrgyzstan", "Tajikistan"],
      correctAnswer: "Kyrgyzstan"
    },
    {
      id: 75,
      category: "Current Events",
      text: "Which country's Exclusive Economic Zone (EEZ) was affected by the 2021 grounding of the MV Wakashio, causing an environmental disaster?",
      options: ["Seychelles", "Maldives", "Mauritius", "Madagascar"],
      correctAnswer: "Mauritius"
    },
    {
      id: 76,
      category: "Historical Geography",
      text: "Which ancient civilization built the city of Teotihuacan in what is now central Mexico?",
      options: ["Aztecs", "Mayans", "Olmecs", "Teotihuacanos"],
      correctAnswer: "Teotihuacanos"
    },
    // ... (continue with more expert questions up to 100)
  ]
};