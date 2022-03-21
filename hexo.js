const shell = require("shelljs");
let program = require("commander");

const runGit = async function () {
  // let currentTime = String(new Date());
  let currentTime = "test";
  let commitStr = `git commit -m "${currentTime}"`;
  console.log("commitStr: ", commitStr);
  let pull = "git pull";
  await shell.exec("git pull");
  await shell.exec("git add .");
  await shell.exec(commitStr);
  await shell.exec("git push");
};

const runHexo = async function () {
  await shell.exec("hexo clean");
  await shell.exec("hexo g");
  await shell.exec("hexo d");
};
const runHexoCI = async function () {
  try {
    program
      // @ts-ignore
      .version("0.0.1") //定义版本号
      .option("-g, --gitCI", "gitCI") //参数定义
      .option("-h, --hexoCI", "hexoCI")
      .parse(process.argv); //解析命令行参数,参数定义完成后才能调用
    // @ts-ignore
    if (program?._optionValues?.gitCI) {
      console.log("命中git");
      await runGit();
      // @ts-ignore
    } else if (program?._optionValues?.hexoCI) {
      console.log("命中hexo");
      await runHexo();
    } else {
      await runHexo();
      await runGit();
    }
  } catch (error) {
    console.log("CI流程报错!!!!!", error);
  }
};

runHexoCI();
