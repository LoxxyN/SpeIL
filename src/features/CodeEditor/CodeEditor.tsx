'use client'

import { themeStore } from '@app/store'
import Editor, { type OnMount } from '@monaco-editor/react'
import * as shikiMonaco from '@shikijs/monaco'
import { observer } from 'mobx-react-lite'
import './CodeEditor.css'

type TCodeEditor = {
  value: string
  onValueChange?: (value: string) => void
  isReadonly?: boolean
}

export const CodeEditor = observer(({ value, onValueChange, isReadonly }: TCodeEditor) => {
  const { theme } = themeStore

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      if (onValueChange) {
        onValueChange(value)
      }
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
      themes: theme === 'dark' ? ['dark-plus', 'light-plus'] : ['light-plus', 'dark-plus'],
      langs: ['javascript', 'typescript', 'tsx', 'jsx'],
    })

    if (typeof shikiMonaco.shikiToMonaco === 'function') {
      shikiMonaco.shikiToMonaco(highlighter, monaco)
    }
  }

  return (
    <div className="editor-panel">
      <Editor
        className={`editor-window ${theme === 'dark' ? 'editor-window--dark' : ''}`}
        theme={theme === 'dark' ? 'dark-plus' : 'light-plus'}
        language="typescript"
        value={value}
        onChange={handleEditorChange}
        onMount={handleEditorMount}
        options={{
          readOnly: isReadonly,
          minimap: { enabled: false },
          glyphMargin: false,
          lineNumbers: 'off',
          folding: false,
          fontSize: 18,
          lineNumbersMinChars: 3,
          renderLineHighlight: 'none',
          scrollbar: {
            verticalScrollbarSize: 4,
            horizontalScrollbarSize: 4,
          },
        }}
      />
    </div>
  )
})
