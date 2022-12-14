README of standStat
===================


Presentation
------------

*standStat* is a small *nodejs* that let you deploy simply a *static web serve*. It helps you to distribute your application as a *zip-file*.

*standStat* is the abreviation of *standalone static webserver*.


Getting started
---------------

In a bash-terminal, run:

```bash
git clone https://github.com/charlyoleg/standStat
cd standStat
npm install
npm run
npm run build
cd ..
mkdir myApp
cd myApp
cp -a ../standStat/tests/public ./
cp ../standStat/dist/standStat.cjs ./
cp ../standStat/scr/linux_runs_standStat.sh ./
cp ../standStat/scr/windows_runs_standStat.cmd ./
# adapt the starter scripts to your wished port-number and content-folder
vim linux_runs_standStat.sh windows_runs_standStat.cmd
# test that your pure frontend app is working
linux_runs_standStat.sh
# stop the server standStat with ctrl-c
cd ..
zip -r myApp.zip myApp
ls -l myApp.zip
# you can distribute your frontend app as a zip!
```


Description
-----------

The purpose of *standStat* is to create a *nodejs* application that serves a directory as static content. The generated application contents all its dependencies and doesn't depend on *node_modules*. This let you deploy a *static content* with its *static web-server* easily without having to run *npm install*.
In other words, this small application is an alternative to [nginx](http://hg.nginx.org/nginx/) or [apache](http://svn.apache.org/viewvc/httpd/) used as [static webserver](https://docs.nginx.com/nginx/admin-guide/web-server/serving-static-content/).

*standStat* is thought for running local application. If you want an efficient server that supports thousands of connections, *nginx* or *apache-httpd* are better choices.

If you want to run a *static webserver* while using *npm*, you will be better with [http-server](https://github.com/http-party/http-server) or [serve](https://github.com/vercel/serve).


Concept
-------

The source file *static-webserver.js* is a small *express-js* web-server that serves a static content. *esbuild* is used to bundle this *nodejs* to make it standalone. Now, you are free to copy and run the *static webserver* *standStat.cjs* just with *nodejs* i.e. without running any *npm install*.




