The site header: lockup left, four links + EN/ع + red WhatsApp CTA right, 1px bottom hairline.

```jsx
<NavBar links={[{label:'Work',href:'#work'},{label:'Services'},{label:'The Unit'},{label:'Studio'}]} lang="en" onLang={setLang} />
```

The CTA is always the WhatsApp action, always `size="sm"`. The active locale is marked by a red underline, not a colour fill.
