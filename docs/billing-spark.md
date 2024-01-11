---
sidebar_position: 5
title: Spark (Paddle) Setup
---


## Description

I've made the decision to exclude Laravel Spark from the core Nexus application. 
This was done to avoid a dependency on a paid package. This would have forced users
to pay Laravel, Inc. for a license to use Nexus. This is not desirable.

That said, I do really like how Spark saves time in generating a billing portal and
managing subscriptions. For some spin-off projects, I may choose to include Spark. 
The process of incorporating Spark into a Nexus application is documented here.

## Time Requirement

An experienced developer should be able to complete the initial setup in about 30 
minutes. Integrating subscription checks and other functionality will vary based 
on the complexity of the application.

## Prerequisites: Paddle

### Local Internet-Reachable Environment

Your local environment needs to be reachable from the internet. This can be done
with a combination of DNS + Port Forwarding, or by using a service like Ngrok.
If using Port Forwarding, forward ports 80 and/or 443 to your local machine.

:::info

Paddle does not require SSL/TLS for the sandbox webhook. If you want to set up
SSL/TLS, you can use a service like [Let's Encrypt](https://letsencrypt.org/).
For a non-prod environment, this would be great practice but isn't required.

:::



### Paddle Sandbox Account

1. [Create a Paddle Sandbox account here](https://sandbox-vendors.paddle.com). 

### Paddle Sandbox Product

1. In Catalog > Products, create a product. This will be the name of the application
you're selling. For example, "Nexus".

2. Add prices for the product. You'll need to add a monthly and annual price. Note
the Price IDs for each, and add them to your .env file:
 
```
PLAN_UNLIMITED_MONTHLY_ID=
PLAN_UNLIMITED_ANNUAL_ID=
```
### Paddle Sandbox Webhook

1. In Developer Tools > Notifications, create a webhook. This will be used to receive
notifications from Paddle. Add your domain name to the URL:
```
http://YOUR_DOMAIN_HERE/paddle/webhook
```

Add the secret key to your .env file:
```
PADDLE_WEBHOOK_SECRET=(your secret key from webhook)
```

As noted above, you can use http (unsecured) for your local environment. Using SSL/TLS
is optional and will require additional setup outside the scope of this document.

The webhook should send the following events: 
```yaml
- transaction.completed
- transaction.updated
- subscription.activated
- subscription.canceled
- subscription.created
- subscription.paused
- subscription.updated
- customer.updated
```

### Paddle Authentication Code

In Developer Tools > Authentication, create an authentication code. This will be used
to help secure your sandbox and validate your requests. Add the code to your .env file:
```
PADDLE_AUTH_CODE=(your auth code)
```
From the same page, you can see your Seller ID. Add it to your .env file:
```
PADDLE_SELLER_ID=(your seller ID)
```

## Install Spark + Paddle

### Composer Require

[See Laravel Spark Installation Docs](https://spark.laravel.com/docs/10.0/installation)
for the latest procedure. This will require some manual editing of composer.json as well
as an interactive login during the first run of composer. 

After having done so successfully, you'll be prompted to generate an auth.json file. If
you choose to do so, add it to your .gitignore so you're not committing your credentials.
This will allow your local system to automatically authenticate with Spark.

In your CI/CD pipeline, you'll dynamically generate an auth.json file (probably from
a vault like Secrets Manager or Github Secrets) before calling composer install. This 
will allow your CI/CD pipeline to authenticate with Spark.

## Configure Spark

### App Configuration

1. In `config/spark.php`, create a reference to your product. Ensure that the plan IDs
line up with the Price IDs you captured from the Spark sandbox.

2. Add some features to the features array. These will be displayed when users are
viewing the product & pricing options. 

### Billable Users

We're going to use the default Laravel authentication guard (web), expecting a User
model (users table). We'll use the default Laravel User model.

1. Add the Spark/Billable trait to the User model (don't replace your other traits):

```php
use Laravel\Spark\Billable;

class User extends Authenticatable
{
    use Billable;
}
```

### Non-Billable Users

Alternative user types should NOT extend the user model but should use the Authenticatable 
trait. These alternative user tables and types should be created in the Tenant context. 
This means we place our migrations into the tenant/ sub-folder and execute on tenant creation.

## Test The System

Navigate to http://localhost/account and sign up for an account. After signing up,
you should land on the account panel.

Open a new tab and navigate to http://localhost/billing. You should see a message
that indicates you're on a free trial, with an expiration date. You'll have the 
option to choose a plan and submit payment information. 

Check your Paddle dashboard. Go to notifications and look at the webhook log to
ensure that everything is flowing through correctly. 

If all of this happened without error, you're ready to start building your
Saas app! If you had to take any other steps, please submit a PR to help
correct this documentation. 

You can safely follow any existing documentation for Laravel, Spark, Filament, or Tenancy
moving forward. We've intentionally made no changes core functionality and tried hard
to adhere to "the Laravel way" where possible. 

If you see an opportunity for improvement, please share with us!