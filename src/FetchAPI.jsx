import React, { useEffect, useState } from 'react'
// import { TempData } from './TempData';

function FetchAPI() {
    const [data, setData] = useState([]);
    const [keyWord, setKeyWord] = useState("")

    useEffect(() => {
        async function getData() {
            const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${keyWord}&app_id=e7aab916&app_key=1fc6c570796023da33aa7ffb93637e5b`);
            const Data = await response.json();
            setData(Data.hits);
        }
        getData();
    }, [keyWord])

    console.log(data);

    const listOfData = data.map((e, id) => {
        // return console.log(e);
        return (
            <div className="card" key={id}>
                <div className="top">
                    <img src={e.recipe.image} alt="" />
                    <span className='label'>{e.recipe.label}</span>
                </div>
                <div className="mid">
                    <a href='ww' className='calories'><span className='greenColorText'>{Math.round(e.recipe.calories)}</span> Calories</a>
                    <a href='ww' className='ingredients'><span className='greenColorText'>{e.recipe.ingredients.length}</span> Ingredients</a>
                </div>
                <div className="bottom">
                    <span className='source'>{e.recipe.source}</span>
                </div>
            </div>
        )
    })
    // label,image,mealType,totalWeight,calories

    // console.log(TempData[0].recipe);
    // console.log(TempData[0].recipe.image);
    // console.log(TempData[0].recipe.label);
    // console.log(TempData[0].recipe.calories);
    // console.log(TempData[0].recipe.ingredients.length);
    // console.log(TempData[0].recipe.source);


    return (
        <div className="fetchapi">
            {/* {listOfData} */}
            <div className="searchBox" id='searchBox'>
                <input type="text" placeholder='Search here...' id='keyWord' autoFocus />
                <button onClick={() => {
                    const valueLength = document.getElementById('keyWord').value;
                    if (valueLength.length > 0) {
                        document.getElementById('searchBox').style.border = "white"
                        console.log("hello");
                        setKeyWord(valueLength);
                    } else {
                        setKeyWord("");
                        document.getElementById('searchBox').style.border = "1px solid red"
                    }
                }}>Search</button>
            </div>
            <div className="container">
                {listOfData}
            </div>
        </div>
    )
}

export default FetchAPI