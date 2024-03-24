// 14. Remove character from the string: Define a function removeChar( ) with two 
// arguments and call this function for below strings. This function must return the string 
// after character removal. Note: arg2 is the char that needs to remove
// o arg1: “Java@Script”, arg2: ‘@’ Expected String: JavaScript
// o arg1: “Softyware”, arg2: ‘y’ Expected String: Software
// o arg1: “Code mind”, arg2: ‘ ’ Expected String: Codemind


function removeChar(arg1 , arg2){
    
    let result =  arg1.split(arg2).join('');
    console.log(`Before Given String '${arg1}' After Removing '${arg2}' The Result is '${result}'`);
 }




removeChar("Java@Script" , "@");
removeChar("Softyware" , "y");
removeChar("Code mind" , " ");

