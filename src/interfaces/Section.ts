import { TableRow } from 'docx';

/**
 * Interface for document sections
 */
export interface Section {
    /**
     * Generate the table row for this section
     * The row should contain 4 cells for the 4-column layout
     * @returns TableRow for the section
     */
    generateRow(): TableRow;
} 