import { Table, TableRow, TableCell, Paragraph, WidthType, AlignmentType, Header, ImageRun, TextRun } from 'docx';
import * as fs from 'fs';
import * as path from 'path';
import { invisibleTableBorders, fontSizes, colors } from '../styles/tableStyles';

/**
 * Creates a document header with logo and title
 * @param logoPath Path to the logo image
 * @param title Header title text
 * @param titleColor Color for the title text
 * @returns Header component for the document
 */
export function createDocumentHeader(
    logoPath: string = path.resolve(__dirname, '../../images/google-placeholder.png'),
    title: string = 'Internal Memo',
    titleColor: string = colors.gold
): Header {
    const imageData = fs.readFileSync(logoPath);
    
    const headerTable = new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: invisibleTableBorders,
        rows: [
            new TableRow({
                children: [
                    // Logo cell
                    new TableCell({
                        width: {
                            size: 50,
                            type: WidthType.PERCENTAGE,
                        },
                        borders: invisibleTableBorders,
                        children: [
                            new Paragraph({
                                children: [
                                    new ImageRun({
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
                    }),
                    // Title cell
                    new TableCell({
                        width: {
                            size: 50,
                            type: WidthType.PERCENTAGE,
                        },
                        borders: invisibleTableBorders,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: title,
                                        color: titleColor,
                                        size: fontSizes.title
                                    })
                                ],
                                alignment: AlignmentType.RIGHT,
                                spacing: {
                                    before: 220 // Add space before the text to lower its position
                                }
                            })
                        ],
                    }),
                ],
            }),
        ],
    });

    return new Header({
        children: [
            headerTable,
            // Add empty paragraph to create gap
            new Paragraph({
                spacing: {
                    after: 150 // Gap between header and document
                }
            })
        ],
    });
} 