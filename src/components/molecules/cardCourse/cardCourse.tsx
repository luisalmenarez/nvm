import React from 'react';
import Image from 'next/image';

interface CardCourseProps {
  /** Imagen de la tarjeta <br> Default: `https://i.ibb.co/SKvNJQg/Copia-de-Morsa-IS-Bogot-university-Cam-1-3318.jpg`
   */
  image: string;
  title: string;
  description: string;
  tags: string[];
  startDate: string;
  link: string;
}
const CardCourse: CardCourseProps = {
  image:
    'https://i.ibb.co/SKvNJQg/Copia-de-Morsa-IS-Bogot-university-Cam-1-3318.jpg',
  title: 'Nombre programa',
  description:
    'Donec ode tellus, facilisis at ornare sed, scelerisque sit amet sapien. Sed risus turpis, fermentum quis finibus sed, pretium quis metus.',
  tags: ['etiqueta'],
  startDate: 'Fecha de inicio: Próximamente',
  link: '#',
};

export const cardCourse = ({
  image = CardCourse.image,
  title = CardCourse.title,
  description = CardCourse.description,
  tags = CardCourse.tags,
  startDate = CardCourse.startDate,
  link = CardCourse.link,
}: CardCourseProps) => {
  return (
    <section className="relative overflow-hidden flex flex-col justify-center max-w-sm rounded-3xl transition-all duration-500 text-black bg-white hover:bg-orange-500 hover:text-white group">
      {/* Image */}
      <Image
        src={image}
        alt="Course Image"
        className="size-full object-cover rounded-tr-2xl rounded-tl-2xl"
        width={250}
        height={250}
      />
      {/* Pills */}
      <div className="absolute top-4 right-4 flex gap-4">
        <article className="rounded-xl text-white font-semibold">
          <p className="py-1 px-6 rounded-2xl text-white bg-[#007680]">
            Facultad
          </p>
        </article>
        <article className="rounded-xl text-white font-semibold">
          <p className="py-1 px-6 rounded-2xl text-black bg-[#90ff00]">
            Virtual
          </p>
        </article>
      </div>
      {/* Cards Content */}
      <div className="flex flex-col px-6 gap-3 hover:bg-orange-500  transition-colors duration-500 group">
        <article className="rounded-2xl mt-4 transition-all duration-500">
          <span className="text-[#610c63] border-2 border-[#610c63] bg-white py-0.5 px-4 rounded-full">
            {tags}
          </span>
        </article>
        <h2 className="text-2xl font-bold"> {title} </h2>
        <div className="flex gap-2 items-center">
          <svg
            className="size-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M8 2v4M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
          </svg>
          <p className="font-medium text-sm tracking-tighter">{startDate}</p>
        </div>
        <p className="leading-tight text-lg">{description}</p>
        {/* Footer Card */}
        <div className="py-4 flex space-x-4">
          <a
            href="#"
            className="text-orange-500 font-bold flex items-center space-x-2 group-hover:text-white transition-colors duration-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            <span>Conocer más</span>
          </a>
          <a
            href={link}
            className="bg-orange-500 border border-orange-500 text-white px-4 py-2 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-white transition-colors duration-500"
          >
            <span className="group-hover:text-orange-500 transition-colors duration-500">
              Inscríbete
            </span>
            <div className="ml-2 bg-orange-500 text-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-orange-500 transition-colors duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 16 16 12 12 8"></polyline>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
