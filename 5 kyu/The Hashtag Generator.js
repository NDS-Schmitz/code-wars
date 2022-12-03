function generateHashtag(str) {
  console.log(str);
  str = str.replace(/\s+/g, " ").trim();
  if (str.length > 0 && str !== undefined) {
    const names = str.toLowerCase().split(" ");
    let nameFix = [];
    for (let n of names) {
      nameFix.push(n[0].toUpperCase() + n.slice(1));
    }
    nameFix = nameFix.toString().replace(/\s/g, "");
    let result = "#" + nameFix.replace(/,/gi, "");
    if (result.length <= 140) {
      return result;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
