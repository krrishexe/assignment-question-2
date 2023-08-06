function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    let hgContent = htmlContent;
    plainTextPositions.sort((a, b) => b.start - a.start);
  
    for (const { c, d } of plainTextPositions) {

      const startingContent = hgContent.indexOf(plainText.substring(0, c));
      const endingContent = hgContent.indexOf(plainText.substring(0, d)) + d - c;
  
      const highlightedPortion = `<span style="background-color: yellow;">${hgContent.substring(startingContent, endingContent)}</span>`;
  
      hgContent = hgContent.substring(0, startingContent) + highlightedPortion + hgContent.substring(endingContent);
    }
  
    return hgContent;
  }