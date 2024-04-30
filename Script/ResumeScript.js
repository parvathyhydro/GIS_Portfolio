function startDownload(){
    var pdfPath = "Document/Parvathy Menon Resume.pdf";
    var link = document.createElement('a');
    link.href = pdfPath;

    link.download = 'Parvathy Menon Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}




  
  