---
sidebar_position: 2
---

# Installation

Nexus Saas Launchpad is a Laravel application. This means it runs in a PHP
environment.

The fastest path to a functional development environment is to use Valet if
you're on Mac, or Sail if you're on Windows + WSL. 

## Pre-Requisites

### Web Server

On Mac, Valet will act as the webserver and also assist with other important
functions needed in a local environment. 

On Windows, we recommend using Docker to host the necessary container. Sail
is built-in to Laravel, and we take advantage of it when developing Nexus.

If you elect to pursue other hosting options, ensure that PHP 8.1 is installed
and configured with all the necessary extensions (which can be found in 
composer.json). 

### Database

The Nexus Team uses PostgreSQL as the backing database for Nexus development.
This will be the most straightforward path for now, though we are aware that
the project should make strides towards being database-agnostic. 

### Cache & Queue Providers

For local development, we recommend using a Redis container. One is included
by default with our Nexus configuration. 

## Provided Bash Script (setup.sh)

```bash
./setup.sh
```

This script will quickly and automatically bootstrap a local development 
environment in Windows + WSL 2 + Docker. All required containers will be
created and all dependencies installed. The script will even launch the
stack, so you can immediately load the app in your browser!

## Do It By Hand

If you want to create the application and environment by hand, here are the steps: 

1. Clone `https://github.com/hotheadsoftware/nexus` 
2. Ensure you have Composer available to you. 
3. Run `composer install`.
4. Run `.vendor/bin/sail up -d`
5. Copy .env.example to .env
6. Run `.vendor/bin/sail artisan key:generate`
7. Run `.vendor/bin/sail artisan migrate --seed`
8. Run `npm install` or `bun install` (can do this using vendor/bin/sail if desired).
9. Add our Pint pre-commit hook if you want to enforce code styles (see setup.sh).
10. Install bash aliases for sail, artisan, and composer (optional). 

For details on the commands and how to run them, see setup.sh.

## Localhost Routing (DNS / Hosts File)

### Windows

You'll need to be able to route some domains to localhost. On windows, you can
modify the c:\Windows\System32\drivers\etc\hosts file and add relevant entries.
We recommend adding the following pointers: 

```
foo.localhost  127.0.0.1
bar.localhost  127.0.0.1
baz.localhost  127.0.0.1
```

### Linux

Modify /etc/hosts with the above. 

### MacOS

On Mac OS, use Valet. It will handle all of this (and much more) for you. 