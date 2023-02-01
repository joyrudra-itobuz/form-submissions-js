// let name = "",
//   roll_college = "",
//   roll_university = "",
//   name_college = "",
//   stream = "";
console.log("Starts!");
// function dataStorer() {
//   let name = "Joy",
//     roll_college = "a",
//     roll_university = "c",
//     name_college = "v",
//     stream = "it";
//   name = name + " " + document.querySelector(".first-name").value;
//   name = name + " " + document.querySelector(".first-name").value;
//   roll_college = document.querySelector(".college-roll").value;
//   roll_university = document.querySelector(".uni-roll").value;
//   name_college = document.querySelector(".colleg-name").value;
//   stream = document.querySelector(".stream").value;

//   const data = [name, roll_college, roll_university, name_college, stream];
//   const fs = require("fs");
//   fs.writeFile("FormData.txt", data, (err) => {
//     if (err) throw err;
//     else {
//       console.log("The file is updated with the given data");
//     }
//   });
// }

function submitResponse() {
  //   let first_name = document.querySelector(".first-name").innerHTML;
  //   let last_name = document.querySelector(".last-name").innerHTML;
  //   let roll_college = document.querySelector(".college-roll").innerHTML;
  //   let roll_university = document.querySelector(".uni-roll").innerHTML;
  //   let name_college = document.querySelector(".colleg-name").innerHTML;
  //   let stream = document.querySelector(".stream").innerHTML;
  //   const data = [
  //     first_name,
  //     last_name,
  //     roll_college,
  //     roll_university,
  //     name_college,
  //     stream,
  //   ];

  //   for (let i = 0; i < data.length; i++) {
  //     console.log("Inside The loop");
  //     if (arr[i.length] == 0) {
  //       document.querySelector("section").textContent = "";
  //       document.querySelector("span").textContent = "Type a Valid Response";
  //       return null;
  //     }
  //   }
  console.log("Submit Response is Called!");
  //   dataStorer();
  console.log(
    "Name : " +
      document.querySelector(".first-name").value +
      " " +
      document.querySelector(".last-name").value
  );
  console.log("College : " + document.querySelector(".college-name").value);
  console.log("Stream : " + document.querySelector(".stream").value);
  console.log(
    "College Roll : " + document.querySelector(".college-roll").value
  );
  console.log("University Roll : " + document.querySelector(".uni-roll").value);
  //   console.log("Name : " + document.querySelector(".first-name").value);
  console.log("Data Storer is Called!");

  // document.querySelector(".submit").textContent = "Go Back!";
  document.getElementById("return").style.display = "block";

  document.querySelector(".stored-details").style.display = "block";
  document.querySelector(".print-name").textContent +=
    " " +
    document.querySelector(".first-name").value +
    " " +
    document.querySelector(".last-name").value;

  document.querySelector(".print-college").textContent +=
    document.querySelector(".college-name").value;

  document.querySelector("section").textContent = "";
  document.querySelector("span").textContent =
    "Your Response Has been Recorded!";

  // let goBack = "index.html";
  // document.querySelector("#result");
}
