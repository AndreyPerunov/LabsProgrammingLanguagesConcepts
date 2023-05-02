import { spawn } from "child_process"

const labNumber = process.argv[3]
const taskNumber = process.argv[4]

if (!labNumber || !taskNumber) {
  console.error("Please provide both lab and task number as arguments.")
  console.error("Example: node dist/runLab.js 1 5")
  process.exit(1)
}

const runFile = (fileName: string) => {
  const child = spawn("node", [fileName], {
    stdio: [process.stdin, process.stdout, process.stderr]
  })

  child.on("exit", code => {
    if (code != 0) {
      console.error(`Error: Unable to run file ${fileName}`)
    }
  })
}

const fileName = `./dist/Lab${labNumber}/Lab${labNumber}_${taskNumber}.js`
runFile(fileName)
