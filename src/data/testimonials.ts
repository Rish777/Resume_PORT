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
    name: "Deepan Sachithanandam",
    position: "Senior Data Architect",
    company: "TechCorp Inc.",
    quote: "I would like to endorse Rishabh for his outstanding work and contributions to our team. His dedication and commitment have been evident through his flawless project delivery and the development of tools that have significantly enhanced our team's adaptability.",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQEYDYFyqXWxQg/profile-displayphoto-crop_800_800/B56Zrzc0KeH8AI-/0/1765021010528?e=1778716800&v=beta&t=Jyo3EZI9HRz7rFvUH8gEx_wCq3WV_I4nq4FiiTujniE"
  },
  // {
  //   id: 2,
  //   name: "Michael Zhang",
  //   position: "CTO",
  //   company: "DataStream Solutions",
  //   quote: "I've worked with many data engineers, but few have the combination of technical skill and business understanding that this professional brings to the table. They don't just build pipelines; they create solutions that directly address business needs and drive value.",
  //   avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  // },
  // {
  //   id: 3,
  //   name: "Emily Rodriguez",
  //   position: "Lead Data Scientist",
  //   company: "Insight Analytics",
  //   quote: "The ETL processes designed by this engineer are elegant, efficient, and incredibly reliable. Our data science team can now focus on building models instead of cleaning data, which has accelerated our project delivery by over 40%.",
  //   avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  // },
  // {
  //   id: 4,
  //   name: "David Wilson",
  //   position: "VP of Engineering",
  //   company: "CloudSystems Inc.",
  //   quote: "Their expertise in cloud data integration saved our migration project. They designed a scalable architecture that not only met our immediate needs but has easily adapted as our data volume has grown tenfold over the past two years.",
  //   avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  // }
];
