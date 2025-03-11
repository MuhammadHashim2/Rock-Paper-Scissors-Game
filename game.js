// // Choise For Users
// let options = ['Rock','Paper','Scissor'];
// let points = 10;
// let resultdiv = document.querySelector(".result");
// // Start Game Function
// function startGame(userSelection) {   
//      let user = userSelection;

// // Store user selection temporary    
//         localStorage.setItem('userSelectedOption', user);
        
// // After user turn system turn start after 1 second
//     setTimeout(function () {
//       let userSelectedOption = localStorage.getItem('userSelectedOption');
// // System Gnerated Option 
//         let systemGeneratedOptions = Math.floor(Math.random() * (2-0+1)) + 0 ;
//         let option = options[systemGeneratedOptions];
//         // Check if user selected and system selected same option
//         if(userSelectedOption==systemGeneratedOptions){
//             console.log(userSelectedOption);
//             console.log(systemGeneratedOptions);
//             resultdiv.style.display= "block"; 
//             let yourscore = document.querySelector(".yourscore");
//             yourscore.innerHTML = `Your score: ${points}`;
//             let pcscore = document.querySelector(".pcscore");
//             yourscore.innerHTML = `Computer score: ${points}`;
//             let result = document.querySelector(".resultt");
//             yourscore.innerHTML = `Result: Match Draw <span>🥳</span>`;
//             alert("It's a tie!");
//         }
// // Check if user selected and system selected different option
//         else if(userSelectedOption!=systemGeneratedOptions){
//               if(userSelectedOption=="Rock" && systemGeneratedOptions=="Scissor"){
//                 console.log(userSelectedOption);
//                 console.log(systemGeneratedOptions);
//                 resultdiv.style.display= "block"; 
//                 let yourscore = document.querySelector(".yourscore");
//                 yourscore.innerHTML = `Your score: ${points}`;
//                 let pcscore = document.querySelector(".pcscore");
//                 yourscore.innerHTML = `Computer score: ${points-points}`;
//                 let result = document.querySelector(".resultt");
//                 yourscore.innerHTML = `Result: You Win <span>🥳</span>`;
//                 alert("Congratulations! You won!");
//               }
//               else if(userSelectedOption=="Paper" && systemGeneratedOptions=="Rock"){
//                 console.log(userSelectedOption);
//                 console.log(systemGeneratedOptions);
//                 resultdiv.style.display= "block"; 
//                 let yourscore = document.querySelector(".yourscore");
//                 yourscore.innerHTML = `Your score: ${points}`;
//                 let pcscore = document.querySelector(".pcscore");
//                 yourscore.innerHTML = `Computer score: ${points-points}`;
//                 let result = document.querySelector(".resultt");
//                 yourscore.innerHTML = `Result: You Win <span>🥳</span>`;
//                 alert("Congratulations! You won!");
//             }
//               else if(userSelectedOption=="Scissor" && systemGeneratedOptions=="Paper"){
//                 console.log(userSelectedOption);
//                 console.log(systemGeneratedOptions);
//                 resultdiv.style.display= "block"; 
//                 let yourscore = document.querySelector(".yourscore");
//                 yourscore.innerHTML = `Your score: ${points}`;
//                 let pcscore = document.querySelector(".pcscore");
//                 yourscore.innerHTML = `Computer score: ${points-points}`;
//                 let result = document.querySelector(".resultt");
//                 yourscore.innerHTML = `Result: You Win <span>🥳</span>`;
//                 alert("Congratulations! You won!");
//             }   
//               else{
//                   console.log(userSelectedOption);
//                   console.log(systemGeneratedOptions);
//                   resultdiv.style.display= "block"; 
//                   let yourscore = document.querySelector(".yourscore");
//                   yourscore.innerHTML = `Your score: ${points-points}`;
//                   let pcscore = document.querySelector(".pcscore");
//                   yourscore.innerHTML = `Computer score: ${points}`;
//                   let result = document.querySelector(".resultt");
//                   yourscore.innerHTML = `Result: Computer Win <span>🥳</span>`;
//                   alert("Sorry! You lost. Computer wins!");
//               }
//         }    
//         localStorage.removeItem('userSelectedOption');
//     }, 1000);
// }
// let Name = prompt("Enter your name");
// alert(`Welcome ${Name}!`);

let options = ['Rock', 'Paper', 'Scissor'];
let points = 10;
let resultdiv = document.querySelector(".result");
let winningMusic = new Audio('./win.wav');
let loosingMusic = new Audio('./lost.mp3');
function startGame(userSelection) {   
    let user = userSelection;
    Toastify({
      text: `User Selected Option ${userSelection}`,
      duration: 2000,
      close: true,
      style: {
      background: "linear-gradient(to right top, #4a88e6, #9272db, #c553bb, #e42b89, #eb124e)",
      width: "250px", // Limits width
      fontSize: "14px",
      textAlign: "center",
      height: "20px"
    }}).showToast();

    // Store user selection temporarily
    localStorage.setItem('userSelectedOption', user);
    
    // System turn starts after 1 second
    setTimeout(function () {
        let userSelectedOption = localStorage.getItem('userSelectedOption');
        
        // System generates a random option
        let systemGeneratedIndex = Math.floor(Math.random() * options.length);
        let systemSelectedOption = options[systemGeneratedIndex];

        Toastify({
          text: `Computer Selected Option ${systemSelectedOption}`,
          duration: 2000,
          close: true,
          style: {
          background: "linear-gradient(to right top, #4547e7, #8149e5, #aa4ce2, #cb53df, #e75cdb)",
          width: "250px", // Limits width
          fontSize: "14px",
          textAlign: "center",
          height: "20px"
        }}).showToast();

        console.log("User:", userSelectedOption);
        console.log("Computer:", systemSelectedOption);

        resultdiv.style.display = "block"; 

        let yourscore = document.querySelector(".yourscore");
        let pcscore = document.querySelector(".pcscore");
        let result = document.querySelector(".resultt");

        if (userSelectedOption === systemSelectedOption) {
            result.innerHTML = `Result: Match Draw <span>🥳</span>`;
            // alert("It's a tie!");
            US = points;
            PC = points;
            yourscore.innerHTML = `Your score: ${points}`;
            pcscore.innerHTML = `Computer score: ${points}`;
        } 
        else if (
            (userSelectedOption === "Rock" && systemSelectedOption === "Scissor") ||
            (userSelectedOption === "Paper" && systemSelectedOption === "Rock") ||
            (userSelectedOption === "Scissor" && systemSelectedOption === "Paper")
        ) {
            yourscore.innerHTML = `Your score: ${points}`;
            pcscore.innerHTML = `Computer score: ${0}`;
            result.innerHTML = `Result: You Win <span>🥳</span>`;
            winningMusic.play();
            // alert("Congratulations! You won!");
        } 
        else {
            loosingMusic.play();
            yourscore.innerHTML = `Your score: ${10-points}`;
            pcscore.innerHTML = `Computer score: ${points}`;
            result.innerHTML = `Result: Computer Wins <span>🥳</span>`;
            // alert("Sorry! You lost. Computer wins!");
        }
        localStorage.removeItem('userSelectedOption');
    }, 1000);
}
    




