require('./models')
const Color = require('./models/Color')

async function createColor() {
    try {
        const newColor = new Color({
            name: "Violet", 
            hex: "#7F00FF",
            rgb: "(127, 0, 255)",
            hsl: "(270, 100%, 50%)",
            position: "Violet is the color of light at the short wavelength end of the visible spectrum, between blue and invisible ultraviolet. Violet light has a wavelength between approximately 380 and 450 nanometers."
    
        })
        const savedColor = await newColor.save()
        console.log(savedColor)
    } catch(error) {
        console.log(error)
    }
}

createColor()