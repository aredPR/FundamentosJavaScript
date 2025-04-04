function createCube(size) {
    const arrayA = [];
    const frenteA = '/\\';
    const atrasA = '_\\'
    const frenteB = '\\/';
    const atrasB = '_/'
    for(let i = 0; i < size; i++){
        let fila = ' '.repeat(i);
        let fila2 = ' '.repeat(i);
        fila += frenteA.repeat(size - i);
        fila += atrasA.repeat(size);
        arrayA.unshift(fila);
        fila2 += frenteB.repeat(size - i);
        fila2 += atrasB.repeat(size);
        arrayA.push(fila2);
    }
    return arrayA.join('\n');
}

const cube = createCube(10);
console.log(cube);
