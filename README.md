# Turnly — Athena

Monorepo of back-end applications that make up much of Turnly's APIs.

We are building the next queue management and customer experience system
for walk-ins at physical locations.

We replace take-a-number systems with a web widget-based system,
which your customers can access via any device from your website.

### Getting Started

1. We highly recommend you review the [troubleshooting docs.](/docs/troubleshooting.md)
2. Please install the [VScode recommendations](/.vscode/extensions.json) to improve your code style.
3. We highly recommend you learn about [DevO.](/docs/devo.md)
4. Now you're ready to [set up your development environment.](/docs/development.md)

#### APIs (Backend for Frontend)

> What about [BFF (Backend for Frontend)?](/docs/architecture/BFF.md)

| Name                                                  | Description                                  |
| ----------------------------------------------------- | -------------------------------------------- |
| [Gateway](/apps/gateway)                              | API entry point and access management        |
| [Widgets API](/apps/widgets-api)                      | GraphQL API for widgets clients              |
| [RTM API](/apps/realtime-api)                         | Real Time & Streaming API                    |

#### Services

| Name                                            | Description                                  |
| ----------------------------------------------- | -------------------------------------------- |
| [Add-ons](/apps/addons)                         | Integrations, Webhooks & Beacons             |
| [Assistance Centers](/apps/assistance-centers)  | Assistance Centers (Locations)               |
| [Business Owners](/apps/business-owners)        | Business Owners                              |
| [Custom Fields](/apps/custom-fields)            | Business Data Fields                         |
| [Heimdall IAM](/apps/heimdall)                  | Identity & Access Management                 |
| [Interactions](/apps/interactions)              | Activities History                           |
| [Notifications](/apps/notifications)            | Notifications Service                        |
| [Queuing System](/apps/queuing-system)          | Queuing System                               |
| [Tasks Scheduling](/apps/tasks-scheduling)      | Tasks Scheduling                             |
| [Teams Management](/apps/teams)                 | Teams Management                             |

### The most notable features

##### Assistance Centers

Capability to manage multiple locations (branches), services offered, working hours,
desks for support, agents and managers per locations.

#### Business Data Fields & Processors

Business data fields (custom fields) for the organizations to obtain the
necessary data according to their logic and internal processes.

A processor can be a lambda function or an external API that performs
validations or even data transformation.

#### Customer Reminders

Your customers will receive automatic notifications to keep
them aware of the life cycle of their tickets.

Capability of sending reminders (notifications) through different communication
channels, such as SMS, Push, Emails, Calls, or WhatsApp messages.

#### Customer Experience Rating

Your customers can send you feedback on how to improve the experience
in your locations (branches) or even give you the best rating, you can
use this data for service intelligence.

#### Partnership API

Our APIs are completely based on integration with external systems and
that is why we offer partner APIs that will allow you to create your own application flow.

Partner APIs, webhooks, and support for Beacons that integrate with mobile apps to detect customer arrival or create proximity-based logic.

#### Real Time Messaging API (Streaming data)

The RTM API is a WebSocket-based API that allows you to receive
read-only access to a selected set of data from Turnly in realtime.

Once your application establishes a connection to a streaming endpoint,
a feed of events is delivered to your app.

### Software Architecture

Microservices are built using multiple architectural concepts,
we highly recommend you review the [architecture docs.](/docs/architecture)

![high-level-architecture](/docs/diagrams/high-level-architecture.png)

### Deployments

Learn about [production & stage deployments.](/docs/deployment.md)

### Contributing

Please read [CONTRIBUTING.md](/CONTRIBUTING.md) for details on our code of conduct,
and the process for submitting pull requests to us.

### Versioning

We use [SemVer](http://semver.org) for versioning. For the versions available,
see the tags on this repository.

### Others resources

- [How to create a new application](/docs/how-to-create-new-application.md)
- [Postman Collections](/docs/postman/)
- [Conventions](/docs/conventions.md)
- [Disaster Recovery](/docs/disaster-recovery.md)

### Authors

- [Efra](https://github.com/efraa)
- [Wardner](https://github.com/wardner)
