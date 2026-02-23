# Contributing to Browserfly

Thank you for your interest in contributing to Browserfly! This document provides guidelines and instructions for contributing.

## 🌐 Multilingual Contributions

Browserfly supports both English and French. When contributing:
- Add translation keys to both `TRANSLATIONS.en` and `TRANSLATIONS.fr`
- Test your changes in both languages
- Follow the existing naming convention: `section.element` (e.g., `nav.dashboard`)

## 🐛 Reporting Bugs

Before creating a bug report:
1. Check if the issue already exists in the [issue tracker](https://github.com/tryboy869/browserfly/issues)
2. Use the bug report template
3. Include:
   - Browser version and OS
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

## 💡 Suggesting Features

Feature requests are welcome! Please:
1. Check if the feature has already been requested
2. Use the feature request template
3. Describe the use case and expected behavior
4. Consider implementation complexity

## 🔧 Development Setup

Since Browserfly is a zero-build project:

1. Fork the repository
2. Clone your fork
3. Open `index.html` directly in your browser
4. Make changes and refresh to test

### Code Style

- Use 2 spaces for indentation
- Follow existing naming conventions
- Comment complex logic
- Keep functions focused and small

### Adding a New Provider

To add a new AI provider:

1. Add provider configuration to `PROVIDERS` object:
```javascript
myprovider: {
  name: 'My Provider',
  icon: '🔮',
  color: '#FF00FF',
  baseUrl: 'https://api.myprovider.com/v1',
  modelsEndpoint: '/models',
  headers: (key) => ({ 'Authorization': `Bearer ${key}` }),
  parseModels: (data) => data.models?.map(m => ({
    id: m.id,
    name: m.name,
    type: 'cloud',
    provider: 'myprovider',
    capabilities: ['chat']
  })) || []
}
```

2. Add translations for the provider name
3. Test the fetch functionality
4. Update README.md provider table

### Adding Translations

1. Add to `TRANSLATIONS.en`:
```javascript
'myfeature.title': 'My Feature Title',
'myfeature.description': 'Description here'
```

2. Add to `TRANSLATIONS.fr`:
```javascript
'myfeature.title': 'Titre de Ma Fonctionnalité',
'myfeature.description': 'Description ici'
```

3. Use in HTML: `data-i18n="myfeature.title"`
4. Use in JS: `this.t('myfeature.title')`

## 🧪 Testing

Run tests before submitting:

```bash
npm install vitest jsdom --save-dev
npx vitest run
```

Add tests for new features in `tests/browserfly.test.js`.

## 📋 Pull Request Process

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make your changes
3. Test thoroughly in both languages
4. Update documentation if needed
5. Commit with clear messages
6. Push to your fork
7. Create a Pull Request

### PR Checklist

- [ ] Code works in latest Chrome, Firefox, Safari
- [ ] Mobile responsive (test at 375px)
- [ ] Both English and French translations added
- [ ] No console errors
- [ ] Tests pass
- [ ] Documentation updated

## 🎨 Design Guidelines

### Colors
- Primary: `#6C63FF` (electric violet)
- Secondary: `#00D4FF` (cyan)
- Accent: `#FF6B9D` (hot pink)
- Background: `#0A0A0F` (deep space)
- Text: `#E8E8FF` (lavender white)

### Typography
- Display: `Orbitron`
- Body: `Inter`
- Code: `JetBrains Mono`

### Animations
- Use CSS animations where possible
- Respect `prefers-reduced-motion`
- Keep animations smooth (60fps)

## 🏷️ Commit Message Format

```
type(scope): subject

body (optional)

footer (optional)
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Tests
- `chore`: Maintenance

Examples:
```
feat(providers): add Cohere support
fix(i18n): correct French translation for routing
docs(readme): update provider table
```

## 🙏 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Respect different viewpoints

## 📞 Contact

- GitHub Issues: [github.com/tryboy869/browserfly/issues](https://github.com/tryboy869/browserfly/issues)
- Twitter: [@Nexusstudio100](https://twitter.com/Nexusstudio100)
- Email: anzizecontact@proton.me

---

Thank you for contributing to Browserfly! 🦋
