import { Paragraph, TableCell, TableRow, WidthType, VerticalAlign, AlignmentType } from 'docx';
import { columnWidths, grayBackgroundShading } from '../styles/tableStyles';

/**
 * Creates a standard table row with four columns
 * @param label Text for the first column (label)
 * @param content Text or elements for the second column
 * @param column3Content Text or elements for the third column (optional)
 * @param column4Content Text or elements for the fourth column (optional)
 * @returns TableRow with formatted cells
 */
export function createStandardRow(
    label: string, 
    content: string | Paragraph[],
    column3Content: string | Paragraph[] = '',
    column4Content: string | Paragraph[] = ''
): TableRow {
    return new TableRow({
        children: [
            createLabelCell(label),
            createContentCell(content),
            createBasicCell(column3Content, columnWidths.column3),
            createBasicCell(column4Content, columnWidths.column4)
        ]
    });
}

/**
 * Creates a label cell with gray background
 * @param label Text for the label
 * @returns TableCell with formatting
 */
export function createLabelCell(label: string): TableCell {
    return new TableCell({
        width: {
            size: columnWidths.column1,
            type: WidthType.PERCENTAGE,
        },
        shading: grayBackgroundShading,
        verticalAlign: VerticalAlign.CENTER,
        children: [new Paragraph({
            text: label,
            alignment: AlignmentType.CENTER
        })],
    });
}

/**
 * Creates a content cell
 * @param content Text or paragraphs for the content
 * @returns TableCell with formatting
 */
export function createContentCell(content: string | Paragraph[]): TableCell {
    return new TableCell({
        width: {
            size: columnWidths.column2,
            type: WidthType.PERCENTAGE,
        },
        children: typeof content === 'string' 
            ? [new Paragraph(content)] 
            : content,
    });
}

/**
 * Creates a basic cell with specified width
 * @param content Text or paragraphs for the content
 * @param width Width of the cell as a percentage
 * @returns TableCell with formatting
 */
export function createBasicCell(content: string | Paragraph[], width: number): TableCell {
    return new TableCell({
        width: {
            size: width,
            type: WidthType.PERCENTAGE,
        },
        children: typeof content === 'string' 
            ? [new Paragraph(content)] 
            : content,
    });
} 