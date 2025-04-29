import { TableRow, TableCell, Table, Paragraph, WidthType, ShadingType, VerticalAlign, VerticalMergeType, AlignmentType } from 'docx';
import { Section } from '../../interfaces/Section';
import { createLabelCell } from '../../utils/documentUtils';
import { columnWidths, grayBackgroundShading } from '../../styles/tableStyles';

/**
 * Represents the Topic section of a document using a two-row layout
 */
export class TopicSection implements Section {
    private topic: string;
    private companyName: string;
    private cmsNo: string;
    private date: string;

    /**
     * Creates a new Topic section
     * @param topic The topic text
     * @param companyName The company's full name
     * @param cmsNo The CMS number
     * @param date The date value
     */
    constructor(
        topic: string = 'The topic', 
        companyName: string = 'The company\'s full name',
        cmsNo: string = 'Filled later',
        date: string = 'Filled automatically'
    ) {
        this.topic = topic;
        this.companyName = companyName;
        this.cmsNo = cmsNo;
        this.date = date;
    }

    /**
     * Generates the Topic section rows
     * @returns Array of TableRows for the section
     */
    public generateRows(): TableRow[] {
        // First row with CMS number
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
                        text: 'Topic',
                        alignment: AlignmentType.CENTER
                    })],
                }),
                
                // Column 2 - Topic and company info (vertically merged)
                new TableCell({
                    width: {
                        size: columnWidths.column2,
                        type: WidthType.PERCENTAGE,
                    },
                    children: [
                        new Paragraph(`- ${this.topic}`),
                        new Paragraph(`- ${this.companyName}`)
                    ],
                    verticalMerge: VerticalMergeType.RESTART
                }),
                
                // Column 3 - CMS Number Label
                new TableCell({
                    width: {
                        size: columnWidths.column3,
                        type: WidthType.PERCENTAGE,
                    },
                    shading: grayBackgroundShading,
                    children: [new Paragraph("CMS No.")]
                }),
                
                // Column 4 - CMS Number Value
                new TableCell({
                    width: {
                        size: columnWidths.column4,
                        type: WidthType.PERCENTAGE,
                    },
                    children: [new Paragraph(this.cmsNo)]
                }),
            ],
        });

        // Second row with Date
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
                
                // Column 2 - Topic and company info (continued)
                new TableCell({
                    width: {
                        size: columnWidths.column2,
                        type: WidthType.PERCENTAGE,
                    },
                    verticalMerge: VerticalMergeType.CONTINUE,
                    children: [new Paragraph("")] // Needed for correct rendering
                }),
                
                // Column 3 - Date Label
                new TableCell({
                    width: {
                        size: columnWidths.column3,
                        type: WidthType.PERCENTAGE,
                    },
                    shading: grayBackgroundShading,
                    children: [new Paragraph("Date")]
                }),
                
                // Column 4 - Date Value
                new TableCell({
                    width: {
                        size: columnWidths.column4,
                        type: WidthType.PERCENTAGE,
                    },
                    children: [new Paragraph(this.date)]
                }),
            ],
        });

        return [row1, row2];
    }

    /**
     * The original generateRow method now returns the first row
     * and the additional row will be handled separately
     * @returns TableRow for the section
     */
    public generateRow(): TableRow {
        const rows = this.generateRows();
        return rows[0]; // Return the first row
    }
} 