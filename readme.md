# 🔠 Strapi Superfields Plugin

## Enhance your components with super fields

This plugin adds list of new custom fields in strapi to make the content editing more comfortable

## Added Custom Fields

---

## 📦 Installation Guide

> 💡 **Note:**  
> If you simply run `npm install strapi-plugin-superfields`, it will install the version for **Strapi v5** by default.  
> To use this plugin with **Strapi v4**, make sure to install version `^4` explicitly.

---

<summary>📘 <strong>Installation by Strapi Version</strong> (click to expand)</summary>

<br/>

| ⚙️ Strapi Version | 📦 Plugin Version                  | 🧪 npm Command                                       | 🧪 yarn Command                                      |
|------------------|-----------------------------------|------------------------------------------------------|-----------------------------------------------------|
| ✅ Strapi v5      | `strapi-plugin-superfields`       | `npm install strapi-plugin-superfields`             | `yarn add strapi-plugin-superfields`          |
| ⚠️ Strapi v4      | `strapi-plugin-superfields@4.1.1` | `npm install strapi-plugin-superfields@^4`       | `yarn add strapi-plugin-superfields@^4`          |


---



### 1. Comment Field

✔️ Used to leave a comment in admin to inform about something
⚠️ The field is used as private and thus won't appear in api response, it is intended to be used only inside strapiu only

⚙️ Settings
![Comment Settings](https://github.com/newproweb/strapi-plugin-superfields/blob/master/docs/images/Comment-Settings.PNG?raw=true)

- Name -- name of field
- Comment -- Content of the comment
- Color variant -- The color schema of the comment. Can be green (success), yellow (warn), red (error)

✅ Results this
![Comment Result](https://github.com/newproweb/strapi-plugin-superfields/blob/master/docs/images/Comment-Result.PNG?raw=true)

## Planned custom fields

- ⚪ Tooltiped primitive fields (text, number, boolean) -- To add the description and the
- ⚪ Responsive values -- Allow adding 3 or 5 values for the same input field (base, md, lg) or (base, sm, md, lg, xl). Intended to be used in UI to define the response values.
- ⚪ Color input -- Allow selecting the color from the given list of named color -> hex code enum. Displays the color itself in input in content-editor. Can work in 2 modes: With pre-defined colors list, or with color picker

Feel free to open issues in github to suggest new custom fields

## Issues

All general issues should be submitted through the [Github issue system]
Security issues should be reported using the [security tab]
