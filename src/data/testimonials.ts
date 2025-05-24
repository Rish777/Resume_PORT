export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  avatar: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Director of Data Analytics",
    company: "TechCorp Inc.",
    quote: "Working with this ETL Engineer transformed our data infrastructure. Their expertise in building efficient pipelines saved us countless hours and provided our analysts with reliable, clean data that has become the backbone of our decision-making process.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Michael Zhang",
    position: "CTO",
    company: "DataStream Solutions",
    quote: "I've worked with many data engineers, but few have the combination of technical skill and business understanding that this professional brings to the table. They don't just build pipelines; they create solutions that directly address business needs and drive value.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Lead Data Scientist",
    company: "Insight Analytics",
    quote: "The ETL processes designed by this engineer are elegant, efficient, and incredibly reliable. Our data science team can now focus on building models instead of cleaning data, which has accelerated our project delivery by over 40%.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "David Wilson",
    position: "VP of Engineering",
    company: "CloudSystems Inc.",
    quote: "Their expertise in cloud data integration saved our migration project. They designed a scalable architecture that not only met our immediate needs but has easily adapted as our data volume has grown tenfold over the past two years.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];