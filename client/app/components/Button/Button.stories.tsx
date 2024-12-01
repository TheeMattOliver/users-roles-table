import type {Meta} from '@storybook/react'
import {StarIcon, MagnifyingGlassIcon} from '@radix-ui/react-icons'
import Button from './Button'
import type {ButtonProps} from './types'
import {IconButton} from './IconButton'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically' generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Button>

export default meta

export function playground(args: ButtonProps) {
  return <Button {...args}> Button</Button>
}
playground.argTypes = {
  color: {
    control: 'select',
    options: ['gray', 'purple', 'red'], // Available colors
    description: 'The color of the button',
    defaultValue: 'gray',
    table: {
      type: {summary: '"gray" | "purple" | "red"'},
      defaultValue: {summary: 'gray'}
    }
  },
  size: {
    control: 'select',
    options: ['1', '2', '3', '4'], // Available sizes
    description: 'The size of the button',
    defaultValue: '2',
    table: {
      type: {summary: '"1" | "2" | "3" | "4"'},
      defaultValue: {summary: '2'}
    }
  },
  ghost: {
    control: 'boolean',
    description: 'Whether the button has a ghost style',
    defaultValue: false,
    table: {
      type: {summary: 'boolean'},
      defaultValue: {summary: 'false'}
    }
  },
  loading: {
    control: 'boolean',
    description: 'Whether the button is in a loading state',
    defaultValue: false,
    table: {
      type: {summary: 'boolean'},
      defaultValue: {summary: 'false'}
    }
  },
  disabled: {
    control: 'boolean',
    description: 'Whether the button is disabled',
    defaultValue: false,
    table: {
      type: {summary: 'boolean'},
      defaultValue: {summary: 'false'}
    }
  },
  asChild: {
    control: 'boolean',
    description: 'Render the button as a different element using a Slot',
    defaultValue: false,
    table: {
      type: {summary: 'boolean'},
      defaultValue: {summary: 'false'}
    }
  }
}

playground.args = {
  color: 'gray',
  size: '2',
  ghost: false,
  loading: false,
  asChild: false,
  disabled: false
}

export function withIcon(args: ButtonProps) {
  return (
    <Button {...args}>
      {' '}
      <StarIcon />
      Button
    </Button>
  )
}
withIcon.argTypes = {
  color: {
    control: 'select',
    options: ['gray', 'purple', 'red'], // Available colors
    description: 'The color of the button',
    defaultValue: 'gray',
    table: {
      type: {summary: '"gray" | "purple" | "red"'},
      defaultValue: {summary: 'gray'}
    }
  },
  size: {
    control: 'select',
    options: ['1', '2', '3', '4'], // Available sizes
    description: 'The size of the button',
    defaultValue: '2',
    table: {
      type: {summary: '"1" | "2" | "3" | "4"'},
      defaultValue: {summary: '2'}
    }
  },
  ghost: {
    control: 'boolean',
    description: 'Whether the button has a ghost style',
    defaultValue: false,
    table: {
      type: {summary: 'boolean'},
      defaultValue: {summary: 'false'}
    }
  },
  loading: {
    control: 'boolean',
    description: 'Whether the button is in a loading state',
    defaultValue: false,
    table: {
      type: {summary: 'boolean'},
      defaultValue: {summary: 'false'}
    }
  },
  disabled: {
    control: 'boolean',
    description: 'Whether the button is disabled',
    defaultValue: false,
    table: {
      type: {summary: 'boolean'},
      defaultValue: {summary: 'false'}
    }
  },
  asChild: {
    control: 'boolean',
    description: 'Render the button as a different element using a Slot',
    defaultValue: false,
    table: {
      type: {summary: 'boolean'},
      defaultValue: {summary: 'false'}
    }
  }
}

withIcon.args = {
  color: 'gray',
  size: '2',
  ghost: false,
  loading: false,
  asChild: false,
  disabled: false
}

export function iconOnly(args: ButtonProps) {
  return <IconButton icon={MagnifyingGlassIcon} aria-label="Search" {...args} />
}
iconOnly.argTypes = {
  color: {
    control: 'select',
    options: ['gray', 'purple', 'red'], // Available colors
    description: 'The color of the button',
    defaultValue: 'gray',
    table: {
      type: {summary: '"gray" | "purple" | "red"'},
      defaultValue: {summary: 'gray'}
    }
  },
  size: {
    control: 'select',
    options: ['1', '2', '3', '4'], // Available sizes
    description: 'The size of the button',
    defaultValue: '2',
    table: {
      type: {summary: '"1" | "2" | "3" | "4"'},
      defaultValue: {summary: '2'}
    }
  },
  ghost: {
    control: 'boolean',
    description: 'Whether the button has a ghost style',
    defaultValue: false,
    table: {
      type: {summary: 'boolean'},
      defaultValue: {summary: 'false'}
    }
  },
  rounded: {
    control: 'boolean',
    description: 'Whether the button should be fully rounded',
    defaultValue: false,
    table: {
      type: {summary: 'boolean'},
      defaultValue: {summary: 'false'}
    }
  },
  loading: {
    control: 'boolean',
    description: 'Whether the button is in a loading state',
    defaultValue: false,
    table: {
      type: {summary: 'boolean'},
      defaultValue: {summary: 'false'}
    }
  },
  disabled: {
    control: 'boolean',
    description: 'Whether the button is disabled',
    defaultValue: false,
    table: {
      type: {summary: 'boolean'},
      defaultValue: {summary: 'false'}
    }
  },
  asChild: {
    control: 'boolean',
    description: 'Render the button as a different element using a Slot',
    defaultValue: false,
    table: {
      type: {summary: 'boolean'},
      defaultValue: {summary: 'false'}
    }
  }
}

iconOnly.args = {
  color: 'gray',
  size: '2',
  ghost: true,
  rounded: true,
  loading: false,
  asChild: false,
  disabled: false
}

export function sizes(args: ButtonProps) {
  return (
    <div style={{display: 'flex', alignItems: 'center', gap: '24px'}}>
      <Button size="1">Size 1</Button>
      <Button size="2">Size 2</Button>
      <Button size="3">Size 3</Button>
      <Button size="4">Size 4</Button>
    </div>
  )
}
sizes.argTypes = {
  color: {
    control: 'select',
    options: ['gray', 'purple', 'red'], // Available colors
    description: 'The color of the button',
    defaultValue: 'gray',
    table: {
      type: {summary: '"gray" | "purple" | "red"'},
      defaultValue: {summary: 'gray'}
    }
  },
  size: {
    table: {
      disable: true
    }
  },
  ghost: {
    control: 'boolean',
    description: 'Whether the button has a ghost style',
    defaultValue: false,
    table: {
      type: {summary: 'boolean'},
      defaultValue: {summary: 'false'}
    }
  },
  loading: {
    control: 'boolean',
    description: 'Whether the button is in a loading state',
    defaultValue: false,
    table: {
      type: {summary: 'boolean'},
      defaultValue: {summary: 'false'}
    }
  },
  disabled: {
    control: 'boolean',
    description: 'Whether the button is disabled',
    defaultValue: false,
    table: {
      type: {summary: 'boolean'},
      defaultValue: {summary: 'false'}
    }
  },
  asChild: {
    control: 'boolean',
    description: 'Render the button as a different element using a Slot',
    defaultValue: false,
    table: {
      type: {summary: 'boolean'},
      defaultValue: {summary: 'false'}
    }
  }
}

sizes.args = {
  color: 'gray',
  size: '2',
  ghost: false,
  loading: false,
  asChild: false,
  disabled: false
}
