![logo](logo.svg)
# Junter
[![website](https://img.shields.io/badge/website-junter.dev-cb92e5)](https://junter.dev)


![pipeline_status](https://github.com/junter-dev/junter/actions/workflows/ci.yaml/badge.svg)
[![license](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
![contributors](https://img.shields.io/badge/contributors-4-yellow)

Where minimal JSON blueprints become maximal HTML masterpieces 🚀

---

Junter provides a robust mechanism to convert JSON data directly into structured HTML elements.
Designed for professional developers, it optimizes the workflow for constructing advanced web interfaces.

Table Of Contents:
<!-- TOC -->
* [Introduction](#introduction)
* [Understanding the Problem](#understanding-the-problem)
* [The Junter Solution](#the-junter-solution)
* [Comparison](#comparison)
* [Documentation](#documentation)
  * [Overview](#overview)
  * [Installation](#installation)
  * [Initialization](#initialization)
* [Transformation](#transformation)
  * [JSON to HTML](#json-to-html)
* [Conceptions](#conceptions)
  * [Props](#props)
  * [Content](#content)
  * [Multiple content](#multiple-content)
  * [Components](#components)
    * [Aliases](#aliases)
    * [Slots](#slots)
    * [Locale](#locale)
    * [Props](#props-1)
    * [Style](#style)
    * [Alias](#alias)
  * [Best practices](#best-practices)
    * [Structure Your Components](#structure-your-components)
    * [Leverage Junter's Features](#leverage-junters-features)
    * [Be Mindful of Performance](#be-mindful-of-performance)
    * [Future Directions and Research Opportunities](#future-directions-and-research-opportunities)
    * [Server-side Rendering (SSR)](#server-side-rendering-ssr)
    * [Integration with Other Libraries](#integration-with-other-libraries)
  * [SSR](#ssr)
    * [Features](#features)
      * [gRPC interface](#grpc-interface)
      * [Component Registration](#component-registration)
      * [API Methods](#api-methods)
      * [Database Flexibility](#database-flexibility)
      * [Monitoring with Prometheus](#monitoring-with-prometheus)
      * [Kubernetes-ready](#kubernetes-ready)
    * [How to run the Service](#how-to-run-the-service)
      * [Locally](#locally)
      * [Docker](#docker)
    * [Configuration](#configuration)
    * [Proto contract details](#proto-contract-details)
* [Code of conduct](#code-of-conduct)
* [Filling issues](#filling-issues)
* [FAQ](#faq)
* [Team](#team)
* [License](#license)
<!-- TOC -->

# Introduction
As the internet has evolved, so has the complexity of web applications. We've
shifted from static HTML pages to dynamic, interactive web applications that rival
the complexity and capability of traditional desktop applications. This evolution
has brought about numerous tools, libraries, and frameworks to make this
transition smoother and more efficient.
One standard tool in a web developer's arsenal is JavaScript Object Notation
(JSON). This lightweight data-interchange format is accessible for humans to read
and write and easy for machines to parse and generate. JSON's simplicity and
universality have made it an essential tool in many applications.
However, new challenges arise as we push the boundaries of what web applications
can do. One such challenge is the transformation of JSON data into user interface
elements. This process, which involves mapping JSON objects to HTML elements
and their attributes, can be cumbersome and error-prone.
This is where the Junter library comes in. This innovative library has been
developed to offer a systematic and efficient way of transforming JSON data into
HTML, eliminating much of the manual effort in this process.

# Understanding the Problem
As a starting point, let's understand the specific problem Junter aims to solve.
Imagine you are building a web application that retrieves data from a remote
server. The data is received in JSON format and needs to be rendered as HTML to
be presented to the user.
The traditional approach to this problem would involve parsing the JSON data,
manually creating HTML elements, setting their attributes, and appending them to
the DOM. This process can quickly become complex and messy, particularly for
deeply nested JSON data or applications with many UI elements.
This approach also needs to lend itself better to creating reusable UI components.
In modern web development, the ability to define components once and then use
them throughout an application is incredibly valuable. It promotes maintainability,
reusability, and consistency.

# The Junter Solution
Junter is a library designed specifically for transforming JSON data into HTML. It
provides a clean and straightforward API that renders JSON data as HTML
painless and efficient.
With Junter, you can define a mapping between JSON objects and HTML elements
once and reuse this mapping as often as needed. This way, you can easily create
complex HTML structures from JSON data and ensure consistency across your
application.
Junter supports the creation of reusable components, which can be defined once
and then used throughout an application. This feature brings the powerful concept
of component-based development to rendering JSON as HTML.

# Comparison

Within the web development sector, Junter stands out as a pioneering library. By
addressing the intricate challenge of converting JSON to HTML, and introducing
versatile functionalities such as aliases, slots, props, localization, and embedded styles,
Junter achieves robust compatibility across server and client environments.

This breakthrough positions Junter as a catalyst for industry advancement, setting new
benchmarks for efficiency and innovation.

| Feature                  | Feature Description                                                          | Junter | JSON2HTML | JSONx |
|--------------------------|------------------------------------------------------------------------------|--------|-----------|-------|
| Alias Support (Alia’s)   | Ability to define and use custom aliases in transformations.                 | ✅      | ❌          | ❌      |
| Slots                    | Define placeholders within components to be filled with content.             | ✅      | ❌          |  ❌     |
| Localization (Locales)   | Support for multiple languages, allowing easy translation of the UI.         | ✅      | ❌          |  ❌     |
| Styling Options (Styles) | Embed CSS styles within your JSON data for a more cohesive rendering.        | ✅      | ❌          |  ❌     |
| Node & Browser Support   | Operate seamlessly in both server (Node) and client (Browser) environments.  | ✅      | ❌          |  ❌     |

Legend:
* ✅ - Supported
* ❌ - Not Supported

This table demonstrates that Junter has a significant advantage over its competitors in
several key areas.

# Documentation
## Overview
  In this section, we're going to delve into how to use Junter effectively. To do this, we will
  first go over how to set up and initialize Junter in your project. Next, we will discuss each
  of the primary features of Junter in-depth, explaining how they work, why they are
  useful, and how to use them in your applications.

## Installation
  Getting started with Junter is simple. The library is available as a JavaScript module and
  can be imported directly into your project:
  
  For browser:
  
  ```html{4}
  <script src="https://cdn.jsdelivr.net/npm/@junter.dev/junter-browser" />
  ```

  or

  ```html{4}
  npm i @junter.dev/junter-browser
  ```
  
  For Node.js
  
  ```shell{4}
  npm i @junter.dev/junter-node
  ```

## Initialization
  You then instantiate Junter by creating a new object:
  
  For browser:
  
  ```js
    const junter = new Junter();
  ```
  
  For Node.JS:
  
  ```js
    import { Junter } from 'junter'
    
    const junter = new Junter();
  ```
  
  This junter object is the starting point for transforming JSON data into HTML.
  Check out the documentation for the [transformation](/transformation).

# Transformation
  The core feature of Junter is transforming JSON data into HTML. This is done using the ```.render()``` method. You pass in a JSON object, and Junter returns the corresponding HTML.

## JSON to HTML
  For instance, let's say we have a simple JSON object that represents a paragraph:
  
  **Input**
  
  ```js{4}
    const json = { "p": "Hello, world!" }
    
    // You can transform this JSON into HTML as follows
    const html = junter.render(json)
   ```
  
  **Output**

  ```html
  <p>Hello, world!</p>
  ```

# Conceptions
  Let's get acquainted with the basic concepts

## Props
  Props provide a means to specify attributes for your HTML elements.
  Through props, you can define things like class names, IDs, and other typical HTML attributes.
  
  ```js
  const junter = new Junter();
  
  junter.render({ "div": {
      "props": {
          "class": "block"
      }
  }})
  ```
  
  ```html
  <div class="block"></div>
  ```
  In the example above, a new instance of Junter is created.
  We then render a `div` element and specify its `class` attribute using the props key.

## Content
  The Content feature allows users to define what's inside the HTML element.
  This could be text, other HTML elements, or even a combination of both.
  
  ```js
  const junter = new Junter();
  
  junter.render({ "div": {
          "props": {
              "class": "block"
          },
          "content": 'Block'
      }
  })
  ```
  
  ```html
  <div class="block">Block</div>
  ```
  Here, not only have we defined a 'class' attribute for our 'div' element through props,
  but we've also specified its inner content using the content key. If you don't specifically provide
  a "content" key for an element, Junter intelligently interprets all non-"props" key-value pairs as potential content.
  
  ```js
  const junter = new Junter();
  
  junter.render({ "main": {
      "props": {
          "class": "main"
      },
      "header": {},
      "div": {},
      "footer": {}
  }})
  
  ```
  
  ```html 
  <main class="main">
      <header></header>
      <div></div>
      <footer></footer>
  </main>
  ```

  Here, the main tag is provided a class of "main".
  The other key-value pairs (header, div, and footer) are not specifically assigned content,
  so Junter defaults them as nested elements within the main tag.

  For those instances where you need a quick and straightforward rendering without
  the complications of properties or attributes, Junter accommodates this with direct value assignment.
  
  ```js
  junter.render({ "div": 'Block'})
  ```
  
  ```html
  <div>Block</div>
  ```

  This is a testament to Junter's intuitive design.
  By directly pairing an element (div in this case) with a string,
  Junter understands it as the content for that element, rendering it seamlessly without needing further configurations.

## Multiple content
  With Junter, seamlessly rendering multiple content items, especially those housed in data arrays,
  becomes effortless. The following sections provide insights into the flexibility Junter offers in this context.
  
  If your goal is to render several elements of the same type with different content, Junter can directly interpret arrays:
  
  ```js
  junter.render({ "div": {
      "p": ['Hello!', 'Hi!', 1]
  }})
  ```
  
  ```html
  <div>
      <p>Hello!</p>
      <p>Hi!</p>
      <p>1</p>
  </div>
  ```

  The aforementioned code efficiently instructs Junter to create multiple paragraph elements within a div tag,
  each populated with the respective items from the array.
  When elements sourced from a data array need specific attributes or properties,
  Junter allows you to set these with precision:
  
  ```js
  junter.render({ "div": {
      "p": {
          "props": {
              "class": "text"
          },
          "content": ['Hello!', 'Hi!', 1]
      }
  }})
  ```
  
  ```html
  <div>
      <p class="text">Hello!</p>
      <p class="text">Hi!</p>
      <p class="text">1</p>
  </div>
  ```

  The addition of the "props" attribute allows each paragraph element to have the class "text",
  yet each continues to display unique content.

  Junter's design logic ensures that developers can effortlessly nest elements within multiple content structures:
  
  ```js
  junter.render({ "div": {
      "div": {
          "props": {
              "class": "block"
          },
          "content": [
              {
                 "div": {
                     "props": {
                         "class": "block"
                     },
                     "p": "Hello, world!"
                 } 
              },
              {
                 "div": {
                     "props": {
                         "class": "avatar"
                     },
                     "img": {
                         "props": {
                             "src": "https://example.com/image.png",
                             "alt": "avatar"
                         }
                     }
                 } 
              }
          ]
      }
  }})
  ```

  ```html
  <div>
      <div class="block">
          <div class="block">
              <p>Hello, world!</p>
          </div>
          <div class="avatar">
              <img src="https://example.com/image.png" alt="avatar" />
          </div>
      </div>
  </div>
  ```

  The given example demonstrates Junter's ability to handle nested structures within an array,
  showcasing both parallel and hierarchically nested elements.

  > **Note**
  > 
  > When you anticipate rendering multiple elements of the same tag type,
  > Junter's multiple content approach is the ideal strategy.

  > **Warning**
  >  
  > Ensure that the root element does not directly adopt multiple content.
  > This practice helps maintain a clear structure and prevents potential rendering issues.
  

## Components
  Junter also supports components, which are reusable pieces of UI that can be defined
  once and used throughout your application.
  Components are registered using the ```.registerComponent()``` method. This method takes
  two arguments: the name of the component and the JSON object that represents it.

  To use them, it is necessary:

  1. Register a component using the ```.registerComponent()``` function
  2. Use a component in a JSON object passed to ```.render()```

  For example, let's define a simple Avatar component:

  ```js
  junter.registerComponent('Avatar', { "p": "Hello!" });
  
  junter.render({ "div": {
      "Avatar": {}
  }})
  ```

**The resulting HTML is:**

```html
<div>
    <p>Hello!</p>
</div>
```

The advantage here is clear: we have encapsulated the complexity of the Avatar
component behind a simple name that we can reuse as often as needed.

### Aliases
  Allow you to pass the necessary properties to components and rendering elements.
  
  Name  | Goal
  ------------- | -------------
  slot  | Used for dropping elements inside components
  alias  |  Used for content substitution instead of alias
  prop  |  It is used for passing props to components
  style  |  Used to insert CSS styles inside elements
  locale  |  Used to localize text in elements for rendering
  
  > **Warning**
  > 
  > slot and prop aliases are used only in components!

### Slots
  Component slots in Junter serve the purpose of providing placeholders within the
  structure of a component where users can insert custom content.
  
  Here's how you can use slots in Junter:
  
  ```js
  junter.registerComponent('Card', { 
      "div": {
          "p": "Hello!", 
          "div": "slot:content"
      }
  });
  
  
  const json = { 
      "div": {
          "Card": {
              slots: {
                  "slot:content": {
                      span: "Just a text" 
                  }
              }
          }
      }
  };
  
  junter.render(json);
  ```
  
  In the 'Card' component above, ```slot:content``` serves as a placeholder for content to be
  added later. When rendering the component, you can specify what should replace
  ```slot:content```
  
  This would generate the following HTML:
  
  ```html
  <div>
      <div>
          <p>Hello!</p>
          <div>
              <span>Just a text</span>
          </div>
      </div>
  </div>
  ```
### Locale
  Junter has built-in localization support. This feature allows you to define
  locale-dependent strings within your components.
  Here's how you can use localization
  
  ```js
  const json = {
      "div": {
          "p": "Hello!",
          "div": "locale:greating"
      }
  }
  
  junter.render(json, { 'locale:greating': 'Bonjour!' });
  ```
  
  The locale:greeting placeholder will be replaced by the corresponding localized string
  during the rendering process, which in this case, is 'Bonjour, monde!'. The resulting
  HTML will be:
  
  ```html
  <div>
     <p>Hello!</p>
     <div>Bonjour!</div>
  </div>
  ```

### Props
  Junter allows passing properties (props) to components. This mechanism helps to
  customize a component's appearance or behavior during the rendering process.
  
  Here's an example:
  
  ```js
  junter.registerComponent('Avatar', { 
      "div": {
          "img": {
              "props": {
                  "alt": "prop:imgAlt",
                  "src": "prop:avatarSrc"
              }
          }
      }
  });
  
  const json = { 
      "div": {
          "Avatar": {
              props: {
                  "prop:imgAlt": "avatar",
                  "prop:avatarSrc": "https://example.com/user.png"
              }
          }
      }
  };
  
  junter.render(json);
  ```
  
  This will generate the following HTML:
  
  ```html
  <div>
     <div>
          <img alt="avatar" src="https://example.com/user.png" />
     </div>
  </div>
  ```

### Style
  In Junter, you can easily incorporate CSS styles into your components with the style
  keyword.
  
  Here's an example:
  
  ```js
  const json = { 
      "form": {
          "style": "style:mainCSS"
      }
  }
  
  const css = `
      .target { color: red }
  `
  
  junter.render(json, { 'locale:text': 'Text', 'style:mainCSS': css });
  ```
  
  This will render the following HTML:
  
  ```html
  <form>
      <style>.target { color: red }</style>
  </form>
  ```

### Alias
  Aliases in Junter are used for content substitution within a component. They enable you
  to change the content dynamically based on the context.
  
  Here's how to use aliases:
  
  ```js
  const json = { 
      "button": {
          props: {
              class: "button"
          },
          content: "alias:text"
      }
  }
  
  junter.render(json, { 'alias:text': 'Text' });
  ```
  
  This will render the following HTML:
  
  ```html
  <button class="button">Text</button>
  ```
  
  The ```alias:text``` placeholder gets replaced by the string 'Click me' during the rendering
  process.

## Best practices
  As with any tool or framework, understanding best practices can significantly improve
  the development process and the quality of the final product. In this section, we provide
  some practical tips for using Junter effectively.

### Structure Your Components
  When using components in Junter, a well-structured design can make your application
  easier to understand, modify, and debug. It's a good idea to keep your components small
  and focused on a single responsibility.

### Leverage Junter's Features
  Junter comes with several powerful features, such as component lifecycle management,
  event handling, and conditional and list rendering. Make full use of these features to
  simplify your code and make it more readable.

### Be Mindful of Performance
  Although Junter's performance is generally excellent, it's essential to remember that
  rendering large, complex structures can become costly. Be mindful of how much you're
  asking Junter to do, and consider breaking down larger components into smaller ones for
  more efficient rendering.

### Future Directions and Research Opportunities
  The development of Junter does not stop here. There are several areas of possible
  research and improvement for future versions of Junter:

### Server-side Rendering (SSR)
  As of now, Junter operates on the client-side. Incorporating server-side rendering could
  provide performance benefits, especially for larger applications.

### Integration with Other Libraries
  While Junter is currently a standalone library, exploring possibilities for integration with
  other popular JavaScript libraries and frameworks, like React or Vue, could increase its
  versatility and applicability.

## SSR
  The Junter Render Service expands the capabilities of the Junter library by introducing a
  server interface to the library using the gRPC protocol. This service allows users to
  interact with the Junter library as if it were a server, thus enhancing its utility and scope.
  The service is written in Typescript and is tailored to fit seamlessly into modern
  development environments.

### Features
#### gRPC interface
  Treat the Junter library as a server using the gRPC protocol

#### Component Registration
  Register components from the Junter library and save them to a database

#### API Methods
#### Database Flexibility
  While MongoDB is the default choice, developers can
  integrate any database using the internal IRepository interface

#### Monitoring with Prometheus
  Monitor service metrics using Prometheus via the HTTP /metrics endpoint.

#### Kubernetes-ready
  The service is optimized for deployment in a Kubernetes
  environment. It includes a readiness probe available at the HTTP /ready endpoint,
  and configurations can be made using environment variables.

### How to run the Service
#### Locally
  To run the Junter Render Service locally, follow the steps:
  
  ```shell
  npm install --omit=dev
  export DB_URL=localhost:1234
  tsnode .src/service.ts
  ```

#### Docker
  Use the following command
  
  ```shell
  docker run \
      ghrc.io/junter-dev/junter-render-service:v1.0.0 \
    --env DB_URL=localhost:1234
  ```

### Configuration
  Service configuration can be achieved using environment variables:

  * ```DB_URL```: (Required) Address of MongoDB.
  * ```HTTP_HOST```: HTTP host address (default is 127.0.0.1).
  * ```HTTP_PORT```: Port for Prometheus metrics (default is 8000).
  * ```GRPC_HOST```: gRPC host address (default is 127.0.0.1).
  * ```GRPC_PORT```: gRPC port (default is 8001).
  * ```COMPONENT_PROCESS_INTRVAL```: Period of synchronization with the database
    (default is 2000ms)

### Proto contract details
  For developers and integrators interested in interfacing with our rendering service,
  a comprehensive Proto Contract provides detailed insights into the API’s structure and functionality.

  ### Accessing the Proto Contract

  The Proto Contract for Junter's render service can be accessed and reviewed directly on our GitHub repository.
  This contract delineates the service methods, message formats, and the expected interaction patterns.

  Proto Contract for [Junter Render Service](https://github.com/junter-dev/render-service/blob/main/api/render/v1/render_service.proto)

  ### Highlights
  * Service Definitions: Gain an understanding of available RPC methods and their specifications.
  * Message Structures: Delve into the exact message formats for requests and responses, ensuring seamless integration.
  * Documentation Comments: Within the Proto Contract, annotations provide additional context and guidance for each defined method and message type.
  * Recommendations for Developers: Before integrating or making API calls to the Junter rendering service, we highly advise thoroughly reviewing this Proto Contract. It is a foundational document that can help preempt potential issues and streamline the integration process.
  
  
# Code of conduct
[Code of conduct](code-of-conduct.md)
# Filling issues
[Filling issues](docs/issues.md)
# FAQ
[FAQ](docs/faq.md)
# Team
[Team](docs/team.md)
# License
[MIT](LICENSE)
