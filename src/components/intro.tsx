'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useAnimateOnView from '../hooks/useAnimateOnView';

import { HiOutlineArrowRightCircle } from 'react-icons/hi2';

export default function Intro() {
  const { ref: refFirst, controls: controlsFirst } = useAnimateOnView();
  const { ref: refSecond, controls: controlsSecond } = useAnimateOnView();
  return (
    <div className="flex flex-col items-center justify-center h-full w-full ">
      <div className="justify-start mb-12  text-dark-800 dark:text-almost-white md:w-2/3">
        <h2 className="mb-6 text-4xl md:text-5xl font-montserrat font-semibold">
          Quelque soit vos{' '}
          <motion.div
            ref={refFirst}
            style={{ overflow: 'hidden' }}
            className="text-6xl md:text-7xl bg-gradient-to-r from-primary-800 to-primary-400 inline-block text-transparent bg-clip-text text-primary-500"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controlsFirst}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.5 }}
          >
            ambtions
          </motion.div>{' '}
          je vous trouve la{' '}
          <motion.span
            ref={refSecond}
            className="text-6xl md:text-7xl bg-gradient-to-r from-secondary-500 to-secondary-200 inline-block text-transparent bg-clip-text"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controlsSecond}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.5 }}
          >
            solution
          </motion.span>
        </h2>
        <p className="text-normal md:text-lg font-montserrat font-light mt-10">
          Que vous lanciez votre premier projet web ou que vous souhaitiez
          optimiser votre présence en ligne, je vous accompagne à chaque étape.
          Ensemble, nous concevons des solutions adaptées à vos objectifs, vos
          besoins et votre budget.
        </p>
      </div>

      <div className="hidden md:grid md:grid-rows-3 grid-flow-col gap-4  md:w-full xl:w-3/4 font-montserrat  text-dark-800 dark:text-almost-white ">
        <div className="row-span-3 flex flex-col backdrop-blur-md p-4  border-solid border-2 border-primary-500 dark:border-almost-white rounded-md md:rounded-l-2xl  bg-gradient-to-br from-primary-50 dark:from-primary-950 to-transparent shadow-md">
          <h3 className="text-2xl font-semibold mb-4">
            Site web<span className="text-4xl ml-3">🧑‍💻</span>
          </h3>
          <p className="text-sm font-extralight">
            Un site destiné à promouvoir votre activité, un site e-commerce pour
            vendre vos créations, ou un blog pour partager vos passions ? Je
            vous accompagne dans le developpement de votre projet.
          </p>
        </div>
        <div className="row-span-2 backdrop-blur-md p-4  border-solid border-2 border-primary-500 dark:border-almost-white rounded-md dark:text-almost-white bg-gradient-to-b from-primary-50 dark:from-primary-950 to-transparent shadow-md text-center">
          <h3 className="text-2xl font-semibold  mb-4">
            Application<span className="text-4xl ml-3">⚙️</span>
          </h3>
          <p className="text-sm font-extralight">
            Une application web : bien plus qu&apos;un site, un levier puissant
            pour accélérer votre croissance et transformer vos idées en
            solutions concrètes.
          </p>
        </div>
        <div className="row-span-1 backdrop-blur-md p-4  border-solid border-2 border-primary-500 dark:border-almost-white rounded-md dark:text-almost-white bg-gradient-to-t from-primary-50 dark:from-primary-950 to-transparent shadow-md text-center">
          <h3 className="text-2xl font-semibold  mb-4">
            Conseil<span className="text-4xl ml-3">👨‍🏫</span>
          </h3>
          <p className="text-sm font-extralight">
            Des conseils sur-mesure pour guider vos choix et réussir votre
            transition numérique grâce à un site ou une application web adaptée
            à vos besoins.
          </p>
        </div>
        <div className="row-span-1 backdrop-blur-md p-4  border-solid border-2 border-primary-500 dark:border-almost-white rounded-md md:rounded-tr-2xl dark:text-almost-white bg-gradient-to-bl from-primary-50 dark:from-primary-950 to-transparent shadow-md text-end">
          <h3 className="text-2xl font-semibold  mb-4">
            Optimisation<span className="text-4xl ml-3">🚀</span>
          </h3>
          <p className="text-sm font-extralight">
            Une plateforme performante, fluide et facile à maintenir : renforcez
            votre image en ligne avec un site rapide, agréable pour vos
            utilisateurs et conçu pour durer.
          </p>
        </div>
        <div className="row-span-2 backdrop-blur-md p-4  border-solid border-2 border-primary-500 dark:border-almost-white rounded-md md:rounded-br-2xl dark:text-almost-white bg-gradient-to-tl from-primary-50 dark:from-primary-950 to-transparent shadow-md text-end">
          <h3 className="text-2xl font-semibold  mb-4">
            UX / UI<span className="text-4xl ml-3">🌈</span>
          </h3>
          <p className="text-sm font-extralight">
            Une maquette accessible et inclusive pour un site ou une application
            web réussie. Je conçois des designs modernes, ergonomiques et
            conformes aux standards UX/UI actuels, en veillant à offrir une
            expérience adaptée à tous les utilisateurs.
          </p>
        </div>
      </div>

      {
        //Alternative mobile grid
      }
      <div className="md:hidden grid grid-rows-3 grid-cols-2 gap-4 font-montserrat  text-dark-800 dark:text-almost-white ">
        <div className="row-span-1 w-full flex flex-col backdrop-blur-md p-4  border-solid border-2 border-primary-500 dark:border-almost-white rounded-md md:rounded-l-2xl  bg-gradient-to-b from-primary-50 dark:from-primary-950 to-transparent shadow-md">
          <h3 className="flex flex-col items-center text-center text-xl font-semibold mb-4">
            Site web<span className="text-3xl mt-4">🧑‍💻</span>
          </h3>
        </div>
        <div className="row-span-1 flex w-full flex-col backdrop-blur-md p-4 border-solid border-2 border-primary-500 dark:border-almost-white rounded-md md:rounded-l-2xl  bg-gradient-to-b from-primary-50 dark:from-primary-950 to-transparent shadow-md">
          <h3 className="flex flex-col items-center text-center text-xl font-semibold mb-4">
            Application<span className="text-3xl mt-4">⚙️</span>
          </h3>
        </div>
        <div className="row-span-1 w-full flex flex-col backdrop-blur-md p-4 border-solid border-2 border-primary-500 dark:border-almost-white rounded-md md:rounded-l-2xl  bg-gradient-to-r from-primary-50 dark:from-primary-950 to-transparent shadow-md">
          <h3 className="flex flex-col items-center text-center text-xl font-semibold mb-4">
            Conseil<span className="text-3xl mt-4">👨‍🏫</span>
          </h3>
        </div>
        <div className="row-span-1 w-full flex flex-col backdrop-blur-md p-4 border-solid border-2 border-primary-500 dark:border-almost-white rounded-md md:rounded-l-2xl  bg-gradient-to-l from-primary-50 dark:from-primary-950 to-transparent shadow-md">
          <h3 className="flex flex-col items-center text-center text-xl font-semibold mb-4">
            Optimisation<span className="text-3xl mt-4">🚀</span>
          </h3>
        </div>
        <div className="row-span-1 col-span-2 place-self-center w-1/2 flex flex-col backdrop-blur-md p-4 border-solid border-2 border-primary-500 dark:border-almost-white rounded-md md:rounded-l-2xl  bg-gradient-to-t from-primary-50 dark:from-primary-950 to-transparent shadow-md">
          <h3 className="flex flex-col items-center text-center text-xl font-semibold mb-4">
            UX / UI<span className="text-3xl mt-4">🌈</span>
          </h3>
        </div>
      </div>

      <Link href="/services">
        <button className="flex bg-primary-600 dark:bg-primary-800 hover:bg-primary-800 dark:hover:bg-primary-900 to-secondary-500 border-solid border-2 border-primary-600 dark:border-primary-800 hover:border-primary-800 dark:hover:border-primary-900 text-white font-montserrat font-light text-sm text-left px-4 py-2 mt-10 rounded-md ease-in-out duration-300">
          Découvrez mes services
          <HiOutlineArrowRightCircle className="h-5 w-5 ml-2 inline-block" />
        </button>
      </Link>
    </div>
  );
}
