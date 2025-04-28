import * as fs from 'fs';
import * as path from 'path';

/**
 * Ensures a directory exists, creating it if necessary
 * @param dirPath Directory path to ensure
 */
export function ensureDirectoryExists(dirPath: string): void {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

/**
 * Saves data to a file, ensuring the directory exists
 * @param filePath Path to save the file
 * @param data Data to save
 */
export function saveToFile(filePath: string, data: Buffer | string): void {
    const dirPath = path.dirname(filePath);
    ensureDirectoryExists(dirPath);
    fs.writeFileSync(filePath, data);
}

/**
 * Reads a file as binary data
 * @param filePath Path to the file
 * @returns Buffer containing the file data
 */
export function readBinaryFile(filePath: string): Buffer {
    if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
    }
    return fs.readFileSync(filePath);
}

/**
 * Reads a file as text
 * @param filePath Path to the file
 * @returns String containing the file contents
 */
export function readTextFile(filePath: string): string {
    if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
    }
    return fs.readFileSync(filePath, 'utf8');
} 