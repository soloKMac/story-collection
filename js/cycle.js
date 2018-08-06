/* Cycle through chapters in the story*/

var chapters=new Array(
"abso-ch1.html",
"abso-ch2.html",
"abso-ch3.html");

//The above is all you need to change!
//Note for me: Not really, you still have to change the index number on each page and declare it var ThisPageNumber=2;
//We want to automatically discover the number of files in the array

var NumberOfFiles=chapters.length;

//Next find out which page this one is. We use the location.href property and extract the filename from this string using lastIndexOf

var StringA=location.href;

var LengthA=StringA.length;

var A=StringA.lastIndexOf("/")+1;

ThisFilename=StringA.substring(A,LengthA);

//Now we find the current page nunmber (in the list)

//Remember that Arrays start at 0 and end at number of

//elements less one. So the last element is:

n=NumberOfFiles-1;

//Now we look through to list to find our file, and

//therefore, its number in the list:

for (var i = 0; i <= n; i++)

{

if (chapters[i]==ThisFilename)

{

ThisPageNumber=i;

}

}

//determine the numbers of the previous and the next pages//

function goback(){



if (ThisPageNumber-1<0)

//We don't want to go into negative numbers or numbers

//bigger than the number of files! So if the file number less

//one is less than zero, there is nowhere left to go!

{

alert("You are at the beginning of the series")

}

//Otherwise we just take one of the current file number

//and get the number for the previous file:

else

{top.location=chapters[ThisPageNumber-1]}}

function goforward(){



if (ThisPageNumber+1>n){

alert("You are at the end of the series")

//If the user is clicking on the last file, he or she

//cannot go forward. Otherwise, the next file is the current

//file number plus one:

}

else

{top.location=chapters[ThisPageNumber+1]}}



//and so that's our code. All we have to do is to change files

//in the Array database! Nice and lazy!
