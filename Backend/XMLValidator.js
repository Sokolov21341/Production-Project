class XMLValidator {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.xmlContent = '';
        this.tier = 'invalid';
        this.errors = [];
        
        // Tier definitions
        this.tiers = {
            invalid: { name: 'Invalid', description: 'XML syntax errors detected' },
            basic: { name: 'Basic', description: 'Valid XML structure' },
            intermediate: { name: 'Intermediate', description: 'Well-formed XML with proper nesting' },
            advanced: { name: 'Advanced', description: 'Complex XML structure with proper formatting' }
        };
        
        
        this.setupEventListeners();
    }

    

    setupEventListeners() {
        const editor = document.getElementById('xmlEditor');
        const refreshButton = document.getElementById('refreshButton');

        // Real-time validation
        editor.addEventListener('input', () => {
            this.xmlContent = editor.value;
            this.validateAndUpdate();
        });

        // Manual refresh button
        refreshButton.addEventListener('click', () => {
            this.refreshValidation();
        });

        // Set initial content
        editor.value = this.getDefaultXML();
        this.validateAndUpdate();
    }

    validateXml(xmlString) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
        
        // Check for parsing errors
        const parserErrorNodes = xmlDoc.getElementsByTagName('parsererror');
        if (parserErrorNodes.length > 0) {
            return [{
                line: 0,
                column: 0,
                message: parserErrorNodes[0].textContent || 'XML parsing error'
            }];
        }
        
        return [];
    }

    calculateTier(xmlString) {
        if (!xmlString.trim()) return 'invalid';
        
        let elementCount = 0;
        let maxDepth = 0;
        let currentDepth = 0;
        
        for (let i = 0; i < xmlString.length; i++) {
            if (xmlString[i] === '<') {
                if (xmlString[i + 1] !== '/') {
                    currentDepth++;
                    elementCount++;
                } else {
                    currentDepth--;
                }
                maxDepth = Math.max(maxDepth, currentDepth);
            }
        }
        
        if (elementCount >= 10 && maxDepth >= 4) return 'advanced';
        if (elementCount >= 5 && maxDepth >= 3) return 'intermediate';
        if (elementCount >= 1 && maxDepth >= 1) return 'basic';
        
        return 'invalid';
    }

    refreshValidation() {
        const editor = document.getElementById('xmlEditor');
        this.xmlContent = editor.value;
        this.validateAndUpdate();
    }

    updateUI() {
        const validationResultElement = document.getElementById('validationResult');
        
        if (this.errors.length > 0) {
            validationResultElement.className = 'validation-result error';
            validationResultElement.innerHTML = `
                <strong>${this.tiers[this.tier].name}: ${this.tiers[this.tier].description}</strong><br>
                Errors:<br>
                ${this.errors.map(error => 
                    `<div>Line ${error.line}, Column ${error.column}: ${error.message}</div>`
                ).join('<br>')}`;
        } else {
            validationResultElement.className = 'validation-result valid';
            validationResultElement.innerHTML = `
                <strong>${this.tiers[this.tier].name}: ${this.tiers[this.tier].description}</strong>`;
        }
    }

    validateAndUpdate() {
        this.errors = this.validateXml(this.xmlContent);
        this.tier = this.calculateTier(this.xmlContent);
        this.updateUI();
    }
}

// Initialize the validator
document.addEventListener('DOMContentLoaded', () => {
    const validator = new XMLValidator('app-container');
});