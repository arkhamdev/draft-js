/*! For license information please see ac822fb8.ef8a2849.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(9),o=(n(181),n(180)),i={id:"api-reference-editor",title:"Editor Component"},l={id:"api-reference-editor",title:"Editor Component",description:"This article discusses the API and props of the core controlled contentEditable",source:"@site/../docs/APIReference-Editor.md",permalink:"/docs/api-reference-editor",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/APIReference-Editor.md",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1585041752,sidebar:"docs",previous:{title:"Issues and Pitfalls",permalink:"/docs/advanced-topics-issues-and-pitfalls"},next:{title:"EditorChangeType",permalink:"/docs/api-reference-editor-change-type"}},c=[{value:"Props",id:"props",children:[]},{value:"Basics",id:"basics",children:[{value:"<code>editorState</code>",id:"editorstate",children:[]},{value:"<code>onChange</code>",id:"onchange",children:[]}]},{value:"Presentation (Optional)",id:"presentation-optional",children:[{value:"<code>placeholder</code>",id:"placeholder",children:[]},{value:"<code>textAlignment</code>",id:"textalignment",children:[]},{value:"<code>textDirectionality</code>",id:"textdirectionality",children:[]},{value:"<code>blockRendererFn</code>",id:"blockrendererfn",children:[]},{value:"<code>blockRendererMap</code>",id:"blockrenderermap",children:[]},{value:"<code>blockStyleFn</code>",id:"blockstylefn",children:[]},{value:"customStyleMap",id:"customstylemap",children:[]},{value:"<code>customStyleFn</code>",id:"customstylefn",children:[]}]},{value:"Behavior (Optional)",id:"behavior-optional",children:[{value:"<code>autoCapitalize</code>",id:"autocapitalize",children:[]},{value:"<code>autoComplete</code>",id:"autocomplete",children:[]},{value:"<code>autoCorrect</code>",id:"autocorrect",children:[]},{value:"<code>readOnly</code>",id:"readonly",children:[]},{value:"<code>spellCheck</code>",id:"spellcheck",children:[]},{value:"<code>stripPastedStyles</code>",id:"strippastedstyles",children:[]}]},{value:"DOM and Accessibility (Optional)",id:"dom-and-accessibility-optional",children:[{value:"<code>tabIndex</code>",id:"tabindex",children:[]},{value:"ARIA props",id:"aria-props",children:[]},{value:"<code>editorKey</code>",id:"editorkey",children:[]}]},{value:"Cancelable Handlers (Optional)",id:"cancelable-handlers-optional",children:[{value:"<code>handleReturn</code>",id:"handlereturn",children:[]},{value:"<code>handleKeyCommand</code>",id:"handlekeycommand",children:[]},{value:"<code>handleBeforeInput</code>",id:"handlebeforeinput",children:[]},{value:"<code>handlePastedText</code>",id:"handlepastedtext",children:[]},{value:"<code>handlePastedFiles</code>",id:"handlepastedfiles",children:[]},{value:"<code>handleDroppedFiles</code>",id:"handledroppedfiles",children:[]},{value:"<code>handleDrop</code>",id:"handledrop",children:[]}]},{value:"Key Handlers (Optional)",id:"key-handlers-optional",children:[{value:"<code>keyBindingFn</code>",id:"keybindingfn",children:[]}]},{value:"Mouse events",id:"mouse-events",children:[{value:"<code>onFocus</code>",id:"onfocus",children:[]},{value:"<code>onBlur</code>",id:"onblur",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>focus</code>",id:"focus",children:[]},{value:"<code>blur</code>",id:"blur",children:[]}]}],d={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This article discusses the API and props of the core controlled contentEditable\ncomponent itself, ",Object(o.b)("inlineCode",{parentName:"p"},"Editor"),". Props are defined within\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/blob/master/src/component/base/DraftEditorProps.js"}),Object(o.b)("inlineCode",{parentName:"a"},"DraftEditorProps")),"."),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h2",{id:"basics"},"Basics"),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/quickstart-api-basics"}),"API Basics")," for an introduction."),Object(o.b)("h3",{id:"editorstate"},Object(o.b)("inlineCode",{parentName:"h3"},"editorState")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"editorState: EditorState;\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"EditorState")," object to be rendered by the ",Object(o.b)("inlineCode",{parentName:"p"},"Editor"),"."),Object(o.b)("h3",{id:"onchange"},Object(o.b)("inlineCode",{parentName:"h3"},"onChange")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"onChange: (editorState: EditorState) => void\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"onChange")," function to be executed by the ",Object(o.b)("inlineCode",{parentName:"p"},"Editor")," when edits and selection\nchanges occur."),Object(o.b)("h2",{id:"presentation-optional"},"Presentation (Optional)"),Object(o.b)("h3",{id:"placeholder"},Object(o.b)("inlineCode",{parentName:"h3"},"placeholder")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"placeholder?: string\n")),Object(o.b)("p",null,"Optional placeholder string to display when the editor is empty."),Object(o.b)("p",null,"Note: You can use CSS to style or hide your placeholder as needed. For instance,\nin the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/rich"}),"rich editor example"),", the placeholder is hidden when the user changes block styling in an empty editor.\nThis is because the placeholder may not line up with the cursor when the style\nis changed."),Object(o.b)("h3",{id:"textalignment"},Object(o.b)("inlineCode",{parentName:"h3"},"textAlignment")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"textAlignment?: DraftTextAlignment\n")),Object(o.b)("p",null,"Optionally set the overriding text alignment for this editor. This alignment value will\napply to the entire contents, regardless of default text direction for input text."),Object(o.b)("p",null,"You may use this if you wish to center your text or align it flush in one direction\nto fit it within your UI design."),Object(o.b)("p",null,"If this value is not set, text alignment will be based on the characters within\nthe editor, on a per-block basis."),Object(o.b)("h3",{id:"textdirectionality"},Object(o.b)("inlineCode",{parentName:"h3"},"textDirectionality")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"textDirectionality?: DraftTextDirectionality\n")),Object(o.b)("p",null,"Optionally set the overriding text directionality for this editor. The values include 'RTL' for right-to-left text, like Hebrew or Arabic, and 'LTR' for left-to-right text, like English or Spanish. This directionality will apply to the entire contents, regardless of default text direction for input text."),Object(o.b)("p",null,"If this value is not set, text directionality will be based on the characters\nwithin the editor, on a per-block basis."),Object(o.b)("h3",{id:"blockrendererfn"},Object(o.b)("inlineCode",{parentName:"h3"},"blockRendererFn")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"blockRendererFn?: (block: ContentBlock) => ?Object\n")),Object(o.b)("p",null,"Optionally set a function to define custom block rendering. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/advanced-topics-block-components"}),"Advanced Topics: Block Components")," for details on usage."),Object(o.b)("h3",{id:"blockrenderermap"},Object(o.b)("inlineCode",{parentName:"h3"},"blockRendererMap")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"blockRendererMap?: DraftBlockRenderMap\n")),Object(o.b)("p",null,"Provide a map of block rendering configurations. Each block type maps to element tag and an optional react element wrapper. This configuration is used for both rendering and paste processing. See\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/advanced-topics-custom-block-render-map"}),"Advanced Topics: Custom Block Rendering")," for details on usage."),Object(o.b)("h3",{id:"blockstylefn"},Object(o.b)("inlineCode",{parentName:"h3"},"blockStyleFn")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"blockStyleFn?: (block: ContentBlock) => string\n")),Object(o.b)("p",null,"Optionally set a function to define class names to apply to the given block when it is rendered. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/advanced-topics-block-styling"}),"Advanced Topics: Block Styling")," for details on usage."),Object(o.b)("h3",{id:"customstylemap"},"customStyleMap"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"customStyleMap?: Object\n")),Object(o.b)("p",null,"Optionally define a map of inline styles to apply to spans of text with the specified style. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/advanced-topics-inline-styles"}),"Advanced Topics: Inline Styles")," for details on usage."),Object(o.b)("h3",{id:"customstylefn"},Object(o.b)("inlineCode",{parentName:"h3"},"customStyleFn")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"customStyleFn?: (style: DraftInlineStyle, block: ContentBlock) => ?Object\n")),Object(o.b)("p",null,"Optionally define a function to transform inline styles to CSS objects that are applied to spans of text. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/advanced-topics-inline-styles"}),"Advanced Topics: Inline Styles")," for details on usage."),Object(o.b)("h2",{id:"behavior-optional"},"Behavior (Optional)"),Object(o.b)("h3",{id:"autocapitalize"},Object(o.b)("inlineCode",{parentName:"h3"},"autoCapitalize")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"autoCapitalize?: string\n")),Object(o.b)("p",null,"Set if auto capitalization is turned on and how it behaves. More about platform availability and usage can ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-autocapitalize"}),"be found on mdn"),"."),Object(o.b)("h3",{id:"autocomplete"},Object(o.b)("inlineCode",{parentName:"h3"},"autoComplete")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"autoComplete?: string\n")),Object(o.b)("p",null,"Set if auto complete is turned on and how it behaves. More about platform availability and usage can ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-autocomplete"}),"be found on mdn"),"."),Object(o.b)("h3",{id:"autocorrect"},Object(o.b)("inlineCode",{parentName:"h3"},"autoCorrect")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"autoCorrect?: string\n")),Object(o.b)("p",null,"Set if auto correct is turned on and how it behaves. More about platform availability and usage can ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-autocorrect"}),"be found on MDN"),"."),Object(o.b)("h3",{id:"readonly"},Object(o.b)("inlineCode",{parentName:"h3"},"readOnly")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"readOnly?: boolean\n")),Object(o.b)("p",null,"Set whether the editor should be rendered as static DOM, with all editability disabled."),Object(o.b)("p",null,"This is useful when supporting interaction within ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/advanced-topics-block-components"}),"custom block components")," or if you only want to display content for a static use case."),Object(o.b)("p",null,"Default is ",Object(o.b)("inlineCode",{parentName:"p"},"false"),"."),Object(o.b)("h3",{id:"spellcheck"},Object(o.b)("inlineCode",{parentName:"h3"},"spellCheck")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"spellCheck?: boolean\n")),Object(o.b)("p",null,"Set whether spellcheck is turned on for your editor."),Object(o.b)("p",null,"Note that in OSX Safari, enabling spellcheck also enables autocorrect, if the user\nhas it turned on. Also note that spellcheck is always disabled in IE, since the events\nneeded to observe spellcheck events are not fired in IE."),Object(o.b)("p",null,"Default is ",Object(o.b)("inlineCode",{parentName:"p"},"false"),"."),Object(o.b)("h3",{id:"strippastedstyles"},Object(o.b)("inlineCode",{parentName:"h3"},"stripPastedStyles")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"stripPastedStyles?: boolean\n")),Object(o.b)("p",null,"Set whether to remove all information except plaintext from pasted content."),Object(o.b)("p",null,"This should be used if your editor does not support rich styles."),Object(o.b)("p",null,"Default is ",Object(o.b)("inlineCode",{parentName:"p"},"false"),"."),Object(o.b)("h2",{id:"dom-and-accessibility-optional"},"DOM and Accessibility (Optional)"),Object(o.b)("h3",{id:"tabindex"},Object(o.b)("inlineCode",{parentName:"h3"},"tabIndex")),Object(o.b)("h3",{id:"aria-props"},"ARIA props"),Object(o.b)("p",null,"These props allow you to set accessibility properties on your editor. See\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/blob/master/src/component/base/DraftEditorProps.js"}),"DraftEditorProps")," for the exhaustive list of supported attributes."),Object(o.b)("h3",{id:"editorkey"},Object(o.b)("inlineCode",{parentName:"h3"},"editorKey")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"editorKey?: string\n")),Object(o.b)("p",null,"You probably won't set ",Object(o.b)("inlineCode",{parentName:"p"},"editorKey")," on an ",Object(o.b)("inlineCode",{parentName:"p"},"<Editor />")," manually unless you're\nrendering a Draft component serverside. If you ",Object(o.b)("em",{parentName:"p"},"are"),", you must set this prop\nto avoid server/client mismatches."),Object(o.b)("p",null,"If the key is not set, it is generated automatically when the component\nrenders and assigned as a prop of the Editor's ",Object(o.b)("inlineCode",{parentName:"p"},"<DraftEditorContents />"),"\ncomponent."),Object(o.b)("p",null,"If you ",Object(o.b)("em",{parentName:"p"},"do")," set this prop, the key should be unique ",Object(o.b)("em",{parentName:"p"},"per-editor"),", as it is\nused to determine if styles should be preserved when pasting text within an\neditor."),Object(o.b)("h2",{id:"cancelable-handlers-optional"},"Cancelable Handlers (Optional)"),Object(o.b)("p",null,"These prop functions are provided to allow custom event handling for a small\nset of useful events. By returning ",Object(o.b)("inlineCode",{parentName:"p"},"'handled'")," from your handler, you indicate that\nthe event is handled and the Draft core should do nothing more with it. By returning\n",Object(o.b)("inlineCode",{parentName:"p"},"'not-handled'"),", you defer to Draft to handle the event."),Object(o.b)("h3",{id:"handlereturn"},Object(o.b)("inlineCode",{parentName:"h3"},"handleReturn")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"handleReturn?: (\n  e: SyntheticKeyboardEvent,\n  editorState: EditorState,\n) => DraftHandleValue\n")),Object(o.b)("p",null,"Handle a ",Object(o.b)("inlineCode",{parentName:"p"},"RETURN")," keydown event. Example usage: Choosing a mention tag from a\nrendered list of results to trigger applying the mention entity to your content."),Object(o.b)("h3",{id:"handlekeycommand"},Object(o.b)("inlineCode",{parentName:"h3"},"handleKeyCommand")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"handleKeyCommand?: (\n  command: string,\n  editorState: EditorState,\n  eventTimeStamp: number,\n) => DraftHandleValue\n")),Object(o.b)("p",null,"Handle the named editor command. See\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/advanced-topics-key-bindings"}),"Advanced Topics: Key Bindings"),"\nfor details on usage."),Object(o.b)("h3",{id:"handlebeforeinput"},Object(o.b)("inlineCode",{parentName:"h3"},"handleBeforeInput")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"handleBeforeInput?: (\n  chars: string,\n  editorState: EditorState,\n  eventTimeStamp: number,\n) => DraftHandleValue\n")),Object(o.b)("p",null,"Handle the characters to be inserted from a ",Object(o.b)("inlineCode",{parentName:"p"},"beforeInput")," event. Returning ",Object(o.b)("inlineCode",{parentName:"p"},"'handled'"),"\ncauses the default behavior of the ",Object(o.b)("inlineCode",{parentName:"p"},"beforeInput")," event to be prevented (i.e. it is\nthe same as calling the ",Object(o.b)("inlineCode",{parentName:"p"},"preventDefault")," method on the event).\nExample usage: After a user has typed ",Object(o.b)("inlineCode",{parentName:"p"},"-")," at the start of a new block, you might\nconvert that ",Object(o.b)("inlineCode",{parentName:"p"},"ContentBlock")," into an ",Object(o.b)("inlineCode",{parentName:"p"},"unordered-list-item"),"."),Object(o.b)("p",null,'At Facebook, we also use this to convert typed ASCII quotes into "smart" quotes,\nand to convert typed emoticons into images.'),Object(o.b)("h3",{id:"handlepastedtext"},Object(o.b)("inlineCode",{parentName:"h3"},"handlePastedText")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"handlePastedText?: (\n  text: string,\n  html?: string,\n  editorState: EditorState,\n) => DraftHandleValue\n")),Object(o.b)("p",null,"Handle text and html(for rich text) that has been pasted directly into the editor. Returning true will prevent the default paste behavior."),Object(o.b)("h3",{id:"handlepastedfiles"},Object(o.b)("inlineCode",{parentName:"h3"},"handlePastedFiles")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"handlePastedFiles?: (files: Array<Blob>) => DraftHandleValue\n")),Object(o.b)("p",null,"Handle files that have been pasted directly into the editor."),Object(o.b)("h3",{id:"handledroppedfiles"},Object(o.b)("inlineCode",{parentName:"h3"},"handleDroppedFiles")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"handleDroppedFiles?: (\n  selection: SelectionState,\n  files: Array<Blob>,\n) => DraftHandleValue\n")),Object(o.b)("p",null,"Handle files that have been dropped into the editor."),Object(o.b)("h3",{id:"handledrop"},Object(o.b)("inlineCode",{parentName:"h3"},"handleDrop")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"handleDrop?: (\n  selection: SelectionState,\n  dataTransfer: Object,\n  isInternal: DraftDragType,\n) => DraftHandleValue\n")),Object(o.b)("p",null,"Handle other drop operations."),Object(o.b)("h2",{id:"key-handlers-optional"},"Key Handlers (Optional)"),Object(o.b)("p",null,"Draft lets you supply a custom ",Object(o.b)("inlineCode",{parentName:"p"},"keyDown")," handler that wraps or overrides its\ndefault one."),Object(o.b)("h3",{id:"keybindingfn"},Object(o.b)("inlineCode",{parentName:"h3"},"keyBindingFn")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"keyBindingFn?: (e: SyntheticKeyboardEvent) => ?string\n")),Object(o.b)("p",null,"This prop function exposes ",Object(o.b)("inlineCode",{parentName:"p"},"keyDown")," events to a handler of your choosing. If an\nevent of interest happens, you can perform custom logic and/or return a string\ncorresponding to a ",Object(o.b)("inlineCode",{parentName:"p"},"DraftEditorCommand")," or a custom editor command of your\nown creation. Example: At Facebook, this is used to provide keyboard interaction\nfor the mentions autocomplete menu that appears when typing a friend's name.\nYou can find a more detailed explanation of this\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/advanced-topics-key-bindings"}),"here"),"."),Object(o.b)("h2",{id:"mouse-events"},"Mouse events"),Object(o.b)("h3",{id:"onfocus"},Object(o.b)("inlineCode",{parentName:"h3"},"onFocus")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"onFocus?: (e: SyntheticFocusEvent) => void\n")),Object(o.b)("h3",{id:"onblur"},Object(o.b)("inlineCode",{parentName:"h3"},"onBlur")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"onBlur?: (e: SyntheticFocusEvent) => void\n")),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"focus"},Object(o.b)("inlineCode",{parentName:"h3"},"focus")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"focus(): void\n")),Object(o.b)("p",null,"Force focus back onto the editor node."),Object(o.b)("h3",{id:"blur"},Object(o.b)("inlineCode",{parentName:"h3"},"blur")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"blur(): void\n")),Object(o.b)("p",null,"Remove focus from the editor node."))}s.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,h=b["".concat(i,".").concat(u)]||b[u]||p[u]||o;return n?r.a.createElement(h,l(l({ref:t},d),{},{components:n})):r.a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";e.exports=n(182)},182:function(e,t,n){"use strict";var a=n(183),r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,l=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,d=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,b=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.concurrent_mode"):60111,u=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,f=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,j="function"==typeof Symbol&&Symbol.iterator;function O(e,t,n,a,r,o,i,l){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,a,r,o,i,l],d=0;(e=Error(t.replace(/%s/g,(function(){return c[d++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function y(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=0;a<t;a++)n+="&args[]="+encodeURIComponent(arguments[a+1]);O(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function N(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}function C(){}function k(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}N.prototype.isReactComponent={},N.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&y("85"),this.updater.enqueueSetState(this,e,t,"setState")},N.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},C.prototype=N.prototype;var S=k.prototype=new C;S.constructor=k,a(S,N.prototype),S.isPureReactComponent=!0;var w={current:null},x={current:null},E=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function D(e,t,n){var a=void 0,r={},i=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)E.call(t,a)&&!P.hasOwnProperty(a)&&(r[a]=t[a]);var c=arguments.length-2;if(1===c)r.children=n;else if(1<c){for(var d=Array(c),s=0;s<c;s++)d[s]=arguments[s+2];r.children=d}if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===r[a]&&(r[a]=c[a]);return{$$typeof:o,type:e,key:i,ref:l,props:r,_owner:x.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var I=/\/+/g,R=[];function A(e,t,n,a){if(R.length){var r=R.pop();return r.result=e,r.keyPrefix=t,r.func=n,r.context=a,r.count=0,r}return{result:e,keyPrefix:t,func:n,context:a,count:0}}function _(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function F(e,t,n){return null==e?0:function e(t,n,a,r){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var c=!1;if(null===t)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case o:case i:c=!0}}if(c)return a(r,t,""===n?"."+M(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var d=0;d<t.length;d++){var s=n+M(l=t[d],d);c+=e(l,s,a,r)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=j&&t[j]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),d=0;!(l=t.next()).done;)c+=e(l=l.value,s=n+M(l,d++),a,r);else"object"===l&&y("31","[object Object]"===(a=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":a,"");return c}(e,"",t,n)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function B(e,t){e.func.call(e.context,t,e.count++)}function H(e,t,n){var a=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?$(e,a,n,(function(e){return e})):null!=e&&(T(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(I,"$&/")+"/")+n)),a.push(e))}function $(e,t,n,a,r){var o="";null!=n&&(o=(""+n).replace(I,"$&/")+"/"),F(e,H,t=A(t,o,a,r)),_(t)}function U(){var e=w.current;return null===e&&y("307"),e}var z={Children:{map:function(e,t,n){if(null==e)return e;var a=[];return $(e,a,null,t,n),a},forEach:function(e,t,n){if(null==e)return e;F(e,B,t=A(null,null,t,n)),_(t)},count:function(e){return F(e,(function(){return null}),null)},toArray:function(e){var t=[];return $(e,t,null,(function(e){return e})),t},only:function(e){return T(e)||y("143"),e}},createRef:function(){return{current:null}},Component:N,PureComponent:k,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:b,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:u,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return U().useCallback(e,t)},useContext:function(e,t){return U().useContext(e,t)},useEffect:function(e,t){return U().useEffect(e,t)},useImperativeHandle:function(e,t,n){return U().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return U().useLayoutEffect(e,t)},useMemo:function(e,t){return U().useMemo(e,t)},useReducer:function(e,t,n){return U().useReducer(e,t,n)},useRef:function(e){return U().useRef(e)},useState:function(e){return U().useState(e)},Fragment:l,StrictMode:c,Suspense:h,createElement:D,cloneElement:function(e,t,n){null==e&&y("267",e);var r=void 0,i=a({},e.props),l=e.key,c=e.ref,d=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,d=x.current),void 0!==t.key&&(l=""+t.key);var s=void 0;for(r in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)E.call(t,r)&&!P.hasOwnProperty(r)&&(i[r]=void 0===t[r]&&void 0!==s?s[r]:t[r])}if(1===(r=arguments.length-2))i.children=n;else if(1<r){s=Array(r);for(var b=0;b<r;b++)s[b]=arguments[b+2];i.children=s}return{$$typeof:o,type:e.type,key:l,ref:c,props:i,_owner:d}},createFactory:function(e){var t=D.bind(null,e);return t.type=e,t},isValidElement:T,version:"16.8.4",unstable_ConcurrentMode:p,unstable_Profiler:d,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:w,ReactCurrentOwner:x,assign:a}},K={default:z},V=K&&z||K;e.exports=V.default||V},183:function(e,t,n){"use strict";var a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(r){return!1}}()?Object.assign:function(e,t){for(var n,l,c=i(e),d=1;d<arguments.length;d++){for(var s in n=Object(arguments[d]))r.call(n,s)&&(c[s]=n[s]);if(a){l=a(n);for(var b=0;b<l.length;b++)o.call(n,l[b])&&(c[l[b]]=n[l[b]])}}return c}}}]);