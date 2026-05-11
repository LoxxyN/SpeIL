'use client'

import { Button } from '@heroui/react'
import Editor, { OnMount } from '@monaco-editor/react'
import * as shikiMonaco from '@shikijs/monaco'
import './CodeEditor.css'

export const CodeEditor = () => {
  const handleEditorMount: OnMount = async (editor, monaco) => {
    // tsx support
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

    // create tsx model
    const model = monaco.editor.createModel(
      `export const App = () => {
  return <div>Hello</div>
}`,
      'typescript',
      monaco.Uri.parse('file:///main.tsx')
    )

    editor.setModel(model)

    // shiki
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
      <Button className="editor-panel__copy-button" variant="ghost">
        Копировать код
      </Button>
      <Editor
        className="editor-window"
        height="500px"
        theme="vs-dark"
        language="typescript"
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
