function reverse(string) {
   let newString=string.split(" ");
   let reverse;
   let stringReversed=[]
    for (let i = 0; i < newString.length; i++) {  
        reverse=[]  
    for (let j = newString[i].length -1; j >=0 ; j--) {
        reverse+=( newString[i][j]);      
    }
      stringReversed.push(reverse)
    }
  return stringReversed.join(" ")
}
console.log( (reverse("this is a test")));

// git merge, git rebase ; git revert, git reset

