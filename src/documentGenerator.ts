import { Document, Packer, Paragraph, Table, TableRow, TableCell, WidthType, AlignmentType, ShadingType } from 'docx';

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
                size: 100,
                type: WidthType.PERCENTAGE,
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

        this.document = new Document({
            sections: [{
                properties: {},
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
                        new Paragraph("☐ Agree                                    ☐ Disagree"),
                        new Paragraph("☐ Other"),
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
                        new Paragraph("Signature:"),
                        new Paragraph("•"),
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
                                        new TableCell({
                                            width: {
                                                size: 50,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Paragraph("- Normal"),
                                                new Paragraph("- Urgent"),
                                                new Paragraph("- High urgency"),
                                                new Paragraph("- Immediate"),
                                            ],
                                        }),
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
                                                                new TableCell({
                                                                    width: {
                                                                        size: 50,
                                                                        type: WidthType.PERCENTAGE,
                                                                    },
                                                                    children: [new Paragraph("Urgency Reasons")]
                                                                }),
                                                                new TableCell({
                                                                    width: {
                                                                        size: 50,
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