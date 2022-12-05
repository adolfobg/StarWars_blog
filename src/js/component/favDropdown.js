import React, {useState } from "react";

const FavDropdown= () => {
  const [inputValue, setInputValue] = useState("");
  const [favorites, setFavorites] = useState([]);
  const change1 = (e) => {
    setInputValue(e.target.value);
  };
 const deleteItem = (index) => {
 return setFavorites(
    favorites.filter((item, i) => {
     return i !== index;
    })
   );
  };

  return (
    <div className="dropdown">
      <form class="form" onSubmit={(e) => e.preventDefault()}>
        <input
          className="text-black task-input"
          type="text"
          value={inputValue}
          onChange={change1}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setFavorites([...favorites, inputValue]);
              setInputValue("");
            }
          }}
          placeholder="Favorites"
        ></input>
      </form>
      {
        <div className="list">
          <div className="">
            <ul class="list-group list-group-flush">
              {favorites.map((itemvalue, index) => {
              return (
                <div>
                <li className="text-black" id={index}>{itemvalue}
                  <button className="btn" >
                  <i className="far fa-trash-alt" onClick={() => deleteItem(index)}/>
                  </button>
                </li>
                </div>
                );
              })}
            </ul>
          </div>
         
        </div>
      }
    </div>
  );
};

export default FavDropdown;
