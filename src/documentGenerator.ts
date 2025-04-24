import { Document, Packer, Paragraph, Table, TableRow, TableCell, WidthType, AlignmentType, ShadingType, Header, ImageRun, TextRun } from 'docx';
import * as fs from 'fs';
import * as path from 'path';

export class DocumentGenerator {
    private document: Document;

    constructor() {
        this.document = new Document({
            sections: [{
                properties: {},
                children: []
            }]
        });
    }

    public createTableWithSections(): void {
        const table = new Table({
            width: {
                size: 7.56 * 1440, // Convert inches to twips (1 inch = 1440 twips)
                type: WidthType.DXA,
            },
            rows: [
                // To
                this.createRow("To", "Text\n- Badr\n- Maha"),
                // Prepared by
                this.createRow("Prepared by", ""),
                // Reviewed by
                this.createRow("Reviewed by", "Filled by the team"),
                // Topic
                this.createTopicRow(),
                // Relevant Resolutions
                this.createRow("Relevant\nResolutions", "Filled by the team"),
                // Relevant Authority Item
                this.createRow("Relevant Authority\nItem", "Filled by the team"),
                // Summary
                this.createRow("Summary", "- Grammar check\n- Spelling check"),
                // Recommendation
                this.createRecommendationRow(),
                // Directive
                this.createDirectiveRow(),
                // Urgency and Due Date
                this.createUrgencyRow(),
                // Appended Documents
                this.createRow("Appended\nDocuments", "•"),
                // Notes
                this.createRow("Notes", "(filled by the team, or to be N/A)")
            ],
        });

        // Create header with a table for alignment
        const imagePath = path.resolve(__dirname, '../images/google-placeholder.png');
        const imageData = fs.readFileSync(imagePath);
        
        const headerTable = new Table({
            width: {
                size: 100,
                type: WidthType.PERCENTAGE,
            },
            borders: {
                top: { style: 'single', size: 1, color: 'FFFFFF' },
                bottom: { style: 'single', size: 1, color: 'FFFFFF' },
                left: { style: 'single', size: 1, color: 'FFFFFF' },
                right: { style: 'single', size: 1, color: 'FFFFFF' }
            },
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 50,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new ImageRun({
                                            type: "png",
                                            data: imageData,
                                            transformation: {
                                                width: 150,
                                                height: 51
                                            }
                                        })
                                    ],
                                    alignment: AlignmentType.LEFT
                                })
                            ],
                            borders: {
                                top: { style: 'single', size: 1, color: 'FFFFFF' },
                                bottom: { style: 'single', size: 1, color: 'FFFFFF' },
                                left: { style: 'single', size: 1, color: 'FFFFFF' },
                                right: { style: 'single', size: 1, color: 'FFFFFF' }
                            }
                        }),
                        new TableCell({
                            width: {
                                size: 50,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Internal Memo",
                                            color: "c4995b",
                                            size: 28 // 14pt = 28 half-points
                                        })
                                    ],
                                    alignment: AlignmentType.RIGHT,
                                    spacing: {
                                        before: 220 // Add space before the text to lower its position
                                    }
                                })
                            ],
                            borders: {
                                top: { style: 'single', size: 1, color: 'FFFFFF' },
                                bottom: { style: 'single', size: 1, color: 'FFFFFF' },
                                left: { style: 'single', size: 1, color: 'FFFFFF' },
                                right: { style: 'single', size: 1, color: 'FFFFFF' }
                            }
                        }),
                    ],
                }),
            ],
        });

        this.document = new Document({
            sections: [{
                properties: {
                    page: {
                        margin: {
                            top: 1440, // 1 inch
                            right: 1080, // 0.75 inch (larger right margin)
                            bottom: 1440, // 1 inch
                            left: 504, // 0.35 inch (smaller left margin)
                        },
                    },
                },
                headers: {
                    default: new Header({
                        children: [
                            headerTable,
                            // Add empty paragraph to create gap
                            new Paragraph({
                                spacing: {
                                    after: 150 // Increase gap between header and document
                                }
                            })
                        ],
                    }),
                },
                children: [table]
            }]
        });
    }

    private createRow(label: string, content: string): TableRow {
        return new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 25.5,
                        type: WidthType.PERCENTAGE,
                    },
                    shading: {
                        type: ShadingType.CLEAR,
                        color: "F2F2F2",
                        fill: "F2F2F2"
                    },
                    children: [new Paragraph(label)],
                }),
                new TableCell({
                    width: {
                        size: 74.5,
                        type: WidthType.PERCENTAGE,
                    },
                    children: [new Paragraph(content)],
                }),
            ],
        });
    }

    private createTopicRow(): TableRow {
        return new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 25.5,
                        type: WidthType.PERCENTAGE,
                    },
                    shading: {
                        type: ShadingType.CLEAR,
                        color: "F2F2F2",
                        fill: "F2F2F2"
                    },
                    children: [new Paragraph("Topic")],
                }),
                new TableCell({
                    width: {
                        size: 74.5,
                        type: WidthType.PERCENTAGE,
                    },
                    children: [
                        new Table({
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE,
                            },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            width: {
                                                size: 70,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Paragraph("- The topic"),
                                                new Paragraph("- The company's full name")
                                            ],
                                        }),
                                        new TableCell({
                                            width: {
                                                size: 30,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Table({
                                                    width: {
                                                        size: 100,
                                                        type: WidthType.PERCENTAGE,
                                                    },
                                                    rows: [
                                                        new TableRow({
                                                            children: [
                                                                new TableCell({
                                                                    width: {
                                                                        size: 50,
                                                                        type: WidthType.PERCENTAGE,
                                                                    },
                                                                    shading: {
                                                                        type: ShadingType.CLEAR,
                                                                        color: "F2F2F2",
                                                                        fill: "F2F2F2"
                                                                    },
                                                                    children: [new Paragraph("CMS No.")]
                                                                }),
                                                                new TableCell({
                                                                    width: {
                                                                        size: 50,
                                                                        type: WidthType.PERCENTAGE,
                                                                    },
                                                                    children: [new Paragraph("Filled later")]
                                                                })
                                                            ]
                                                        }),
                                                        new TableRow({
                                                            children: [
                                                                new TableCell({
                                                                    width: {
                                                                        size: 50,
                                                                        type: WidthType.PERCENTAGE,
                                                                    },
                                                                    shading: {
                                                                        type: ShadingType.CLEAR,
                                                                        color: "F2F2F2",
                                                                        fill: "F2F2F2"
                                                                    },
                                                                    children: [new Paragraph("Date")]
                                                                }),
                                                                new TableCell({
                                                                    width: {
                                                                        size: 50,
                                                                        type: WidthType.PERCENTAGE,
                                                                    },
                                                                    children: [new Paragraph("Filled automatically")]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }

    private createRecommendationRow(): TableRow {
        return new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 25.5,
                        type: WidthType.PERCENTAGE,
                    },
                    shading: {
                        type: ShadingType.CLEAR,
                        color: "F2F2F2",
                        fill: "F2F2F2"
                    },
                    children: [new Paragraph("Recommendation")],
                }),
                new TableCell({
                    width: {
                        size: 74.5,
                        type: WidthType.PERCENTAGE,
                    },
                    children: [
                        new Paragraph("Placeholder text"),
                    ],
                }),
            ],
        });
    }

    private createDirectiveRow(): TableRow {
        return new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 25.5,
                        type: WidthType.PERCENTAGE,
                    },
                    shading: {
                        type: ShadingType.CLEAR,
                        color: "F2F2F2",
                        fill: "F2F2F2"
                    },
                    children: [new Paragraph("Directive")],
                }),
                new TableCell({
                    width: {
                        size: 74.5,
                        type: WidthType.PERCENTAGE,
                    },
                    children: [
                        // Create a nested table for the options
                        new Table({
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE,
                            },
                            rows: [
                                // First row for Agree/Disagree
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [
                                                new Paragraph("☐ Agree                                         ☐ Disagree"),
                                            ],
                                            borders: {
                                                top: { style: 'none' },
                                                right: { style: 'none' },
                                                left: { style: 'none' },
                                                bottom: { style: 'single', size: 1, color: 'auto' }
                                            }
                                        })
                                    ]
                                }),
                                // Second row for Other and Signature
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [
                                                new Paragraph("☐ Other"),
                                                new Paragraph(""),
                                                new Paragraph(""),
                                                new Paragraph(""),
                                                new Paragraph("Signature:"),
                                                new Paragraph(""),
                                                new Paragraph(""),
                                            ],
                                            borders: {
                                                top: { style: 'none' },
                                                right: { style: 'none' },
                                                left: { style: 'none' },
                                                bottom: { style: 'none' }
                                            }
                                        })
                                    ]
                                })
                            ]
                        })
                    ],
                }),
            ],
        });
    }

    private createUrgencyRow(): TableRow {
        return new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 25.5,
                        type: WidthType.PERCENTAGE,
                    },
                    shading: {
                        type: ShadingType.CLEAR,
                        color: "F2F2F2",
                        fill: "F2F2F2"
                    },
                    children: [new Paragraph("Urgency and Due\nDate (if applicable)")],
                }),
                new TableCell({
                    width: {
                        size: 74.5,
                        type: WidthType.PERCENTAGE,
                    },
                    children: [
                        new Table({
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE,
                            },
                            rows: [
                                new TableRow({
                                    children: [
                                        // First column (50%)
                                        new TableCell({
                                            width: {
                                                size: 30,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Paragraph("- Normal"),
                                                new Paragraph("- Urgent"),
                                                new Paragraph("- High urgency"),
                                                new Paragraph("- Immediate"),
                                            ],
                                        }),
                                        // Second column (50%)
                                        new TableCell({
                                            width: {
                                                size: 50,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Table({
                                                    width: {
                                                        size: 100,
                                                        type: WidthType.PERCENTAGE,
                                                    },
                                                    rows: [
                                                        new TableRow({
                                                            children: [
                                                                // Ensure both nested columns are equal width (50% each)
                                                                new TableCell({
                                                                    width: {
                                                                        size: 30,
                                                                        type: WidthType.PERCENTAGE,
                                                                    },
                                                                    shading: {
                                                                        type: ShadingType.CLEAR,
                                                                        color: "F2F2F2",
                                                                        fill: "F2F2F2"
                                                                    },
                                                                    children: [new Paragraph("Urgency reasons, or consequences for missing the deadline")]
                                                                }),
                                                                new TableCell({
                                                                    width: {
                                                                        size: 70,
                                                                        type: WidthType.PERCENTAGE,
                                                                    },
                                                                    children: [new Paragraph("(filled by the team)")]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }

    public async generateDocument(outputPath: string): Promise<void> {
        const buffer = await Packer.toBuffer(this.document);
        const fs = require('fs');
        fs.writeFileSync(outputPath, buffer);
    }
}

// Example usage
const generator = new DocumentGenerator();
generator.createTableWithSections();
generator.generateDocument('../output/generated-document.docx')
    .then(() => console.log('Document generated successfully!'))
    .catch(err => console.error('Error generating document:', err)); 