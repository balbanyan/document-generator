import { TableRow, TableCell, Paragraph, WidthType } from 'docx';
import { Section } from '../../interfaces/Section';
import { createLabelCell } from '../../utils/documentUtils';
import { columnWidths } from '../../styles/tableStyles';

/**
 * Represents a content section with a label and multiple paragraphs of content
 */
export class ContentSection implements Section {
    private label: string;
    private paragraphs: string[];
    private column3Content: string | string[];
    private column4Content: string | string[];

    /**
     * Creates a new ContentSection
     * @param label The label for the section
     * @param paragraphs Array of paragraph text strings for the main content
     * @param column3Content Text or array of strings (will be appended as paragraphs)
     * @param column4Content Text or array of strings (will be appended as paragraphs)
     */
    constructor(
        label: string, 
        paragraphs: string[] = [],
        column3Content: string | string[] = '',
        column4Content: string | string[] = ''
    ) {
        this.label = label;
        this.paragraphs = paragraphs;
        this.column3Content = column3Content;
        this.column4Content = column4Content;
    }

    /**
     * Generates the section row with merged columns 2-4
     * @returns TableRow for the section
     */
    public generateRow(): TableRow {
        // Create paragraphs from all columns
        let allParagraphs: Paragraph[] = this.paragraphs.map(text => new Paragraph(text));
        
        // Add column 3 content
        if (this.column3Content) {
            if (Array.isArray(this.column3Content)) {
                allParagraphs = allParagraphs.concat(
                    this.column3Content.map(text => new Paragraph(text))
                );
            } else if (this.column3Content.toString().trim()) {
                allParagraphs.push(new Paragraph(this.column3Content.toString()));
            }
        }
        
        // Add column 4 content
        if (this.column4Content) {
            if (Array.isArray(this.column4Content)) {
                allParagraphs = allParagraphs.concat(
                    this.column4Content.map(text => new Paragraph(text))
                );
            } else if (this.column4Content.toString().trim()) {
                allParagraphs.push(new Paragraph(this.column4Content.toString()));
            }
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
                    children: allParagraphs,
                })
            ],
        });
    }
} 