import { useEffect} from "react";
import { gql } from "@apollo/client";
import Head from 'next/head'

import client from "../apollo-client";
import Card from "./Card";

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
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  });

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
            <Card key={person.id} person={person} />
          ))}
        </div>
      </main>
    </div>
  )
}
