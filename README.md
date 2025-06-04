# @longears/smartphone-mockup

A React component library for rendering customizable smartphone mockups with messaging features. This package is designed to create realistic smartphone UI previews with various components like message bubbles, rich cards, reply chips, and more.

## Installation

```bash
npm install @longears/smartphone-mockup
```

Or using yarn:

```bash
yarn add @longears/smartphone-mockup
```

## Peer Dependencies

This package requires the following peer dependencies:

```json
"peerDependencies": {
  "lucide-react": "^0.263.1",
  "react": "^18.0.0",
  "react-dom": "^18.0.0"
}
```

## Basic Usage

```jsx
import { Smartphone, MessageBubble, Statuses } from '@longears/smartphone-mockup';
import '@longears/smartphone-mockup/dist/index.css';

function App() {
  return (
    <Smartphone time="12:33" size="md">
      <div className="p-4">
        <MessageBubble timestamp="12:30 PM" status={Statuses.Read}>
          Hello, how can I help you?
        </MessageBubble>
      </div>
    </Smartphone>
  );
}
```

## Components

### Smartphone

The base component for rendering a smartphone mockup with status bar, notch, and home indicator.

**Props:**
- `children`: React.ReactNode - Content to display inside the smartphone
- `time`: string (optional, default: "12:33") - Time to display in the status bar
- `size`: 'sm' | 'md' | 'lg' (optional, default: 'md') - Size of the smartphone mockup

```jsx
<Smartphone time="14:25" size="lg">
  {/* Your content here */}
</Smartphone>
```

### MessageScreen

A template for displaying message-based conversations with a header and input area.

**Props:**
- `children`: React.ReactNode - Message content to display
- `logoImage`: string - URL of the logo image to display in the header
- `title`: string - Title to display in the header
- `onBackClick`: () => void (optional) - Function to call when the back button is clicked
- `size`: 'sm' | 'md' | 'lg' (optional, default: 'md') - Size of the screen

```jsx
<Smartphone>
  <MessageScreen 
    logoImage="/path/to/logo.png" 
    title="Support Chat"
    onBackClick={() => console.log('Back clicked')}
  >
    {/* Message content */}
  </MessageScreen>
</Smartphone>
```

### InfoScreen

A template for displaying information about a business or service with tabs.

**Props:**
- `heroImage`: string - URL of the hero image
- `logoImage`: string - URL of the logo image
- `title`: string - Title text
- `description`: string - Description text
- `phoneNumber`: string - Phone number to display
- `phoneLabel`: string - Label for the phone number
- `callButtonLabel`: string (optional, default: 'Call') - Label for the call button
- `activeTab`: 'info' | 'options' (optional, default: 'info') - Currently active tab
- `onBackClick`: () => void (optional) - Function to call when the back button is clicked
- `onTabChange`: (tab: 'info' | 'options') => void (optional) - Function to call when a tab is changed
- `size`: 'sm' | 'md' | 'lg' (optional, default: 'md') - Size of the screen

```jsx
<Smartphone>
  <InfoScreen 
    heroImage="/path/to/hero.jpg"
    logoImage="/path/to/logo.png"
    title="Business Name"
    description="Your business description"
    phoneNumber="+1 123 456 7890"
    phoneLabel="Customer Support"
    activeTab="info"
    onTabChange={(tab) => console.log(`Tab changed to ${tab}`)}
  />
</Smartphone>
```

### MessageBubble

A component for displaying message bubbles with timestamps and read status.

**Props:**
- `children`: React.ReactNode - Content of the message
- `timestamp`: string (optional) - Timestamp to display
- `status`: 'sent' | 'delivered' | 'read' (optional) - Status of the message

```jsx
<MessageBubble timestamp="12:30 PM" status="read">
  Hello, how can I help you?
</MessageBubble>
```

### RichCard

A component for displaying rich cards with media, title, description, and suggestions.

**Props:**
- `title`: string (optional) - Title of the card
- `description`: string (optional) - Description of the card
- `media`: object (optional) - Media to display in the card
  - `url`: string - URL of the media
  - `type`: 'image' | 'video' | 'gif' - Type of the media
  - `height`: 'short' | 'medium' | 'tall' - Height of the media
  - `aspectRatio`: '16:9' | '2:1' | '7:3' (optional) - Aspect ratio of the media
- `layout`: 'vertical' | 'horizontal' (optional, default: 'vertical') - Layout of the card
- `mediaPosition`: 'top' | 'left' | 'right' (optional, default: 'top') - Position of the media (only applicable for horizontal layout)
- `suggestions`: array (optional) - Suggestions to display on the card
  - `text`: string - Text of the suggestion
  - `icon`: React.ReactNode (optional) - Icon to display with the suggestion

```jsx
<RichCard
  title="Product Name"
  description="This is a product description"
  media={{
    url: "/path/to/image.jpg",
    type: "image",
    height: "medium"
  }}
  layout="horizontal"
  mediaPosition="left"
  suggestions={[
    { text: "Learn More" },
    { text: "Buy Now" }
  ]}
/>
```

### RichCardCarousel

A component for displaying multiple rich cards in a horizontal carousel.

**Props:**
- `cards`: Array of RichCard props - Cards to display in the carousel
- `width`: 'small' | 'medium' (optional, default: 'medium') - Width of each card

```jsx
<RichCardCarousel
  cards={[
    {
      title: "Product 1",
      description: "Description 1",
      media: { url: "/path/to/image1.jpg", type: "image", height: "medium" }
    },
    {
      title: "Product 2",
      description: "Description 2",
      media: { url: "/path/to/image2.jpg", type: "image", height: "medium" }
    }
  ]}
  width="medium"
/>
```

### ReplyChip

A component for displaying a horizontal list of clickable reply options.

**Props:**
- `replies`: Array - Array of reply options
  - `text`: string - Text of the reply (limited to 25 characters)
  - `icon`: React.ReactNode (optional) - Icon to display with the reply
  - `onClick`: () => void (optional) - Function to call when the reply is clicked

```jsx
<ReplyChip
  replies={[
    { text: "Yes", onClick: () => console.log("Yes clicked") },
    { text: "No", onClick: () => console.log("No clicked") },
    { text: "Maybe", onClick: () => console.log("Maybe clicked") }
  ]}
/>
```

### PreviewWrapper

A wrapper component for displaying smartphone previews with a title and actions.

**Props:**
- `children`: React.ReactNode - The smartphone component to display
- `title`: string (optional, default: 'Preview of your agent') - Title to display above the preview
- `actions`: React.ReactNode - Actions to display above the preview (like toggle buttons)

```jsx
<PreviewWrapper
  title="Message Preview"
  actions={<PreviewToggle options={[...]} value="option1" onChange={handleChange} />}
>
  <Smartphone>
    {/* Your content here */}
  </Smartphone>
</PreviewWrapper>
```

### PreviewToggle

A component for toggling between different preview modes.

**Props:**
- `options`: Array - Array of toggle options
  - `value`: string - Value of the option
  - `label`: string - Label of the option
- `value`: string - Currently selected value
- `onChange`: (value: string) => void - Function to call when an option is selected

```jsx
<PreviewToggle
  options={[
    { value: "message", label: "Message" },
    { value: "info", label: "Info" }
  ]}
  value="message"
  onChange={(value) => console.log(`Changed to ${value}`)}
/>
```

## Enums

The library exports several enums for use with the components:

- `Sizes`: 'sm' | 'md' | 'lg' - Sizes for components
- `Tabs`: 'info' | 'options' - Tabs for InfoScreen
- `Statuses`: 'sent' | 'delivered' | 'read' - Message statuses
- `MediaTypes`: 'image' | 'video' | 'gif' - Media types
- `CardTypes`: 'short' | 'medium' | 'tall' - Card heights
- `AspectRatios`: '16:9' | '2:1' | '7:3' - Media aspect ratios
- `Layouts`: 'vertical' | 'horizontal' - Card layouts
- `MediaPositions`: 'left' | 'right' | 'top' - Media positions
- `Widths`: 'small' | 'medium' - Card widths

## Examples

### Complete Message Screen Example

```jsx
import {
  Smartphone,
  MessageScreen,
  MessageBubble,
  RichCard,
  ReplyChip,
  Statuses
} from '@longears/smartphone-mockup';

function App() {
  return (
    <Smartphone time="14:30" size="md">
      <MessageScreen
        logoImage="/path/to/logo.png"
        title="Customer Support"
      >
        <MessageBubble timestamp="14:25" status={Statuses.Read}>
          Hello! How can I help you today?
        </MessageBubble>
        
        <RichCard
          title="Our Services"
          description="Check out what we offer"
          media={{
            url: "/path/to/services.jpg",
            type: "image",
            height: "medium"
          }}
          suggestions={[
            { text: "Learn More" },
            { text: "Contact Us" }
          ]}
        />
        
        <ReplyChip
          replies={[
            { text: "I need help with my order" },
            { text: "I have a question" },
            { text: "I want to make a return" }
          ]}
        />
      </MessageScreen>
    </Smartphone>
  );
}
```

## License

This package is created by GIP LT, UAB.