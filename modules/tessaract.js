const Tessaract = require('tesseract.js');

let TessaractConvert = async (req, res) => {
    const worker = await Tessaract.createWorker({
        logger: m => console.log(m)
    })
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
    res.send({
        message: text
    })
    console.log(text);
    await worker.terminate();
}

module.exports = TessaractConvert;