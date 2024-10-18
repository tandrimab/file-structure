import React, { useState } from "react";
import down from "../assets/image/down.png";

export default function Explorer({
  data,
  handleInsertNode,
  display,
  handleRenameNode,
  handleDelete,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [addNew, setNew] = useState({
    isFolder: null,
    visible: false,
  });
  const [rename, setRename] = useState(false);
  const [name, setName] = useState(data.name);

  const handleInsertEvent = (e, isFolder) => {
    e.stopPropagation();
    setIsOpen(true);
    setNew({
      visible: true,
      isFolder,
    });
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      const item = {
        name: e.target.value,
        isFolder: addNew.isFolder,
        id: new Date().getTime(),
      };

      handleInsertNode(data?.id, item);
      setNew({ ...addNew, visible: false });
    }
  };

  const handleRenameEvent = (e) => {
    e.stopPropagation();
    if (e.keyCode == 13 && name) {
      handleRenameNode(data?.id, name);
      setRename(false);
    }
  };

  return Object.keys(data).length ? (
    <div>
      {data.isFolder ? (
        <div key={data.name} className="cursor-pointer ml-[1rem] mt-3 mb-3">
          <div
            className="flex items-center justify-start gap-4 bg-slate-100 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={down}
              className={
                "w-[10px] h-[10px] " + (isOpen ? "rotate-0" : "-rotate-90")
              }
            />
            {rename ? (
              <input
                className="bg-transparent outline-none border-none"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={handleRenameEvent}
                onBlur={() => setRename(false)}
                autoFocus
              />
            ) : (
              <>
                <span>📁</span>
                <p>{data.name}</p>
              </>
            )}
            <div className="ml-auto">
              <button
                className="bg-transparent p-1"
                onClick={(e) => setRename(true)}
              >
                🖊️
              </button>
              <button
                className="bg-transparent p-1"
                onClick={(e) => handleInsertEvent(e, false)}
              >
                +📄
              </button>
              <button
                className="bg-transparent p-1"
                onClick={(e) => handleInsertEvent(e, true)}
              >
                +📁
              </button>
              <button
                className="bg-transparent p-1"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(data.id);
                }}
              >
                ❌
              </button>
            </div>
          </div>
          {isOpen && (
            <>
              {addNew.visible && (
                <div>
                  <span>{addNew.isFolder ? "📁" : "📄"}</span>
                  <input
                    className="bg-green-50"
                    type="text"
                    onKeyDown={handleKeyDown}
                    onBlur={() =>
                      setNew({
                        ...addNew,
                        visible: false,
                      })
                    }
                    autoFocus
                  />
                </div>
              )}
              {data.children && data.children.length
                ? data.children.map((item) => (
                    <Explorer
                      data={item}
                      handleInsertNode={handleInsertNode}
                      key={item.id}
                      display={display}
                      handleRenameNode={handleRenameNode}
                      handleDelete={handleDelete}
                    />
                  ))
                : null}
            </>
          )}
        </div>
      ) : (
        data.name && <div
          key={data.name}
          className="mr-auto text-start ml-[1rem] mt-2 flex flex-nowrap"
          onClick={() => display({ text: data.text, name: data.name })}
        >
          {rename ? (
            <input
              className="bg-transparent outline-none border-none"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={handleRenameEvent}
              onBlur={() => setRename(false)}
              autoFocus
            />
          ) : (
            <>
              <span className="mr-2">📄</span>
              <p>{data.name}</p>
            </>
          )}
          <div className="ml-auto">
            <button
              className="bg-transparent p-1"
              onClick={(e) => setRename(true)}
            >
              🖊️
            </button>
            <button
              className="bg-transparent p-1"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(data.id);
              }}
            >
              ❌
            </button>
          </div>
        </div>
      )}
    </div>
  ) : null;
}
