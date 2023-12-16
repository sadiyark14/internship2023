function rot13(str) {
  const Acode = 'A'.charCodeAt();
  const Ncode = 'N'.charCodeAt();
  const Zcode = 'Z'.charCodeAt();

  return [...str].map(e => {
    const code = e.charCodeAt();
    return (Acode <= code && code <= Zcode)
      ? (code < Ncode) ? String.fromCharCode(code + 13) : String.fromCharCode(code - 13)
      : e;
  }).join("");
}

console.log(rot13("SERR PBQR PNZC"));
