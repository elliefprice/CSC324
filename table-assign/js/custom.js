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
 ]

 const target = document.getElementById("bhangra");
    const artistTable = makeTable(artists);
    target.appendChild(artistTable);
    
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
        const data = columnName;
        th.innerText = data;
        tr.appendChild(th);
      }
      return tr;
    }

    function makeTableRow(obj) {
      console.log(obj);
      const row = document.createElement("tr");
      for (let columnName of Object.keys(obj)) {
        const data = document.createElement("td");
        console.log(obj[columnName]);
        data.innerText = obj[columnName];
        row.appendChild(data);
      }
      return row;
    }
