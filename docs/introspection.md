---
sidebar_position: 3
---

# Panel Access Strategies

Nexus is built to support common Saas access patterns. The way we handle extension 
is by adding new panels and user types to support new access needs. This means that 
your tenant-context database(s) will have separate tables for various user types.

You might, for example, have: 

  - operators
  - buyers
  - sellers
  - affiliates

All of which have the same initial schema (a copy of the users table), but they're
kept in separate tables to allow for expansion based on need, and to prevent a case
where one type of user is able to log into a panel they shouldn't. 

This does mean that certain other packages will need to be flexible in terms of how
they handle users. Those packages will need to accept other Models which extend
Auth\User and should probably track the type by class name and id rather than by
assuming User/users for everything. 

Most (maybe all?) first-party and popular third-party packages do this already.

Following are some possible scenarios to help you envision how you'd like to structure 
your new app: 

## Single User Tier, Internal Business Users

  * The application owner & team (/admin panel)
    * Monitors application & database performance
    * Receives exception reports and resolves bugs
    * Manages relationship with subscribers
    * Develops Features
    * Bills subscriber for platform usage.
   
  * The subscriber or subscription owner (/account panel)
    * Configures global settings
    * Manages domains & branding
    * Configures registration: disabled
    * Manages users in dashboard

  * The first tier of users, who use the application. (/operate panel)
    * Create/Remove/Update/Delete application records
    * Run reports, analyze data, configure items

## Single User Tier, External Users

  * The application owner & team (/admin panel)
    * Monitors application & database performance
    * Receives exception reports and resolves bugs
    * Manages relationship with subscribers
    * Develops Features
    * Bills subscriber for platform usage.

  * The subscriber or subscription owner (/account panel)
    * Configures global settings
    * Manages domains & branding
    * Configures registration enabled/disabled as needed

  * The first tier of users, who use the application. (/operate panel)
    * Members of the public or of some external group
    * Potentially being billed by subscriber for service
    * Register at a public portal or are given creds by subscriber
    * Make use of the app for business or personal reasons according to its purpose

## Multiple User Tiers, Internal & External Users

Going beyond the above, Nexus can be easily modified to support additional tiers or types of users.
An example of how and why you might want to do this:

  * The application owner & team (/admin panel, central context)
    * Monitors application & database performance
    * Receives exception reports and resolves bugs
    * Manages relationship with subscribers
    * Develops Features
    * Bills subscriber for platform usage.
   
  * The subscriber or subscription owner (/account panel, central context)
    * Configures global settings
    * Manages domains & branding
    * Configures registration: disabled
    * Manages users in dashboard

  * The first tier of users, who use the application. (/operate panel, tenant context)
    * Employees of the subscriber. 
    * Create/Remove/Update/Delete application records
    * Run reports, analyze data, configure items

  * The n+ tier(s) of users, who use the application. (/??? panel, tenant context)
    * Members of the public or of some external group
    * Potentially being billed by subscriber for service
    * Register at a public portal or are given creds by subscriber or operator
    * Make use of the app for business or personal reasons according to its purpose

## Users, Guards, and Providers, Oh My!

Alternative user types should use a table which is derived from the schema of the
users table, but which is named to match the model as certain functionality is
based on conversion of the model name (specifically, relationship stuff).

The convention is that the various items should be named as such:

Model name maps to panel name.
Table name maps to guard name. Exception: 'web' is the default for users.

**Note:** if you plan to build an API for your application, you'll need to
add the appropriate guards to config/sanctum.php in order to include
them in the auth chain. 

| Model Name | Table Name | Panel Name | Guard Name | Provider Name |
|------------|------------|------------|------------|---------------|
| User       | users      | user       | web        | users         |
| Admin      | admins     | admin      | admins     | admins        |
| Manager    | managers   | manager    | managers   | managers      |
| Buyer      | buyers     | buyer      | buyers     | buyers        |

For example, if we have a user type called Manager, we'll create a managers table
with the same initial schema as the users table. We'll create a Manager model which
uses the Authenticatable trait. We'll create a managers guard which uses the
Manager model.
