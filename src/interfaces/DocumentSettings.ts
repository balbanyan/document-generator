/**
 * Interface for document settings
 */
export interface DocumentSettings {
    /**
     * Output file path
     */
    outputPath: string;
    
    /**
     * Page margin settings in twips (1/1440 of an inch)
     */
    margins?: {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };
    
    /**
     * Header settings
     */
    header?: {
        /**
         * Path to the logo image
         */
        logoPath?: string;
        
        /**
         * Header title text
         */
        title?: string;
        
        /**
         * Title text color
         */
        titleColor?: string;
    };
} 