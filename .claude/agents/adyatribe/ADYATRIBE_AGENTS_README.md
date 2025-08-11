# AdyaTribe AI Agent System

This directory contains specialized AI agents for the AdyaTribe community platform development.

## Structure

```
.claude/agents/adyatribe/
├── development/          # Development specialists
│   ├── 01-UI-Specialist.md
│   ├── 02-UX-Designer.md
│   ├── 04-React-Native-Expert.md
│   ├── 07-Testing-Engineer.md
│   ├── 09-Supabase-MCP-Specialist.md
│   ├── 10-File-Consistency-Manager.md
│   ├── 11-React-Native-Debugger.md
│   ├── 12-Design-System-Guardian.md
│   └── 13-Onboarding-Flow-Expert.md
├── deployment/           # Deployment specialists
│   ├── 05-Vercel-Deployment-Specialist.md
│   ├── 08-DevOps-Engineer.md
│   └── 09-GitHub-Deployment-Specialist.md
├── management/           # Project management
│   ├── 03-Project-Manager.md
│   └── 10-Feature-Planner.md
└── security/             # Security specialists
    └── 06-Security-Consultant.md
```

## Usage

These agents can be invoked using the `subagent_type` parameter in Claude Code's Task tool:

```javascript
// Example usage
Task({
  subagent_type: "ui-specialist",
  description: "Design homepage improvements",
  prompt: "Create a better hero section for AdyaTribe..."
})
```

## Agent Categories

**💻 Development Team**
- UI Specialist - Visual design and component interface expertise
- UX Designer - User experience and flow optimization  
- React Native Expert - Mobile development and Expo technical implementation
- Testing Engineer - Quality assurance and testing strategy
- Supabase MCP Specialist - Database integration and backend development
- File Consistency Manager - Project organization and duplicate detection
- React Native Debugger - Mobile debugging and troubleshooting
- Design System Guardian - Brand consistency and accessibility compliance
- Onboarding Flow Expert - User registration and verification workflow

**🚀 Deployment Team**
- Vercel Deployment Specialist - Web deployment with comprehensive issue resolution
- DevOps Engineer - Production deployment and infrastructure management
- GitHub Deployment Specialist - GitHub Actions and automated deployment workflows

**📋 Management Team**
- Project Manager - Timeline management and project coordination
- Feature Planner - Task decomposition and development planning

**🛡️ Security Team**
- Security Consultant - User safety, GDPR compliance, and security expertise

## Project Context

AdyaTribe is a community platform for 30+ single & childfree women featuring:
- Interest-based groups and events
- Safe verification processes
- Real-world meetups and connections
- Professional networking opportunities

Each agent contains specialized knowledge for their domain and should be used proactively when working on related features.