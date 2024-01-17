---
sidebar_position: 1
---

# Introduction

## Our Mission

To further enable the "build it faster" mindset by pre-integrating key tools
so that you can stand up fully functional subscription-based applications in 
minutes, not hours or days. 

## Setting Expectations

### Where We Are Today

Nexus is a project that requires a user to clone a repo, with lots of wiring
inside the framework itself. We've intentionally kept the wiring to a minimum, 
but it's there nonetheless. 

My desired endgame here is that Nexus becomes a Composer project, following a
common Laravel convention: composer require org/project, followed by an artisan
command like nexus:install which sets up the bare-bones pieces, including
creation of the first 2 panels (central context) and some of the tenant/ 
prefixed stuff. 

### What We Deliver

Nexus gives you an integrated environment for Laravel, Filament, and Tenancy, 
with very few other customizations. We want to give you room to build your dream 
without getting in the way. 

### What We Don't Deliver

We've intentionally avoided billing integration. Why? Every project will have
its own needs and preferences in this area. You might want to use Stripe or
Paddle or some other completely custom payment solution. 

Maybe you want to use Laravel Spark. I contemplated adding Spark to this
package so I could get things going much faster, but that would have forced
anyone who wants to use Nexus to buy a Spark license. That didn't seem fair.

We will maintain a Laravel-Spark (Paddle) version of Nexus for those who wish
to use that, but covering every possible use-case is not feasible or maintainable
for us. This might change if the community steps in to provide support. 

### The Core Tooling

Laravel's "Build It Faster" is achieved by giving you a set of back-end tools
and plugins - a broad ecosystem - so that you can create any PHP app extremely
rapidly, with reliable tooling. 

Filament's "Build It Faster" is achieved by layering interfaces and connections
on top of a Laravel project. Combined with some command-line tooling to enable
rapid extension, Filament can help you create user interfaces in minutes.

## The Tenancy Problem

As great as the above tooling is, there's a gap. Filament's built-in tenancy
supports single-database operations. That means you need to add tenant_id to
all the relevant tables and ensure that global scopes are applied to all
operations to prevent data leakage. This model is fine for some applications.

An alternative approach is to create a new database or schema for each new
tenant. The challenges to this approach are that application complexity
increases, and data becomes more isolated (you can't join across databases, 
for instance, since each gets its own connection). 

The benefits of this approach are that tenant data is isolated, you don't
have to take any additional steps to ensure no leakage between tenants,
and migrating a noisy neighbor to dedicated hardware is as simple as making
a snapshot, standing up a new database instance, and adding the new
connection details to the tenant configuration.

### How Nexus Solves It

We use the [stancl/tenancy](https://tenancyforlaravel.com) package to
deliver multi-database, domain-derived multi-tenancy. This package is
compatible with Filament and ensures that all tenant operations happen
in a tenant context (connections to database, queues, storage, etc.,
are scoped).