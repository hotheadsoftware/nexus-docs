---
sidebar_position: 2
---

# Making Use of Nexus

Nexus is built to support common Saas access patterns. The way we handle extension is by
adding new panels and user types to support new access needs. 

## Testing Pages Deploy


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