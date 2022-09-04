README of standStat
===================


Presentation
------------

*standStat* is a small *nodejs* that let you deploy simply a *static web serve* for a local application. It helps you to distribute your applcation as a *zip-file*.

*standStat* is the abreviation of *standalone static webserver*.


Description
-----------

The purpose of *standStat* is to create a *nodejs* application that serves a directory as static content. The generated application contents all its dependencies and doesn't depend on *node_modules*. This let you deploy a *static content* with its *static web-server* easily without having to run *npm install*.
In other words, this small application is an alternative to [nginx](http://hg.nginx.org/nginx/) or [apache](http://svn.apache.org/viewvc/httpd/) used as [static webserver](https://docs.nginx.com/nginx/admin-guide/web-server/serving-static-content/).

*standStat* is thought for running local application. If you want an efficient server that supports thousands of connections, *nginx* or *apache-httpd* are better choices.


Concept
-------

The source file *static-webserver.js* is a small *express-js* web-server that serves a static content. *esbuild* is used to bundle this *nodejs* to make it standalone. Now, you are free to copy and run the *static webserver* *standStat.cjs* just with *nodejs* i.e. without running any *npm install*.


How to
------



