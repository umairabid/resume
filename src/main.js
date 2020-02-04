import "./reset.scss";
import "./styles.scss";
import "./index.pug";

function CreatePDFfromHTML() {
  var width = $(".html-content").width();
  var height = $(".html-content").height();
  var top_left_margin = 0;

  html2canvas($(".html-content")[0]).then(function (canvas) {
      var imgData = canvas.toDataURL("image/svg", 1.0);
      var pdf = new jsPDF('p', 'pt', [width, height]);
      pdf.addImage(imgData, 'SVG', -10, 0, width, height);
      pdf.save("Your_PDF_Name.pdf");
  });
}

window.createPdf = CreatePDFfromHTML;

// setTimeout(CreatePDFfromHTML, 5000)