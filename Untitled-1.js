const figure = () => {
    let figure = {
        sideA: 50,
        sideB: 100,
        square() {
            alert(`Square : ${this.sideA * this.sideB}`);
        },
        perimeter() {
            alert(`Perimeter: ${2 * (this.sideA + this.sideB)}`);
        },
        threeD() {
            this.sideC = +prompt(`Input side c`);
            alert(`Side c : ${this.sideC}`);
        },
        figName() {
            this.name = prompt(`Input name`);
            alert(`name : ${this.name}`);
        },
        conversion() {
            this.sideA = this.sideA / 100;
            this.sideB = this.sideB / 100;
            this.sideC = this.sideC / 100;
            alert(`Side A : ${this.sideA} m, side B : ${this.sideB} m, side C ${this.sideC} m `);
        }


