// static_webserver.ts

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import fs from 'node:fs';
import express from 'express';

// cli
const argv = yargs(hideBin(process.argv))
  //.scriptName("standStat")
  .version('0.2.0')
  .usage("Usage: $0 --port <port> --directoy <directory-path>")
  .example([
    ["$0 -p 2022 -d MyPublic", "run the webserver on port 2022 and serve the content of the folder MyPublic"],
    ])
  .option('port', {
    alias: 'p',
    type: 'number',
    description: 'port-number used by this web-server.',
    default: '1978'
    })
  .option('directory', {
    alias: 'd',
    type: 'string',
    description: 'path to the directory to be served.',
    default: ''
    })
  .strict()
  .parse();

// sanity checks
if (argv.directory === '') {
  console.error(`ERR334: Error, you must specify a not empty directory-path!`);
  process.exit(-1);
}
if (! fs.existsSync(argv.directory)) {
  console.error(`ERR339: Error, the path ${argv.directory} doesn't exist!`);
  process.exit(-1);
}

// the main
const app = express();
// tell the browser to allow CORS for any origin
app.use("/", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
// static content
app.use(express.static(argv.directory));
app.listen(argv.port, () => {
  console.log(`Serving on port ${argv.port} the content of the directory ${argv.directory} ...`);
});

