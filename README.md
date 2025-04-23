# CFDE Navigation Wheel

This package adds the CFDE Navigation Wheel to your site:
![alt text](img/wheel.png)

## Installation
```
npm install git+ssh://github.com/MaayanLab/cfde-wheel
```

## Usage

```
import CFDEWheel from cfde-wheel

export const MyComponent = () => {
	return <CFDEWheel/>
}
```

Note for Next.js: This is a client component so you need to add `'use client'` in the file.