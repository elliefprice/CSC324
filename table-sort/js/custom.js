/********************************************************************
 * 
 * Your introductory remarks go here.
 * 
 *******************************************************************/

 // The array of objects, one object for each artist.
 
 const artists = [
  {
    name: "Ms Scandalous",
    birthYear: 1985,
    link: "https://www.youtube.com/watch?v=2FPivlfvxu0"
  },
  {
    name: "Juggy D",
    birthYear: 1981,
    link: "https://www.youtube.com/watch?v=1jAc_-FVjdI"
  },
  {
    name: "Sukhbir Singh",
    birthYear: 1969,
    link: "https://www.youtube.com/watch?v=HiprNF9Jad0"
  },
  {
    name: "Abrar-ul-Haq",
    birthYear: 1989,
    link: "https://www.youtube.com/watch?v=-lnnVIP7FEc"
  },
  {
    name: "Rishi Rich",
    birthYear: 1970,
    link: "https://www.youtube.com/watch?v=O95-w2gACuA"
  }
];

const target = document.getElementById("bhangra");
renderTable(artists); 

function renderTable(arr) {
  target.innerHTML = ""; 
  const artistTable = makeTable(arr);
  target.appendChild(artistTable);
}

function makeTable(arr) {
  const table = document.createElement("table");
  const header = makeTableHeader(arr[0]);
  table.appendChild(header);

  for (let obj of arr) {
    const row = makeTableRow(obj);
    table.appendChild(row);
  }
  return table;
}

function makeTableHeader(obj) {
  const tr = document.createElement("tr");
  for (let columnName of Object.keys(obj)) {
    const th = document.createElement("th");
    th.innerText = columnName;
    tr.appendChild(th);
  }
  return tr;
}

function makeTableRow(obj) {
  const tr = document.createElement("tr");
  for (let [key, value] of Object.entries(obj)) {
    const td = document.createElement("td");
    if (key === "link") {
      const a = document.createElement("a");
      a.href = value;
      a.target = "_blank";
      a.innerText = "Watch";
      td.appendChild(a);
    } else {
      td.innerText = value;
    }
    tr.appendChild(td);
  }
  return tr;
}

// Sorting Buttons Solution
const NameButton = document.querySelector("#NameButton");
const BirthButton = document.querySelector("#BirthButton");
const RandomButton = document.querySelector("#RandomButton");

NameButton.addEventListener("click", () => {
  const sortedByName = [...artists].sort((a, b) => a.name.localeCompare(b.name));
  renderTable(sortedByName);
});

BirthButton.addEventListener("click", () => {
  const sortedByBirth = [...artists].sort((a, b) => a.birthYear - b.birthYear);
  renderTable(sortedByBirth);
});

RandomButton.addEventListener("click", () => {
  const shuffled = [...artists];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  renderTable(shuffled);
});

/* I used the notes from the table sort help in class and expaned on the given code from examples
 given in class to produce the code for the sorting buttons and random button above. 
 Given code from notes in class: 
// first, a shuffling method adapted from
 // https://www.kirupa.com/html5/shuffling_array_js.htm

 Array.prototype.shuffle = function() {
  let input = this;
  for (let i = input.length-1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random()*(i+1)); 
    let itemAtIndex = input[randomIndex]; 
    input[randomIndex] = input[i]; 
    input[i] = itemAtIndex;
  }
 return input;
};

const myArray = [1,2,3,4,5,6,7,8,9,10];
console.log(myArray.shuffle());
console.log(artists.shuffle());

// Suppose that this js file gets loaded by
// the browser when it parses some html file,
// and suppose that the html file has a button
// as in the table-sort assignment.
// Then you could use the above ideas to add
// an event-listener to the button
// to show a randomly-selected artist:
  // const randomButton = document.querySelector("#random-button");
  // randomButton.addEventListener("click", showRandomArtist);

  // function showRandomArtist() {
  //   const artist = document.querySelector("#random-artist");
  //   artist.innerHTML = pickArtist();
  // } */