function palindrome(str) {
  const cleanedString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  if(cleanedString === cleanedString.split('').reverse().join('')){
  return true;
  }
  else{
    return false;
  }
}

palindrome("eye");
