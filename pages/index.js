import { gql } from "@apollo/client";
import client from "../apollo-client";

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Dropdown } from "flowbite-react";
import { useState } from "react";
import Button from './button';

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Query {
        allPeople {
          people {
            id
            eyeColor
            birthYear
            gender
            name
            hairColor
            species {
              homeworld {
                population
                diameter
                name
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      people: data.allPeople.people.filter((person) => person?.species?.homeworld?.name).slice(0, 10)
    },
  };
}

export default function Home({ people }) {
  return (
    <div className='bg-gray-100 p-20'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='p-0'>
        <div className="grid grid-cols-3 gap-10">
          {people.length > 0 && people.map((person) => (
            <div className="flex flex-col items-center space-y-2 bg-gray-200 pb-5" key={person.id}>
              <div className="text-base font-bold py-3 bg-white w-full text-center">{person.name}</div>
              <div className="flex justify-center">
                <div className="flex flex-col space-y-1">
                  <span className="font-bold text-right pr-3 text-xs">Birth Year: </span>
                  <span className="font-bold text-right pr-3 text-xs">Gender: </span>
                  <span className="font-bold text-right pr-3 text-xs">Eye Color: </span>
                  <span className="font-bold text-right pr-3 text-xs">Hair Color: </span>
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="text-xs">{person.birthYear}</div>
                  <div className="text-xs">{person.gender}</div>
                  <div className="text-xs">{person.eyeColor}</div>
                  <div className="text-xs">{person.hairColor}</div>
                </div>
              </div>
              <Button person={person} />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}