const ansatte = "bjørg, eirik, elisabeth, elisabethbr, gavin, hanne, ingunn, kathrine, kristian, larsharald, merethe, tim, tommy, øivind".split(", ")

const status = Array(ansatte.length).fill(false)

const images = ansatte.map((navn, index) => {
	const img = document.createElement("img")
	img.onload = function () {
		status[index] = true
	}
	img.src = navn + ".jpg"
	return img
})

let i = 0
let t = 0
let cycle = true

const img1 = document.querySelector("img#img-1")
const img2 = document.querySelector("img#img-2")
const cross = document.querySelector("span")

loop()

function loop() {
	if (new Date() - t > 500 && cycle && status.every(image => image === true)) {
		t = new Date()
		img1.src = `${ansatte[i]}.jpg`
		img2.src = `${ansatte[(i + ansatte.length / 2) % ansatte.length]}.jpg`
		i++
		i %= ansatte.length
	}
	requestAnimationFrame(loop)
}

document.addEventListener("click", () => cycle = !cycle)