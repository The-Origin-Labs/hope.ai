const Tessaract = require('tesseract.js');

let TessaractConvert = async (req, res) => {
    const worker = await Tessaract.createWorker({
        logger: m => console.log(m)
    })
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize('sample/images-sample.png');
    res.send({
        message: text
    })
    console.log(text);
    await worker.terminate();
}

let TessaractClient = async (req, res) => {
    
    const worker = await Tessaract.createWorker({
        logger: m => console.log(m)
    })
    let { imagepath } = req.body
    await worker.loadLanguage('eng');   
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(imagepath);
    res.send({
        generation: "success",
        status: 201,
        message: text
    })
    console.log(text);
    await worker.terminate();
}

module.exports = {
    TessaractConvert,
    TessaractClient
};