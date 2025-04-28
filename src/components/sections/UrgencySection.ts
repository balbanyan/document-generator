import { TableRow, TableCell, Table, Paragraph, WidthType, ShadingType } from 'docx';
import { Section } from '../../interfaces/Section';
import { createLabelCell, createBasicCell } from '../../utils/documentUtils';
import { columnWidths } from '../../styles/tableStyles';

/**
 * Represents the Urgency section of a document
 */
export class UrgencySection implements Section {
    private urgencyLevels: string[];
    private reasonsLabel: string;
    private reasonsContent: string;
    private column4Content: string;
    
    // Custom column widths for Urgency section
    private readonly urgencyColumnWidths = {
        column2: 19.6,
        column3: 15,
        column4: 26.7
    };

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
                createLabelCell('Urgency and Due\nDate (if applicable)'),
                // Second column - urgency levels
                new TableCell({
                    width: {
                        size: this.urgencyColumnWidths.column2,
                        type: WidthType.PERCENTAGE,
                    },
                    children: this.urgencyLevels.map(level => 
                        new Paragraph(`- ${level}`)
                    ),
                }),
                // Third column - shaded label and content
                new TableCell({
                    width: {
                        size: this.urgencyColumnWidths.column3,
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
                        size: this.urgencyColumnWidths.column4,
                        type: WidthType.PERCENTAGE,
                    },
                    children: [new Paragraph(this.reasonsContent)]
                }),
            ],
        });
    }
} 