// static_webserver.js

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import express from 'express';

const argv = yargs(hideBin(process.argv))
  //.scriptName("standStat")
  .usage("Usage: $0 --port <port> --directoy <directory-path>")
  .example([
    ["$0 -p 2022 -d MyPublic", "run the webserver on port 2022 and serve the content of the folder MyPublic"],
    ])
  .option('port', {
    alias: 'p',
    type: 'integer',
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

if (argv.directory === '') {
  console.error(`ERR334: Error, you must specify a not empty directory-path!`);
  process.exit(-1);
}

console.log(`INFO202: Serve on the port ${argv.port} the content of the directory ${argv.directory}`);

const app = express();
app.use(express.static(argv.directory));
app.listen(argv.port);

