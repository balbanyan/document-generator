import { TableRow, TableCell, Paragraph, WidthType } from 'docx';
import { Section } from '../../interfaces/Section';
import { createLabelCell } from '../../utils/documentUtils';
import { columnWidths } from '../../styles/tableStyles';

/**
 * Represents a simple section with label and content
 */
export class SimpleSection implements Section {
    private label: string;
    private content: string;
    private column3Content: string;
    private column4Content: string;

    /**
     * Creates a new SimpleSection
     * @param label The label for the section
     * @param content The content text for the second column
     * @param column3Content The content for the third column (will be appended to content)
     * @param column4Content The content for the fourth column (will be appended to content)
     */
    constructor(
        label: string, 
        content: string = '', 
        column3Content: string = '',
        column4Content: string = ''
    ) {
        this.label = label;
        this.content = content;
        this.column3Content = column3Content;
        this.column4Content = column4Content;
    }

    /**
     * Generates the section row with merged columns 2-4
     * @returns TableRow for the section
     */
    public generateRow(): TableRow {
        // Combine content from all columns
        let combinedContent = this.content;
        
        if (this.column3Content) {
            combinedContent += (combinedContent ? ' ' : '') + this.column3Content;
        }
        
        if (this.column4Content) {
            combinedContent += (combinedContent ? ' ' : '') + this.column4Content;
        }
        
        return new TableRow({
            children: [
                createLabelCell(this.label),
                new TableCell({
                    width: {
                        size: columnWidths.column2 + columnWidths.column3 + columnWidths.column4,
                        type: WidthType.PERCENTAGE,
                    },
                    columnSpan: 3,
                    children: [
                        new Paragraph(combinedContent)
                    ],
                })
            ],
        });
    }
}
