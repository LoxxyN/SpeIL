import Editor, { type OnMount } from '@monaco-editor/react'
import * as shikiMonaco from '@shikijs/monaco'
import './CodeEditor.css'

type TCodeEditor = {
  value: string
  onValueChange: (value: string) => void
}

export const CodeEditor = ({ value, onValueChange }: TCodeEditor) => {
  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      onValueChange(value)
    }
  }

  const handleEditorMount: OnMount = async (editor, monaco) => {
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.ReactJSX,
      allowNonTsExtensions: true,
      module: monaco.languages.typescript.ModuleKind.ESNext,
      target: monaco.languages.typescript.ScriptTarget.Latest,
      moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
      esModuleInterop: true,
      allowJs: true,
      noEmit: true,
    })

    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      `
      declare module "react" {
        const React: any
        export default React
      }

      declare namespace JSX {
        interface IntrinsicElements {
          [elemName: string]: any
        }
      }
      `,
      'file:///node_modules/@types/react/index.d.ts'
    )

    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      `
        declare module "react/jsx-runtime" {
          export default any
        }
      `,
      'file:///node_modules/@types/react/jsx-runtime.d.ts'
    )

    const { createHighlighter } = await import('shiki')

    const highlighter = await createHighlighter({
      themes: ['dark-plus'],
      langs: ['javascript', 'typescript', 'tsx', 'jsx'],
    })

    if (typeof shikiMonaco.shikiToMonaco === 'function') {
      shikiMonaco.shikiToMonaco(highlighter, monaco)
    }
  }

  return (
    <div className="editor-panel">
      <Editor
        className="editor-window"
        height="500px"
        theme="vs-dark"
        language="typescript"
        value={value}
        onChange={handleEditorChange}
        onMount={handleEditorMount}
        options={{
          minimap: { enabled: false },
          glyphMargin: false,
          folding: false,
          fontSize: 20,
          lineNumbersMinChars: 3,
          renderLineHighlight: 'none',
          scrollbar: {
            verticalScrollbarSize: 8,
            horizontalScrollbarSize: 8,
          },
        }}
      />
    </div>
  )
}
