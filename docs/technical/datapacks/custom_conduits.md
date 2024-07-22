# Custom Conduits

Since Ender IO 7.0, it is possible to create a custom conduit tier using datapacks and resource packs alone.

The main components required for a conduit are:
- A texture for the conduit
- A language key for the conduit name
- The conduit JSON definition

## Conduit JSON

This is an example conduit JSON (this is for a Redstone Conduit). All conduits share a `type`, `description` and `texture` field.

| Field         |           Type            | Description                           |
|---------------|:-------------------------:|---------------------------------------|
| `type`        |          string           | The conduit type                      |
| `description` |  Component (see vanilla)  | The conduit's name as a component     |
| `texture`     | string (ResourceLocation) | The location of the conduit's texture |

```json
{
  "type": "enderio:redstone",
  "active_texture": "enderio:block/conduit/redstone_active",
  "description": {
    "translate": "item.enderio.conduit.redstone"
  },
  "texture": "enderio:block/conduit/redstone"
}
```

## Built-In Types

The following energy conduit types are built into Ender IO.

### enderio:energy

| Field            | Type | Description                               |
|------------------|:----:|-------------------------------------------|
| `transfer_rate`  | int  | The transfer rate of this conduit in FE/t |

Example:
```json
{
  "type": "enderio:energy",
  "description": {
    "translate": "item.enderio.conduit.energy"
  },
  "texture": "enderio:block/conduit/energy",
  "transfer_rate": 1000
}
```

### enderio:fluid

| Field            | Type | Description                                         |
|------------------|:----:|-----------------------------------------------------|
| `is_multi_fluid` | bool | Whether this conduit can carry multiple fluid types |
| `transfer_rate`  | int  | The transfer rate of this conduit in mb/t           |

Example:
```json
{
  "type": "enderio:fluid",
  "description": {
    "translate": "item.enderio.conduit.ender_fluid"
  },
  "texture": "enderio:block/conduit/ender_fluid",
  "is_multi_fluid": true,
  "transfer_rate": 200
}
```

### enderio:item

:::info
Item conduits are not currently configurable, but may be in a future version.
:::

Example:
```json
{
  "type": "enderio:item",
  "description": {
    "translate": "item.enderio.conduit.item"
  },
  "texture": "enderio:block/conduit/item"
}
```

### enderio:redstone

| Field            |           Type            | Description                                                      |
|------------------|:-------------------------:|------------------------------------------------------------------|
| `active_texture` | string (ResourceLocation) | The texture to change to when there is an active redstone signal |

:::info
Redstone conduits may receive further configuration options in future.
:::

```json
{
  "type": "enderio:redstone",
  "active_texture": "enderio:block/conduit/redstone_active",
  "description": {
    "translate": "item.enderio.conduit.redstone"
  },
  "texture": "enderio:block/conduit/redstone"
}
```

## Official Addon Types

These are types added by the official Ender IO Conduits addon (included by default).

:::info

Most of these conduit types require another mod to be loaded, so make sure that you add a condition on that mod being loaded, like such:

```json
{
  "neoforge:conditions": [
    {
      "type": "neoforge:mod_loaded",
      "modid": "<modid>"
    }
  ],
  ...
}
```

:::

### enderio:chemical (mekanism)

| Field           | Type | Description                    |
|-----------------|:----:|--------------------------------|
| `transfer_rate` | int  | Chemical transfer rate in mb/t |

Example:
```json
{
  "neoforge:conditions": [
    {
      "type": "neoforge:mod_loaded",
      "modid": "mekanism"
    }
  ],
  "type": "enderio:chemical",
  "description": {
    "translate": "item.enderio.conduit.chemical"
  },
  "is_multi_chemical": false,
  "texture": "enderio:block/conduit/chemical",
  "transfer_rate": 50
}
```

### enderio:heat (mekanism)

:::info
The heat conduit is not currently configurable.
:::

```json
{
  "neoforge:conditions": [
    {
      "type": "neoforge:mod_loaded",
      "modid": "mekanism"
    }
  ],
  "type": "enderio:heat",
  "description": {
    "translate": "item.enderio.conduit.heat"
  },
  "texture": "enderio:block/conduit/heat"
}
```

### enderio:ae2 (ae2)

:::danger
This will likely change to `enderio:me` (like it was in 1.20.1) before 7.0 is released.
:::

| Field      | Type | Description                      |
|------------|:----:|----------------------------------|
| `is_dense` | bool | Whether this is a dense ME cable |

```json
{
  "neoforge:conditions": [
    {
      "type": "neoforge:mod_loaded",
      "modid": "ae2"
    }
  ],
  "type": "enderio:ae2",
  "description": {
    "translate": "item.enderio.conduit.me"
  },
  "is_dense": false,
  "texture": "enderio:block/conduit/me"
}
```