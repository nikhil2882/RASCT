#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./lib/files');
const inquirer = require('./lib/inquirer');

const setupMVVM = require('./actions/setup_mvvm');
const init = require('./actions/init');
const NumberPrompt = require('inquirer/lib/prompts/number');


console.log(
  chalk.yellow(
    figlet.textSync('R-Arch', { horizontalLayout: 'full' })
  )
);

async function main()
{
  
  var args = process.argv.slice(2);

  if(args.length)
  {
    // if arguments are provided we will call suitable file
    //directly, else user have to choose from list
    return 
  }

  let action_result = await inquirer.startup();

  if( action_result.action === "Init" )
  {
    let app_name = await inquirer.askForInput("what will be your project name ?");

    init(app_name.input);
  }
  else 
  {
    console.log(chalk.red("mujhe samjh nhi aaya"));
  }
}

main();
