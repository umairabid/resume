import "./reset.scss";
import "./styles.scss";
import "./index.pug";

function CreatePDFfromHTML() {
  var width = $(".html-content").width();
  var height = $(".html-content").height();

  var options = {
    dpi: 100,
    scale: 4,
  }

  html2canvas($(".html-content")[0], options).then(function (canvas) {
      var imgData = canvas.toDataURL("image/jpeg", 1.0);
      // const div = document.createElement('div');
      // div.innerHTML = '<img src="'+ imgData +'" />';
      // document.body.appendChild(div);
      var pdf = new jsPDF('p', 'pt', [width, height]);
      pdf.addImage(imgData, 'JPG', -10, 0, width, height);
      pdf.save("Your_PDF_Name.pdf");
  });
}

window.createPdf = CreatePDFfromHTML;