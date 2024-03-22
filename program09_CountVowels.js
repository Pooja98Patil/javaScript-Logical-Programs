// Program to count vowels: Define a function vowelsCount( ) with one argument and 
// call this function by passing below strings one by one. This function must return the 
// vowels count that’s been passed as an argument.
// o “JavaScript”
// o “HTML and CSS”
// o “Language Of Internet”
// o “I am UI Developer”
// o “Do or Die”
//  Note: While counting vowel, consider the lower & upper-case vowels as well



function vowelsCount(string){
      const vowels = 'aeiouAEIOU';
      let count = 0;
     for (const char of string) {

        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

const strings = [
    "JavaScript",
    "HTML and CSS",
    "Language Of Internet",
    "I am UI Developer",
    "Do or Die"
];

// Call the function for each string and log the result
strings.forEach(string => {
    const count = vowelsCount(string);
    console.log(`Number of vowels in '${string}': ${count}`);
});