# Document Generator

A TypeScript-based document generator that creates structured Word documents using the `docx` library. This project generates documents with a predefined template structure including sections for topic information, recommendations, urgency levels, and more.

## Features

- Generates structured Word (.docx) documents
- Customizable table-based template
- Support for nested tables and complex layouts
- Consistent formatting with predefined styles
- Gray-shaded left column for better readability

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

1. Run the document generator:
```bash
npm start
```

This will generate a document named `generated-document.docx` in the `output` directory.

## Project Structure

```
document-generator/
├── src/
│   └── documentGenerator.ts    # Main document generation logic
├── output/                     # Generated documents directory
├── package.json               # Project dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Template Structure

The generated document includes the following sections:
- To
- Prepared by
- Reviewed by
- Topic (with CMS No. and Date)
- Relevant Resolutions
- Relevant Authority Item
- Summary
- Recommendation
- Directive
- Urgency and Due Date
- Appended Documents
- Notes

## Dependencies

- docx: ^8.0.0
- typescript: ^5.0.0
- ts-node: ^10.9.0
- @types/node: ^20.0.0

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Author

Badr Albanyan 