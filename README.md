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

## License

MIT
