function calculate() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const hypotenuse = parseFloat(document.getElementById('hypotenuse').value);
    let result = '';

    if (a && b && !hypotenuse) {
        const hypo = Math.sqrt(a * a + b * b);
        result = `L'hypoténuse est : ${hypo.toFixed(2)}`;
    } else if (hypotenuse && a && !b) {
        const cathetusB = Math.sqrt(hypotenuse * hypotenuse - a * a);
        result = `La cathète b est : ${cathetusB.toFixed(2)}`;
    } else if (hypotenuse && b && !a) {
        const cathetusA = Math.sqrt(hypotenuse * hypotenuse - b * b);
        result = `La cathète a est : ${cathetusA.toFixed(2)}`;
    } else {
        result = 'Veuillez entrer deux mesures.';
    }

    document.getElementById('result').innerText = result;
}
