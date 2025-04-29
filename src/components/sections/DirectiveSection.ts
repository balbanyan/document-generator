import { TableRow, TableCell, Table, Paragraph, WidthType, VerticalMergeType, TextRun, UnderlineType, VerticalAlign, AlignmentType } from 'docx';
import { Section } from '../../interfaces/Section';
import { createLabelCell } from '../../utils/documentUtils';
import { noBorders, horizontalSeparatorBorders, columnWidths, grayBackgroundShading } from '../../styles/tableStyles';

/**
 * Represents the Directive section of a document
 */
export class DirectiveSection implements Section {
    /**
     * Generates the Directive section rows
     * @returns Array of TableRows for the section
     */
    public generateRows(): TableRow[] {
        // First row with Agree/Disagree options
        const row1 = new TableRow({
            children: [
                // Column 1 - Label (vertically merged)
                new TableCell({
                    width: {
                        size: columnWidths.column1,
                        type: WidthType.PERCENTAGE,
                    },
                    shading: grayBackgroundShading,
                    verticalAlign: VerticalAlign.CENTER,
                    verticalMerge: VerticalMergeType.RESTART,
                    children: [new Paragraph({
                        text: 'Directive',
                        alignment: AlignmentType.CENTER
                    })],
                }),
                
                // Columns 2-4 merged with Agree/Disagree options
                new TableCell({
                    width: {
                        size: columnWidths.column2 + columnWidths.column3 + columnWidths.column4,
                        type: WidthType.PERCENTAGE,
                    },
                    columnSpan: 3,
                    children: [
                        new Paragraph("☐ Agree                                         ☐ Disagree"),
                    ],
                    borders: horizontalSeparatorBorders
                }),
            ],
        });

        // Second row with Other and Signature
        const row2 = new TableRow({
            children: [
                // Column 1 - Label (continued)
                new TableCell({
                    width: {
                        size: columnWidths.column1,
                        type: WidthType.PERCENTAGE,
                    },
                    verticalMerge: VerticalMergeType.CONTINUE,
                    children: [new Paragraph("")] // Needed for correct rendering
                }),
                
                // Columns 2-4 merged with Other and Signature
                new TableCell({
                    width: {
                        size: columnWidths.column2 + columnWidths.column3 + columnWidths.column4,
                        type: WidthType.PERCENTAGE,
                    },
                    columnSpan: 3,
                    borders: noBorders,
                    children: [
                        new Paragraph("☐ Other"),
                        new Paragraph(""),
                        new Paragraph(""),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Signature:",
                                    bold: true,
                                    underline: {
                                        type: UnderlineType.SINGLE
                                    }
                                })
                            ]
                        }),
                        new Paragraph(""),
                        new Paragraph(""),
                    ],
                }),
            ],
        });

        return [row1, row2];
    }

    /**
     * The original generateRow method now returns the first row
     * and the additional row will be handled separately by the template
     * @returns TableRow for the section
     */
    public generateRow(): TableRow {
        const rows = this.generateRows();
        return rows[0]; // Return the first row
    }
} 