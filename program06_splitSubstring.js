// How do you split a string into an array of substrings with comma separator?
// o "apple,orange,banana";
// o “Stew,Bill,Jenny,Elon”;
// o “Rupees,Dollar,Krone,Pound,Dinar”


function substring(string){
    console.log(`Before string => ${string}`)
    let result = string.split(',');
    console.log(`After => ${result}`);
}

substring("apple,orange,banana");
substring("Stew,Bill,Jenny,Elon");
substring("Rupees,Dollar,Krone,Pound,Dinar");
