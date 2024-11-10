import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data =[
    {        
      id: 0,
      title: "Static Interactive Resume",
      desc:"A HTML and CSS base project ",
      img:"/images/images-1.jpg",
      tags: ["HTML"," CSS", "Typescript"],

    }, 
    {
      id: 1,
      title: "Beauty website",
      desc: " A Next.js and typescript powerd website",
      img: "/images/images-2.jpg" ,
      tags: ["Next.js", "Node", "CSS", "Typescript"],

    },
];

const Projects = () => {
  return (
    <div id="projects" className="container pt-32">
      <Heading title = "MY PROJECTS"/>
      <div className="grid gap-10 xl:gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
      
    </div>
  )
}

export default Projects
