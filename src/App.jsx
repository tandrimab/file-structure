import "./App.css";
import Explorer from "./component/Explorer";
import { folders } from "./assets/contents/folders";
import { useState } from "react";
import useTraverse from "./hooks/useTraverse";

function App() {
  const [folder, setFolders] = useState(folders);
  const { insert, rename, deleteNode } = useTraverse();
  const [displayContent, setdisplayContent] = useState({
    text: null,
    filename: null,
  });

  const handleInsertNode = (id, item) => {
    const root = insert(folder, id, item);

    setFolders(root);
  };

  const handleRename = (id, item) => {
    const root = rename(folder, id, item);

    setFolders(root);
  };

  const handleDelete = (id) => {
    const root = deleteNode(folder, id);

    setFolders(root);
  };

  const handleText = ({ text, name }) => {
    setdisplayContent({ text, name });
  };

  return (
    <div className="flex items-start justify-start min-h-screen w-full gap-14">
      <div className="max-w-[500px] w-[450px] self-start">
        <Explorer
          data={folder}
          handleInsertNode={handleInsertNode}
          display={handleText}
          handleRenameNode={handleRename}
          handleDelete={handleDelete}
        />
      </div>
      {displayContent.text ? (
        <div className="text-justify max-w-[900px] black align-content-center min-h-screen border-[1px] border-green-400 p-4">
          <div className="mb-8 border-b-4 border-green-400 w-max">
            {displayContent.name}
          </div>
          {displayContent.text}
        </div>
      ) : null}
    </div>
  );
}

export default App;
