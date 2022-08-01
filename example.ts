
class House {
    private windows: number;
    private doors: number;
    private roof: number;

    constructor(windows: number, doors: number, roof: number) {
        this.windows = windows;
        this.doors = doors;
        this.roof = roof;
    }
}

const myOwnHouse = new House(6, 2, 1);