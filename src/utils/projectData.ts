import policeSchoolImage from "@/assets/images/projects/police-school-1.webp";
import policeSchoolImage2 from "@/assets/images/projects/police-school-2.webp";
import nigerianArmy from "@/assets/images/projects/nigerian-army-1.webp";
import nigerianArmy2 from "@/assets/images/projects/nigerian-army-2.webp";

export interface Project {
  id: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  description: string;
  location: string;
  date: string;
  service: string;
  mainImage?: string; // Make this optional
  additionalImages: string[];
  client: string;
  scope: string;
  features: string[];
  outcome: string;
}

export const projects: Project[] = [
  {
    id: "police-secondary-school",
    title:
      "Construction of 1No 6 Classrooms Block (Storey Building) at Nigerian Police Secondary School, Yola, Adamawa State",
    seoTitle: "Police Classrooms in Yola",
    seoDescription:
      "Construction of a 6-classroom storey building to enhance educational facilities at Nigerian Police Secondary School in Yola, Adamawa State.",
    description:
      "The construction project for 1No 6 classrooms block (storey building) at Nigerian Police Secondary School, Yola, is a testament to our commitment to supporting educational infrastructure in Nigeria by providing high-quality, durable, and functional buildings that meet the needs of students and educators.",
    location: "Yola, Adamawa",
    date: "2024",
    service: "Construction",
    mainImage: policeSchoolImage2,
    additionalImages: [policeSchoolImage, policeSchoolImage2],
    client: "Nigerian Police",
    scope:
      "Design and construction of a two-story classroom block with six classrooms, designed to accommodate a growing student population and enhance the learning environment.",
    features: [
      "Modern Design: Classrooms with ample natural lighting and ventilation",
      "Structural Integrity: Reinforced concrete structure for long-term durability",
      "Utility Provisions: Electrical and plumbing systems for comfort and functionality",
      "Accessibility: Ramps and wide corridors for inclusive access",
      "Safety Features: Fire safety equipment and emergency exits",
    ],
    outcome:
      "The completion of this classroom block has significantly improved the educational facilities at the Nigerian Police Secondary School. This new infrastructure provides a better learning environment, catering to the needs of both students and educators. The project was delivered on time and within budget, showcasing our expertise in executing large-scale construction projects with precision and care.",
  },
  {
    id: "nigerian-army-bungalow",
    title: "Construction of 2 x 3 Bedroom Bungalow",
    seoTitle: "Army Bungalows in Dutse",
    seoDescription:
      "Construction of two 3-bedroom bungalows for Nigerian Army personnel at Dutse Barracks, enhancing living conditions for military families.",
    description:
      "Abdamin International Limited successfully completed the construction of two 3-bedroom bungalows at the Nigerian Army Barracks in Dutse, Jigawa State. This project was part of a broader initiative to improve the living conditions of military personnel and their families, providing them with comfortable and modern housing within the barracks.",
    location: "Dutse, Jigawa",
    date: "2024",
    service: "Construction",
    mainImage: nigerianArmy,
    additionalImages: [nigerianArmy, nigerianArmy2], // Add more images as needed
    client: "Nigerian Army",
    scope:
      "Design and construction of two 3-bedroom bungalows for Nigerian Army personnel, ensuring comfort and modern living conditions within the barracks.",
    features: [
      "Modern Design: Spacious and energy-efficient homes",
      "Structural Integrity: Reinforced concrete structure for long-term durability",
      "Utility Provisions: Electrical and plumbing systems for comfort and functionality",
      "Accessibility: Ramps and wide corridors for inclusive access",
      "Safety Features: Fire safety equipment and emergency exits",
    ],
    outcome:
      "The completion of these bungalows has significantly improved the living conditions of Nigerian Army personnel. These modern homes provide a comfortable and functional living space, enhancing the quality of life for the military personnel and their families stationed at the barracks.",
  },
  // Add more projects as needed
];
