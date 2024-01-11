---
sidebar_position: 3
---

# Adding a New Panel

## Discussion

To support the "Multiple User Tiers, Internal & External Users" possibility, 
we need to be able to create new Filament panels and quickly wire them into
the existing multi-tenancy system. We also probably want to bring along the
custom branding functionality and other stuff we've built into the primary
panels. 

The procedure for doing this on a stock Nexus install follows. If you have
implemented any customizations of Nexus, you'll need to account for those
as part of this process. 


## Procedure

### Estimated Completion Time

15-60 minutes. As you get more familiar with the operation, it will proceed
much faster.

### Initial Instructions

For the purposes of this procedure, we need to follow some conventions.
To make use of this code, you will need to do some replacement operations
to fill in the values you need. 

We have provided an example which will create a Buyer model and all the
necessary wiring for buyers to log into their own tenant-context panel.

Choose the name of your new panel/model/user-type.

### Procedure Preparation

Copy this documentation into an editor that supports **case-sensitive** find/replace. 

```
replace BUYER with the UPPERCASE name of your desired model.
replace buyer with the lowercase name of your desired model.
replace Buyer with the Name of your desired model.
```
### Create the Panel

1. `artisan make:filament-panel Buyer`
2. Confirm that the new provider is listed in config/app.php: BuyerPanelProvider::class.
3. Move it to the bottom of the list. We want it to load after the tenancy stuff.

### Create the Model

```artisan make:model Buyer --migration```

Your Buyer model should extend and implement as follows: 

```php
use Illuminate\Foundation\Auth\User as Authenticatable;

class Buyer extends Authenticatable implements \OwenIt\Auditing\Contracts\Auditable, FilamentUser
```
Add this list of traits to your new Model
```php
 use Auditable,
     AuthenticationLoggable,
     HasApiTokens,
     HasRoles,
     Notifiable;
```
Add the following function to your Model

```php
public function canAccessPanel(Panel $panel): bool
{
    return $panel->getId() === BuyerPanelProvider::PANEL;
}
```

The model-creation command also created a migration. 

Move the create_buyers_table migration to the `database/migrations/tenant/` folder. 

In the create_users_table migration, copy the contents of the table closure (the fields
being created). Paste these into the create_buyers_table migration. The buyers table will
(at least initially) be identical to the users table. It can grow over time, but these
fields should remain in place and unchanged.

### Authentication: Guard

Open config/auth.php and create a new guard in the 'guards' array.
```php
'buyer' => [
    'driver'   => 'session',
    'provider' => 'buyers',
],
```
### Authentication: Provider

... and create a new provider in the 'providers' array:
```php
'buyers' => [
    'driver' => 'eloquent',
    'model'  => App\Models\Buyer::class,
],
```

### Authentication: Creds
In .env and .env.example, add some new user keys: 
```.env
BUYER_PANEL_USER_NAME="Buyer Person"
BUYER_PANEL_USER_EMAIL="buyer@localhost.com"
BUYER_PANEL_USER_PASSWORD="password"
```


In config/panels.php, add the buyer panel references:
```php
'buyer' => [
    'user' => [
        'name'     => env('BUYER_PANEL_USER_NAME', ''),
        'email'    => env('BUYER_PANEL_USER_EMAIL', ''),
        'password' => env('BUYER_PANEL_USER_PASSWORD', ''),
    ],
],
```

### Authentication: Seeder
Modify the database/tenants/UserSeeder class. You're going to add logic here for creating
a new Buyer in the tenant context.
```php
    Buyer::firstOrCreate(['email' => config('panels.buyer.user.email')],
        [
            'name'              => config('panels.buyer.user.name'),
            'email'             => config('panels.buyer.user.email'),
            'password'          => Hash::make(config('panels.buyer.user.password')),
            'email_verified_at' => now(),
        ]
    );
```

### Panel Changes
Now, let's ensure our Panel functionality is in place. Open `Providers/Filament/BuyerPanelProvider.php`.

Add a constant for panel name:
```php
    public const PANEL = 'buyer';
```

### Panel Method Calls
Add or updated the following method calls to the panel() method's $panel return:
```php
    ->id(self::PANEL)
    ->path(self::PANEL)
    ->spa()
    ->login()
    ->registration()
    ->authGuard(self::PANEL)
```

_Note: You can add some dynamic logic to the registration method. If the closure returns true, registration
will be enabled. False? The "sign up" link disappears and registration page returns a 404._ 

### Panel Middleware

Add the following middleware to any panel in the Tenant context:
```php
    PreventAccessFromCentralDomains::class,
    InitializeTenancyByDomain::class,
```
Customize the panel's default colors array as desired for your own branding. 

### Personal Access API Tokens

If you want to offer Buyers a REST API with personal access tokens, add the following:
```php
    ->plugins([
        BreezyCore::make()
            ->myProfile(shouldRegisterNavigation: false)
            ->enableSanctumTokens(permissions: ['create', 'read', 'update', 'delete']),
    ])
```

_You can be as granular as you desire with the token permissions listed. Our example
is probably too broad for most use-cases._ 

### Custom Branding

Copy the register() function from OperatePanelProvider. Pase that into your BuyerPanelProvider. 

If you need a custom logo view for this new panel, copy resources/views/filament/tenant.blade.php
to a new blade file in the same folder and change the reference in the BuyerPanelProvider's
register() function. 

## Recreate Your Local Tenants

Note that it's a solid practice to routine perform artisan migrate:fresh --seed so that you're
constantly testing your ability to recreate environments from scratch. That's what we recommend
here. Destroy and recreate your local environment, then log into each panel and confirm your
changes are good. 

    artisan migrate:fresh --seed

NOTE: You don't have to delete/recreate in Production environments! This is purely a convenience
for your local environment. In production, we would expect that there will be no users initially.
Those can be managed by your subscriber in the interface (if you build a Buyers resource) or they
can register if registration is enabled.