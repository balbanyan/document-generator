import { TableRow, TableCell, Table, Paragraph, WidthType, ShadingType, VerticalAlign, AlignmentType } from 'docx';
import { Section } from '../../interfaces/Section';
import { createLabelCell, createBasicCell } from '../../utils/documentUtils';
import { columnWidths, grayBackgroundShading } from '../../styles/tableStyles';

/**
 * Represents the Urgency section of a document
 */
export class UrgencySection implements Section {
    private urgencyLevels: string[];
    private reasonsLabel: string;
    private reasonsContent: string;
    private column4Content: string;

    /**
     * Creates a new Urgency section
     * @param urgencyLevels List of urgency levels
     * @param reasonsLabel Label for the reasons column
     * @param reasonsContent Content for the reasons column
     * @param column4Content Content for the fourth column
     */
    constructor(
        urgencyLevels: string[] = ['Normal', 'Urgent', 'High urgency', 'Immediate'],
        reasonsLabel: string = 'Urgency reasons, or consequences for missing the deadline',
        reasonsContent: string = '(filled by the team)',
        column4Content: string = ''
    ) {
        this.urgencyLevels = urgencyLevels;
        this.reasonsLabel = reasonsLabel;
        this.reasonsContent = reasonsContent;
        this.column4Content = column4Content;
    }

    /**
     * Generates the Urgency section row
     * @returns TableRow for the Urgency section
     */
    public generateRow(): TableRow {
        return new TableRow({
            children: [
                // Use standard label cell for column 1 with vertical centering
                new TableCell({
                    width: {
                        size: columnWidths.column1,
                        type: WidthType.PERCENTAGE,
                    },
                    shading: grayBackgroundShading,
                    verticalAlign: VerticalAlign.CENTER,
                    children: [new Paragraph({
                        text: 'Urgency and Due\nDate (if applicable)',
                        alignment: AlignmentType.CENTER
                    })],
                }),
                // Second column - urgency levels
                new TableCell({
                    width: {
                        size: columnWidths.column2,
                        type: WidthType.PERCENTAGE,
                    },
                    children: this.urgencyLevels.map(level => 
                        new Paragraph(`- ${level}`)
                    ),
                }),
                // Third column - shaded label and content
                new TableCell({
                    width: {
                        size: columnWidths.column3,
                        type: WidthType.PERCENTAGE,
                    },
                    shading: {
                        type: ShadingType.CLEAR,
                        color: "F2F2F2",
                        fill: "F2F2F2"
                    },
                    children: [new Paragraph(this.reasonsLabel)]
                }),
                // Fourth column - content
                new TableCell({
                    width: {
                        size: columnWidths.column4,
                        type: WidthType.PERCENTAGE,
                    },
                    children: [new Paragraph(this.reasonsContent)]
                }),
            ],
        });
    }
} 