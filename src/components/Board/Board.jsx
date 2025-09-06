import React, { useEffect, useState } from 'react'
import Category from '../Category/Category.jsx'
import './Board.css'

function Board() {
    const [categories, setCategories] = useState([]);

    // // This useEffect hook will run once after the component is first rendered.
    // useEffect(() => {
    //     const fetchData = async () => {
    //         let offset = Math.floor(Math.random() * 28175) + 1
    
    //         // Fetch the categories from the API.
    //         const categoryUrl = `/api/categories?count=6&offset=${offset}`;

    //         const categoryResponse = await fetch(categoryUrl);
    //         const categoryData = await categoryResponse.json();
    //         // console.log(categoryData)
    
    //         // Fetch the clues for each category.   
    //         const categoriesWithClues = await Promise.all(categoryData.map(async (category) => {
    //             const clueUrl = `/api/clues?category=${category.id}`;

    //             const clueResponse = await fetch(clueUrl);
    //             const clueData = await clueResponse.json();
    
    //             // Attach the clues to the category.
    //             return {
    //                 ...category,
    //                 clues: clueData,
    //             };
    //         }));
    
    //         setCategories(categoriesWithClues);
    //     }

    //     fetchData();
    // }, []);

    useEffect(() => {
        const fakeData = [
          {
            id: 1,
            title: 'griffin family',
            clues: [
              { id: 101, value: 200,  question: 'What is the name of the Griffin family dog?', answer: 'Brian' },
              { id: 102, value: 400,  question: 'Which Griffin child is often the butt of jokes?', answer: 'Meg' },
              { id: 103, value: 600,  question: 'What instrument does Lois play?', answer: 'Piano' },
              { id: 104, value: 800,  question: 'What is Stewie’s middle name?', answer: 'Gilligan' },
              { id: 105, value: 1000, question: 'What Rhode Island city do the Griffins live in?', answer: 'Quahog' },
            ],
          },
          {
            id: 2,
            title: 'main characters',
            clues: [
              { id: 201, value: 200,  question: 'Who is Peter Griffin’s best friend who eventually gets a spinoff?', answer: 'Cleveland Brown' },
              { id: 202, value: 400,  question: 'Which character is a paraplegic police officer?', answer: 'Joe Swanson' },
              { id: 203, value: 600,  question: 'What is the name of the bar Peter and friends frequent?', answer: 'The Drunken Clam' },
              { id: 204, value: 800,  question: 'Who is the suave, deep-voiced newscaster in Quahog?', answer: 'Tom Tucker' },
              { id: 205, value: 1000, question: 'Which neighbor is an airline pilot known for saying “Giggity”?', answer: 'Glenn Quagmire' },
            ],
          },
          {
            id: 3,
            title: 'stewie & brian',
            clues: [
              { id: 301, value: 200,  question: 'What kind of accent does Stewie speak with?', answer: 'British' },
              { id: 302, value: 400,  question: 'What does Stewie often call Lois in frustration?', answer: 'Woman' },
              { id: 303, value: 600,  question: 'What device does Stewie build to travel through time (seen multiple times by S12)?', answer: 'A time machine' },
              { id: 304, value: 800,  question: 'What is Brian’s biggest personal ambition?', answer: 'To be a writer' },
              { id: 305, value: 1000, question: 'What is the umbrella title of their special adventure episodes that begin in S2?', answer: '“Road to…” episodes' },
            ],
          },
          {
            id: 4,
            title: 'quahog life',
            clues: [
              { id: 401, value: 200,  question: 'What is the local TV station in Quahog?', answer: 'Channel 5' },
              { id: 402, value: 400,  question: 'What is Mayor West’s first name?', answer: 'Adam' },
              { id: 403, value: 600,  question: 'What store does Mort Goldman run?', answer: 'Goldman’s Pharmacy' },
              { id: 404, value: 800,  question: 'What is the name of the local high school?', answer: 'James Woods Regional High School' },
              { id: 405, value: 1000, question: 'What is the name of Tom Tucker’s news program?', answer: 'Quahog 5 News' },
            ],
          },
          {
            id: 5,
            title: 'episodes & moments',
            clues: [
              { id: 501, value: 200,  question: 'In “PTV” (S4), what leads Peter to start his own TV network?', answer: 'FCC censorship after a wardrobe malfunction' },
              { id: 502, value: 400,  question: 'In “Back to the Pilot” (S10), Stewie and Brian revisit which episode to alter events?', answer: 'The pilot' },
              { id: 503, value: 600,  question: 'In “Road to the Multiverse” (S8), what do Stewie and Brian use to hop universes?', answer: 'A remote control device' },
              { id: 504, value: 800,  question: 'In “I Dream of Jesus” (S7), what song becomes Peter’s relentless earworm?', answer: '“Surfin’ Bird”' },
              { id: 505, value: 1000, question: 'Which recurring rivalry features elaborate fight scenes starting early in the series?', answer: 'Peter vs. Ernie the Giant Chicken' },
            ],
          },
          {
            id: 6,
            title: 'quotes & gags',
            clues: [
              { id: 601, value: 200,  question: 'Who often says “Giggity”?', answer: 'Quagmire' },
              { id: 602, value: 400,  question: 'What phrase does Peter use to declare something great (“Freakin’…”)?', answer: '“Freakin’ sweet!”' },
              { id: 603, value: 600,  question: 'Who bursts through walls yelling “Oh yeah!” in early cutaways?', answer: 'Kool-Aid Man' },
              { id: 604, value: 800,  question: 'What product jingle becomes an unforgettable bit Peter keeps singing (S7)?', answer: '“Surfin’ Bird”' },
              { id: 605, value: 1000, question: 'What line does the newscast often use to pivot to a punchline segment?', answer: '“And now this.”' },
            ],
          },
        ]
      
        setCategories(fakeData)
      }, [])
      
      

    return (
        <div className="jeopardy-board">
            {categories.map((category) => (
                <Category key={category.id} category={category} />
            ))}
        </div>
    );
}

export default Board;