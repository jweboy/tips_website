import { Sandpack } from "@codesandbox/sandpack-react";
import React from "react";
import { createFileMap } from "./createFileMap";

const SandpackEditor = ({
  children,
  dependencies = {},
  template,
}: {
  children: JSX.Element,
  dependencies: { [key: string]: string },
  template: 'react' | 'react-ts' | 'vanilla'
}) => {
  const files = createFileMap(children);

  return (
    <Sandpack
      template={template}
      theme="dark"
      files={files}
      options={{
        showNavigator: true,
        editorHeight: 600,
      }}
      customSetup={{
        dependencies,
      }}
    />
  );
};

export default SandpackEditor;