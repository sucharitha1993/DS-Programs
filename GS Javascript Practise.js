// 1.

// Javascript program to find smallest and
// second smallest elements

function print2Smallest(arr) {
    let first, second;

    const arr_size = arr.length;

    /* There should be atleast two elements */
    if (arr_size < 2) {
        document.write(" Invalid Input ");
        return;
    }

    first = Number.MAX_VALUE;
    second = Number.MAX_VALUE;

    for (let i = 0; i < arr_size; i++) {
        /* If current element is smaller than first
        then update both first and second */
        if (arr[i] < first) {
            second = first;
            first = arr[i];
        }

        /* If arr[i] is in between first and second
        then update second */
        else if (arr[i] < second && arr[i] != first)
            second = arr[i];
    }

    if (second == Number.MAX_VALUE)
        document.write("There is no second smallest element\n");
    else
        document.write("The smallest element is " + first + " and second " +
            "Smallest element is " + second + '\n');
}

// Driver program
let arr = [12, 13, 1, 10, 34, 1];
print2Smallest(arr);

// https://www.geeksforgeeks.org/to-find-smallest-and-second-smallest-element-in-an-array/


// ------------------------- ************ ------------------------------

// 4 

// An efficient program to print all
// anagrams together  
let NO_OF_CHARS = 26;

// Class to represent a Trie Node
class TrieNode {
    constructor() {
        this.isEnd = false;  // indicates end of word

        // 26 slots each for 'a' to 'z'
        this.child = new Array(NO_OF_CHARS);

        for (let i = 0; i < NO_OF_CHARS; ++i)
            this.child[i] = null;

        // head of the index list
        this.head = [];
    }
}

// A utility function to insert a word to Trie
function insert(root, word, index, i) {

    // Base case
    if (root == null) {
        root = new TrieNode();
    }
    if (i < word.length) {
        let index1 = word[i].charCodeAt(0) - 'a'.charCodeAt(0);

        root.child[index1] = insert(root.child[index1],
            word, index, i + 1);
    }
    else  // If end of the word reached
    {
        // Insert index of this word to end of
        // index linked list
        if (root.isEnd == true) {
            root.head.push(index);
        }
        else // If Index list is empty
        {
            root.isEnd = true;
            root.head.push(index);
        }
    }
    return root;
}

// This function traverses the built trie. When a leaf
// node is reached, all words connected at that leaf
// node are anagrams. So it traverses the list at leaf 
// node and uses stored index to print original words
function printAnagramsUtil(root, wordArr) {
    if (root == null)
        return;

    // If a lead node is reached, print all anagrams
    // using the indexes stored in index linked list
    if (root.isEnd) {
        // traverse the list
        for (let pCrawl = 0; pCrawl < root.head.length; pCrawl++)
            document.write(wordArr[root.head[pCrawl]] + "<br>");
    }

    for (let i = 0; i < NO_OF_CHARS; ++i)
        printAnagramsUtil(root.child[i], wordArr);
}

// The main function that prints all anagrams together.
// wordArr[] is input sequence of words.
function printAnagramsTogether(wordArr, size) {
    // Create an empty Trie
    let root = null;

    // Iterate through all input words
    for (let i = 0; i < size; ++i) {
        // Create a buffer for this word and copy the
        // word to buffer
        let buffer = wordArr[i].split("");

        // Sort the buffer
        (buffer).sort();

        // Insert the sorted buffer and its original
        // index to Trie
        root = insert(root, (buffer).join(""), i, 0);

    }

    // Traverse the built Trie and print all anagrams
    // together
    printAnagramsUtil(root, wordArr);
}

// Driver program to test above functions
let wordArr = ["cat", "dog", "tac", "god",
    "act", "gdo"];

let size = wordArr.length;
printAnagramsTogether(wordArr, size);

// https://www.geeksforgeeks.org/given-a-sequence-of-words-print-all-anagrams-together-set-2/
// https://stackoverflow.com/questions/909449/anagrams-finder-in-javascript

// ------------------------- ************ ------------------------------

// 6
// First unique character of a string. E.g. aabbdcce . Output : d

var firstUniqChar = function (s) {
    let inputString = s;
    for (i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
            return inputString.charAt(i);
        }
    }
    return -1
}

firstUniqChar("aabbdcce");

// ------------------------- ************ ------------------------------

// 7

// Largest substring with unique characters

function lengthOfLongestSubstring(string) {
    var max = 0, current_string = "", i, char, pos;

    for (i = 0; i < string.length; i += 1) {
        char = string.charAt(i);
        pos = current_string.indexOf(char);
        if (pos !== -1) {
            // cut "dv" to "v" when you see another "d"
            current_string = current_string.substr(pos + 1);
        }
        current_string += char;
    }
    return current_string;
}

lengthOfLongestSubstring("aaabcbdeaf");

// ------------------------- ************ ------------------------------


// 9

// Program to add two fractions


// Javascript program to add 2 fractions 

// Function to return gcd of a and b 

const gcd = (a, b) => {
    if (a == 0)
        return b;
    return gcd(b % a, a);
}

// Function to convert the  
// obtained fraction into  
// it's simplest form 

const lowest = (den3, num3) => {
    // Finding gcd of both terms 
    let common_factor = gcd(num3, den3);

    // Converting both terms   
    // into simpler terms by  
    // dividing them by common factor  

    den3 = parseInt(den3 / common_factor);
    num3 = parseInt(num3 / common_factor);

    document.write(`${num3}/${den3}`)
}


// Function to add two fractions 
const addFraction = (num1, den1, num2, den2) => {
    // Finding gcd of den1 and den2 
    let den3 = gcd(den1, den2);

    // Denominator of final  
    // fraction obtained finding  
    // LCM of den1 and den2 
    // LCM * GCD = a * b  
    den3 = (den1 * den2) / den3;

    // Changing the fractions to  
    // have same denominator Numerator 
    // of the final fraction obtained 
    let num3 = ((num1) * (den3 / den1) +
        (num2) * (den3 / den2));

    // Calling function to convert  
    // final fraction into it's  
    // simplest form 
    lowest(den3, num3);
}

// Driver Code 
let num1 = 1;
let den1 = 500;
let num2 = 2;
let den2 = 1500;

document.write(`${num1}/${den1} + ${num2}/${den2} is equal to `);

addFraction(num1, den1, num2, den2);

// https://www.geeksforgeeks.org/program-to-add-two-fractions/


// --------------------- *********************** -----------------------

// 10

// Largest palindrome in a given string

var longestPalindrome = function (string) {

    var length = string.length;
    var result = "";

    var centeredPalindrome = function (left, right) {
        while (left >= 0 && right < length && string[left] === string[right]) {
            //expand in each direction.
            left--;
            right++;
        }

        return string.slice(left + 1, right);
    };

    for (var i = 0; i < length - 1; i++) {
        var oddPal = centeredPalindrome(i, i + 1);

        var evenPal = centeredPalindrome(i, i);

        if (oddPal.length > 1)
            console.log("oddPal: " + oddPal);
        if (evenPal.length > 1)
            console.log("evenPal: " + evenPal);

        if (oddPal.length > result.length)
            result = oddPal;
        if (evenPal.length > result.length)
            result = evenPal;
    }
    return "the palindrome is: " + result + " and its length is: " + result.length;
};

console.log(
    longestPalindrome("nan noon is redder")
);

// https://stackoverflow.com/questions/33676577/longest-palindrome-in-a-string


// --------------------- ********************** --------------------

// 14

// Find out the number of pair from given integer array whose sum isequal to a given number.

let twoSum = (array, sum) => {
    let hashMap = {},
        results = []

    for (let i = 0; i < array.length; i++) {
        if (hashMap[array[i]]) {
            results.push([hashMap[array[i]], array[i]])
        } else {
            hashMap[sum - array[i]] = array[i];
        }
    }
    return results;
}
console.log(twoSum([10, 20, 10, 40, 50, 60, 70, 30], 50));


// https://stackoverflow.com/questions/36967053/pair-of-elements-from-a-specified-array-whose-sum-equals-a-specific-target-numbe#:~:text=function%20arraypair(array%2Csum)%7B,SUM%20'%20%2B%20sum)%3B%20console.


// ---------------------------- ************************** ------------------------

// 15

// Javascript program to find characters that
// needs to be added to make Pangram

function missingChars(str, strLength) {
    let MAX_CHARS = 26;

    // A boolean array to store
    // characters present in string.
    let present = new Array(MAX_CHARS);
    present.fill(false);
    let charsList = [];

    // Traverse string and mark
    // characters present in string.
    for (let i = 0; i < strLength; i++) {
        if ('A'.charCodeAt() <= str[i].charCodeAt() && str[i].charCodeAt() <= 'Z'.charCodeAt())
            present[str[i].charCodeAt() - 'A'.charCodeAt()] = true;
        else if ('a'.charCodeAt() <= str[i].charCodeAt() && str[i].charCodeAt() <= 'z'.charCodeAt())
            present[str[i].charCodeAt() - 'a'.charCodeAt()] = true;
    }

    // Store missing characters
    // in alphabetic order.
    for (let i = 0; i < 26; i++) {
        if (present[i] == false) {
            charsList.push(String.fromCharCode(i + 'a'.charCodeAt()));
        }
    }
    return charsList;
}

let str = "The quick brown fox jumps over the dog";
let missing = missingChars(str, str.length);
if (missing.length >= 1) {
    for (let i = 0; i < missing.length; i++) {
        document.write(missing[i]);
    }
}

// https://www.geeksforgeeks.org/missing-characters-make-string-pangram/


// ------------------ ************************* -----------------------

// 16

// javascript program to check given 
// number y is power of x{
function isPower(x, y) {

    // logarithm function to
    // calculate value
    var res1 = parseInt(Math.log(y)) /
        parseInt(Math.log(x));

    // Note : this is var          
    var res2 = Math.log(y) /
        Math.log(x);

    // compare to the result1 or
    // result2 both are equal
    return (res1 == res2);
}

// Driver Code
if (isPower(27, 729))
    document.write("1");
else
    document.write("0");


// https://www.geeksforgeeks.org/check-if-a-number-is-power-of-another-number/

// ------------------------------ ********************** ------------------------------------------

// 18 -nth fibonacci number

let fibonacci = (num) => {
    //initalize
    let a = 0;
    let b = 1;

    //to store the sum
    let c = 0;

    //iterate till the given num
    for (let i = 2; i <= num; i++) {
        //sum of last two numbers
        c = a + b;

        //assign the last value to first     
        a = b;

        //assign the sum to the last
        b = c;
    }

    //if the num is 0 then return a else return b;
    return num ? b : a;
}

// https://learnersbucket.com/examples/algorithms/program-to-find-the-nth-fibonacci-number/

// --------------------------- ****************************** -----------------------------

// 20

// A simple Javascript program for
// implementation of atoi

// A simple atoi() function
function myAtoi(str) {
    // Initialize result
    let res = 0;

    // Iterate through all characters
    // of input string and update result
    // take ASCII character of corresponding digit and
    // subtract the code from '0' to get numerical
    // value and multiply res by 10 to shuffle
    // digits left to update running total
    for (let i = 0; i < str.length; ++i)
        res = res * 10 + str[i].charCodeAt(0) - '0'.charCodeAt(0);

    // return result.
    return res;
}

// Driver code
let str = "89789";

// Function call
let val = myAtoi(str);
document.write(val);


// ----------------- *********************** ----------------------------------

// 21

// Find if a given number is Armstrong number 

let sum = 0;
const number = prompt('Enter a three-digit positive integer: ');

// create a temporary variable
let temp = number;
while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// check the condition
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}

// ---------------------------- ******************************* --------------------------------------

// 23

// Given an array of Employees with name,marks. Find out the maximum average marks from the list

const Students = [{
    name: 'Bob',
    marks: [78, 80, 89, 90, 68],
},
{
    name: 'Alin',
    marks: [87, 60, 59, 70, 68],
},
{
    name: 'bikash',
    marks: [82, 60, 79, 60, 80],
},
];

var average;
for (let i = 0; i < Students.length; i++) {
    var marks = Students[i]["marks"];
    var total = 0;
    console.log(marks);
    for (var j = 0; j < marks.length; j++) {
        total += marks[j];
    }
    average = total / marks.length;

    // answer for question in the comment
    var msg = Students[i]["name"] + " has average mark: " + average;
    console.log(msg)

}

console.log(average)

// --------------------------------- **************************** ---------------------------


// 29

// Possible to make a divisible by 3 number using all digits in an array

function isPossibleToMakeDivisible(arr, n) {
    // Find remainder of sum when divided by 3
    var remainder = 0;
    for (i = 0; i < n; i++)
        remainder = (remainder + arr[i]) % 3;

    // Return true if remainder is 0.
    return (remainder == 0);
}

var arr = [40, 50, 90];
var n = 3;
if (isPossibleToMakeDivisible(arr, n))
    document.write("Yes\n");
else
    document.write("No\n");


// --------------------------- ********************** --------------------------

// 34

// // Javascript program to print reverse
// of words in a string.
function wordReverse(str) {
    var i = str.length - 1;
    var start, end = i + 1;
    var result = "";

    while (i >= 0) {
        if (str[i] == ' ') {
            start = i + 1;
            while (start != end)
                result += str[start++];

            result += ' ';
            end = i;
        }
        i--;
    }
    start = 0;

    while (start != end)
        result += str[start++];

    return result;
}

// Driver code
var str = "I AM A GEEK";

document.write(wordReverse(str));

// https://www.geeksforgeeks.org/print-words-string-reverse-order/

// ------------------------- ******************************** -----------------------------


// 37

// Find the first repeated word in a string.

const str = "big black bug bit a big black dog on his big black nose";
const findDuplicateWords = str => {
    const strArr = str.split(" ");
    const res = [];
    for (let i = 0; i < strArr.length; i++) {
        if (strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])) {
            if (!res.includes(strArr[i])) {
                res.push(strArr[i]);
            };
        };
    };
    return res.join(" ");
};
console.log(findDuplicateWords(str));

// https://www.tutorialspoint.com/finding-duplicate-words-in-a-string-javascript

// ------------------------------ ************************************** ---------------------------------

// 38

// Program to find Smallest and Largest Word in a String.

let minWord = "";
let maxWord = "";

function minMaxLengthWords(input) {
    // minWord and maxWord are received by reference
    // and not by value
    // will be used to store and return output
    let len = input.length;
    let si = 0, ei = 0;
    let min_length = len;
    let min_start_index = 0;
    let max_length = 0;
    let max_start_index = 0;

    // Loop while input string is not empty
    while (ei <= len) {
        if (ei < len && input[ei] != ' ') {
            ei++;
        }
        else {
            // end of a word
            // find curr word length
            let curr_length = ei - si;

            if (curr_length < min_length) {
                min_length = curr_length;
                min_start_index = si;
            }

            if (curr_length > max_length) {
                max_length = curr_length;
                max_start_index = si;
            }
            ei++;
            si = ei;
        }
    }

    // store minimum and maximum length words
    minWord =
        input.substring(min_start_index, min_start_index + min_length);

    maxWord =
        input.substring(max_start_index, max_length);

}

// Driver code

let a = "GeeksforGeeks A Computer Science portal for Geeks";

minMaxLengthWords(a);

// to take input in string use getline(cin, a);
document.write("Minimum length word: "
    + minWord + "<br>"
    + "Maximum length word:  "
    + maxWord);


// https://www.geeksforgeeks.org/program-find-smallest-largest-word-string/


// ------------------------ *************************** -----------------------------

// 40

// Given a string str and a character x, find last index of x in str.

function findLastIndex(str, x) {
    let index = -1;
    for (let i = 0; i < str.length; i++)
        if (str[i] == x)
            index = i;
    return index;
}


// Driver code

// String in which char is to be found
let str = "geeksforgeeks";

// char whose index is to be found
let x = 'e';

let index = findLastIndex(str, x);
if (index == -1)
    document.write("Character not found");
else
    document.write("Last index is " + index);

// ---------------------------- ******************************** -------------------------------


// 41

// Given a string and a delimiter character. Split the string based on the delimiter and print the list of resulting sub strings.

function splitStrings(str, dl) {
    var word = "";

    // to count the number of split strings
    var num = 0;

    // adding delimiter character at the end
    // of 'str'
    str = str + dl;

    // length of 'str'
    var l = str.length;

    // traversing 'str' from left to right
    var substr_list = [];
    for (var i = 0; i < l; i++) {

        // if str[i] is not equal to the delimiter
        // character then accumulate it to 'word'
        if (str[i] != dl)
            word = word + str[i];

        else {

            // if 'word' is not an empty string,
            // then add this 'word' to the array
            // 'substr_list[]'
            if (word.length != 0)
                substr_list.push(word);

            // reset 'word'
            word = "";
        }
    }

    // return the splitted strings
    return substr_list;
}

// Driver program to test above
var str = "geeks;for;geeks";
var dl = ';';
var res = splitStrings(str, dl);
res.forEach(x => {

    document.write(x + "<br>");
});

// https://www.geeksforgeeks.org/split-string-substrings-using-delimiter/

// ---------------------- ************************ --------------------------


// 42

// Given a sentence, task is to remove spaces from the sentence and rewrite in Camel case. It is a style of writing where we don’t have spaces and all words begin with capital letters.

function convert(s) {
    var n = s.length;

    var str = "";
    for (var i = 0; i < n; i++) {

        // check for spaces in the sentence
        if (s[i] == ' ') {
            // conversion into upper case
            str += s[i + 1].toUpperCase();
            i++;

        }

        // If not space, copy character
        else {

            str += s[i];
        }
    }

    // return string to main
    return str;
}

var str = "I get intern at geeksforgeeks";
document.write(convert(str));

// https://www.geeksforgeeks.org/camel-case-given-sentence/

// -------------- ******************** ----------------------

// 44

//Given a string, sort it in descending order. Input : mupursingh Output : uusrpnmihg


// Javascript program to sort a string of characters
// in descending order
let MAX_CHAR = 26;

// function to print string in sorted order
function sortString(str) {

    // Hash array to keep count of characters.
    // Initially count of all charters is
    // initialized to zero.
    let charCount = new Array(MAX_CHAR);
    for (let i = 0; i < charCount.length; i++) {
        charCount[i] = 0;
    }

    // Traverse string and increment
    // count of characters
    // 'a'-'a' will be 0, 'b'-'a' will be 1,
    for (let i = 0; i < str.length; i++) {

        // so for location of character in count
        // array we will do str[i]-'a'.
        charCount[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Traverse the hash array and print
    // characters
    for (let i = MAX_CHAR - 1; i >= 0; i--) {
        for (let j = 0; j < charCount[i]; j++) {
            document.write(String.fromCharCode('a'.charCodeAt(0) + i));
        }
    }
}

// Driver code
let s = "mupursingh";
sortString(s);

// or 

function descOrder(s) {
    s.sort().reverse();
    str1 = s.join("");
    document.write(str1);
}

var s = "mupursingh";
s = s.split("");

// function call
descOrder(s);

// https://www.geeksforgeeks.org/program-sort-string-descending-order/

// ------------------------ ************************ ---------------------------

// 45

function findProductSum(A, n) {
    let product = 0;
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            product = product + A[i] * A[j];
    return product;
}

// Driver code 
let A = [1, 3, 4];
let n = A.length;

document.write("sum of product of all pairs " +
    "of array elements : " + findProductSum(A, n));

// https://www.geeksforgeeks.org/sum-product-pairs-array-elements/

// ------------------------ ********************** -----------------------------

// 47

// Given a linked list, check if the the linked list has loop or not.

// JavaScript program to detect loop in a linked list
var head; // head of list

/* Linked list Node */
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}
/* Inserts a new Node at front of the list. */
function push(new_data) {
    /*
     * 1 & 2: Allocate the Node & Put in the data
     */
    var new_node = new Node(new_data);

    /* 3. Make next of new Node as head */
    new_node.next = head;

    /* 4. Move the head to point to new Node */
    head = new_node;
}

// Returns true if there is a loop in linked
// list else returns false.
function detectLoop(h) {
    var s = new Set();
    while (h != null) {
        // If we have already has this node
        // in hashmap it means their is a cycle
        // (Because you we encountering the
        // node second time).
        if (s.has(h))
            return true;

        // If we are seeing the node for
        // the first time, insert it in hash
        s.add(h);

        h = h.next;
    }

    return false;
}

/* Driver program to test above function */


push(20);
push(4);
push(15);
push(10);

/* Create loop for testing */
head.next.next.next.next = head;

if (detectLoop(head))
    document.write("Loop found");
else
    document.write("No Loop");


// ------------------- ***************** ----------------------------

// Javascript program to find mean
// and median of an array

// Function for
// calculating mean
function findMean(a, n) {
    let sum = 0;
    for (let i = 0; i < n; i++)
        sum += a[i];

    return sum / n;
}

// Function for
// calculating median
function findMedian(a, n) {
    // First we sort
    // the array
    a.sort();

    // check for
    // even case
    if (n % 2 != 0)
        return a[n / 2];

    return (a[Math.floor((n - 1) / 2)] +
        a[n / 2]) / 2;
}

// Driver Code

let a = [1, 3, 4, 2, 7, 5, 8, 6]
let n = a.length;

// Function call
document.write("Mean = " + findMean(a, n) + "<br>");
document.write("Median = " + findMedian(a, n));

// https://www.geeksforgeeks.org/program-for-mean-and-median-of-an-unsorted-array/

// --------------------- ********************* ----------------------

// 50

// Write a program that prints a staircase of size.

function staircase(n) {
    var line = Array(n + 1).fill(' ');
    line[n] = '\n';
    for (var i = n - 1; i >= 0; i--) {
        line[i] = '#';
        console.log(line.join(''));
    }
}

// https://codereview.stackexchange.com/questions/135944/printing-staircase-revisited

// ------------------------ *********************** --------------------------

// 51

// Implement Queue using Stacks

// Javascript program to implement Queue using  
// two stacks with costly enQueue()  
class Queue {

    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    enQueue(x) {

        // Move all elements from s1 to s2 
        while (this.s1.length != 0) {
            this.s2.push(this.s1.pop());
            //s1.pop(); 
        }

        // Push item into s1 
        this.s1.push(x);

        // Push everything back to s1 
        while (this.s2.length != 0) {
            this.s1.push(this.s2.pop());
            //s2.pop(); 
        }
    }

    // Dequeue an item from the queue  
    deQueue() {

        // If first stack is empty 
        if (this.s1.length == 0) {
            document.write("Q is Empty");
        }

        // Return top of s1 
        let x = this.s1[this.s1.length - 1];
        this.s1.pop();
        return x;
    }
}

// Driver code
let q = new Queue();
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);

document.write(q.deQueue() + "<br>");
document.write(q.deQueue() + "<br>");
document.write(q.deQueue() + "<br>");

// ------------------------- *********************** ------------------------

