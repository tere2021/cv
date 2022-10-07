document.addEventListener("DOMContentLoaded", () => {
    const $boton = document.querySelector("#exportarPDF")
    $boton.addEventListener("click", () => {
        
        const $elementoParaConvertir = document.body;
        html2pdf()
            .set({
                margin: 2,
                filename: 'cv.pdf',
                image: {
                    type: 'jpeg',
                    quality: 3              
                },
                html2canvas: {
                    scale: 1,
                    letterRendering: true,
                    botom: 20
                },
                jsPDF: {
                    unit: "mm",
                    format: "a4",
                    orientation: 'landscape'
                }
            })
            .from($elementoParaConvertir)
            .save()
            .catch(err => console.log(err))
            .finally()
            .then(() => {
                console.log("Guardado!")
            })
    });
});