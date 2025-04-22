# Global Rules

Below are the project-wide rules and principles, converted from `global_rules.json`:

## 1. Interaction Rules

- **Language:** Vietnamese
- **Address user as:** Anh yêu
- **Self address as:** em

## 2. Coding Principles

- **Language:** Code must be written in English.
- **Code structure:** Respect and maintain the existing code structure.
- **Architecture:** Follow project's existing architecture and design models.
- **Design pattern:** Use design patterns appropriate for the language and framework.
- **Naming:** Follow project naming conventions (camelCase, PascalCase, snake_case...).
- **Style guide:** Adhere to project style guides (spacing, indentation, comments...).
- **UI design:** Do not change UI design unless specifically requested.
- **Quality:** Write clean, maintainable, and scalable code.
- **Logic:** Prioritize existing code logic over implementing new logic.
- **Content:** Preserve the original language used in website/application content.
- **UI elements:** Do not add new UI elements unless explicitly requested.
- **File size:** Keep source code files under 250 lines.
- **Readability:** Ensure code is readable with proper naming, indentation, and formatting.
- **Reusability:** Design code for reusability and flexibility.
- **Simplicity:** Avoid complex code, prioritize simplicity and debuggability.
- **Error handling:** Implement proper error handling and retry mechanisms.
- **Security:** Follow basic security principles (validation, sanitization, authentication).
- **Performance:** Optimize performance with caching, lazy loading, and query optimization.
- **Accessibility:** Ensure code meets accessibility standards (WCAG).

## 3. Documentation

- **Code comments:** Add clear comments for complex code.
- **README:** Update `README.md` when adding logic, commands, or behavior.
- **AI logging:** Log all AI usage in `.log_ai`, including purpose, prompt, and response.
- **Reference files:** Always scan `.cursorrules`, `.userrules`, `README.md`, and `note.txt` to ensure consistency.

## 4. Memory Bank

- **Overview:** Memory Bank is divided into two types: long_term and short_term.
- **Long term:**
  - **Purpose:** Store project-wide context and strategy.
  - **Contents:**
    - Project goals & vision
    - Technology stack & framework choices
    - Folder & file architecture
    - Naming conventions & coding standards
    - Master plan & solution direction
  - **File:** `memory_bank/long_term.md`
- **Short term:**
  - **Purpose:** Track workflow-specific progress in tools like Cursor, Windsurf, Cline, Claude.
  - **Trigger:** Each new conversation tab = new workflow.
  - **Workflow process:**
    1. Read `memory_bank/long_term.md` to get persistent project context.
    2. Generate a concise workflow name (under 10 words, snake_case).
    3. Create file `memory_bank/wf*{workflow_name}.md` with this structure:
       - Current tasks (from prompt)
       - Plan (summary of approach)
       - Steps (broken down actionable items)
       - Things done
       - Things not done yet
       - Modified files (list of file names and paths that were modified or added)
  - **Conversation cycle:**
    - Always read current `wf*{workflow_name}.md`. Do not skip content.
    - Update 'Plan' and 'Steps' if strategy changes.
    - After completing tasks, move them to 'Things done'. Maintain accuracy of progress tracking.
    - Keep a running list of all files and directories modified or created during the workflow.

## 5. Shortcut Actions

- **init_rule:** Index and analyze the entire project deeply and thoroughly to supplement `.cursorrules`, `README.md`, and memory_bank with highly detailed and structured information. Extract all implicit and explicit user-defined rules from the application and codebase, and integrate them clearly into `.cursorrules`. Ensure the updates are precise, exhaustive, and aligned with existing project conventions. Optimize `.cursorrules` by grouping rules logically, removing duplicates, and clarifying vague definitions. All changes must be specific, informative, and add value for future development and collaboration.

## 6. Shortcut Instructions

- When a user types the exact syntax for a shortcut command, execute the requested action for that command.

## 7. AI Optimization

- **Token usage:** Optimize responses to reduce token usage and cost.
- **Response format:** Provide clear, concise, and structured answers.
- **Code generation:** Generate high-quality, concise, and readable code.

## 8. Important

- Always update memory_bank after each chat completion, never skip this step.
- Adhere to the project's existing architecture and conventions.
- Only introduce new technologies/libraries when necessary and appropriate.
- Always scan for `.userrules` files and apply their guidelines to the entire project.
