'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useAnimateOnView from '@/hooks/useAnimateOnView';
import { HiOutlineArrowRightCircle } from 'react-icons/hi2';

export default function About() {
  const { ref: refFirstTitle, controls: controlsFirstTitle } =
    useAnimateOnView();
  const { ref: refSecondTitle, controls: controlsSecondTitle } =
    useAnimateOnView();

  return (
    <div className="flex flex-col items-center justify-center h-full w-full ">
      <div className="justify-start mb-12  text-dark-800 dark:text-almost-white md:w-2/3">
        <h2 className="mb-6 text-4xl md:text-5xl font-montserrat font-semibold">
          <motion.div
            ref={refFirstTitle}
            className="text-6xl md:text-7xl bg-gradient-to-r from-primary-800 to-primary-400 inline-block text-transparent bg-clip-text text-primary-500"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controlsFirstTitle}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.5 }}
          >
            Développer
          </motion.div>{' '}
          et vous
          <motion.div
            ref={refSecondTitle}
            className="text-6xl md:text-7xl bg-gradient-to-r from-secondary-500 to-secondary-200 inline-block text-transparent bg-clip-text"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controlsSecondTitle}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.25 }}
          >
            écouter
          </motion.div>{' '}
        </h2>
      </div>

      <div className="relative flex flex-col items-center xl:flex-row xl:w-1/2 mt-24 xl:mt-12">
        <div className="flex flex-col p-8 pt-28 md:pt-32 xl:pt-12 xl:pr-28 backdrop-blur-md border-solid  dark:border-almost-white rounded-md dark:text-almost-white skew-container">
          <p className="text-normal text-sm md:text-base font-montserrat font-light ">
            Je suis Stefan, <strong>développeur passionné</strong>, spécialisé
            dans la création de sites et d’applications sur mesure.
            <br />
            <br /> Mon objectif est de transformer vos idées en solutions
            numériques <strong>modernes, esthétiques et fonctionnelles</strong>.
            <br />
            <br /> À <strong>l’écoute de vos besoins et de vos attentes</strong>
            , je mets un point d’honneur à concevoir des interfaces intuitives
            et des expériences utilisateur qui reflètent votre identité et
            captivent vos utilisateurs. <br />
            <br /> De la première ligne de code à la mise en ligne, je travaille
            en étroite collaboration avec vous pour m&lsquo;assurer que le
            résultat final dépasse vos espérances. Mon expertise couvre tant le{' '}
            <strong>
              front-end, pour des designs élégants et réactifs, que le back-end,
              pour des fonctionnalités robustes et sécurisées
            </strong>
            . <br />
            <br /> Faites-moi confiance pour donner vie à vos projets et bâtir
            avec vous des solutions qui allient esthétisme et performance <br />
            <br /> Je suis là pour
            <strong> écouter, comprendre et créer</strong>.
          </p>
        </div>

        <div className="absolute xl:-right-24 -top-24 xl:-top-12 z-10 flex items-center justify-center bg-gradient-to-bl from-primary-50 to-primary-100 dark:from-primary-950 dark:to-slate-950 h-44 w-44 md:h-52 md:w-52 rounded-full border-8 border-primary-300 dark:border-primary-950 shadow-xl hover:rotate-2 hover:scale-105 duration-300">
          <Image
            src="/images/avatar.png"
            width={300}
            height={300}
            alt="Développeur web"
            className="-rotate-12"
          />
        </div>
      </div>

      <Link href="/">
        <button className="flex bg-primary-500 dark:bg-primary-800 hover:bg-primary-800 dark:hover:bg-primary-900 to-secondary-500 border-solid border-2 border-primary-500 dark:border-primary-800 hover:border-primary-800 dark:hover:border-primary-900 text-white font-montserrat font-light text-sm text-left px-4 py-2 mt-10 rounded-md ease-in-out duration-300">
          En savoir plus
          <HiOutlineArrowRightCircle className="h-5 w-5 ml-2 inline-block" />
        </button>
      </Link>
    </div>
  );
}
