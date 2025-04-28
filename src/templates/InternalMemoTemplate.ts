import { Document, Packer, Table, WidthType, TableRow } from 'docx';
import * as fs from 'fs';
import * as path from 'path';
import { DocumentSettings } from '../interfaces/DocumentSettings';
import { Section } from '../interfaces/Section';
import { createDocumentHeader } from '../components/DocumentHeader';
import { TopicSection } from '../components/sections/TopicSection';
import { DirectiveSection } from '../components/sections/DirectiveSection';
import { UrgencySection } from '../components/sections/UrgencySection';
import { SimpleSection } from '../components/sections/SimpleSection';
import { saveToFile, ensureDirectoryExists } from '../utils/fileUtils';

/**
 * Template for generating Internal Memo documents
 */
export class InternalMemoTemplate {
    private settings: DocumentSettings;
    private sections: Section[] = [];

    /**
     * Creates a new Internal Memo template
     * @param settings Document settings
     */
    constructor(settings: DocumentSettings) {
        this.settings = settings;
        this.initializeSections();
    }

    /**
     * Initialize the default sections for the template
     */
    private initializeSections(): void {
        // Add default sections
        this.sections.push(new SimpleSection('To', 'Text\n- Badr\n- Maha'));
        this.sections.push(new SimpleSection('Prepared by', ''));
        this.sections.push(new SimpleSection('Reviewed by', 'Filled by the team'));
        this.sections.push(new TopicSection());
        this.sections.push(new SimpleSection('Relevant\nResolutions', 'Filled by the team'));
        this.sections.push(new SimpleSection('Relevant Authority\nItem', 'Filled by the team'));
        this.sections.push(new SimpleSection('Summary', '- Grammar check\n- Spelling check'));
        this.sections.push(new SimpleSection('Recommendation', 'Placeholder text'));
        this.sections.push(new DirectiveSection());
        this.sections.push(new UrgencySection());
        this.sections.push(new SimpleSection('Appended\nDocuments', '•'));
        this.sections.push(new SimpleSection('Notes', '(filled by the team, or to be N/A)'));
    }

    /**
     * Add a custom section to the document
     * @param section Section to add
     */
    public addSection(section: Section): void {
        this.sections.push(section);
    }

    /**
     * Replace an existing section with a new one
     * @param index Index of the section to replace
     * @param section New section
     */
    public replaceSection(index: number, section: Section): void {
        if (index >= 0 && index < this.sections.length) {
            this.sections[index] = section;
        }
    }

    /**
     * Generate and save the document
     */
    public async generate(): Promise<void> {
        // Create rows for the table
        let rows: TableRow[] = [];
        
        // Process each section
        this.sections.forEach(section => {
            // Check if this is a multi-row section
            if ((section instanceof TopicSection || section instanceof DirectiveSection) && 'generateRows' in section) {
                // Add all rows from the multi-row section
                rows = rows.concat(section.generateRows());
            } else {
                // Add the regular row for other sections
                rows.push(section.generateRow());
            }
        });

        // Create the table
        const table = new Table({
            width: {
                size: 7.56 * 1440, // Convert inches to twips (1 inch = 1440 twips)
                type: WidthType.DXA,
            },
            rows: rows
        });

        // Create header
        const headerOptions = this.settings.header || {};
        const header = createDocumentHeader(
            headerOptions.logoPath,
            headerOptions.title || 'Internal Memo',
            headerOptions.titleColor
        );

        // Create the document
        const doc = new Document({
            sections: [{
                properties: {
                    page: {
                        margin: this.settings.margins || {
                            top: 1440, // 1 inch
                            right: 1080, // 0.75 inch
                            bottom: 1440, // 1 inch
                            left: 504, // 0.35 inch
                        },
                    },
                },
                headers: {
                    default: header
                },
                children: [table]
            }]
        });

        // Save the document
        const buffer = await Packer.toBuffer(doc);
        saveToFile(this.settings.outputPath, buffer);
    }
} 