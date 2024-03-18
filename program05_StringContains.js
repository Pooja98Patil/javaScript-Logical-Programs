// WAP to check whether given strings contains word ‘UI’ or not?
//  “React - UI Developer”
//  “UI Developer”
//  “Front end and backend technologies”
//  “MEAN or MERN – UI Developer”


function wordCheck(word){
  let result = word.includes("UI");
  return result;
}

let exmp01 = wordCheck("React - UI Developer");
console.log(`The given Sentance "React - UI Developer" Containes word "UI" => ${exmp01}`)

let exmp02 = wordCheck("UI Developer");
console.log(`The given Sentance "UI Developer" Containes word "UI" => ${exmp02}`)

let exmp03 = wordCheck("Front end and backend technologies");
console.log(`The given Sentance "Front end and backend technologies" Containes word "UI" => ${exmp03}`)

let exmp04 = wordCheck("MEAN or MERN - UI Developer");
console.log(`The given Sentance "MEAN or MERN - UI Developer" Containes word "UI" => ${exmp01}`)