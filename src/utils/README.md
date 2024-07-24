**README.md** untuk folder `utils`:

```markdown
# Utils Folder

This folder contains utility functions that provide commonly used functionality across the application. These functions are generally stateless and can be reused in different parts of the project.

## Purpose

- To promote code reuse by centralizing common functions.
- To keep the codebase DRY (Don't Repeat Yourself).
- To improve readability and maintainability by abstracting complex logic into simple, reusable functions.

## Structure

Typically, this folder will have files for different categories of utilities. For example:

- `dateUtils.ts`: Functions for handling date and time operations.
- `validationUtils.ts`: Functions for input validation.

## Example Usage

```typescript
import { formatDate, parseDate } from './dateUtils';

// Format a date
const formattedDate = formatDate(new Date());

// Parse a date string
const date = parseDate('2024-07-20');
