import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: " Enter Your Name: "
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select Your Opponent",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    // Skeleton    
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: " Select Opt",
            choices: ["Attack", "Drint Portion", "Run For Your Life...."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("Congratulation, You Win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drint Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green.italic(`You Drink Health Portion Your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Your Life....") {
            console.log(chalk.red.bold.italic("You Loose, Better luck next time"));
            process.exit();
        }
    }
    // Assassin
    if (opponent.select == "Assassin") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: " Select Opt",
            choices: ["Attack", "Drint Portion", "Run For Your Life...."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("Congratulation, You Win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drint Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green.italic(`You Drink Health Portion Your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Your Life....") {
            console.log(chalk.red.bold.italic("You Loose, Better luck next time"));
            process.exit();
        }
    }
    // Zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: " Select Opt",
            choices: ["Attack", "Drint Portion", "Run For Your Life...."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("Congratulation, You Win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drint Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green.italic(`You Drink Health Portion Your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Your Life....") {
            console.log(chalk.red.bold.italic("You Loose, Better luck next time"));
            process.exit();
        }
    }
} while (true);