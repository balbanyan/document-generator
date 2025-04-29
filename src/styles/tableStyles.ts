import { BorderStyle, IBorderOptions, ShadingType } from 'docx';

/**
 * Standard table borders with thin lines
 */
export const standardTableBorders = {
    top: { style: BorderStyle.SINGLE, size: 1, color: 'auto' },
    bottom: { style: BorderStyle.SINGLE, size: 1, color: 'auto' },
    left: { style: BorderStyle.SINGLE, size: 1, color: 'auto' },
    right: { style: BorderStyle.SINGLE, size: 1, color: 'auto' },
    insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: 'auto' },
    insideVertical: { style: BorderStyle.SINGLE, size: 1, color: 'auto' }
};

/**
 * Invisible table borders (white)
 */
export const invisibleTableBorders = {
    top: { style: BorderStyle.SINGLE, size: 1, color: 'FFFFFF' },
    bottom: { style: BorderStyle.SINGLE, size: 1, color: 'FFFFFF' },
    left: { style: BorderStyle.SINGLE, size: 1, color: 'FFFFFF' },
    right: { style: BorderStyle.SINGLE, size: 1, color: 'FFFFFF' },
    insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: 'FFFFFF' },
    insideVertical: { style: BorderStyle.SINGLE, size: 1, color: 'FFFFFF' }
};

/**
 * No borders for table cells
 */
export const noBorders = {
    top: { style: BorderStyle.NONE },
    bottom: { style: BorderStyle.NONE },
    left: { style: BorderStyle.NONE },
    right: { style: BorderStyle.NONE }
};

/**
 * Standard horizontal separator for sections
 */
export const horizontalSeparatorBorders = {
    top: { style: BorderStyle.NONE },
    bottom: { style: BorderStyle.SINGLE, size: 1, color: 'auto' },
    left: { style: BorderStyle.NONE },
    right: { style: BorderStyle.NONE }
};

/**
 * Gray background shading
 */
export const grayBackgroundShading = {
    type: ShadingType.CLEAR,
    color: "F2F2F2",
    fill: "F2F2F2"
};

/**
 * Default column widths
 */
export const columnWidths = {
    column1: 25.5, // First column percentage
    column2: 32.5, // Second column percentage
    column3: 10.6, // Third column percentage
    column4: 31.4  // Fourth column percentage
};

/**
 * Font sizes in half-points (for docx)
 */
export const fontSizes = {
    normal: 24, // 12pt
    title: 28, // 14pt
    heading: 32, // 16pt
};

/**
 * Common colors used in the document
 */
export const colors = {
    gold: 'c4995b',
    blue: '4488CC',
    gray: 'F2F2F2',
    black: '000000'
}; 