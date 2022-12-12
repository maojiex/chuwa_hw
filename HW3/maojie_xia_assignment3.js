const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

const headerData = tableInfo.tableHeader
  .map(value => {
    return `<th>${value}</th>`
  }).join("")

const header = document.querySelector("#t-header")
header.innerHTML = headerData

const tableData = tableInfo.tableContent
  .map((value) => {
    return `<tr>
        <td>${value["Student Name"]}</td>
        <td>${value.Age}</td>
        <td>${value.Phone}</td>
        <td>${value.Address}</td>
    </tr>`;
  })
  .join("");

const tableBody = document.querySelector("#t-body");
tableBody.innerHTML = tableData;

const list = ['HTML', 'JavaScript', 'CSS', 'React', 'Redux', 'Java'];

const olData = list
  .map(value => {
    return `<li>${value}</li>`
  }).join("")

const olBody = document.querySelector("#ol-body")
olBody.innerHTML = olData

const ulData = list
  .map(value => {
    return `<li>${value}</li>`
  }).join("")

const ulBody = document.querySelector("#ul-body")
ulBody.innerHTML = ulData

const dropDownList = [
  { value: 'newark', content: 'Newark' },
  { value: 'santaClara', content: 'Santa Clara' },
  { value: 'unionCity', content: 'Union City' },
  { value: 'albany', content: 'Albany' },
  { value: 'dalyCity', content: 'Daly City' },
  { value: 'sanJose', content: 'San Jose' },
];

const dropDownListData = dropDownList
  .map(object => {
    return `<option value=${object.value}>${object.content}</option>`
  }).join("")

const dropDownListBody = document.querySelector("#dropdown")
dropDownListBody.innerHTML = dropDownListData