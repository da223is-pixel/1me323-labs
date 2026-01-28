const student = {
name: "Diana Ahmadi",
courses :["Webbteknik 3”, “Digitala medier" ]

};

const jsonStudent = JSON.stringify(student); // sparas som string, annars syns ej okjektet i localstorage. 
console.log(jsonStudent);

const parsedStudent = JSON.parse(jsonStudent); // sparas som json.pars för att bli igen som objektet den var.
console.log(parsedStudent.name); // "Diana"
console.log(parsedStudent.courses);


function saveStudent(studentData) {// sparas i localStorage.
  const json = JSON.stringify(studentData);
  localStorage.setItem("student", json);
};

function loadStudent() { // laddad studentobketet i localStorage. 
  const saved = localStorage.getItem("student");
  return JSON.parse(saved);
};

//  {
//   "title": "iPhone 15",
//   "price": 12999,
//   "inStock": true,
//   "colors": ["svart", "vit", "blå"],
//   "specs": {
//     "storage": "128GB",
//     "camera": "48MP"
//   }
// }; // Manuell JSON för product:







