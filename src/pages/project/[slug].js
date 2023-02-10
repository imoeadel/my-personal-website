import Header from '@/components/Header';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import projects from '../../data';
import { AiOutlineLoading } from 'react-icons/ai';
import Footer from '@/components/Footer';

const ProjectDetails = () => {
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();
  const { slug } = router.query;
  const project = projects.find(p => p.slug === slug);
  console.log(project);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  console.log(project);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-gray-100 dark:bg-gray-800 ">
          <Header toggleDarkMode={toggleDarkMode} />
        {project ? (
          <section className='px-10'>
          <Image
            src={project.image}
            className="rounded-lg object-cover w-full h-full"
          />
          <a href={project.link} target={'_blank'} className='text-xl hover:text-teal-600 flex justify-center py-10 dark:text-gray-200 dark:hover:text-teal-600 '>
            Visit The Website
          </a>
          <section className='py-5'>
          <h3 className="text-3xl py-1 font-burtons dark:text-gray-200">Status</h3>
          <p className={`px-5 text-2xl ${project.status === 'Finished' ? 'text-green-500' : 'text-red-600'}`}>{project.status}</p>
          </section>
          <section className='py-5'>
          <h3 className="text-3xl py-1 font-burtons dark:text-gray-200">Discription</h3>
          <p className='text-xl font-thin py-5 px-2 dark:text-gray-200'>{project.discription}</p>
          </section>
        </section>
        )
      : (
        <AiOutlineLoading />
      )}
      <Footer />
      </main>
    </div>
  );
};

export default ProjectDetails;
