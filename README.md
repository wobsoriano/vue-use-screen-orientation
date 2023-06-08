# vue-use-screen-orientation

A Vue composable for detecting screen orientation using media query.

## Installation

```bash
npm install vue-use-screen-orientation
```

## Usage

```vue
<script setup>
import useScreenOrientation from 'vue-use-screen-orientation'

const orientation = useScreenOrientation()
</script>

<template>
  <div>Orientation: {{ orientation }}</div>
</template>
```

## Why?

- [orientationchange](https://developer.mozilla.org/en-US/docs/Web/API/Window/orientationchange_event) event is deprecated.
- [screen.orientation](https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation) has patchy support.

## License

MIT
