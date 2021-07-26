function styleHyphenFormat(propertyName) {
    const match = /[A-Z]/g
    function upperToHyphenLower(match) {
      return '-' + match.toLowerCase();
    }
    return propertyName.replace(match, upperToHyphenLower);
  }
  
  console.log(styleHyphenFormat('borderTop'))