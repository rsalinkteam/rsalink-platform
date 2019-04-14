# global-theme
Web development files (HTML, CSS, JavaScript, etc.) for the overall theme / branding on RSA Link

**All HTML files (.htm) should use the following naming convention:** 
`spaceType_scope_element_description_additional.htm`

Section | Description | Examples
------- | ----------- | --------
spaceType | Type of space, which will be similar to the repo name. | productSuite, knowledgeBase, advisories, internal 
scope | Defines whether the code is applicable globally, to all spaces under the *spaceType* or to a specific product or space | global, all, securid, netwitness-106
element | The type of container for the code, such as a widget, a tile or a document | widget, tile, document, header, footer
description | A concise description of the code, which often mirrors a widget/tile name | buttons, menuBanner, customStyling, missionsObjectives
additional | Used when additional clarification needs to be provided beyond the description, such as if there are multiple flavors of code for different circumstances | gradientBlue, largeButtons, importantNote
