
describe('Testing OCR conversion', () => {
  
    it('passes', () => {
        cy.request("POST", "/v1/ocr", {
            "imagepath": "https://i.ytimg.com/vi/tac55PdUmf8/maxresdefault.jpg"
        }).then((res) => {
            expect(res.body.generation).to.eq("success")
            expect(res.body.status).to.eq(201)
            expect(res.body.message).to.eq("How to create\nrandom, sample text\nin Microsoft Word\n© Kent Lofgren, Sweden\n")

        })
    })

    it('passes', () => {
        cy.request("GET", "/v1/test/generate")
        .then((res) => {
            expect(res.body.message).to.eq("The quick brown fox\njumped over the 5\nlazy dogs!\n")
        })
    })
})