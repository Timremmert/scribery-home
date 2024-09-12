import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Kayla Ras",
    designation: "@kayray",
    image: image1,
    content:"I've tried other content generation tools in the past, but Scribery stands out for its accuracy and reliability. The summaries it generates are concise yet informative, making it easy for me to digest complex information quickly. Scribers has become an essential part of my workflow."
      
  },
  {
    id: 2,
    name: "Kay Mccoy",
    designation: "@mccoy",
    image: image2,
    content:
      "As a non-native English speaker, Scribery has been an invaluable tool for me. Its language translation feature allows me to effortlessly translate my content into multiple languages, reaching a wider audience than ever before. Highly recommended!"
    },
  {
    id: 3,
    name: "Eva Elle",
    designation: "@evaelle",
    image: image1,
    content:
      "Scribery has completely transformed the way I approach content creation. Its text generation capabilities are simply amazing, saving me countless hours of brainstorming and writing. I couldn't be happier with the results!"
    },
];
