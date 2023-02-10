import courses from 'public/images/courses.png';
import food from 'public/images/food.png';
import store from 'public/images/store.png';
import personal from 'public/images/personal.png';

const projects = [
  {
    id: '1',
    slug: 'courses',
    title: 'CoursePlus',
    image: courses,
    status: 'Under Construction',
    link: 'https://academy.ynphotos.net',
    discription: 'Introducing CoursePlus, a cutting-edge platform built using React that offers an array of courses for individuals looking to upskill and advance their knowledge. The website is designed with a sleek, modern interface and user-friendly navigation to make it easy for users to find the course they need. \n I used the Atomic Design Pattern to make it reusable and also to use some components of my previous work. I used redux in the application to manage the states of the project. I also used axios to fetch the data from the API which is created with php.',
  },
  {
    id: '2',
    slug: 'ecommerce',
    title: 'Store',
    image: store,
    status: 'Finished',
    link: 'https://ecommerce-moe.vercel.app/',
    discription:
      'The website is an e-commerce platform built with Next.js. It uses Sanity, a headless content management system, to store and manage the data of the products. The platform is integrated with Stripe, a leading payment processor, to handle all aspects of the payment process, including secure payment transactions and refunds. With its modern technology stack and streamlined user experience, the website provides an efficient and convenient platform for shopping online.',
  },
  {
    id: '3',
    slug: 'foodApp',
    title: 'FoodApp',
    image: food,
    status: 'Finished',
    link: 'https://foodapp-moe.vercel.app/',
    discription: 'The Food App is a beautifully designed and functional website created with React.js and Tailwind CSS. The website was designed with the goal of providing an enjoyable and efficient platform for food enthusiasts and busy individuals to discover new recipes, track dietary preferences, and order delicious meals online.\nThe Food App leverages the power of Firebase, a flexible and scalable backend-as-a-service platform, to manage the websites data and provide secure storage for sensitive information. This combination of technologies allows for fast and responsive user experiences that are both reliable and secure.',
  },
  {
    id: '3',
    slug: 'personal',
    title: 'personal',
    image: personal,
    status: 'Finished',
    link: '/',
    discription: 'Introducing my latest creation, a stunning portfolio website built with Next.js. This website showcases my skills and experiences as a web developer. It is designed with a clean and modern look, providing a smooth and seamless user experience. The website is fast, responsive and optimized for search engines, making it easy for potential clients to find and view my work. With the help of Next.js, I was able to build a highly scalable and performant website that is capable of handling high traffic loads. This portfolio website truly represents my passion for web development and demonstrates my commitment to delivering exceptional results.',
  },

];

export default projects;
