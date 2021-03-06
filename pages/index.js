import Head from "next/head";
import { useState } from "react";
import FeaturedProjects from "../components/FeaturedProjects";

export default function Home() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Notesawesome",
      segment: "Notes/Reminder",
      description: "An application that helps you write and organize your important notes anytime you need.",
      link: "https://notesawesome.netlify.app",
      sourceCode: "https://github.com/Oliverhf/notes-app",
    },
    {
      id: 2,
      name: "Moovtime",
      segment: "Online Streaming movies/series platform",
      description:
        "A streaming platform that provides movies & series having the account access. Sign In, Sign up, Browse, Auth listeners, Protected routes.",
      link: "https://moovtime.netlify.app",
      sourceCode: "https://github.com/Oliverhf/moovtime",
    },
    {
      id: 3,
      name: "RecipeApp",
      segment: "Blog/Social",
      description:
        "Recipes from different chefs in one place, providing diversity in cuisine and its sharing. Posts, PostDetails, Author and AuthorDetails.",
      link: "https://recipe-app-gamma-five.vercel.app/",
      sourceCode: "https://github.com/Oliverhf/recipe-app",
    },
  ]);
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="relative max-h-full">
        <div>
          <div className="relative">
            <img
              className="relative w-screen inset-0 z-10 grayscale-[70%]"
              src="https://res.cloudinary.com/dakam7rfa/image/upload/v1655332291/bg-web_lrxacf.jpg"
            />
            <div
              style={{
                background: "linear-gradient(0deg, rgb(0, 4, 1), #00000040)",
              }}
              className="absolute z-20 inset-0 block"
            >
              <div className="sm:m-40 ">
                <h1 className="text-4xl block mt-10 mb-8 md:m-10 sm:text-6xl font-bold text-white text-center">
                  Oliver <span className="text-gray">Favalli</span>
                </h1>
                <p className="block m-8 md:m-10 text-lg font-normal text-white text-center">
                  S??o Paulo, Brazil{" "}
                  <span className="font-light opacity-70 mx-1">|</span> +55 11
                  97555-8597
                </p>
                <span className="block text-white text-center text-gray">
                  Challenge-driven software developer.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative sm:h-screen">
        <div className="py-8 sm:py-32">
          <h2 className="text-black text-2xl sm:text-4xl text-center font-normal uppercase leading-12">
            Projects
          </h2>
          <hr className="block rounded-md w-8 m-auto mb-12 mt-4 text-gray"></hr>
          <div className="flex-col sm:flex-row flex m-auto w-10/12 md:w-fit gap-6 container-md sm:px-10">
            {projects.map((project) => (
              <FeaturedProjects key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      <section className="relative h-100 pb-20 rounded-sm">
        <div className="relative py-0 md:py-4 mb-16">
          <div>
            <h4 className="text-black text-2xl sm:text-4xl text-center uppercase font-normal leading-14">
              Skills
            </h4>
            <hr className="block rounded-md w-8 m-auto mb-8 mt-4 text-gray"></hr>
          </div>
        </div>
        <div className="m-auto container w-10/12 sm:mx-auto sm:px-10 mb-8 z-20">
          <div className="">
            <h5 className="text-black text-xl sm:text-2xl capitalize mb-4 font-normal">
              Programming Languages + Tools
            </h5>
            <div className="flex overflow-x-scroll sm:overflow-x-hidden sm:mt-8 sm:m-b-4 gap-2">
              <img
                align="center"
                alt="Oliver-HTML"
                height="30"
                width="40"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
              />
              <img
                align="center"
                alt="Oliver-CSS"
                height="30"
                width="40"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
              />
              <img
                align="center"
                alt="Oliver-SASS"
                height="30"
                width="40"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              />
              <img
                align="center"
                alt="Oliver-Js"
                height="30"
                width="40"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
              />
              <img
                align="center"
                alt="Oliver-React"
                height="30"
                width="40"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
              />
              <img
                align="center"
                alt="Oliver-Redux"
                height="30"
                width="40"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              />
              <img
                align="center"
                alt="Oliver-NextJS"
                height="30"
                width="40"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              />
              <img
                align="center"
                alt="Oliver-Jest"
                height="30"
                width="40"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
              />
              <img
                align="center"
                alt="Oliver-Node"
                height="30"
                width="40"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              />
              <img
                align="center"
                alt="Oliver-Csharp"
                height="30"
                width="40"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
              />
              <img
                align="center"
                alt="Oliver-Elixir"
                height="30"
                width="40"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg"
              />
              <img
                align="center"
                alt="Oliver-GraphQL"
                height="30"
                width="40"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
              />
              <img align="center" alt="Oliver-PostgreSQL" height="30" width="40"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
              <img align="center" alt="Oliver-Firebase" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" />
            </div>
            <div className="mb-20">
              <h5 className="text-black text-xl sm:text-2xl mt-8 mb-4 capitalize font-normal">
                Workflow
              </h5>
              <div>
                <div>
                  <div className="flex flex-col items-start sm:flex-row sm:items-center">
                    <div className="flex items-center mr-3">
                    <svg className="w-6 h-6 mr-3" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path className="fill-gray" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                      <span>React</span>
                    </div>
                    <div className="flex items-center mr-3">
                    <svg className="w-6 h-6 mr-3" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path className="fill-gray" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                      <span>NextJS</span>
                    </div>
                    <div className="flex items-center mr-3">
                      <svg className="w-6 h-6 mr-3" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path className="fill-gray" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                      <span>ASP.NET Web API</span>
                    </div>
                    <div className="flex items-center mr-3">
                      <svg className="w-6 h-6 mr-3" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path className="fill-gray" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                      <span>Express</span>
                    </div>
                    <div className="flex items-center mr-3 accent-blueSecondary">
                      <svg className="w-6 h-6 mr-3" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path className="fill-gray" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                      <span>Pheonix</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
