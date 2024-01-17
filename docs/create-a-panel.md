---
sidebar_position: 4
---

# Create a Panel

## Discussion

Out of the box, Nexus provides the Admin and Account panels, which live in the Central context.   

:::info
**Central Context Panels**

The Admin panel is your panel for managing, supporting, and delivering the service.

The Account panel is used by your subscribers to manage the subscription, create & manage instances,
control branding, and perform other "global" operations. 
:::

:::info
**Tenant Context Panels**

These panels offer a view into data which lives in a separate database for each tenant. These are
the panels which will allow your users to access the application for its marketed functionality.
For examples of these panel names, see "Panel Access Strategies" in the menu. 
:::

Use the following procedure to create each needed Tenant Context Panel. 

## Procedure

### Estimated Completion Time

< 5 minutes. 

Run `artisan nexus:make-panel`.

Answer some questions.

Migrate & Seed. 

### Migrate & Seed

#### Local Environment

If you already have a working Nexus install, we recommend logging into the admin
panel and deleting all tenants. This will automatically remove their databases from
your database container.

:::info
If you don't delete tenants from the UI, you'll want to drop their databases whenever
you perform a migrate:fresh. Otherwise, they'll accumulate and make it harder to find
the one you want when you need it. 
:::

This command will completely rebuild your central-context database and populate it
with the initial users with email & password as specified in your .env file:

```
artisan migrate:fresh --seed
```

:::info
The above command doesn't create any tenants. You'll do that by logging into /account
and adding an instance. Note that we only seed users in local environments. In
a remote environment (staging, test, prod) we would expect users to follow some
registration flow. 
:::

#### Remote Environments

:::danger
Running migrate:fresh in production is not a good idea. It will drop all the tables
in your database, causing loss of all existing data.  
:::

In non-local environments, use `artisan migrate --seed`. This will preserve your
existing tables and run incremental migrations and seeders. All Nexus Seeders are
written to be idempotent (they will only create resources that don't already exist,
and are resilient against not-found and other unexpected conditions). 

:::info
If you've completed the above steps to add a panel, you also need to run `artisan tenant:seed`
so that the system can install custom branding options for the new panels in all existing
tenant databases. 
:::