# Document Generator

A TypeScript-based document generator that creates structured Word documents using the `docx` library. This project uses a modular, component-based approach to create professional document templates with advanced layout features.

## Features

- Generates structured Word (.docx) documents with professional formatting
- Component-based architecture for reusable sections with clear separation of concerns
- Multi-row sections with row and column spanning capabilities
- Flexible table layouts with customizable column widths
- Rich text formatting including bold, underline, and shading
- Support for custom headers with logo and title
- Configurable page margins and styling

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/balbanyan/document-generator.git
cd document-generator
```

2. Install dependencies:
```bash
npm install
```

## Usage

1. Build and run the document generator:
```bash
npm run build
npm start
```

This will generate a document using the default template in the `output` directory.

## Project Structure

```
document-generator/
├── src/
│   ├── components/         # Reusable document components
│   │   ├── sections/       # Section components (To, Topic, etc.)
│   │   └── DocumentHeader.ts
│   ├── interfaces/         # TypeScript interfaces
│   ├── templates/          # Document templates
│   ├── utils/              # Utility functions
│   ├── styles/             # Styling helpers
│   └── index.ts            # Main entry point
├── images/                 # Image resources
├── output/                 # Generated documents
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript configuration
└── README.md               # Documentation
```

## Available Section Components

The project includes several section components that can be used in templates:

- **SimpleSection**: A basic section with a label and content in merged columns
- **ContentSection**: Multi-paragraph content section with rich formatting options
- **TopicSection**: A two-row section with vertically merged cells for topic information
- **DirectiveSection**: A two-row section with checkboxes and a signature field
- **UrgencySection**: A section with customizable urgency levels and reasons

## Advanced Features

### Multi-Row Sections

Some sections span multiple rows in the table for complex layouts:

```typescript
// Example: Generating multiple rows from a section
public generateRows(): TableRow[] {
    const row1 = new TableRow({ /* configuration */ });
    const row2 = new TableRow({ /* configuration */ });
    return [row1, row2];
}
```

### Cell Merging

Both horizontal (columnSpan) and vertical cell merging are supported:

```typescript
// Example: Merging cells horizontally
new TableCell({
    columnSpan: 3,
    children: [new Paragraph("Spans across three columns")]
})
```

### Custom Column Widths

Each section can define custom column widths:

```typescript
// Example: Custom column widths
private readonly customWidths = {
    column1: 25.5,
    column2: 33.3,
    column3: 15,
    column4: 26.7
};
```

### Rich Text Formatting

Apply bold, underline, and other text formatting:

```typescript
// Example: Rich text formatting
new Paragraph({
    children: [
        new TextRun({
            text: "Bold and underlined text",
            bold: true,
            underline: {
                type: UnderlineType.SINGLE
            }
        })
    ]
})
```

## Available Templates

### Internal Memo Template

A comprehensive template for internal memos with sections for:
- To
- Prepared by
- Reviewed by
- Topic (with CMS No. and Date)
- Relevant Resolutions
- Relevant Authority Item
- Summary
- Recommendation
- Directive (with signature)
- Urgency and Due Date
- Appended Documents
- Notes

## Creating Custom Templates

To create a new template:

1. Create section components in `src/components/sections/`
2. Create a new template class that extends or follows the pattern of existing templates
3. Configure the template in the main entry point (`src/index.ts`)

## Future Enhancements

- Integration with LLM models for content generation
- More template options for different document types
- Export to additional formats (PDF, HTML)
- Web-based editor for building templates visually

## Dependencies

- docx: ^8.0.0
- typescript: ^5.0.0
- ts-node: ^10.9.0
- @types/node: ^20.0.0



## Author

Badr Albanyan 