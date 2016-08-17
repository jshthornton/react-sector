# react-sector

[![Build Status](https://travis-ci.org/jshthornton/react-sector.svg?branch=master)](https://travis-ci.org/jshthornton/react-sector)
[![dependencies Status](https://david-dm.org/jshthornton/react-sector/status.svg)](https://david-dm.org/jshthornton/react-sector)
[![devDependencies Status](https://david-dm.org/jshthornton/react-sector/dev-status.svg)](https://david-dm.org/jshthornton/react-sector?type=dev)
[![peerDependencies Status](https://david-dm.org/jshthornton/react-sector/peer-status.svg)](https://david-dm.org/jshthornton/react-sector?type=peer)

![](https://cdn.rawgit.com/jshthornton/react-sector/master/logo.jpg =50x50)

This library was built to make building React templates / layouts easier.

`npm install react-sector --save`
*Note: There are peer dependencies. [See installation](#installation)*

How often have you found yourself building a reusable layout in React only to have to pass the content for different sections via props (which looks messy)?

For example:

```javascript
// Layout
return (
  <div>
    <aside>
      {props.aside}
    </aside>

    <main>
      {props.content}
    </main>
  </div>
);

// Page / Scene

return (
  <Layout
    aside={(
      <div>Foo</div>
    )}
    content={(
      <div>Bar</div>
    )}/>
);

```

Wouldn't it be easier if you could render sections via components? and have them all passed in cleanly using children? With `react-sector` you can! (Cue the infomercial music).

## Usage

```javascript
// Layout
import { SectorManager } from 'react-sector';

return (
  <div>
    <aside>
      <SectorManager code="aside" sectors={props.children} />
    </aside>

    <main>
      <SectorManager code="content" sectors={props.children} />
    </main>
  </div>
);

// Page / Scene
import { Sector } from 'react-sector';

return (
  <Layout>
    <Sector code="aside">
      <div>Foo</div>
    </Sector>

    <Sector code="content">
      <div>Foo</div>
    </Sector>
  </Layout>
);
```

That's it. Sector manager will now take care of rendering your elements for you.

## API

### Sector

```javascript
import Sector from 'react-sector/lib/Sector'; // Recommended for smaller builds
import { Sector } from 'react-sector';

```

| Prop  | Description   | Type  | Default   |
|---------- |---------------------------------------------------------------------------- |-------- |-----------  |
| code  | The unique identifier that sector manager will use to find this sector.   | string  | undefined   |
| children  | The elements that this sector needs to render   | node  | undefined   |
| tagName   | The type of element you want the wrapping sector to use. For example: span  | string  | div   |

### SectorManager

```javascript
import SectorManager from 'react-sector/lib/SectorManager'; // Recommended for smaller builds
import { SectorManager } from 'react-sector';

```

| Prop  | Description   | Type  | Default   |
|---------  |---------------------------------------------------------  |-------- |-----------  |
| code  | The unique identifier to render   | string  | undefined   |
| sectors   | The array of sectors that could potentially be rendered   | node  | undefined   |

## Installation <a id="installation"></a>

`npm install react-sector --save`

### Peer dependencies

* react@15.3.0
* lodash@4.15.0

`npm install react@15.3.0 lodash@4.15.0 --save`
