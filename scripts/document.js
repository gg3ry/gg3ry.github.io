function pdf() {
    var pdf = document.getElementById("pdf")
    var docx = document.getElementById("docx")
    if (pdf.style.display == "block") {
        pdf.style.display = "none"
    }
    else {
        pdf.style.display = "block"
        docx.style.display = "none"
    }
}
function docx() {
    var docx = document.getElementById("docx")
    var pdf = document.getElementById("pdf")
    if (docx.style.display == "block") {
        docx.style.display = "none";
    }
    else {
        docx.style.display = "block";
        pdf.style.display = "none";
    }
}
