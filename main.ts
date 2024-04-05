#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

let toDo: string[] = [];
console.log(chalk.red("\n\tWelcome To the Todo List App\n"));
async function maketodo(toDo: string[]) {
  do {
    //console.log(chalk.red("\n\tWelcome To the Todo List App\n"));

    let operation = await inquirer.prompt([
      {
        type: "list",
        name: "operator",
        message: "What you want to do?",
        choices: ["Add", "Read", "Update", "Delete"],
      },
    ]);

    if (operation.operator === "Add") {
      let add = await inquirer.prompt([
        {
          type: "input",
          name: "additems",
          message: "Please add your items here",
        },
      ]);
      toDo.push(add.additems);
      console.log(toDo);
    }

    if (operation.operator === "Read") {
      console.log(toDo);
    }

    if (operation.operator === "Update") {
      let update = await inquirer.prompt([
        {
          type: "list",
          name: "updateItems",
          message: "Select your item to update",
          choices: toDo,
        },
      ]);
      let update2 = await inquirer.prompt([
        {
          type: "input",
          name: "updateItems2",
          message: "update items",
        },
      ]);

      let newTodo = toDo.filter((val) => val != update.updateItems);
      toDo = [...newTodo, update2.updateItems2];
    }

    if (operation.operator === "Delete") {
      let remove = await inquirer.prompt([
        {
          type: "list",
          name: "removeItems",
          message: "Select item to delete",
          choices: toDo,
        },
      ]);
    }
  } while (true);
}
maketodo(toDo);
