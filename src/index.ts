import * as path from 'path';
import { InternalMemoTemplate } from './templates/InternalMemoTemplate';
import { DocumentSettings } from './interfaces/DocumentSettings';

/**
 * Main entry point for the document generator
 */
async function main() {
    try {
        // Create settings for the Internal Memo template
        const settings: DocumentSettings = {
            outputPath: path.resolve(__dirname, '../output/internal-memo.docx'),
            header: {
                logoPath: path.resolve(__dirname, '../images/google-placeholder.png'),
                title: 'Internal Memo',
                titleColor: 'c4995b'
            },
            margins: {
                top: 1440, // 1 inch
                right: 1080, // 0.75 inch
                bottom: 1440, // 1 inch
                left: 504, // 0.35 inch
            }
        };

        // Create and generate the document
        console.log('Generating Internal Memo document...');
        const template = new InternalMemoTemplate(settings);
        await template.generate();
        
        console.log(`Document generated successfully at ${settings.outputPath}`);
    } catch (error) {
        console.error('Error generating document:', error);
    }
}

// Run the main function
main(); 