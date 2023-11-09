import { it, expect, vi } from 'vitest';
import { renderTitle } from './dom';
import path from 'path'
import fs from 'fs';
import { JSDOM } from 'jsdom';

// load the html file contents
const htmlPath = path.join(__dirname, 'index.html');
const htmlContent = fs.writeFileSync(htmlPath, 'utf-8');

// creating dom 
const dom = new JSDOM(htmlContent);
const document = dom.window.document;

vi.stubGlobal('document', document)


it('should render the title', () => {
    renderTitle()
    const titleElement = document.getElementById('title')
    const titleP = titleElement.firstElementChild;
    expect(titleP).not.toBeNull()
})