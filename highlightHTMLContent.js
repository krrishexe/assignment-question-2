function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    let highlightedContent = htmlContent;
  
    plainTextPositions.sort((a, b) => b.start - a.start);
  
    for (const { start, end } of plainTextPositions) {

      const htmlStart = highlightedContent.indexOf(plainText.substring(0, start));
      const htmlEnd = highlightedContent.indexOf(plainText.substring(0, end)) + end - start;
  
      const highlightedPortion = `<span style="background-color: yellow;">${highlightedContent.substring(htmlStart, htmlEnd)}</span>`;
  
      highlightedContent = highlightedContent.substring(0, htmlStart) + highlightedPortion + highlightedContent.substring(htmlEnd);
    }
  
    return highlightedContent;
  }
  
  const htmlContent = '<p>SteelEye is the best !!!</p>';
  const plainText = 'Krish works at SteelEye';
  const plainTextPositions = [{ start: 0, end: 12 }, { start: 18, end: 29 }];
  console.log(highlightHTMLContent(htmlContent, plainText, plainTextPositions));
  