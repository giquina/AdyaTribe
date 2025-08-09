# 🤖 CLAUDE.md - Operating Rules & Workflow

## 📋 **Claude Assistant Working Rules**

### **Standard Operating Procedure:**

1. **Think Through the Problem**: First think through the problem, read the codebase for relevant files, and write a plan to `tasks/todo.md`.

2. **Create a Detailed Plan**: The plan should have a list of todo items that you can check off as you complete them.

3. **Check-In Before Starting**: Before you begin working, check in with me and I will verify the plan.

4. **Execute Step-by-Step**: Then, begin working on the todo items, marking them as complete as you go.

5. **Provide Progress Updates**: Every step of the way, give me a high-level summary of the changes you made.

6. **Keep Changes Simple**: Make every code/task change as simple as humanly possible. Avoid broad refactors.

7. **Document Everything**: Finally, add a review section to the `todo.md` file summarizing what you did.

8. **No Half Measures**: DO NOT BE LAZY. NO HALF FIXES. Find the root cause and fix it properly.

9. **Minimize Impact**: Minimise the code impact of every change. Simplicity always wins.

---

## 🔧 **Implementation Guidelines**

### **Before Starting Any Task:**
- [ ] Read relevant files in the codebase
- [ ] Understand the current state and context
- [ ] Create a detailed plan in `tasks/todo.md`
- [ ] Get approval before proceeding

### **During Task Execution:**
- [ ] Work through todo items sequentially
- [ ] Mark items as complete immediately when finished
- [ ] Provide clear summary of each change made
- [ ] Keep changes minimal and focused
- [ ] Test changes thoroughly

### **After Task Completion:**
- [ ] Add comprehensive review section to `tasks/todo.md`
- [ ] Summarize what was accomplished
- [ ] Note any issues or considerations for future work
- [ ] Update project documentation if needed

---

## 📁 **File Structure Reference**

```
AdyaTribe/
├── 📋 tasks/todo.md         # Main todo tracking file
├── 📚 docs/                 # Project documentation
├── 🤖 claude/              # Claude-specific files
├── 🧪 tests/               # Test files
├── 📦 src/                 # Source code (if needed)
├── 🚨 errors/              # Error tracking
├── 🔧 scripts/             # Automation scripts
└── 📱 mobile-app/          # React Native application
```

---

## ⚡ **Quick Reference Commands**

### **Todo Management:**
```bash
# View current todos
cat tasks/todo.md

# Update todos (done via TodoWrite tool)
# Mark items complete as you go
```

### **File Operations:**
```bash
# Read codebase files
# Use Read tool to understand context

# Make changes
# Use Edit/MultiEdit tools for modifications

# Test changes
# Run appropriate test commands
```

---


## 📊 **Current Project Metrics** 
*(Auto-updated: 2025-08-09)*

- **Claude Code Agents**: 6 specialized agents
- **Onboarding Steps**: 3/7 completed
- **Documentation Files**: Auto-synced with codebase
- **Git Status**: 10 pending changes
- **Last Activity**: 3e8d0c5 Complete AdyaTribe foundation: mobile app ...

## 🎯 **Quality Standards**

- **Root Cause Analysis**: Always find and fix the actual problem, not just symptoms
- **Minimal Changes**: Make the smallest change that solves the problem completely  
- **Clear Communication**: Explain what was changed and why
- **Incremental Progress**: Work in small, testable steps
- **Documentation**: Keep todos and reviews up to date

---

## 🚨 **Remember**

> "Simple solutions are usually the right solutions. Complex problems often have elegant, minimal fixes when you understand the root cause."

**These rules ensure consistent, high-quality development with clear progress tracking and minimal technical debt.**